import type { PageLoad } from './$types';

export const load = (async (event) => {
  return { apples: parseInt(event.params.amount) };
}) satisfies PageLoad;
