<template>
	<div @click="radius" class="radius ft_cor_fc7944 mar_rt">
		<img v-if="radiusshow" class="" style="" src="../../assets/radius@2x.png"/>
		<img v-if="!radiusshow" class="" style="" src="../../assets/radius_checked@2x.png"/>
	</div>
</template>

<script>
	export default{
		props:{
			show:{
				type:Boolean,
				default:true
			}
		},
		data(){
			return{
				radiusshow:true
			}
		},
		methods:{
			radius(){
				this.radiusshow=!this.radiusshow
			},
//			checked(){
//				this.$emit('checked', this.show)
//			}
		},
		watch:{
//			show(){
//				 handler(newValue, oldValue) {
//			        this.params.wgDate = newValue.wgDate;
//			        this.params.endDate = newValue.endDate;
//			        this.init();
//			      },
//			      deep: true
//
//			}
		}
	}
</script>

<style>
</style>