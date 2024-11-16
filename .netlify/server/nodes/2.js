

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.mqgaMbVx.js","_app/immutable/chunks/disclose-version.VUNvbJtD.js","_app/immutable/chunks/runtime.BmlZ1EqO.js","_app/immutable/chunks/legacy.LV2xKfDt.js"];
export const stylesheets = [];
export const fonts = [];
