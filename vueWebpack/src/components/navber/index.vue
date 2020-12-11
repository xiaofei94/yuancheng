<template>
    <div class="a">
        <Header title="首页"></Header>
        <!-- <slot></slot> -->
        <index v-if="this.page==0"></index>
        <order v-if="this.page==1"></order>
        <card v-if="this.page==2"></card>
        <my v-if="this.page==3"></my>
        <!-- <router-link :to="{name:'my'}">去list</!--> -->
        <!-- <router-view></router-view> -->
        <tabber @tabber_click="click" :selectedIndex="page"></tabber>
    </div>
</template>
<script>
import Header from '../../components/header'
import tabber from '../../components/tabber/tabber'
import index from '../../page/list/list.vue'
import order from '../../page/order/order.vue'
import card from '../../page/card/card.vue'
import my from '../../page/my/my.vue'
import {messageNotifyBO} from '../../api/http'
export default {
    data(){
        return{
            page:sessionStorage.getItem('page') || this.$route.params.code,
            sto:''
        }
    },
    methods:{
        click(e){
            this.page=e.index
            sessionStorage.setItem('page', e.index)
            if(!sessionStorage.getItem('token') && (e.index != 0)){
                this.$router.push({path:'login'})
            }
            // if(e.index==0){
            //     this.sto=index
            // }else if(e.index==1){
            //     this.sto=order
            // }else if(e.index==2){
            //     this.sto=card
            // }else if(e.index==3){
            //     this.sto=my
            // }
        }
    },
    components:{
        Header,
        tabber,
        index,
        order,
        card,
        my
    },
    created() {
        console.log(this.$route.params.page)
        if(this.$route.params.code){
            this.page=0
        }
        messageNotifyBO((res)=>{
            console.log(res)
        })
    },
}
</script>
<style lang="">
    
</style>