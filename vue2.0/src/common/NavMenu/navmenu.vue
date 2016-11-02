<template>
	<ul class="sub-menu">
		<li v-for="(item,index) in items">
			<router-link :to="{path:item.path}" v-if="!item.subItems || item.subItems.length==0">
				<i :class="'icono-'+item.icon" :style="item.iconStyle"></i>
				<span>{{item.name}}</span>
			</router-link>
			<div @click="toggleSub(index)" v-if="item.subItems && item.subItems.length>0" class="no-link">
				<i :class="'icono-'+item.icon" :style="item.iconStyle"></i>
				<span>{{item.name}}</span>
				<i class="icono-caretDown down"></i>
			</div>
			
			<ul v-show="item.subItems && item.subItems.length>0 && arr_sub[index]">
				<li v-for="val in item.subItems">
					<router-link :to="{path:val.path}">{{val.name}}</router-link>
				</li>
			</ul>
		</li>
	</ul>
</template>

<script>
	export default {
		props:{
			type: {
				type: String,
				default: 'left'
			},
			items: {
				type: Array,
				default: []
			},
		},
		data () {
			return {
				arr_sub: []
			}
		},
		ready () {
			if(this.items.length>0) {
				this.items.forEach((item,i) => {
					if(item.subItems && item.subItems.length>0) {
						this.arr_sub.$set(i,false)
					}
				})
			}
		},
		methods: {
			toggleSub (index) {
				let item_show = this.arr_sub[index];
				this.items.forEach((item,i) => {
					if(item.subItems && item.subItems.length>0) {						
						this.arr_sub.splice(i,1,false)
					}
					if(i == index) {
						if(!item_show) {
							this.arr_sub.splice(i,1,true)
						}
					}
				})
				console.log(this.arr_sub,index)
			}

		}
	}
</script>

<style lang="less" scoped>
	.sub-menu{
		background: #404040;
		width: 240px;
		-webkit-user-select: none;
		cursor: pointer !important;
		li{
			ul{
				background: #333333;
				padding-left: 48px;
			}
			a,.no-link{
				color: #999;
				display: block;
				transition: .8s ease-in-out;
				height: 42px;
				line-height: 42px;
				padding-left: 24px;
			}
			i{
				transform: scale(0.5);
				transition: .5s ease-in-out;
			}
			&:hover{
				>a,>i,>.no-link{
					color: #fff;
				}
			}
			.down{
				float: right;
			}
		}
		.router-link-active{
			color: #fff;
			i{color: #fff}
		}
	}
</style>
