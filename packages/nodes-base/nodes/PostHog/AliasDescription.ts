import {
	INodeProperties,
} from 'n8n-workflow';

export const aliasOperations = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'alias',
				],
			},
		},
		options: [
			{
				name: 'create',
				value: 'create',
				description: 'Create an alias',
			},
		],
		default: 'create',
		description: 'The operation to perform.',
	},
] as INodeProperties[];

export const aliasFields = [

	/* -------------------------------------------------------------------------- */
	/*                                 alias:create                               */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Alias',
		name: 'alias',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'alias',
				],
				operation: [
					'create',
				],
			},
		},
		default: '',
		description: 'The name of the alias',
	},
	{
		displayName: 'Distinct ID',
		name: 'distinctId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'alias',
				],
				operation: [
					'create',
				],
			},
		},
		default: '',
		description: `User's distinct id`,
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: [
					'alias',
				],
				operation: [
					'create',
				],
			},
		},
		default: {},
		options: [
			{
				displayName: 'Context',
				name: 'contextUi',
				type: 'fixedCollection',
				placeholder: 'Add Property',
				default: {},
				typeOptions: {
					multipleValues: true,
				},
				options: [
					{
						displayName: 'Context',
						name: 'contextValues',
						values: [
							{
								displayName: 'Key',
								name: 'key',
								type: 'string',
								default: '',
							},
							{
								displayName: 'Value',
								name: 'value',
								type: 'string',
								default: '',
							},
						],
					},
				],
			},
			{
				displayName: 'Timestamp',
				name: 'timestamp',
				type: 'dateTime',
				default: '',
				description: `If not set, it'll automatically be set to the current time.`,
			},
		],
	},
] as INodeProperties[];
