<template>
	<div style="width:100%;height:100%;background:#f0f0f6;">
		<div class="header">
		<Header title="首页"></Header>
		</div>
		<!--<div class="dis_flex text_left bg_ff pad_20 pos_re">
			<div class="" style="width: 20px;margin-right: 10px;">
				<div class="pos_ab ft_cor_fc7944" style="top: 30%;left: 4%;width: 20px;">
					<radius></radius>
				</div>
			</div>
			<img class="mar_rt" style="width: 20%;" src="../../../build/logo.png"/>
			<div class="flex_2">
				<div class="">标题</div>
				<div class="">介绍</div>
				<div class="dis_flex_left">
					<div class="ft_cor_fc7944 ft_wei" >{{Price}}</div>
					<div class="dis_flex_left h60 bor_cor_66 bor_red_3" style="border-width: 1px;">
				      <div @click="add_lf" class="add_lf ft_24 h60 cor_66 state_img pad_10">—</div>
				      <div class="add_number ft_28 h60 state_img pad_10 bor_rt_cc bor_lf">{{shpNumber}}</div>
				      <div @click="add_rt" class="add_rt ft_28 h60 cor_66 state_img pad_10">＋</div>
				    </div>
			    </div>
			</div>
		</div>-->
		<Scroller class="">
			<div v-for="(shoplists, index) in shoplist" class="mar_bot">
				<div class="dis_flex_left text_left bg_ff pad_20 bor_bot ft_cor_red">
					<div @click="checked1(shoplists)" class="dis_flex_left" style="width: 20px;height:60px;margin-right: 10px;">
						<img v-if="!shoplists.show" class="" style="" src="../../assets/radius@2x.png"/>
						<img v-if="shoplists.show" class="" style="" src="../../assets/radius_checked@2x.png"/>
					</div>
					{{shoplists.shopName}}
				</div>
				
				<div @click="godetils(shoplists, shop)" v-for="(shop, i) in shoplists.cartlist" keys="i" class="dis_flex text_left bg_ff pad_20 pos_re">
					<div @click="checked(shop, shoplists)" class="dis_flex_left" style="width: 20px;height:60px;margin-right: 10px;">
						<img v-if="!shop.show" class="" style="" src="../../assets/radius@2x.png"/>
						<img v-if="shop.show" class="" style="" src="../../assets/radius_checked@2x.png"/>
					</div>
					<img class="mar_rt" style="width: 20%;" :src="shop.defaultPic"/>
					<div class="flex_2">
						<div class="ft_30 ft_cor_00 ft_wei">{{shop.productName}}</div>
						<div class="ft_24 ft_cor_66 mar_top_10">{{shop.color}}</div>
						<div class="dis_flex_left">
							<div class="ft_cor_fc7944 ft_wei" >{{shop.price}}</div>
							<div class="dis_flex_left h60 bor_cor_66 bor_red_3" style="border-width: 1px;">
						      <div @click="add_lf(shop)" class="add_lf ft_24 h60 cor_66 state_img pad_lf_rt_10">—</div>
						      <div class="add_number ft_28 h60 state_img bor_rt_cc bor_lf pad_lf_rt">{{shop.count}}</div>
						      <div @click="add_rt(shop)" class="add_rt ft_28 h60 cor_66 state_img pad_lf_rt_10">＋</div>
						    </div>
					    </div>
					</div>
				</div>
			</div>
		</Scroller>
		<div class="h_100 bg_ff fixed_fd bor_top dis_flex_left">
			<div @click="allchecked" class="dis_flex_left" style="width: 20px;height:60px;margin-right: 10px;">
				<img v-if="!isshow" class="" style="" src="../../assets/radius@2x.png"/>
				<img v-if="isshow" class="" style="" src="../../assets/radius_checked@2x.png"/>
			</div>
			<div class="">总计：<span class="ft_cor_fc7944 ft_wei ft_32">￥{{totalPrice}}</span></div>
		</div>
	</div>
</template>

<script>
	import header from "../../components/header"
	import radius from "../../components/radius/radius"
	import scroller from "../../components/Bscroll"
//	import axios from '../../api/index'
	import axios from 'axios'
	import utils from "../../api/utils"
	const jsonurl =require("@/js/data/shop.json")
	export default {
		data(){
			return{
				radiusshow:true,
				shpNumber:1,
				Price:129.9,
//				isshow:true,
				shoplist:[]
//				totalPrice:""
			}
		},
		components:{
			Header:header,
			Radius:radius,
			Scroller:scroller
		},
		created(){
			axios({
                type:"GET", 
				url:"http://192.168.1.102:8181/static/shop.json", 
				dataType:"json", 
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                }
            })
			.then(res=>{
				this.shoplist=res.data.orderData
				console.log(this.shoplist)
				setTimeout(this.check(this.shoplist), 100)
				console.log(this.isshow+"是这个")
//				this.shoplist = JSON.parse(JSON.stringify(this.shoplist))
				this.shoplist=utils.deepClone(this.shoplist)
				console.log(this.shoplist)
            })
			
		},
		mounted(){
			
		},
		methods:{
			godetils(shoplists, shop){
				let newlist={
						shopId: shoplists.shopId,
						shopName: shoplists.shopName,
						show: shoplists.show,
						cartlist:{}
				}
				utils.deepClones(newlist.cartlist, shop)
//				shoplists.cartlist=shop
				console.log(newlist)
				this.$store.commit("shoplist", newlist)
				console.log(this.$store.state.shoplist)
				this.$router.push({path:'goodsdetils'})
			},
			check(shoplist){
				for(let i=0;i<shoplist.length;i++){
					shoplist[i].show=false
					for(let j=0;j<shoplist[i].cartlist.length;j++){
						shoplist[i].cartlist[j].show=false
					}
				}
			},
			allchecked(){
				this.isshow=!this.isshow
				console.log(this.isshow)
				this.shoplist.map(item => {
					item.show=this.isshow
					item.cartlist.map(item => item.show = this.isshow)
				})
//				this.shoplist = JSON.parse(JSON.stringify(this.shoplist))
				this.shoplist=utils.deepClone(this.shoplist)
			},
			checked1(shop){
				shop.show=!shop.show
				for(let i=0;i<shop.cartlist.length;i++){
						shop.cartlist[i].show=shop.show
					}
//				this.shoplist = JSON.parse(JSON.stringify(this.shoplist))
				this.shoplist=utils.deepClone(this.shoplist)
			},
			checked(shop, shoplists){
				shop.show=!shop.show
			var ss=shoplists.cartlist.every(e=>e.show)
			shoplists.show = ss ? true:false
//				utils.deepClone(list, this.shoplist)
//				this.shoplist = JSON.parse(JSON.stringify(this.shoplist))
				this.shoplist=utils.deepClone(this.shoplist)
			},
			add_rt(shop){
				shop.count++
			},
			add_lf(shop){
				shop.count>0?shop.count--:console.log("数量不足")
			},
			loop(arr){
				for(let i=0;i<arr.length;i++){
					
				}
			}
		},
		computed:{
			totalPrice(){
				let num=0,
				 shoplist=this.shoplist;
				for(let i=0;i<shoplist.length;i++){
					for(let j=0;j<shoplist[i].cartlist.length;j++){
						if(shoplist[i].cartlist[j].show==true){
							num+=shoplist[i].cartlist[j].count*shoplist[i].cartlist[j].price
						}
					}
				}
				return num
//				return Math.floor(this.shpNumber*this.Price*100)/100
			},
			isshow:{
				get(){
					var ii= this.shoplist.every(e => e.show)
					return ii? true:false
				},
				set(params){
					this.shoplist.map(item => item.show=params)
				}
			}
		},
		watch:{
//			shpNumber(){
//				if(this.shpNumber>4){
//					return this.Price=229.9
//				}else{
//					return this.Price=129.9
//				}
//			}
//			isshow(){
//				var ii=this.shoplist.every(e=>!e.show)
//				if(ii){
//					this.isshow =false
//					console.log("变了")
//				}else{
//					this.isshow =true
//					console.log("没变")
//				}
////				return this.shoplist = JSON.parse(JSON.stringify(this.shoplist))
////				return this.isshow = ii ? false : true
////				console.log(this.show)
//			},
//			shoplist(){
//				return this.shoplist
//			}
		}
	}
</script>
<style>
	@import url("../../css/e_min.css");
	.header{
		height: 100px;
	}
	img{
		width: 100%;
	}
	.h_100{
		width: 100%;
		height: 100px;
		padding: 0 20px;
	}
	.radius{
		width: 40px;
		height: 40px;
	}
	.h60{
		height: 50px;
	}
	.state_img{
		display: flex;
	}
</style>