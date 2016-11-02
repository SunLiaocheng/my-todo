module.exports = {
	routes : [
		{
			path: '/',
			alias: '/V2',
			redirect: '/V2'
		},
		{
			path: '/V2',
			component: require('../component/Box/index.vue'),
			children: [
				require('./childRouter/Home/index'),
				require('./childRouter/Main/index')
			]
		}
	]
}
