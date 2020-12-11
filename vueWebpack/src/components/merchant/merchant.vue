<template>
    <div class="dis_left bg_ff mb_10 pad_10">
        <div class="img_lf mar_rt">
            <img v-lazy="urlsrc" alt="">
        </div>
        <div class="flex_2" >
            <h4>{{PROV_NAME}}</h4>
            <div class="dis_left mt_5" >
               <div class="" style="color:#666;margin-right: 6px;"><span>评分</span><span>{{REVIEW_POINT}}</span></div> 
                <div class="" style="color:#666"><span>销量</span><span>{{SOLD_TOTAL}}</span></div>   
            </div>
            <div class="mt_5" ><span>1.2km</span>   {{ADDR}}</div>
        </div>
    </div>
</template>

<script>
    // import  Vuelazyload from "vue-lazyload"
    import { merchant } from "../../api/http"
    

export default {
    props:{
        urlsrc:{
            type:String,
            default:''
        },
        PROV_NAME:{
            type: String,
            default:''
        },
        ADDR:{
            type:String,
            default:''
        },
        REVIEW_POINT:{
            type:String,
            default:''
        },
        SOLD_TOTAL:{
            type:String,
            default:''
        }
    },
    data(){
        return{

        }
    },
    
    methods:{

    }
}
</script>

<style lang="less">
    .dis_left{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center
    }
    .flex_1{
        display: flex;
        flex: 1;
    }
    img{
        width: 100%;
        height: 100%;
    }
    .img_lf{
        width:150px;
        height:150px;
        border-radius: 10px;
        overflow: hidden;
    }
    .bg_ff{
        background: #fff;
    }
    .mt_10{
        margin-top: 10px;
    }
    .mt_5{
        margin-top: 5px;
    }
    .mb_10{
        margin-bottom: 10px;
    }
    .pad_10{
        padding: 20px;
    }
</style>