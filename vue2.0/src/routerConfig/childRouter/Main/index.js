module.exports = {
	path: 'Main',
	component: require('../../../component/Main/index.vue'),
	children: [
		{
			path: 'main/:type',
			component: require('../../../component/Main/src/main1.vue')
		}
	]
}