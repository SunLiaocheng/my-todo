<template>
	<div>
		<SubMenu 
			:type = "sub.type"
			:items = "sub.items" 
		/>
	</div>
</template>

<script>
	import SubMenu from '../../common/NavMenu/navmenu'

	export default {
		components:{
			SubMenu
		},
		data () {
			return {
				sub: {
					type: 'left',
					items: [
						{
							path: '/V2/Home',
							name: 'Home',
							icon: 'home',
							iconStyle: {
								top: '-5px'
							}
						},
						{
							path: '/V2/main',
							name: 'Main',
							icon: 'gplus',
							subItems: [
								{
									path: '/V2/Main',
									name: 'home1'
								},
								{
									path: '/V2/Main',
									name: 'home2'
								}
							],
						}
					]
				}
			}
		}
	}

</script>

<style lang="less">
	
</style>