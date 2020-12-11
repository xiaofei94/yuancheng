<template>
	<div class="componentsA">
		<!--<p class="title">组件A</p>-->
      <!--<P class="titleName">餐馆名称：{{resturantName}}</P>-->
      <!--<P class="titleName">餐馆名称：{{resturantName}}</P>-->
      <div>
            <!-- 点击修改 为 A 餐馆 -->
          <button class="btn" @click="clickA">修改为A餐馆</button>
      </div>
      <div class="marTop">
          <button class="btn" @click="toB">跳转到B页面</button>
      </div>
	</div>
</template>

<script>
	export default {
		props:{
			resturantName:{
				type:String,
				default:''
			}
		},
		methods:{
			clickA(){
				this.$emit('modifyAName');
			},
			toB(){
				this.$emit("trunToB")
			}
		}
	}
</script>

<style>
	.title,.titleName{
        /*color: blue;*/
        font-size: 20px;
    }
    .btn{
        width: 160px;
        height: 40px;
        background-color: #0682c3;
        border: none;
        outline: none;
        color: #ffffff;
        border-radius: 4px;
    }
    .marTop{
        margin-top: 20px;
    }
</style>