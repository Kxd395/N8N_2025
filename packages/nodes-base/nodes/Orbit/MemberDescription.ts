import {
	INodeProperties,
} from 'n8n-workflow';

export const memberOperations = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'member',
				],
			},
		},
		options: [
			{
				name: 'Delete',
				value: 'delete',
				description: 'Delete a member',
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Get a member',
			},
			{
				name: 'Get All',
				value: 'getAll',
				description: 'Get all members in a workspace',
			},
			{
				name: 'Lookup',
				value: 'lookup',
				description: 'Lookup a member by identity',
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Update a member',
			},
			{
				name: 'Upsert',
				value: 'upsert',
				description: 'Create/Update a member',
			},
		],
		default: 'get',
		description: 'The operation to perform.',
	},
] as INodeProperties[];

export const memberFields = [

/* -------------------------------------------------------------------------- */
/*                                member:delete                               */
/* -------------------------------------------------------------------------- */
	{
		displayName: 'Workspace',
		name: 'workspaceId',
		type: 'options',
		typeOptions: {
			loadOptionsMethod: 'getWorkspaces',
		},
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'member',
				],
				operation: [
					'delete',
				],
			},
		},
		description: 'The workspace',
	},
	{
		displayName: 'Member ID',
		name: 'memberId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'member',
				],
				operation: [
					'delete',
				],
			},
		},
		description: 'Member ID',
	},


/* -------------------------------------------------------------------------- */
/*                                member:get                                  */
/* -------------------------------------------------------------------------- */
	{
		displayName: 'Workspace',
		name: 'workspaceId',
		type: 'options',
		typeOptions: {
			loadOptionsMethod: 'getWorkspaces',
		},
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'member',
				],
				operation: [
					'get',
				],
			},
		},
		description: 'The workspace',
	},
	{
		displayName: 'Member ID',
		name: 'memberId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'member',
				],
				operation: [
					'get',
				],
			},
		},
		description: 'Member ID',
	},
	{
		displayName: 'Resolve Identities',
		name: 'resolveIdentities',
		type: 'boolean',
		displayOptions: {
			show: {
				operation: [
					'get',
				],
				resource: [
					'member',
				],
			},
		},
		default: false,
		description: 'By default, the response just includes the reference of the identity. When set to true the identities will be resolved automatically.',
	},

/* -------------------------------------------------------------------------- */
/*                                member:getAll                               */
/* -------------------------------------------------------------------------- */
	{
		displayName: 'Workspace',
		name: 'workspaceId',
		type: 'options',
		typeOptions: {
			loadOptionsMethod: 'getWorkspaces',
		},
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'member',
				],
				operation: [
					'getAll',
				],
			},
		},
		description: 'The workspace',
	},
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: {
			show: {
				operation: [
					'getAll',
				],
				resource: [
					'member',
				],
			},
		},
		default: false,
		description: 'If all results should be returned or only up to a given limit.',
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		displayOptions: {
			show: {
				operation: [
					'getAll',
				],
				resource: [
					'member',
				],
				returnAll: [
					false,
				],
			},
		},
		typeOptions: {
			minValue: 1,
			maxValue: 500,
		},
		default: 100,
		description: 'How many results to return.',
	},
	{
		displayName: 'Resolve Identities',
		name: 'resolveIdentities',
		type: 'boolean',
		displayOptions: {
			show: {
				operation: [
					'getAll',
				],
				resource: [
					'member',
				],
			},
		},
		default: false,
		description: 'By default, the response just includes the reference of the identity. When set to true the identities will be resolved automatically.',
	},
	{
		displayName: 'Options',
		name: 'options',
		type: 'collection',
		placeholder: 'Add Option',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'member',
				],
				operation: [
					'getAll',
				],
			},
		},
		options: [
			{
				displayName: 'Sort By',
				name: 'sort',
				type: 'string',
				default: '',
				description: 'Name of the field the response will be sorted by.',
			},
			{
				displayName: 'Sort Direction',
				name: 'direction',
				type: 'options',
				options: [
					{
						name: 'ASC',
						value: 'ASC',
					},
					{
						name: 'DESC',
						value: 'DESC',
					},
				],
				default: '',
			},
		],
	},

/* -------------------------------------------------------------------------- */
/*                                member:lookup                               */
/* -------------------------------------------------------------------------- */
	{
		displayName: 'Workspace',
		name: 'workspaceId',
		type: 'options',
		typeOptions: {
			loadOptionsMethod: 'getWorkspaces',
		},
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'member',
				],
				operation: [
					'lookup',
				],
			},
		},
		description: 'The workspace',
	},
	{
		displayName: 'Source',
		name: 'source',
		type: 'options',
		options: [
			{
				name: 'Discourse',
				value: 'discourse',
			},
			{
				name: 'Email',
				value: 'email',
			},
			{
				name: 'GitHub',
				value: 'github',
			},
			{
				name: 'Twitter',
				value: 'twitter',
			},
		],
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'member',
				],
				operation: [
					'lookup',
				],
			},
		},
		description: `Set to github, twitter, email, discourse or the source of any identities you've manually created.`,
	},
	{
		displayName: 'Search By',
		name: 'searchBy',
		type: 'options',
		options: [
			{
				name: 'Username',
				value: 'username',
			},
			{
				name: 'ID',
				value: 'id',
			},
		],
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'member',
				],
				operation: [
					'lookup',
				],
				source: [
					'discourse',
					'github',
					'twitter',
				],
			},
		},
	},
	{
		displayName: 'ID',
		name: 'id',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'member',
				],
				operation: [
					'lookup',
				],
				searchBy: [
					'id',
				],
				source: [
					'discourse',
					'github',
					'twitter',
				],
			},
		},
		description: `The username at the source.`,
	},
	{
		displayName: 'Username',
		name: 'username',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'member',
				],
				operation: [
					'lookup',
				],
				searchBy: [
					'username',
				],
				source: [
					'discourse',
					'github',
					'twitter',
				],
			},
		},
		description: `The username at the source.`,
	},
	{
		displayName: 'Email',
		name: 'email',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'member',
				],
				operation: [
					'lookup',
				],
				source: [
					'email',
				],
			},
		},
		description: `The email address.`,
	},
	{
		displayName: 'Host',
		name: 'host',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'member',
				],
				operation: [
					'lookup',
				],
				source: [
					'discourse',
				],
			},
		},
	},
/* -------------------------------------------------------------------------- */
/*                                member:update                               */
/* -------------------------------------------------------------------------- */
	{
		displayName: 'Workspace',
		name: 'workspaceId',
		type: 'options',
		typeOptions: {
			loadOptionsMethod: 'getWorkspaces',
		},
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'member',
				],
				operation: [
					'update',
				],
			},
		},
		description: 'The workspace',
	},
	{
		displayName: 'Member ID',
		name: 'memberId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'member',
				],
				operation: [
					'update',
				],
			},
		},
		description: 'Member ID',
	},
	{
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: [
					'member',
				],
				operation: [
					'update',
				],
			},
		},
		default: {},
		options: [
			{
				displayName: 'Bio',
				name: 'bio',
				type: 'string',
				default: '',
				description: '',
			},
			{
				displayName: 'Birthday',
				name: 'birthday',
				type: 'dateTime',
				default: '',
				description: '',
			},
			{
				displayName: 'Company',
				name: 'company',
				type: 'string',
				default: '',
				description: '',
			},
			{
				displayName: 'Location',
				name: 'location',
				type: 'string',
				default: '',
				description: '',
			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: '',
			},
			{
				displayName: 'Pronouns',
				name: 'pronouns',
				type: 'string',
				default: '',
				description: '',
			},
			{
				displayName: 'Shipping Address',
				name: 'shippingAddress',
				type: 'string',
				default: '',
				description: '',
			},
			{
				displayName: 'Slug',
				name: 'slug',
				type: 'string',
				default: '',
				description: '',
			},
			{
				displayName: 'Tags to Add',
				name: 'tagsToAdd',
				type: 'string',
				default: '',
				description: 'Adds tags to member; comma-separated string or array',
			},
			{
				displayName: 'Tag List',
				name: 'tagList',
				type: 'string',
				default: '',
				description: 'Replaces all tags for the member; comma-separated string or array',
			},
			{
				displayName: 'T-Shirt',
				name: 'tShirt',
				type: 'string',
				default: '',
				description: '',
			},
			{
				displayName: 'Teammate',
				name: 'teammate',
				type: 'boolean',
				default: false,
				description: '',
			},
			{
				displayName: 'URL',
				name: 'url',
				type: 'string',
				default: '',
				description: '',
			},
		],
	},

/* -------------------------------------------------------------------------- */
/*                                member:upsert                               */
/* -------------------------------------------------------------------------- */
	{
		displayName: 'Workspace',
		name: 'workspaceId',
		type: 'options',
		typeOptions: {
			loadOptionsMethod: 'getWorkspaces',
		},
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'member',
				],
				operation: [
					'upsert',
				],
			},
		},
		description: 'The workspace',
	},
	{
		displayName: 'Identity',
		name: 'identityUi',
		type: 'fixedCollection',
		description: 'The identity is used to find the member. If no member exists, a new member will be created and linked to the provided identity.',
		typeOptions: {
			multipleValues: false,
		},
		placeholder: 'Add Identity',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'member',
				],
				operation: [
					'upsert',
				],
			},
		},
		options: [
			{
				displayName: 'Identity',
				name: 'identityValue',
				values: [
					{
						displayName: 'Source',
						name: 'source',
						type: 'options',
						options: [
							{
								name: 'Discourse',
								value: 'discourse',
							},
							{
								name: 'Email',
								value: 'email',
							},
							{
								name: 'GitHub',
								value: 'github',
							},
							{
								name: 'Twitter',
								value: 'twitter',
							},
						],
						default: '',
						description: `Set to github, twitter, email, discourse or the source of any identities you've manually created.`,
					},
					{
						displayName: 'Search By',
						name: 'searchBy',
						type: 'options',
						options: [
							{
								name: 'Username',
								value: 'username',
							},
							{
								name: 'ID',
								value: 'id',
							},
						],
						default: '',
						required: true,
						displayOptions: {
							show: {
								source: [
									'discourse',
									'github',
									'twitter',
								],
							},
						},
					},
					{
						displayName: 'ID',
						name: 'id',
						type: 'string',
						default: '',
						required: true,
						displayOptions: {
							show: {
								searchBy: [
									'id',
								],
								source: [
									'discourse',
									'github',
									'twitter',
								],
							},
						},
						description: `The username at the source.`,
					},
					{
						displayName: 'Username',
						name: 'username',
						type: 'string',
						default: '',
						required: true,
						displayOptions: {
							show: {
								searchBy: [
									'username',
								],
								source: [
									'discourse',
									'github',
									'twitter',
								],
							},
						},
						description: `The username at the source.`,
					},
					{
						displayName: 'Email',
						name: 'email',
						type: 'string',
						default: '',
						required: true,
						displayOptions: {
							show: {
								source: [
									'email',
								],
							},
						},
						description: `The email address.`,
					},
					{
						displayName: 'Host',
						name: 'host',
						type: 'string',
						default: '',
						required: true,
						displayOptions: {
							show: {
								source: [
									'discourse',
								],
							},
						},
					},
				],
			},
		],
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: [
					'member',
				],
				operation: [
					'upsert',
				],
			},
		},
		default: {},
		options: [
			{
				displayName: 'Bio',
				name: 'bio',
				type: 'string',
				default: '',
				description: '',
			},
			{
				displayName: 'Birthday',
				name: 'birthday',
				type: 'dateTime',
				default: '',
				description: '',
			},
			{
				displayName: 'Company',
				name: 'company',
				type: 'string',
				default: '',
				description: '',
			},
			{
				displayName: 'Location',
				name: 'location',
				type: 'string',
				default: '',
				description: '',
			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: '',
			},
			{
				displayName: 'Pronouns',
				name: 'pronouns',
				type: 'string',
				default: '',
				description: '',
			},
			{
				displayName: 'Shipping Address',
				name: 'shippingAddress',
				type: 'string',
				default: '',
				description: '',
			},
			{
				displayName: 'Slug',
				name: 'slug',
				type: 'string',
				default: '',
				description: '',
			},
			{
				displayName: 'Tags to Add',
				name: 'tagsToAdd',
				type: 'string',
				default: '',
				description: 'Adds tags to member; comma-separated string or array',
			},
			{
				displayName: 'Tag List',
				name: 'tagList',
				type: 'string',
				default: '',
				description: 'Replaces all tags for the member; comma-separated string or array',
			},
			{
				displayName: 'T-Shirt',
				name: 'tShirt',
				type: 'string',
				default: '',
				description: '',
			},
			{
				displayName: 'Teammate',
				name: 'teammate',
				type: 'boolean',
				default: false,
				description: '',
			},
			{
				displayName: 'URL',
				name: 'url',
				type: 'string',
				default: '',
				description: '',
			},
		],
	},
] as INodeProperties[];
