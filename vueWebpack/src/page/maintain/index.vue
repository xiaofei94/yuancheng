<template>
    <div class="bg_ff">
        <search :search_text="search_text" :cancel="'false'" @focus="focus" @change="change" @blur="blur" :refs="'refs'"></search>
        <merchant></merchant>
    </div>
</template>

<script>
	import search from "../../components/search/search"
	import merchant from "../../components/merchant/merchant"
export default {
    data(){
        return{
			search_text:''
        }
    },
    created(){

    },
    mounted(){

    },
    watch:{
    	
    },
    components:{
    	search,merchant
    },
    methods:{
		search_txt:function(e){
			console.log(e.value)
		},
		focus(){
			console.log("获取焦点")
		},
		change(){
			console.log("输入内容")
		},
		blur(){
			console.log("失去焦点了")
		}
    },
}
</script>

<style lang="">
    
</style>