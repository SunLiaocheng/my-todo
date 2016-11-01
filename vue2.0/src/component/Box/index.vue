<template>
	<div class="box">
		<header>
			<Headers />
		</header>
		<div class="container">
			<div class="subnav">
				<SubNav />
			</div>
			<div class="content">
				<router-view></router-view>
			</div>
		</div>
		<footer>
			<Footers />
		</footer>
	</div>
</template>

<script>
	import Headers from '../HSF/header.vue'
	import SubNav from '../HSF/subnav.vue'
	import Footers from '../HSF/footer.vue'

	export default {
		components:{
			Headers,
			SubNav,
			Footers
		}
	}
</script>

<style lang="less">	
	@import '../../assets/style/lib-reset.less';
	@import '../../assets/style/lib-mixins.less';

</style>

<style lang="less" scoped>
	@import '../../assets/style/lib-base.less';
	.box{
		min-width: 1200px;
		.container{
			position: relative;
			overflow: hidden;
			width: 100%;
		}
		header{
			height: 80px;
			background: @o-blue;
		}
		.subnav{
			width: 240px;
			background: #fff;
			height: 100%;
			float: left;
		}
		.content{
			padding: 0 50px 0 290px;
		}
	}
</style>