import type { INodeProperties, IExecuteFunctions, IDataObject } from 'n8n-workflow';
import { updateDisplayOptions } from '../../../../../utils/utilities';
import { formatFeed, populate, setCount } from '../../helpers/utils';
import { splunkApiRequest } from '../../transport';
import type { SplunkFeedResponse } from '../../types';

const properties: INodeProperties[] = [
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		default: false,
		description: 'Whether to return all results or only up to a given limit',
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		default: 50,
		description: 'Max number of results to return',
		typeOptions: {
			minValue: 1,
		},
		displayOptions: {
			show: {
				returnAll: [false],
			},
		},
	},
	{
		displayName: 'Options',
		name: 'options',
		type: 'collection',
		placeholder: 'Add Option',
		default: {},

		options: [
			{
				displayName: 'Sort Direction',
				name: 'sort_dir',
				type: 'options',
				options: [
					{
						name: 'Ascending',
						value: 'asc',
					},
					{
						name: 'Descending',
						value: 'desc',
					},
				],
				default: 'asc',
			},
			{
				displayName: 'Sort Key',
				name: 'sort_key',
				description: 'Key name to use for sorting',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Sort Mode',
				name: 'sort_mode',
				type: 'options',
				options: [
					{
						name: 'Automatic',
						value: 'auto',
						description:
							'If all field values are numeric, collate numerically. Otherwise, collate alphabetically.',
					},
					{
						name: 'Alphabetic',
						value: 'alpha',
						description: 'Collate alphabetically, case-insensitive',
					},
					{
						name: 'Alphabetic and Case-Sensitive',
						value: 'alpha_case',
						description: 'Collate alphabetically, case-sensitive',
					},
					{
						name: 'Numeric',
						value: 'num',
						description: 'Collate numerically',
					},
				],
				default: 'auto',
			},
		],
	},
];

const displayOptions = {
	show: {
		resource: ['searchJob'],
		operation: ['getAll'],
	},
};

export const description = updateDisplayOptions(displayOptions, properties);

export async function execute(
	this: IExecuteFunctions,
	i: number,
): Promise<IDataObject | IDataObject[]> {
	// https://docs.splunk.com/Documentation/Splunk/8.2.2/RESTREF/RESTsearch#search.2Fjobs

	const qs = {} as IDataObject;
	const options = this.getNodeParameter('options', i);

	populate(options, qs);
	setCount.call(this, qs);

	const endpoint = '/services/search/jobs';
	const responseData = (await splunkApiRequest.call(
		this,
		'GET',
		endpoint,
		{},
		qs,
	)) as SplunkFeedResponse;
	const returnData = formatFeed(responseData);

	return returnData;
}