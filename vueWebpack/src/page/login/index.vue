<template>
    <div style="width:100%;height:100%;background:#f0f0f6;">
        <Header></Header>
        <div class="" style="height:40px;width:100%"></div>
        <div @click="goindex">去首页</div>
        <!-- <Uediter :value="ueditor.value" :config="ueditor.config" ref="ue"></Uediter> -->
    <!-- <input type="button" value="显示编辑器内容（从控制台查看）" @click="returnContent"> -->
        <div class="article_list">
            <ul>
                <li v-for="i in list">
                    <time v-text="i.create_at"></time>
                <time v-text="gotime(i.create_at)"></time>
                <router-link :to="'/content/' + i.id">
                    {{ i.title }}
                </router-link>
                </li>
            </ul>               
        </div>
        <div class="" style="padding:20px">
            <div class="">
                <input placeholder="请输入账号" v-model='userid'  maxlength="11" type="text">
            </div>
            <div class="">
                <input type="text" v-model='passwed'  placeholder="请输入密码">
            </div>
        </div>
        <div class="dis_flex_cont bg_ff bor_rad" @click="goindex">  
            <div class="ft_cor_a">登陆</div>
        </div>  
    </div>
</template>
<style lang="less" scoped>
    @fc7944:#fc7944;
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .dis_flex_cont{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }
    .bor_rad{
        // border:1px solid @fc7944;
        width: 710px;
        margin: 40px 20px;
        height: 80px;
        border-radius: 20px;
    }
    .bg_ff{
        background: #fff;
    }
    .ft_cor_a{
        text-align: center;
        color: @fc7944
    }
    input{
        width: 100%;
        height: 80px;
    }
</style>
<script>
import Uediter from '../../components/us.vue'
import Header from '../../components/header'
import {login} from '../../api/http'
import axios from 'axios'
import utils from '../../api/utils'
export default {
    data() {
		return {
            imgurl:require('../../assets/login_bg.png'),
             list: [],
             dat: {
                content: '',
               
            },
            ueditor: {
                value: '编辑器默认文字',
                config: {}
            },
            userid:localStorage.getItem('userid'),
            passwed:localStorage.getItem('passwed'),
            tet:{}
        }
    },
    components:{
        Uediter,
        Header
    },
    created () {
           axios('../../../src/js/data/jnd_dl.json',{
           	method: "get",
           		headers: {
                    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                },
           }).then( res => {
           console.log(res)
           })

        //  login('14000000005', '123456', (res) => {
        //     console.log(res)
        //     this.$router.push({path:'index'})
        // })

        // this.gotime()
        // this.getData()
        function ass(){
        	setTimeout(function(){
        		console.log("helloass")
        	}, 100)
        	
        }
        async function as(){
        	
        	await(ass())
        	console.log("helloas")
        }
//      console.log(ass())
//      console.log(as())
        as()
        let testObj = {
		    name:"weiqiujuan",
		    sex:"girl",
		    age:22,
		    favorite: "play",
		    family: {brother: "son", mother: "haha", father: "heihei"}
		};
//		this.deepClone(this.tet, testObj)
		utils.deepClone(this.tet, testObj)
//		Object.assign(this.tet, testObj)
		testObj.family.brother=22;
		console.log(this.tet, testObj);
    },
    methods:{
//  	deepClone (newlist, obj) {
//			for(let key in obj){
//				if(obj[key] && typeof obj[key] == "Array"){
//					newlist[key]=[];
//					this.deepClone(newlist[key], obj[key])
//				}else if(obj[key] && typeof obj[key] == "object"){
//					newlist[key]={};
//					this.deepClone(newlist[key], obj[key])
//				}else{
//				 	newlist[key]=obj[key];
//				}
//			}
//		},
        goindex(){
            login(this.userid,this.passwed,(res)=>{
                // console.log(this.userid)
                console.log(res)
                if(res.code == 0){
                    console.log(res)
                       window.sessionStorage.setItem('userid', this.userid)
//                  this.$store.commit('userid', this.userid)
                    window.sessionStorage.setItem('token', res.details.TOKEN)
                    window.sessionStorage.setItem('DEFAULT_ADDR', res.details.DEFAULT_ADDR)
                    // window.sessionStorage.setItem('DEFAULT_CAR', res.details.DEFAULT_CAR)
                    this.$store.commit('defaultCar',res.details.DEFAULT_CAR);
                    this.$router.push({name:'index',params:{name:'page',code:'0'}})
                }
            })
            // this.$router.push({path:'index'})
        },
        returnContent () {
            this.dat.content = this.$refs.ue.getUEContent()
            console.log(this.dat.content)
        },
        gotime(str){
            let now = new Date().getTime()
            console.log(now)
            let oldTime = new Date(str).getTime()
            console.log(oldTime)
            let difference = now - oldTime
            console.log(difference)
            let result = ''
            let minute = 1000 * 60
            let hour = minute * 60
            let day = hour * 24
            let month = day * 30
            let year = month * 12
            let _year = difference / year
            let _month = difference / month
            let _week = difference / (7 * day)
            let _day = difference / day
            let _hour = difference / hour
            let _min = difference / minute

            if (_year >= 1) {
            result = '发表于 ' + ~~(_year) + ' 年前'
            } else if (_month >= 1) {
            result = '发表于 ' + ~~(_month) + ' 个月前'
            } else if (_week >= 1) {
            result = '发表于 ' + ~~(_week) + ' 周前'
            } else if (_day >= 1) {
            result = '发表于 ' + ~~(_day) + ' 天前'
            } else if (_hour >= 1) {
            result = '发表于 ' + ~~(_hour) + ' 个小时前'
            } else if (_min >= 1) {
            result = '发表于 ' + ~~(_min) + ' 分钟前'
            } else {
            result = '刚刚'
            }
            return result
        },
        getData () {
            this.$api.get('topics', null, r => {
                this.list = r.data
            })
        }
    },
}
</script>