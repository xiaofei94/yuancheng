<template>
    <div class="bg_f0f0f6">
    	<myscroll :pullup="pullup" :Downshow="Downshow" :Dshow="Dshow" @scrolldown="pages">
    	<div class="" v-for="(item, index) in orderlist" :key="index" style="margin-bottom: 10px;">
    		<div class="bg_ff bor_bot dis_flex_left bg_ff text_left line_height_100 pad_lf_rt_10" >
				<div class="flex_2 dis_flex_left bg_ff text_left">
					<div class="mar_rt">
						<i class="iconfont list-icon ico-xiche ft_cor_81e298 ft_30" ></i>
					</div>
					<div class="flex_2"><span class="ellipsis ft_30" >{{item.PROV_NAME}}</span></div>
				</div>
				<div class="list-right daohan">
					<div class="right-detail">
						<span class="ft_cor_fc7944 ft_26" >导航</span>
					</div>
				</div>
			</div>
			<div class="clearfix dis_flex_left bg_ff text_left pad_20" >
				<div class="car-list-box flex_2 text_left" >
					<div class="dis_flex_left bg_ff text_left text_top mar_bot_10 mar_top_10">
						<span class="fl ft_28" >服务时间：</span>
						<span class="fl ft_cor_66 flex_2 ft_28" >{{item.BOOK_CODE_USED_TIME}}</span>
					</div>
					<div class="dis_flex_left bg_ff text_left text_top mar_bot_10 mar_top_10" >
						<span class="fl ft_28" >下单时间：</span>
						<span class="flex_2 ft_cor_66 ft_28" >{{item.CRT_DATE}}</span>
					</div>
					<div class="dis_flex_left bg_ff text_left text_top mar_bot_10 mar_top_10">
						<span class="fl ft_28" >服务项目：</span>
						<div class="flex_2">
							<div class="" style="flex-wrap: wrap;">
								<span class="fl ft_cor_66 ft_28" >{{item.TASK_CONTENT}}</span>
							</div>
						</div>
					</div>
				</div>
				<div class="right-detail dis_flex_right text_rt">
					<div class="appraise pos_re">
						<div class="text_rt_cont state_img_end" style="height: 40px;margin-right: 5px;">
							<span class="rt_alig ft_26" >{{item.ORDER_STATE_NAME}}</span>
							<span class="rt_alig ft_26" >￥{{item.PAYED_FEE}}</span>
						</div>
						<!--<div class="pos_ab dian" style="right:0px;top:0px;width:12px;height:12px;border-radius:6px;" v-if="item.CUST_VIEWED==='no'"></div>-->
					</div>
					<i class="right-icon iconfont ico-prve-right ft_cor_AFB5C0 ft_26" ></i>
				</div>
			</div>
        </div>
        </myscroll>
        <div class="" style="height: 46px;"></div>
		<loading v-if="loading"></loading>
    </div>
</template>
<script>
import { list } from "../../api/http"
import myscroll from "../../components/Bscroll/index"
import loading from "../../components/loading/loading"
export default {
    data(){
    	return{
    		orderlist:[],
    		list:[],
    		page:'1',
    		pullup:true,
    		Downshow:false,
    		Dshow:false,
			scrollY:0,
			loading:true
    	}
    },
    created(){
    	this.api_req()
    },
    methods:{
    	api_req(){
    		list(this.page, (res) => {
				this.loading=false
	    		console.log(res)
	    		this.orderlist=res.details
//	    		this.orderlist=this.orderlist.concat(this.list)
//	    		console.log(this.orderlist+"0000")
				this.Downshow=true
	    	})
    	},													
    	pages(){
//  		setTimeout(() => {
    			if(this.Downshow){
    				
    			
//  			this.Downshow=false
//	    		let page=this.page+1;
	    		list(++this.page, (res) => {
	    			this.Downshow=false
		    		this.orderlist = this.orderlist.concat(res.details);
		    		this.Downshow=true
//					this.page++;
		    		console.log(this.orderlist)
		    		if(res.details.length < 10) {
		    			this.Downshow=false
						console.log("到底了")
						this.Dshow=true
					}
		    	})
	    		}
//  		})
    	}
    },
    components:{
		myscroll,
		loading
    },
    
}
</script>
<style lang="">
    @import "../../css/e_min.css"
</style>