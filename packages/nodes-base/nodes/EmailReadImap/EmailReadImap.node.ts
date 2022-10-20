import { INodeTypeBaseDescription, INodeVersionedType } from 'n8n-workflow';

import { NodeVersionedType } from '../../src/NodeVersionedType';

import { EmailReadImapV1 } from './v1/EmailReadImapV1.node';

import { EmailReadImapV2 } from './v2/EmailReadImapV2.node';

export class EmailReadImap extends NodeVersionedType {
	constructor() {
		const baseDescription: INodeTypeBaseDescription = {
			displayName: 'EmailReadImap',
			name: 'emailReadImap',
			icon: 'fa:inbox',
			group: ['trigger'],
			description: 'Triggers the workflow when a new email is received',
			defaultVersion: 2,
		};

		const nodeVersions: INodeVersionedType['nodeVersions'] = {
			1: new EmailReadImapV1(baseDescription),
			2: new EmailReadImapV2(baseDescription),
		};

		super(nodeVersions, baseDescription);
	}
}
