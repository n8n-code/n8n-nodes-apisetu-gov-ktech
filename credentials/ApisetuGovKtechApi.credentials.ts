import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class ApisetuGovKtechApi implements ICredentialType {
        name = 'N8nDevApisetuGovKtechApi';

        displayName = 'Apisetu Gov Ktech API';

        icon: Icon = { light: 'file:../nodes/ApisetuGovKtech/apisetu-gov-ktech.svg', dark: 'file:../nodes/ApisetuGovKtech/apisetu-gov-ktech.dark.svg' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://apisetu.gov.in/ktech/v3',
                        required: true,
                        placeholder: 'https://apisetu.gov.in/ktech/v3',
                        description: 'The base URL of your Apisetu Gov Ktech API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                'X-APISETU-APIKEY': '={{$credentials.apiKey}}',
                        },
                },
        };


}
