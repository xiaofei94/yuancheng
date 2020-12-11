<template>
	<div class="">
		<Header title="详情"></Header>
		<scroller>
			<div class="img">
				<img src="../../../dist/static/img/login_bg.31d7ffd.png"/>
			</div>
		</scroller>
		<div class="h_100 bg_ff fixed_fd bor_top dis_flex_right">
			<div @click="addcars" class="ft_corbg_fc7944 ft_cor_fff dis_flex_left" style="height: 100%;">加入购物车</div>
		</div>
	</div>
</template>

<script>
	import Header from "../../components/header"
	import Scroller from "../../components/Bscroll"
	export default {
		data(){
			return{
				list:[]
			}
		},
		created(){
			this.list = this.$store.state.shoplist
		},
		components:{
			Header,
			Scroller
		},
		methods:{
			addcars(){
				this.$store.commit("goodslist", this.list)
	console.log(this.list)
			}
		}
	}
</script>

<style>
	@import url("../../css/e_min.css");
	.h_100{
		width: 100%;
		height: 100px;
		padding: 0 20px;
	}
	img{
		width: 100%;
	}
</style>