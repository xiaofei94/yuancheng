<template>
    <div class="">
        <div class="wrapper" ref="list">
            <div class="content">
                <div class="" v-for="(list, index) in lists" @click="aaa">
                    <merchant :urlsrc="list.PATH" :PROV_NAME="list.PROV_NAME" :ADDR="list.ADDR" :REVIEW_POINT="list.REVIEW_POINT" :SOLD_TOTAL="list.SOLD_TOTAL"></merchant>
                </div>
                <div class="" v-if="loadshow">
                    <img src="../../assets/Loading_1.gif" alt="">
                </div>
                <div class="" v-if="show">
                    <img src="../../assets/fd_img.png" alt="">
                </div>
            </div>
        </div>
        <loading v-if="loading"></loading>
    </div>
</template>

<script>
    // import  Vuelazyload from "vue-lazyload"
    import merchantlist from "../../components/merchant/merchant"
 import { getMerchants } from "../../api/http"
 import BScroll from "better-scroll"
 import loading from "../../components/loading/loading"
    

export default {
    data(){
        return{
            lists: [],
            loadshow: false,
            page: '1',
            show:false,
            loading:true
        }
    },
    components: {
        'merchant':merchantlist,
        'loading':loading
    },
    created(){
        this.getdata()
    },
    mounted(){
        this.scroll=new BScroll(this.$refs.list,{
            probeType:2,
            scrollY: true,
            click:true,
            taps: true,
            // bounce: false, //关闭回弹
            // mouseWheel: {  //鼠标滚轮
            //     speed: 200,
            //     invert: false,
            //     easeTime: 300
            // },
        })
        console.log(this.scroll)
        this.scrollload()
    },
    methods:{
        aaa(){
            this.$router.push({path:'maintain'})
        },
        getdata(){
            getMerchants(this.page, this.$store.state.defaultCar, (res) =>{
                console.log(res)
                this.loading=false
                if(res.code==0){
                    this.lists=this.lists.concat(res.details.PROV_LIST)
                    console.log(this.lists)
                    if(res.details.PROV_LIST.length<19){
                        let _this=this
                        // setTimeout(function(){
                            _this.loadshow=false
                            _this.show=true
                        // }, 50)
                    }
                    console.log(sessionStorage.getItem('token'))
                }else{
                    console.log(sessionStorage.getItem('token'))

                }
                
            })
        },
        scrollload(){
            let myscroll=this.scroll
            myscroll.on('scroll', (pos)=>{
                if(pos.y<myscroll.maxScrollY-30){
                    this.loadshow=true
                }
                // else if(pos.y<myscroll.maxScrollY-20){
                //     this.loadshow=false
                // }
            })
            // myscroll.on('scrollEnd', (pos)=>{
            //     if(this.loadshow='true'){
            //      console.log(pos.y)
            //      console.log(myscroll.maxScrollY)
            //         this.page++
            //         this.getdata()
            //     }
            // })
            myscroll.on('touchEnd', (pos)=>{
                // setTimeout:(()=>{
                // if(this.loadshow='true'){
                //     this.show=false
                // }
                if(pos.y<(myscroll.maxScrollY-30)){
                    // if(this.loadshow='true'){
                //  console.log(pos.y)
                //  console.log(myscroll.maxScrollY)
                    this.page++
                    this.getdata()
                    // }
                }
                // })
                
                
            })
        }
    }
}
</script>

<style lang="less" scoped>
    .dis_left{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center
    }
    .flex_1{
        // display: flex;
        flex: 1;
    }
    img{
        width: 100%;
        height: 100%;
    }
    .wrapper {
        position: fixed;
        top:96px;
        left: 0;
        width: 100%;
        height: calc( 100% - 190px );
        overflow: hidden;
        background: #f0f0f6;
    }
</style>