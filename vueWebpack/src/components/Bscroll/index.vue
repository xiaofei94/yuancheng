<template>
    <div class="wrapper" ref="list">
        <div class="content">
        	<div v-if="UPshow" class="text_hei_cont">上拉刷新</div>
            <slot></slot>
            <div v-if="Downshow" class="text_hei_cont">下垃加载</div>
            <div v-if="Dshow" class="text_hei_cont">到底了</div>
        </div>
    </div>
</template>

<script>
import BScroll from "better-scroll"
export default {
	props: {
		pullup:{
			type:Boolean,
			default:false
		},
		Downshow:{
			type:Boolean,
			default:false
		},
		Dshow:{
			type:Boolean,
			default:false
		}
	},
    data(){
    	return{
    		scrollY:0,
    		UPshow:false,
//  		Downshow:false
    	}
    },
    mounted(){
    	
//  	this.$nextTick(()=>{
	setTimeout(()=>{
    		if(!this.scroll){
    			this.scroll = new BScroll(this.$refs.list, {
	            scrollY: true,
	            scrollX: false,
	            click:true,
	            probeType:1,
	            taps: true,
	            mouseWheel: {  //鼠标滚轮
				 speed: 20,
				 invert: false,
				 easeTime: 300
				},
				pullDownRefresh: { //下拉
				  threshold: 30,
				  stop: 0
				},
	            pullUpLoad: { //上拉
				  threshold: 30
				}
	        })
	        console.log(this.scroll)
    		}else if(!this.$refs.list){
    			return
    		}else{
    			this.scroll.refresh()
    		}
    		this.change()
    	})
    },
    methods:{
    	change(){
//  		this.scroll.on("pullingDown",function(){
//  			console.log("下拉")
//  			this.scroll.finishPullDown();
//  			this.show=true
//  			console.log(this.show)
//  		})
//  		this.scroll.on("pullingUp",function(){
//  			console.log("上拉")
//  			this.scroll.finishPullUp();
//  		})
//  		this.scroll.refresh()
			
		if(this.pullup){
//			this.scroll.on('scroll', (pos)=>{
//				this.scrollY = Math.abs(Math.round(pos.y)) 
//				console.log(pos.y)
//				console.log(this.scroll.maxScrollY)
//				if((this.scroll.maxScrollY+300) >= pos.y) {
//					
//			    	setTimeout(function () {
//			    		console.log("上拉")
//			    	})
//			    	this.$emit('scrolldown')
//				}
//				
//			})
//			this.scroll.refresh()
//			this.scroll.on('touchEnd', (pos) => {
//				if (pos.y > 30) {
//					setTimeout(() => {
//						_this.UPshow=true
//						console.log("下拉")
//					})
//				}
////				if(this.scroll.maxScrollY > (pos.y + 30)) {
//				if((this.scroll.maxScrollY+300) > pos.y) {
//					
//			    	setTimeout(function () {
//			    		console.log("上拉")
//			    	})
//			    	this.$emit('scrolldown')
//				}
//			})
			this.scroll.on('scrollEnd', (pos) => {
				this.scroll.refresh();
			})
		}
		var _this=this;
			 this.scroll.on("pullingUp",function(){    //上拉加载事件
		        console.log('加载ajax数据');
		       
		        this.finishPullUp();//可以多次执行上拉加载，没有这段代码上拉只会加载一次
		        _this.$emit('scrolldown');
		    });
//		    this.scroll.on("pullingDown",function(){  //下拉刷新事件
//		        console.log('下拉刷新数据');
//		        this.finishPullDown()//可以多次执行下拉刷新，没有这段代码下只会刷新一次
//		    });
//		    this.scroll.refresh();
    	}
    },
//  watch:{
//  	scrollY(){
//  		
//  	}
//  }
}
</script>

<style lang="">
    .wrapper {
        position: fixed;
        top:96px;
        left: 0;
        width: 100%;
        height: calc( 100% - 186px );
        overflow: hidden;
        background: #f0f0f6;
    }
    .text_hei_cont{
    	text-align: center;
    	height: 100px;
    	line-height: 100px;
    }
</style>