import {
	INodeProperties,
} from 'n8n-workflow';

export const eventOperations = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'event',
				],
			},
		},
		options: [
			{
				name: 'create',
				value: 'create',
				description: 'Create an event',
			},
		],
		default: 'create',
		description: 'The operation to perform.',
	},
] as INodeProperties[];

export const eventFields = [

	/* -------------------------------------------------------------------------- */
	/*                                 event:create                               */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Event',
		name: 'eventName',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'event',
				],
				operation: [
					'create',
				],
			},
		},
		default: '',
		description: 'The name of the event',
	},
	{
		displayName: 'Distinct ID',
		name: 'distinctId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'event',
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
					'event',
				],
				operation: [
					'create',
				],
			},
		},
		default: {},
		options: [
			{
				displayName: 'Properties',
				name: 'propertiesUi',
				type: 'fixedCollection',
				placeholder: 'Add Property',
				default: {},
				typeOptions: {
					multipleValues: true,
				},
				options: [
					{
						displayName: 'Property',
						name: 'propertyValues',
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
