<template>
	<div class="" style="display: flex;">
	<div class="ul">
		<div class="li" @click="ul(index,item)" v-for="(item,index) in headerData">
			{{item.name}}
			<!--<div class="ol" v-if="item.show" @click.stop="ol(index,el)" v-for="(text,index) in item.list.title">{{text}}</div>-->
			<div :class="['ol',textlist.bg?'bg_fc7944':'']" v-if="item.show" @click.stop="ol(index, item)" v-for="(textlist,index) in item.list">{{textlist.title}}</div>
		</div>
	</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				headerData: [{
                    name: '导航1',
                    list: [
                    	{title:'子集',bg:true},
	                    {title:'子集',bg:false}, 
	                    {title:'子集',bg:false}, 
	                    {title:'子集',bg:false}, 
	                    {title:'子集',bg:false}
                    ],
                    show: false
                }, 
                {
                    name: '导航2',
                    list: [
                    	{title:'子集',bg:true},
	                    {title:'子集',bg:false}, 
	                    {title:'子集',bg:false}, 
	                    {title:'子集',bg:false}, 
	                    {title:'子集',bg:false}
                    ],
                    show: false
                }, 
                {
                    name: '导航3',
                    list: [
                    	{title:'子集',bg:true},
	                    {title:'子集',bg:false}, 
	                    {title:'子集',bg:false}, 
	                    {title:'子集',bg:false}, 
	                    {title:'子集',bg:false}
                    ],
                    show: false
                }, 
                {
                    name: '导航4',
                    list: [
                    	{title:'子集',bg:true},
	                    {title:'子集',bg:false}, 
	                    {title:'子集',bg:false}, 
	                    {title:'子集',bg:false}, 
	                    {title:'子集',bg:false}
                    ],
                    show: false
                }, 
                {
                    name: '导航5',
                    list: [
                    	{title:'子集',bg:false},
	                    {title:'子集',bg:false}, 
	                    {title:'子集',bg:false}, 
	                    {title:'子集',bg:false}, 
	                    {title:'子集',bg:false}
                    ],
                    show: false
                }],
//              bg:false
			}
		},
		methods:{
			ul(index, item){
//				var self=this
				this.headerData.forEach( i => {
					if (i.show !== this.headerData[index].show) {
                        i.show = false;
                    };
				})
				item.show = !item.show
				console.log("dod"+index)
			},
			ol(index, item){
				console.log(item)
				for(let i=0;i<item.list.length;i++){
					if(index==i){
						item.list[index].bg=true
					}else{
						item.list[i].bg=false
					}
				}
			}
		}
	}
</script>

<style scoped>
	.ul{
		width: 30%;
		font-size: 30px;
		/*display: flex;*/
		flex-basis:400px;
	}
	.li{
		/*height: 60px;*/
		line-height: 60px;
		padding: 20px;
		background: #ebeef5;
		/*text-align: center;*/
		
	}
	.li:hover{
		background: #f6f6f6;
	}
	.bg_fc7944{
		background: #fc7944 !important;
		color: #fff;
	}
	.ol{
		font-size: 28px;
		padding-left: 20px;
		background: #f5f7fa;
	}
	.ol:hover{
		background: #ebeef5;
	}
</style>