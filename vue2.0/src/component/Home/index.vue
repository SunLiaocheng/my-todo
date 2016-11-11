<template>
	<div>
		<transition name="bounce">
			<div v-if="show" @click="showModal()">
				HELLO WORLD !!!
			</div>
		</transition>
		<div>
			<vTable :data-source="t_json.dataSource" :columns="t_json.columns">
				<div :class="Math.random()">gg</div>
			</vTable>
		</div>
		<Modal :is-show="modal.isShow" >
			<div>
				<h3>2222</h3>
				<p>sssss</p>
			</div>
		</Modal>
	</div>
	
</template>

<script>
	import { mapGetters } from 'vuex'
	import vTable from '../../common/Table/table.vue'
	import Modal from '../../common/Modal/modal.vue'

	export default {
		computed: {
			...mapGetters({
				
			})
		},
		components: {
			vTable,
			Modal
		},
		data () {
			return{
				show: true,
				t_json:{
					dataSource:[
						{
							name: '1',
							age: '1',
							weight: '1',
							height: '1',
						},
						{
							name: '2',
							age: '2',
							weight: '2',
							height: '2',
						}
					],
					columns:[
						'name',
						'age',
						'weight',
						'height',
						{
							name: 'todo',
							slot: `<div>
										<span >doit</span>
										<span>del</span>
									</div>`,
							ts: `age`
								
									
						}
					]
				},
				modal:{
					isShow: false 
				}
			}
		},
		methods:{
			showModal () {
				this.modal.isShow = true
			}
		}
	}
</script>

<style>
	.bounce-enter-active {
	  animation: bounce-in .5s;
	}
	.bounce-leave-active {
	  animation: bounce-out .5s;
	}
	@keyframes bounce-in {
	  0% {
	    transform: scale(0);
	    opacity: 0;
	  }
	  50% {
	    transform: scale(1.5);
	    opacity: 0.5;
	  }
	  100% {
	    transform: scale(1);
	    opacity: 1;
	  }
	}
	@keyframes bounce-out {
	  0% {
	    transform: scale(1);
	    opacity: 1;
	  }
	  50% {
	    transform: scale(0.5);
	    opacity: 0.5;
	  }
	  100% {
	    transform: scale(0);
	    opacity: 0;
	  }
	}
</style>

