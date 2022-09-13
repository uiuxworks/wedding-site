import { c as create_ssr_component } from "../../chunks/index-a04dc3f0.js";
var app = "";
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"max-w-[400px] mx-auto relative"}"><div class="${"bg-gray-300 w-[1px] h-full absolute inset-y-0 left-0 ml-4"}"></div>
    <div class="${"bg-gray-300 w-[1px] h-full absolute inset-y-0 right-0 mr-4"}"></div>
    ${slots.default ? slots.default({}) : ``}</div>`;
});
export { _layout as default };
