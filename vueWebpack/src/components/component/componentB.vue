<template>
	<div class="componentsB">
      <P class="title">组件B</P>
      <!--<P class="titleName">餐馆名称：{{resturantName}}</P>-->
      <P class="titleName">餐馆名称：b</P>
      <div>
          <!-- 点击修改 为 B 餐馆 -->
          <button class="btn" @click="clickB">修改为B餐馆</button>
      </div>
      <div class="marTop">
          <button class="btn" @click="trunToA">跳转到A页面</button>
      </div>
 </div>
</template>

<script>
	export default {
		propes:{
			
		},
		methods:{
			clickB(){
				this.$emit('modifyBName')
			},
			ToA(){
				this.$emit('trunToA')
			}
		}
	}
</script>

<style>
	.title,.titleName{
        /*color: red;*/
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