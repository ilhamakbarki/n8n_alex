/* eslint-disable no-prototype-builtins */
import { INode, IWorkflowCredentials } from 'n8n-workflow';
// eslint-disable-next-line import/no-cycle
import { Db } from '.';

// eslint-disable-next-line @typescript-eslint/naming-convention
export async function WorkflowCredentials(nodes: INode[]): Promise<IWorkflowCredentials> {
	// Go through all nodes to find which credentials are needed to execute the workflow
	const returnCredentials: IWorkflowCredentials = {};

	let node;
	let type;
	let name;
	let foundCredentials;
	// eslint-disable-next-line no-restricted-syntax
	for (node of nodes) {
		if (node.disabled === true || !node.credentials) {
			// eslint-disable-next-line no-continue
			continue;
		}

		// eslint-disable-next-line no-restricted-syntax
		for (type of Object.keys(node.credentials)) {
			if (!returnCredentials.hasOwnProperty(type)) {
				returnCredentials[type] = {};
			}
			name = node.credentials[type];

			if (!returnCredentials[type].hasOwnProperty(name)) {
				// eslint-disable-next-line no-await-in-loop, @typescript-eslint/no-non-null-assertion
				foundCredentials = await Db.collections.Credentials!.find({ name, type });
				if (!foundCredentials.length) {
					throw new Error(`Could not find credentials for type "${type}" with name "${name}".`);
				}
				// eslint-disable-next-line prefer-destructuring
				returnCredentials[type][name] = foundCredentials[0];
			}
		}
	}

	return returnCredentials;
}
