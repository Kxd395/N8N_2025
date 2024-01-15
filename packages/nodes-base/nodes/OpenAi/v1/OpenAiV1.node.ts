/* eslint-disable n8n-nodes-base/node-filename-against-convention */
import type { INodeType, INodeTypeBaseDescription, INodeTypeDescription } from 'n8n-workflow';
import { imageFields, imageOperations } from './ImageDescription';
import { textFields, textOperations } from './TextDescription';
import { chatFields, chatOperations } from './ChatDescription';

const versionDescription: INodeTypeDescription = {
	displayName: 'OpenAI',
	name: 'openAi',
	icon: 'file:openAi.svg',
	group: ['transform'],
	version: [1, 1.1],
	subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
	description: 'Consume Open AI',
	defaults: {
		name: 'OpenAI',
	},
	inputs: ['main'],
	outputs: ['main'],
	credentials: [
		{
			name: 'openAiApi',
			required: true,
		},
	],
	requestDefaults: {
		ignoreHttpStatusErrors: true,
		baseURL: 'https://api.openai.com',
	},
	properties: [
		{
			displayName:
				'For more advanced uses, consider using an <a data-action="openSelectiveNodeCreator" data-action-parameter-creatorview="AI">advanced AI</a> node',
			name: 'noticeAdvanceAi',
			type: 'notice',
			default: '',
		},
		{
			displayName: 'Resource',
			name: 'resource',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'Chat',
					value: 'chat',
				},
				{
					name: 'Image',
					value: 'image',
				},
				{
					name: 'Text',
					value: 'text',
				},
			],
			default: 'text',
		},

		...chatOperations,
		...chatFields,

		...imageOperations,
		...imageFields,

		...textOperations,
		...textFields,
	],
};

export class OpenAiV1 implements INodeType {
	description: INodeTypeDescription;

	constructor(baseDescription: INodeTypeBaseDescription) {
		this.description = {
			...baseDescription,
			...versionDescription,
		};
	}
}
