<template>
    <div>
        <Header title="首页"></Header>
        <div class="h50"></div>
         <div class="bg_ff">
            <div class="">
                <div class="">
                    <div class="">dfdfaaaa</div>
                    <tables></tables>
                    <selectlist></selectlist>
                    <!--v-model="sendVal"-->
                    <popup  type="danger" title="我是标题" content="我是内容" v-on:cancel="clickCancel()" @danger="clickDanger()" @confirm="clickConfirm()" dangerText="Delete"></popup>
                    <fold></fold>
                    <fold></fold>
                    <fold></fold>
                    <!--<div class="fixed_fd_auto"style="bottom: 0;width: 100%;height: 100%;z-index: 1000;">
                    	<puzzle :blockRadius="'5'" :onSuccess="click"></puzzle>
                    </div>-->
                </div>
            </div>
            
        </div>
        
        <navber>
            
        </navber>
        <!-- <router-link :to="{name:'my'}">my</router-link> -->
        <!-- <router-view></router-view> -->
    </div>
</template>
<style lang="less">
    .bg_ff{
        background: #fff;
    }
    .h50{
    	height:96px;
    }
</style>

<script>
import Header from '../../components/header'
import navber from '../../components/navber'
import componentA from '../../components/component/componentA'
import componentB from '../../components/component/componentB'
import merchant from '../../components/merchant/merchant'
import star from '../../components/component/star'
import tables from '../../components/table/tables'
import fold from '../../components/fold/fold'
import puzzle from '../../components/swiper/puzzleVerification'
import { mapGetters, mapState, mapActions } from 'vuex'
import {login, list} from '../../api/http'
import selectlist from '../../components/select'
import popup from "../../components/popup/popup"
export default {
    data(){
        return{
//			resturantName:this.$store.state.resturantName
            // token:localStorage.getItem('token')
            contText:'内容'
        }
    },
    components:{
        Header,
        navber, 
        componentA,
        componentB,
        star,
        merchant,
        tables,
        puzzle,
        selectlist,
        popup,
        fold
    },
    computed: {
 	// ...mapState([
 	// 	'token'
 	// ]),
    	...mapGetters([
            "resturantName",
            // 'token'
    	])
    },
    mounted(){
		
    },
    created(){
        //  login('14000000005', '123456', res => {
        //      this.$store.commit('token',res.details.TOKEN)
        //     console.log(res.details.TOKEN)
        // })
    
        

        const sw = function(){
           return new Promise ((resolve, reject) => {

            })
        }


        class Point{
            constructor(x,y){
                // super()
                this.x=x;
                this.y=y
            }
        }
        class Ps extends Point{
            constructor(x,y,color){
                super(x,y)
                this.color=color
            }
            tostring(){
                return this.color+''+super.tostring()
            }
        }
        var p=new Point(100,10)
        console.log(p)
        function test(){
            alert(1);//test
        }
        console.log(test.toString())

    	const people = {
		      name:"Lux",
		      age:18
		}
		const {name,age}  = people;
		console.log(`${name} --- ${age}`);
    },
    methods:{
    	...mapActions([
            'modifyAName',
            
        ]),
        click(){
        	console.log("成了")
        },
        confirmBtn(){
			console.log("弹窗确认下一步")
		},
        leftpro(){
            this.$router.go(-1);
            console.log("11")
        },
        tostar(index){
            let star_index=index+1;
            console.log('star_index')
            for(let i=star_index;i<stars.length;i++){
                this.stars[index].src=require("../../assets/xing_01.png")
            }
        }
//      modifyAName(){
//      	console.log("改名字")
//      },
//      trunToB(){
//      	console.log("跳转")
//      }
    },
    
}
</script>