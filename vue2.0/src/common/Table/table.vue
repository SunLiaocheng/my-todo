<template>		
	<div :class="['table',border?'b-table':'']">
		<transition-group>
			<ul :key="'thead'" class="thead" :style="styles">
				<li v-for="val in columns">
					<span v-if="typeof val == 'string'">{{val}}</span>
					<span v-if="typeof val == 'object'">{{val.name}}</span>
				</li>
			</ul>
			<ul v-for="(item,key,index) in dataSource" :key="key">
				<li v-for="el in columns">
					<span v-if="typeof el == 'string'">{{item[el]}}</span>
					<!-- <span v-if="typeof el == 'object'" v-html="el.slot"></span> -->
					<span v-if="typeof el == 'object'">
						<!-- <slot></slot> -->
					</span>
				</li>
			</ul>
		</transition-group>
	</div>
</template>

<script>
	export default {
		props:{
			dataSource: {
				type: Array,
			},
			columns: {
				type: Array
			},
			border: {
				type: Boolean,
				default: false
			},
			styles: {
				type: Object,
				default: () => {return {}}
			}
		}
	}
</script>

<style lang="less" scoped>
	@border: 1px solid #e7e7e7;
	.table{
		width: 100%;
		>span{
			display: table;
			width: 100%;
		}
		
		ul{
			overflow: hidden;
			display: table-row;
			li{
				display: table-cell;
				padding: 10px;
			}
		}

		.thead{
			background: #f7f7f7;
			color: #666;
			text-align: center;
		}
	}
	.b-table{
		ul{
			li{
				border: @border;
				border-top: 0;
				&:not(:last-child){
					border-right: 0;
				}
			}
			&:first-child{
				li{
					border-top: @border;
				}
			}
		}
	}
</style>