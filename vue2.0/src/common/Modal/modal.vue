<template>
	<div class="modal-mask" v-if="isShow" :style='styles'>
		<div class="mask"  v-on:dblclick="Close()"></div>
		<div class="modal-wrap" >
			<div class="modal-box">
				<div class="modal-con">
					<div class="modal-hader">
						<h3>{{title}}<span class="close-x" @click="Close()">x</span></h3>
					</div>
					<div class="modal-body">
						<slot></slot>
					</div>
					<div class="modal-footer">
						<button @click="Sure()">{{sureBt}}</button>
						<button v-if="double" @click="Close()">取消</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

	export default {
		props: {
			type: {
				type: Number,
				default: 1
			},
			title: {
				type: String,
				default: '提示'
			},
			_width: {
				type: String,
				default: '400px'
			},
			double: {
				type: Boolean,
				default: true
			},
			sure: {
				type: Function,
			},
			close: {
				type: Function
			},
			isShow: {
				type: Boolean,
				default: false
			},
			bgcolor: {
				type: String,
				default: 'rgba(0,0,0,0.3)'
			},
			sureBt: {
				type: String,
				default: '确定'
			},
			styles: {
				type: Object
			},
			sureClose: {
				type: Boolean,
				default: false
			}
		},
		data () {
			return {}
		},
		ready () {

		},
		methods:{
			Close () {
				this.isShow = false
				this.btNum = 2
			},
			Sure () {
				this.sure()
				if(this.sureClose){
					this.isShow = false
				}

				this.btNum = 1
			}
		}

	}
</script>

<style lang="less" scoped>
	.fixed {
		position: fixed;
	    top: 0;
	    right: 0;
	    left: 0;
	    bottom: 0;
	}
	.modal-mask{
		transition: 1s ease-in-out;
		.mask{
			.fixed();
		    background-color: #373737;
		    background-color: rgba(55,55,55,.6);
		    height: 100%;
		    z-index: 1000;
		    display: block;
		}
		.modal-wrap{
			-webkit-user-select: none;
			-moz-user-select: none;
		    .fixed();
		    overflow: auto;
		    z-index: 1000;
		    -webkit-overflow-scrolling: touch;
		    outline: 0;
		}
		.modal-box{
			position: relative;
			width: 400px;
			border-radius: 5px;
			background: #ffffff;
			margin: 0 auto;
			margin-top: 200px;
			.modal-con{

			}
			.modal-hader{
				padding: 10px 20px;
				border-bottom: 1px solid #e7e7e7;
				color: #999999;
				h3{
					font-size: 16px;
					span{
						float: right;
					}
				}
			}
			.modal-body{
				padding: 20px;
				border-bottom: 1px solid #e7e7e7;
				text-align: center;
				font-size: 14px;
			}
			.modal-footer{
				border-radius: 5px;
				padding: 10px 20px;
				text-align: right;
				button{
					border-radius: 5px;
					padding: 5px 10px;
					background: #ffffff;
					border: 1px solid #e7e7e7;
					color: #aaaaaa;
					&:first-child{
						background:#2db7f5;
						border: 1px solid #2db7f5;
						color: #ffffff;
					}
				}
			}
			.close-x{cursor: pointer}
		}
	}
</style>
