import express from 'express';
import config from '@/config';
import {
	IExecutionFlattedResponse,
	IExecutionResponse,
	IExecutionsListResponse,
	IWorkflowExecutionDataProcess,
} from '@/Interfaces';
import type { ExecutionRequest } from '@/requests';
import * as ResponseHelper from '@/ResponseHelper';
import { isSharingEnabled } from '@/UserManagement/UserManagementHelper';
import { EEExecutionsService } from './executions.service.ee';

// eslint-disable-next-line @typescript-eslint/naming-convention
export const EEExecutionsController = express.Router();

EEExecutionsController.use((req, res, next) => {
	if (!isSharingEnabled() || !config.getEnv('enterprise.workflowSharingEnabled')) {
		// skip ee router and use free one
		next('router');
		return;
	}
	// use ee router
	next();
});

/**
 * GET /executions
 */
EEExecutionsController.get(
	'/',
	ResponseHelper.send(async (req: ExecutionRequest.GetAll): Promise<IExecutionsListResponse> => {
		const sharedWorkflowIds = await EEExecutionsService.getWorkflowIdsForUser(req.user);
		return EEExecutionsService.getExecutionsList(req, sharedWorkflowIds);
	}),
);

/**
 * GET /executions/:id
 */
EEExecutionsController.get(
	'/:id',
	ResponseHelper.send(
		async (
			req: ExecutionRequest.Get,
		): Promise<IExecutionResponse | IExecutionFlattedResponse | undefined> => {
			const sharedWorkflowIds = await EEExecutionsService.getWorkflowIdsForUser(req.user);
			return EEExecutionsService.getExecution(req, sharedWorkflowIds);
		},
	),
);

/**
 * POST /executions/:id/retry
 */
EEExecutionsController.post(
	'/:id/retry',
	ResponseHelper.send(async (req: ExecutionRequest.Retry): Promise<boolean> => {
		const sharedWorkflowIds = await EEExecutionsService.getWorkflowIdsForUser(req.user);
		return EEExecutionsService.retryExecution(req, sharedWorkflowIds);
	}),
);
