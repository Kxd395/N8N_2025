import type { IExecuteFunctions } from 'n8n-core';
import type { IDataObject, INodeExecutionData, INodeProperties } from 'n8n-workflow';
import { NodeOperationError } from 'n8n-workflow';

import { updateDisplayOptions } from '../../../../../utils/utilities';

import type {
	PgpDatabase,
	QueriesRunner,
	QueryValues,
	QueryWithValues,
} from '../../helpers/interfaces';

import {
	addReturning,
	checkItemAgainstSchema,
	doesRowExist,
	getTableSchema,
	prepareItem,
	replaceEmptyStringsByNulls,
} from '../../helpers/utils';

import { optionsCollection } from '../common.descriptions';

const properties: INodeProperties[] = [
	{
		displayName: 'Data Mode',
		name: 'dataMode',
		type: 'options',
		options: [
			{
				name: 'Auto-Map Input Data to Columns',
				value: 'autoMapInputData',
				description: 'Use when node input properties names exactly match the table column names',
			},
			{
				name: 'Map Each Column Manually',
				value: 'defineBelow',
				description: 'Set the value for each destination column manually',
			},
		],
		default: 'autoMapInputData',
		description:
			'Whether to map node input properties and the table data automatically or manually',
		displayOptions: {
			show: {
				'@version': [2],
			},
		},
	},
	{
		displayName: `
		In this mode, make sure incoming data fields are named the same as the columns in your table. If needed, use a 'Set' node before this node to change the field names.
		`,
		name: 'notice',
		type: 'notice',
		default: '',
		displayOptions: {
			show: {
				dataMode: ['autoMapInputData'],
				'@version': [2],
			},
		},
	},
	{
		// eslint-disable-next-line n8n-nodes-base/node-param-display-name-miscased, n8n-nodes-base/node-param-display-name-wrong-for-dynamic-options
		displayName: 'Column to Match On',
		name: 'columnToMatchOn',
		type: 'options',
		required: true,
		description:
			'The column to compare when finding the rows to update. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>.',
		typeOptions: {
			loadOptionsMethod: 'getColumns',
			loadOptionsDependsOn: ['schema.value', 'table.value'],
		},
		default: '',
		hint: 'The column that identifies the row(s) to modify',
		displayOptions: {
			show: {
				'@version': [2],
			},
		},
	},
	{
		displayName: 'Value of Column to Match On',
		name: 'valueToMatchOn',
		type: 'string',
		default: '',
		description:
			'Rows with a value in the specified "Column to Match On" that corresponds to the value in this field will be updated',
		displayOptions: {
			show: {
				dataMode: ['defineBelow'],
				'@version': [2],
			},
		},
	},
	{
		displayName: 'Values to Send',
		name: 'valuesToSend',
		placeholder: 'Add Value',
		type: 'fixedCollection',
		typeOptions: {
			multipleValueButtonText: 'Add Value',
			multipleValues: true,
		},
		displayOptions: {
			show: {
				dataMode: ['defineBelow'],
				'@version': [2],
			},
		},
		default: {},
		options: [
			{
				displayName: 'Values',
				name: 'values',
				values: [
					{
						// eslint-disable-next-line n8n-nodes-base/node-param-display-name-wrong-for-dynamic-options
						displayName: 'Column',
						name: 'column',
						type: 'options',
						description:
							'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>',
						typeOptions: {
							loadOptionsMethod: 'getColumnsWithoutColumnToMatchOn',
							loadOptionsDependsOn: ['schema.value', 'table.value'],
						},
						default: [],
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
		displayName: 'Columns',
		name: 'columns',
		type: 'resourceMapper',
		default: {
			mappingMode: 'defineBelow',
			value: {},
		},
		required: true,
		typeOptions: {
			loadOptionsDependsOn: ['table.value'],
			resourceMapper: {
				resourceMapperMethod: 'getMappingColumns',
				mode: 'update',
				fieldWords: {
					singular: 'column',
					plural: 'columns',
				},
				addAllFields: true,
				multiKeyMatch: true,
			},
		},
		displayOptions: {
			show: {
				'@version': [3],
			},
		},
	},
	optionsCollection,
];

const displayOptions = {
	show: {
		resource: ['database'],
		operation: ['update'],
	},
	hide: {
		table: [''],
	},
};

export const description = updateDisplayOptions(displayOptions, properties);

export async function execute(
	this: IExecuteFunctions,
	runQueries: QueriesRunner,
	items: INodeExecutionData[],
	nodeOptions: IDataObject,
	db: PgpDatabase,
): Promise<INodeExecutionData[]> {
	items = replaceEmptyStringsByNulls(items, nodeOptions.replaceEmptyStrings as boolean);

	const queries: QueryWithValues[] = [];

	for (let i = 0; i < items.length; i++) {
		const schema = this.getNodeParameter('schema', i, undefined, {
			extractValue: true,
		}) as string;

		const table = this.getNodeParameter('table', i, undefined, {
			extractValue: true,
		}) as string;

		const nodeVersion = this.getNode().typeVersion;
		const columnsToMatchOn: string[] =
			nodeVersion === 2
				? [this.getNodeParameter('columnToMatchOn', i) as string]
				: (this.getNodeParameter('columns.matchingColumns', i) as string[]);

		const dataMode =
			nodeVersion === 2
				? (this.getNodeParameter('dataMode', i) as string)
				: (this.getNodeParameter('columns.mappingMode', i) as string);

		let item: IDataObject = {};
		let valueToMatchOn: string | IDataObject = '';
		if (nodeVersion === 2) {
			valueToMatchOn = this.getNodeParameter('valueToMatchOn', i) as string;
		}

		if (dataMode === 'autoMapInputData') {
			item = items[i].json;
			if (nodeVersion === 2) {
				valueToMatchOn = item[columnsToMatchOn[0]] as string;
			}
		}

		if (dataMode === 'defineBelow') {
			const valuesToSend =
				nodeVersion === 2
					? ((this.getNodeParameter('valuesToSend', i, []) as IDataObject).values as IDataObject[])
					: ((this.getNodeParameter('columns.values', i, []) as IDataObject)
							.values as IDataObject[]);

			if (nodeVersion === 2) {
				item = prepareItem(valuesToSend);
				item[columnsToMatchOn[0]] = this.getNodeParameter('valueToMatchOn', i) as string;
			} else {
				item = this.getNodeParameter('columns.value', i) as IDataObject;
			}
		}

		const matchValues: string[] = [];
		if (nodeVersion === 2) {
			matchValues.push(columnsToMatchOn[0]);
			matchValues.push(valueToMatchOn);
		} else {
			columnsToMatchOn.forEach((column) => {
				matchValues.push(column);
				matchValues.push(item[column] as string);
			});
			const rowExists = await doesRowExist(db, schema, table, matchValues);
			if (!rowExists) {
				const matchValuesMessage: string[] = [];
				matchValues.forEach((val, index) => {
					if (index % 2 === 0) {
						matchValuesMessage.push(`${matchValues[index]}=${matchValues[index + 1]}`);
					}
				});
				throw new NodeOperationError(
					this.getNode(),
					`Row you are trying to update (${matchValuesMessage.join(
						', ',
					)}) doesn't exist in table "${table}"`,
				);
			}
		}
		const tableSchema = await getTableSchema(db, schema, table);

		item = checkItemAgainstSchema(this.getNode(), item, tableSchema, i);

		let values: QueryValues = [schema, table];

		let valuesLength = values.length + 1;

		let condition = '';
		if (nodeVersion === 2) {
			condition = `$${valuesLength}:name = $${valuesLength + 1}`;
			valuesLength = valuesLength + 2;
			values.push(columnsToMatchOn[0], valueToMatchOn);
		} else {
			const conditions: string[] = [];
			for (const column of columnsToMatchOn) {
				conditions.push(`$${valuesLength}:name = $${valuesLength + 1}`);
				valuesLength = valuesLength + 2;
				values.push(column, item[column] as string);
			}
			condition = conditions.join(' AND ');
		}

		const updateColumns = Object.keys(item).filter((column) => !columnsToMatchOn.includes(column));

		const updates: string[] = [];

		for (const column of updateColumns) {
			updates.push(`$${valuesLength}:name = $${valuesLength + 1}`);
			valuesLength = valuesLength + 2;
			values.push(column, item[column] as string);
		}

		let query = `UPDATE $1:name.$2:name SET ${updates.join(', ')} WHERE ${condition}`;

		const outputColumns = this.getNodeParameter('options.outputColumns', i, ['*']) as string[];

		[query, values] = addReturning(query, outputColumns, values);

		queries.push({ query, values });
	}

	const results = await runQueries(queries, items, nodeOptions);
	return results;
}
