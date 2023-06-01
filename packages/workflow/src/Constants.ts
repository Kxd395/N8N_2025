import { version } from '../package.json';
import { major } from 'semver';

export const BINARY_ENCODING = 'base64';
export const WAIT_TIME_UNLIMITED = '3000-01-01T00:00:00.000Z';

export const CODE_LANGUAGES = ['javaScript', 'json', 'python'] as const;
export const CODE_EXECUTION_MODES = ['runOnceForAllItems', 'runOnceForEachItem'] as const;

/**
 * Nodes whose parameter values may refer to other nodes without expressions.
 * Their content may need to be updated when the referenced node is renamed.
 */
export const NODES_WITH_RENAMABLE_CONTENT = new Set([
	'n8n-nodes-base.code',
	'n8n-nodes-base.function',
	'n8n-nodes-base.functionItem',
]);

export const IS_V1_RELEASE = major(version) === 1;
