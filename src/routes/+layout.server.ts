import type { LayoutServerLoad } from './$types';
import { detectLocale } from '$lib/i18n/i18n-util';
import { redirect } from '@sveltejs/kit';

const langParam = 'lang';

export const load = (async (event) => {
	// Using a GET var "lang" to change locale
	const newLocale = event.url.searchParams.get(langParam);
	if (newLocale) {
		event.cookies.set(langParam, newLocale, { path: '/' });
		event.url.searchParams.delete(langParam);
		// Redirect to remove the GET var
		throw redirect(303, event.url.toString());
	}

	const locale = detectLocale(() => [event.cookies.get(langParam) ?? '']);
	return { locale };
}) satisfies LayoutServerLoad;
