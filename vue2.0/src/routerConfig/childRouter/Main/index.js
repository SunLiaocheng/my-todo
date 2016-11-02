module.exports = {
	path: 'Main',
	component: require('../../../component/Main/index.vue'),
	children: [
		{
			path: 'type/:type',
			component: require('../../../component/Main/src/main1.vue')
		}
	]
}