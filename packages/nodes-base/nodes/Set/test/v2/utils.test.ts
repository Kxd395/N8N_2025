import type { IDataObject, IExecuteFunctions, IGetNodeParameterOptions, INode } from 'n8n-workflow';
import { constructExecutionMetaData } from 'n8n-core';
import get from 'lodash/get';
import { composeReturnItem } from '../../v2/helpers/utils';
import type { SetNodeOptions } from '../../v2/helpers/interfaces';

export const node: INode = {
	id: '11',
	name: 'Edit Fields',
	type: 'n8n-nodes-base.set',
	typeVersion: 3,
	position: [42, 42],
	parameters: {
		mode: 'manual',
		fields: {
			values: [],
		},
		include: 'none',
		options: {},
	},
};

export const createMockExecuteFunction = (nodeParameters: IDataObject) => {
	const fakeExecuteFunction = {
		getNodeParameter(
			parameterName: string,
			_itemIndex: number,
			fallbackValue?: IDataObject | undefined,
			options?: IGetNodeParameterOptions | undefined,
		) {
			const parameter = options?.extractValue ? `${parameterName}.value` : parameterName;
			return get(nodeParameters, parameter, fallbackValue);
		},
		getNode() {
			return node;
		},
		helpers: { constructExecutionMetaData },
		continueOnFail: () => false,
	} as unknown as IExecuteFunctions;
	return fakeExecuteFunction;
};

describe('test Set2, composeReturnItem', () => {
	it('should compose return item including no other fields', () => {
		const fakeExecuteFunction = createMockExecuteFunction({});

		const inputItem = {
			json: {
				input1: 'value1',
				input2: 2,
				input3: [1, 2, 3],
			},
			pairedItem: {
				item: 0,
				input: undefined,
			},
		};

		const newData = {
			num1: 55,
			str1: '42',
			arr1: ['foo', 'bar'],
			obj: {
				key: 'value',
			},
		};

		const options: SetNodeOptions = {
			include: 'none',
		};

		const result = composeReturnItem.call(fakeExecuteFunction, 0, inputItem, newData, options);

		expect(result).toEqual({
			json: {
				num1: 55,
				str1: '42',
				arr1: ['foo', 'bar'],
				obj: {
					key: 'value',
				},
			},
			pairedItem: {
				item: 0,
			},
		});
	});

	it('should compose return item including selected fields', () => {
		const fakeExecuteFunction = createMockExecuteFunction({ includeFields: 'input1, input2' });

		const inputItem = {
			json: {
				input1: 'value1',
				input2: 2,
				input3: [1, 2, 3],
			},
			pairedItem: {
				item: 0,
				input: undefined,
			},
		};

		const newData = {
			num1: 55,
			str1: '42',
			arr1: ['foo', 'bar'],
			obj: {
				key: 'value',
			},
		};

		const options: SetNodeOptions = {
			include: 'selected',
		};

		const result = composeReturnItem.call(fakeExecuteFunction, 0, inputItem, newData, options);

		expect(result).toEqual({
			json: {
				num1: 55,
				str1: '42',
				arr1: ['foo', 'bar'],
				input1: 'value1',
				input2: 2,
				obj: {
					key: 'value',
				},
			},
			pairedItem: {
				item: 0,
			},
		});
	});
});
