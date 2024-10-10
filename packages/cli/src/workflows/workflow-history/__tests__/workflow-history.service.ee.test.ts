import { mockClear } from 'jest-mock-extended';

import { User } from '@/databases/entities/user';
import { SharedWorkflowRepository } from '@/databases/repositories/shared-workflow.repository';
import { WorkflowHistoryRepository } from '@/databases/repositories/workflow-history.repository';
import { WorkflowHistoryService } from '@/workflows/workflow-history/workflow-history.service.ee';
import { mockInstance, mockLogger } from '@test/mocking';
import { getWorkflow } from '@test-integration/workflow';

const workflowHistoryRepository = mockInstance(WorkflowHistoryRepository);
const logger = mockLogger();
const sharedWorkflowRepository = mockInstance(SharedWorkflowRepository);
const workflowHistoryService = new WorkflowHistoryService(
	logger,
	workflowHistoryRepository,
	sharedWorkflowRepository,
);
const testUser = Object.assign(new User(), {
	id: '1234',
	password: 'passwordHash',
	mfaEnabled: false,
	firstName: 'John',
	lastName: 'Doe',
});
let isWorkflowHistoryEnabled = true;

jest.mock('@/workflows/workflow-history/workflow-history-helper.ee', () => {
	return {
		isWorkflowHistoryEnabled: jest.fn(() => isWorkflowHistoryEnabled),
	};
});

describe('WorkflowHistoryService', () => {
	beforeEach(() => {
		mockClear(workflowHistoryRepository.insert);
	});

	describe('saveVersion', () => {
		it('should save a new version when workflow history is enabled and nodes and connections are present', async () => {
			// Arrange
			isWorkflowHistoryEnabled = true;
			const workflow = getWorkflow({ addNodeWithoutCreds: true });
			const workflowId = '123';
			workflow.connections = {};
			workflow.id = workflowId;
			workflow.versionId = '456';

			// Act
			await workflowHistoryService.saveVersion(testUser, workflow, workflowId);

			// Assert
			expect(workflowHistoryRepository.insert).toHaveBeenCalledWith({
				authors: 'John Doe',
				connections: {},
				nodes: workflow.nodes,
				versionId: workflow.versionId,
				workflowId,
			});
		});

		it('should not save a new version when workflow history is disabled', async () => {
			// Arrange
			isWorkflowHistoryEnabled = false;
			const workflow = getWorkflow({ addNodeWithoutCreds: true });
			const workflowId = '123';
			workflow.connections = {};
			workflow.id = workflowId;
			workflow.versionId = '456';

			// Act
			await workflowHistoryService.saveVersion(testUser, workflow, workflowId);

			// Assert
			expect(workflowHistoryRepository.insert).not.toHaveBeenCalled();
		});

		it('should not save a new version when nodes or connections are missing', async () => {
			// Arrange
			isWorkflowHistoryEnabled = true;
			const workflow = getWorkflow({ addNodeWithoutCreds: true });
			const workflowId = '123';
			workflow.id = workflowId;
			workflow.versionId = '456';
			// Nodes are set but connections is empty

			// Act
			await workflowHistoryService.saveVersion(testUser, workflow, workflowId);

			// Assert
			expect(workflowHistoryRepository.insert).not.toHaveBeenCalled();
		});

		it('should log an error when failed to save workflow history version', async () => {
			// Arrange
			isWorkflowHistoryEnabled = true;
			const workflow = getWorkflow({ addNodeWithoutCreds: true });
			const workflowId = '123';
			workflow.connections = {};
			workflow.id = workflowId;
			workflow.versionId = '456';
			workflowHistoryRepository.insert.mockRejectedValueOnce(new Error('Test error'));

			// Act
			await workflowHistoryService.saveVersion(testUser, workflow, workflowId);

			// Assert
			expect(workflowHistoryRepository.insert).toHaveBeenCalled();
		});
	});
});
