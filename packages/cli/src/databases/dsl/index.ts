import type { QueryRunner } from '@n8n/typeorm';
import { Column } from './Column';
import {
	AddColumns,
	AddForeignKey,
	AddNotNull,
	CreateTable,
	DropColumns,
	DropForeignKey,
	DropNotNull,
	DropTable,
} from './Table';
import { CreateIndex, DropIndex } from './Indices';

export const createSchemaBuilder = (tablePrefix: string, queryRunner: QueryRunner) => ({
	column: (name: string) => new Column(name),
	/* eslint-disable @typescript-eslint/promise-function-async */
	// NOTE: Do not add `async` to these functions, as that messes up the lazy-evaluation of LazyPromise
	createTable: (tableName: string) => new CreateTable(tableName, tablePrefix, queryRunner),

	dropTable: (tableName: string) => new DropTable(tableName, tablePrefix, queryRunner),

	addColumns: (tableName: string, columns: Column[]) =>
		new AddColumns(tableName, columns, tablePrefix, queryRunner),
	dropColumns: (tableName: string, columnNames: string[]) =>
		new DropColumns(tableName, columnNames, tablePrefix, queryRunner),

	createIndex: (
		tableName: string,
		columnNames: string[],
		isUnique = false,
		customIndexName?: string,
	) => new CreateIndex(tableName, columnNames, isUnique, tablePrefix, queryRunner, customIndexName),

	dropIndex: (tableName: string, columnNames: string[], customIndexName?: string) =>
		new DropIndex(tableName, columnNames, tablePrefix, queryRunner, customIndexName),

	addForeignKey: (
		tableName: string,
		columnName: string,
		reference: [string, string],
		customConstraintName?: string,
	) =>
		new AddForeignKey(
			tableName,
			columnName,
			reference,
			tablePrefix,
			queryRunner,
			customConstraintName,
		),

	dropForeignKey: (
		tableName: string,
		columnName: string,
		reference: [string, string],
		customConstraintName?: string,
	) =>
		new DropForeignKey(
			tableName,
			columnName,
			reference,
			tablePrefix,
			queryRunner,
			customConstraintName,
		),

	addNotNull: (tableName: string, columnName: string) =>
		new AddNotNull(tableName, columnName, tablePrefix, queryRunner),
	dropNotNull: (tableName: string, columnName: string) =>
		new DropNotNull(tableName, columnName, tablePrefix, queryRunner),

	/* eslint-enable */
});
