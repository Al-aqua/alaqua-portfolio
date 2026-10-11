import { defineEnvVars } from '@sveltejs/kit/env';

export const variables = defineEnvVars({
	PUBLIC_OPENPANEL_CLIENT_ID: {
		public: true,
		static: true,
		description: 'OpenPanel client ID',
		schema: (value) => value ?? ''
	}
});
