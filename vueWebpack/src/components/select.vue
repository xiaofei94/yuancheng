<template>
    <select id="addressJs" class="select2">  
	    <option value="" selected="selected">请选择地区</option>  
	    <option v-for="item in addrOptions" :key="item.value":value="item.value">{{item.label}}</option>
	</select> 
</template>
<script>
export default {
	data() {
		return {
	        addrOptions: [  
	            {value: '0',label: '上海'}, 
				{value: '1',label: '福州'},
				{value: '2',label: '南平'}, 
				{value: '3',label: '浙江'},
				{value: '4',label: '泉州'}, 
				{value: '5',label: '厦门'},
	        ]  
	    }
	},
	mounted:function(){
//		$('#addressJs').select2({ data: this.addrOptions}).val(this.value).trigger('change').on('change', function () {  
//          console.log(this.value)
//      }); 
	}
}
</script>
