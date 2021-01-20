import {
	Command, flags,
} from '@oclif/command';

import {
	Db,
	GenericHelpers,
} from "../../src";

import { 
	parse,
} from 'flatted';

import * as fs from 'fs';
import * as glob from 'glob-promise';
import * as path from 'path';

export class ImportCredentialsCommand extends Command {
	static description = 'Import credentials';
	
	static examples = [
		`$ n8n import:credentials --input=file.json`,
		`$ n8n import:credentials --multiple --input=backups/latest/`,
	];
	
	static flags = {
		help: flags.help({ char: 'h' }),
		input: flags.string({
			description: 'Input file name or directory if --multiple is used',
		}),
		multiple: flags.boolean({
			description: 'Imports *.json files from directory provided by --input',
		}),
	};
	
	async run() {
		const { flags } = this.parse(ImportCredentialsCommand);
		
		if (!flags.input) {
			GenericHelpers.logOutput(`An input file or directory with --input must be provided`);
			return;
		}

		if (flags.multiple) {
			if (fs.existsSync(flags.input)) {
				if (!fs.lstatSync(flags.input).isDirectory()) {
					GenericHelpers.logOutput(`The paramenter --input must be a directory`);
					return;
				}
			}
		}
		
		try {
			await Db.init();
			let i;
			if (flags.multiple) {
				const files = await glob((flags.input.endsWith(path.sep) ? flags.input : flags.input + path.sep) + '*.json');
				for (i = 0; i < files.length; i++) {
					const credential = parse(fs.readFileSync(files[i], {encoding: 'utf8'}));
					await Db.collections.Credentials!.save(credential);
				}
			} else {
				const fileContents = parse(fs.readFileSync(flags.input, {encoding: 'utf8'}));

				if (!Array.isArray(fileContents)) {
					throw new Error(`File does not seem to contain credentials.`);
				}
				
				for (i = 0; i < fileContents.length; i++) {
					await Db.collections.Credentials!.save(fileContents[i]);
				}
			}
			console.log('Successfully imported', i, 'credentials.');
		} catch (e) {
			console.error('\nGOT ERROR');
			console.log('====================================');
			console.error(e.message);
			console.error(e.stack);
			this.exit(1);
		}
		
		this.exit();
	}
}
