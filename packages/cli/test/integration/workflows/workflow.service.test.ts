import Container from 'typedi';
import { mock } from 'jest-mock-extended';
import { ActiveWorkflowRunner } from '@/ActiveWorkflowRunner';
import { SharedWorkflowRepository } from '@db/repositories/sharedWorkflow.repository';
import { WorkflowRepository } from '@db/repositories/workflow.repository';
import { Telemetry } from '@/telemetry';
import { OrchestrationService } from '@/services/orchestration.service';
import { WorkflowService } from '@/workflows/workflow.service';

import * as testDb from '../shared/testDb';
import { mockInstance } from '../../shared/mocking';
import { createOwner } from '../shared/db/users';
import { createWorkflow } from '../shared/db/workflows';

let workflowService: WorkflowService;
let activeWorkflowRunner: ActiveWorkflowRunner;
let orchestrationService: OrchestrationService;

beforeAll(async () => {
	await testDb.init();

	activeWorkflowRunner = mockInstance(ActiveWorkflowRunner);
	orchestrationService = mockInstance(OrchestrationService);
	mockInstance(Telemetry);

	workflowService = new WorkflowService(
		mock(),
		mock(),
		Container.get(SharedWorkflowRepository),
		Container.get(WorkflowRepository),
		mock(),
		mock(),
		mock(),
		mock(),
		mock(),
		orchestrationService,
		mock(),
		activeWorkflowRunner,
	);
});

afterEach(async () => {
	await testDb.truncate(['Workflow']);
	jest.restoreAllMocks();
});

afterAll(async () => {
	await testDb.terminate();
});

describe('update()', () => {
	test('should remove and re-add to active workflows on `active: true` payload', async () => {
		const owner = await createOwner();
		const workflow = await createWorkflow({ active: true }, owner);

		const removeSpy = jest.spyOn(activeWorkflowRunner, 'remove');
		const addSpy = jest.spyOn(activeWorkflowRunner, 'add');

		await workflowService.update(owner, workflow, workflow.id);

		expect(removeSpy).toHaveBeenCalledTimes(1);
		const [removedWorkflowId] = removeSpy.mock.calls[0];
		expect(removedWorkflowId).toBe(workflow.id);

		expect(addSpy).toHaveBeenCalledTimes(1);
		const [addedWorkflowId, activationMode] = addSpy.mock.calls[0];
		expect(addedWorkflowId).toBe(workflow.id);
		expect(activationMode).toBe('update');
	});

	test('should remove from active workflows on `active: false` payload', async () => {
		const owner = await createOwner();
		const workflow = await createWorkflow({ active: true }, owner);

		const removeSpy = jest.spyOn(activeWorkflowRunner, 'remove');
		const addSpy = jest.spyOn(activeWorkflowRunner, 'add');

		workflow.active = false;
		await workflowService.update(owner, workflow, workflow.id);

		expect(removeSpy).toHaveBeenCalledTimes(1);
		const [removedWorkflowId] = removeSpy.mock.calls[0];
		expect(removedWorkflowId).toBe(workflow.id);

		expect(addSpy).not.toHaveBeenCalled();
	});

	test('should publish to inter-main channel on workflow activation', async () => {
		const owner = await createOwner();
		const workflow = await createWorkflow({ active: true }, owner);

		const publishSpy = jest.spyOn(orchestrationService, 'publish');

		workflow.active = false;
		await workflowService.update(owner, workflow, workflow.id);

		expect(publishSpy).toHaveBeenCalledWith(
			'workflow-updated',
			expect.objectContaining({
				newState: false,
				oldState: true,
				workflowId: workflow.id,
			}),
		);
	});

	test('should publish to inter-main channel on workflow update not involving activation', async () => {
		const owner = await createOwner();
		const workflow = await createWorkflow({ active: true }, owner);

		const publishSpy = jest.spyOn(orchestrationService, 'publish');

		await workflowService.update(owner, workflow, workflow.id);

		expect(publishSpy).toHaveBeenCalledWith(
			'workflow-updated',
			expect.objectContaining({
				newState: true,
				oldState: true,
				workflowId: workflow.id,
			}),
		);
	});
});
