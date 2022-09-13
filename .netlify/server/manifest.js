export const manifest = {
	appDir: "_app",
	assets: new Set([".DS_Store","arbic.svg","arc.svg","coverhd.png","divider.svg","favicon.png","fonts/RoxboroughCF-Bold.eot","fonts/RoxboroughCF-Bold.woff","fonts/RoxboroughCF-Bold.woff2","fonts/RoxboroughCF-Light.eot","fonts/RoxboroughCF-Light.woff","fonts/RoxboroughCF-Light.woff2","fonts/RoxboroughCF-Medium.eot","fonts/RoxboroughCF-Medium.woff","fonts/RoxboroughCF-Medium.woff2","qr.png"]),
	mimeTypes: {".svg":"image/svg+xml",".png":"image/png",".eot":"application/vnd.ms-fontobject",".woff":"font/woff",".woff2":"font/woff2"},
	_: {
		entry: {"file":"start-e6bcdd75.js","js":["start-e6bcdd75.js","chunks/index-addc8697.js","chunks/index-5813968e.js"],"css":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'endpoint',
				id: "contact-form.json",
				pattern: /^\/contact-form\.json$/,
				names: [],
				types: [],
				load: () => import('./entries/endpoints/contact-form/index.json.js')
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
