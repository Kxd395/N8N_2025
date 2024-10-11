import { compile } from 'handlebars';

import type { SamlUserAttributes } from '../types/saml-user-attributes';

const failedTemplate = compile<{ message?: string; attributes?: SamlUserAttributes }>(`
    <http>
    <head>
    <title>n8n - SAML Connection Test Result</title>
    <style>
        body { background: rgb(251,252,254); font-family: 'Open Sans', sans-serif; padding: 10px; margin: auto; width: 500px; top: 40%; position: relative; }
        h1 { color: rgb(240, 60, 60); font-size: 16px; font-weight: 400; margin: 0 0 10px 0; }
        h2 { color: rgb(0, 0, 0); font-size: 12px; font-weight: 400; margin: 0 0 10px 0; }
        button { border: 1px solid rgb(219, 223, 231); background: rgb(255, 255, 255); border-radius: 4px; padding: 10px; }
        ul { border: 1px solid rgb(219, 223, 231); border-radius: 4px; padding: 10px; }
        li { decoration: none; list-style: none; margin: 0 0 0px 0; color: rgb(125, 125, 125); font-size: 12px;}
    </style>
    </head>
    <body>
    <div style="text-align:center">
    <h1>SAML Connection Test failed</h1>
    <h2>{{message}}</h2>
    <button onclick="window.close()">You can close this window now</button>
    <p></p>
    {{#with attributes}}
    <h2>Here are the attributes returned by your SAML IdP:</h2>
    <ul>
    <li><strong>Email:</strong> {{email}}</li>
    <li><strong>First Name:</strong> {{firstName}}</li>
    <li><strong>Last Name:</strong> {{lastName}}</li>
    <li><strong>UPN:</strong> {{userPrincipalName}}</li>
    {{/with}}
    </ul>
    </div>
    </body>
    </http>
`);

export function getSamlConnectionTestFailedView(
	message?: string,
	attributes?: Partial<SamlUserAttributes>,
): string {
	return failedTemplate({
		message: message ?? 'A common issue could be that no email attribute is set',
		attributes: attributes && {
			email: attributes.email ?? '(n/a)',
			firstName: attributes.firstName ?? '(n/a)',
			lastName: attributes.lastName ?? '(n/a)',
			userPrincipalName: attributes.userPrincipalName ?? '(n/a)',
		},
	});
}
