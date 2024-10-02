import * as a from 'node:assert/strict';
import { ensureError } from 'n8n-workflow';

import { JsTaskRunner } from './code';
import { authenticate } from './authenticator';

let runner: JsTaskRunner | undefined;
let isShuttingDown = false;

type Config = {
	n8nUri: string;
	authToken?: string;
	grantToken?: string;
};

function readAndParseConfig(): Config {
	const authToken = process.env.N8N_RUNNERS_AUTH_TOKEN;
	const grantToken = process.env.N8N_RUNNERS_GRANT_TOKEN;
	if (!authToken && !grantToken) {
		throw new Error(
			'Missing task runner authentication. Use either N8N_RUNNERS_AUTH_TOKEN or N8N_RUNNERS_GRANT_TOKEN to configure it',
		);
	}

	return {
		n8nUri: process.env.N8N_RUNNERS_N8N_URI ?? 'localhost:5678',
		authToken,
		grantToken,
	};
}

function createSignalHandler(signal: string) {
	return async function onSignal() {
		if (isShuttingDown) {
			return;
		}

		console.log(`Received ${signal} signal, shutting down...`);

		isShuttingDown = true;
		try {
			if (runner) {
				await runner.stop();
				runner = undefined;
			}
		} catch (e) {
			const error = ensureError(e);
			console.error('Error stopping task runner', { error });
		} finally {
			process.exit(0);
		}
	};
}

void (async function start() {
	const config = readAndParseConfig();

	let grantToken = config.grantToken;
	if (!grantToken) {
		a.ok(config.authToken);

		grantToken = await authenticate({
			authToken: config.authToken,
			n8nUri: config.n8nUri,
		});
	}

	const wsUrl = `ws://${config.n8nUri}/rest/runners/_ws`;

	runner = new JsTaskRunner('javascript', wsUrl, grantToken, 5);

	process.on('SIGINT', createSignalHandler('SIGINT'));
	process.on('SIGTERM', createSignalHandler('SIGTERM'));
})().catch((e) => {
	const error = ensureError(e);
	console.error('Task runner failed to start', { error });
	process.exit(1);
});
