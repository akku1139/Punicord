export const ssr = false;

import { redirect } from '@sveltejs/kit';

export function load({}) {
	redirect(307, '/channels/@me');
}
