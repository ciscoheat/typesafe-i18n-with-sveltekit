import type { ParamMatcher } from '@sveltejs/kit';
import { locales } from '$lib/i18n/i18n-util';

export const match: ParamMatcher = (param) => {
	return (locales as string[]).includes(param);
};
