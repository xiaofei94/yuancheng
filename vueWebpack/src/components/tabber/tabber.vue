<template>
    <div class="dis_flex fixed_bot">
        <!-- <div class="flex_1">
            <i class="iconfont ico-shouye"></i>
            <div>首页</div>
        </div>
        <div class="flex_1">
            <i class="iconfont ico-dingdan"></i>
            <div>订单</div>
        </div>
        <div class="flex_1">
            <i class="iconfont ico-quan"></i>
            <div>卡券</div>
        </div>
        <div class="flex_1">
            <i class="iconfont ico-user"></i>
            <div>我的</div>
        </div> -->
        <div class="flex_1 text_cont" v-for="(ico, index) in icos">
            <div :class="[ico.titlecolor]" @click="tabber_click(index)">
                <i :class="['iconfont',ico.font]"></i>
                <div class="">{{ico.text}}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        selectedIndex:{
            type:[String, Number],
            default(){
                return 0
            }
        }
    },
    data(){
        return{
            icos:[{
                titlecolor:'cor_fc7944',
                font:'ico-shouye',
                text:"首页"
            },
            {
                titlecolor:'cor_666',
                font:'ico-dingdan',
                text:"订单"
            },
            {
                titlecolor:'cor_666',
                font:'ico-quan',
                text:"卡券"
            },
            {
                titlecolor:'cor_666',
                font:'ico-user',
                text:"我的"
            }
            ]
        }
    },
    created(){
        this.tabber_click(this.selectedIndex)
    },
    methods:{
        tabber_click(index){
            console.log(index)
            this.$emit('tabber_click',{index})
            sessionStorage.setItem('index', index)
            for(var i = 0; i < this.icos.length; i++){
                if(i == index){
                    this.icos[index].titlecolor="cor_fc7944"
                    
                }else{
                    this.icos[i].titlecolor="cor_666"
                }
            }
        },
    }
    
}
</script>

<style lang="less">
    .dis_flex{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
    }
    .fixed_bot{
        width: 100%;
        background: #fff;
        height: 96px;
        position: fixed;
        bottom: 0;
        left: 0;
        z-index: 110;
    }
    .flex_1{
        flex:1;
    }
    .text_cont{
        text-align: center;
    }
    .cor_fc7944{
        color:#fc7944;
    }
    .cor_666{
        color: #666;
    }
</style>