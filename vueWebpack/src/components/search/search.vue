<template>
	<div class="bg_ff pad_20">
		<div class="dis_flex_left ">
			<div class="bg_f0f0f6 bor_rad flex_2">
				<i class="iconfont list-icon ico-sousuo ft_cor_81e298 ft_30" ></i>
				<input type="text" class="flex_2 bg_f0f0f6 input_search" :value="search_text" :ref="refs" @focus="focus" @change="change" @blur="blur" placeholder="请输入搜索内容" />
			</div>
			<div v-show="cancel" @click="search" class="cancel">搜索</div>
		</div>
	</div>
</template>

<script>
	export default{
		props:{
			search_text:{
				type:String,
				default:''
			},
			refs:{
				type:String,
				default:''
			},
			cancel:{
				type:Boolean,
				default:false
			}
		},
		data(){
			return{
				cancel:true,
			}
		},
		created(){
			
		},
		methods:{
			blur(){
				this.$emit('blur')
			},
			focus(){
				this.$emit('focus')
			},
			change(){
				this.$emit('change')
			},
			search(){
				this.$emit('search', false)
			}
		},
	}
</script>

<style lang="">
    @import "../../css/e_min.css"
</style>
<style type="text/css">
	.iconfont{
		padding:0 10px;
		font-size: 40px;
	}
	.input_search{
		height: 70px;
		padding: 0 3px;
	}
	.cancel{
		padding-left:20px;
	}
</style>