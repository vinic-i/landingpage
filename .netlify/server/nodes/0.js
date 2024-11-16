

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.CI0T3DQn.js","_app/immutable/chunks/disclose-version.VUNvbJtD.js","_app/immutable/chunks/runtime.BmlZ1EqO.js"];
export const stylesheets = [];
export const fonts = [];
