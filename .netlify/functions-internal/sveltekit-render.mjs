import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","isometric/Chat_SVG.svg","isometric/Online_banking_SVG.svg","isometric/online_school_SVG.svg","isometric/undraw_analyze_re_9kco.svg","isometric/undraw_a_day_off_re_hedl.svg","isometric/undraw_bookshelves_re_lxoy.svg","isometric/undraw_building_re_xfcm.svg","isometric/undraw_career_development_re_sv91.svg","isometric/undraw_city_life_gnpr.svg","isometric/undraw_educator_re_ju47 (1).svg","isometric/undraw_educator_re_ju47.svg","isometric/undraw_exams_re_4ios.svg","isometric/undraw_graduation_re_gthn.svg","isometric/undraw_mathematics_-4-otb.svg","isometric/undraw_online_calendar_re_wk3t.svg","isometric/undraw_online_test_re_kyfx.svg","isometric/undraw_professor_re_mj1s.svg","isometric/undraw_quiz_re_aol4.svg","isometric/undraw_scrum_board_re_wk7v.svg","isometric/undraw_software_engineer_re_tnjc.svg","isometric/undraw_teacher_re_sico.svg","isometric/undraw_teaching_re_g7e3.svg","isometric/undraw_video_upload_3d4u.svg","isometric/Workspace_2_SVG.svg","isometric/workspace_SVG.svg","main.css"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".css":"text/css"},
	_: {
		client: {"start":"_app/immutable/entry/start.BMuC9juQ.js","app":"_app/immutable/entry/app.BZfpRd3e.js","imports":["_app/immutable/entry/start.BMuC9juQ.js","_app/immutable/chunks/entry.BSoIkXJo.js","_app/immutable/chunks/runtime.BmlZ1EqO.js","_app/immutable/entry/app.BZfpRd3e.js","_app/immutable/chunks/runtime.BmlZ1EqO.js","_app/immutable/chunks/store.Vl_xMvVr.js","_app/immutable/chunks/disclose-version.VUNvbJtD.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})());
