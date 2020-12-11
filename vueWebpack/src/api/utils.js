const utils = {
//	深拷贝
	deepClones: function(newlist, obj){
		for(let key in obj){
			if(obj[key] && typeof obj[key] == "Array"){
				newlist[key]=[];
				this.deepClones(newlist[key], obj[key])
			}else if(obj[key] && typeof obj[key] == "object"){
				newlist[key]={};
				this.deepClones(newlist[key], obj[key])
			}else{
			 	newlist[key]=obj[key];
			}
		}
	},
	deepClone:function(obj){
	    let objClone = Array.isArray(obj)?[]:{};
	    if(obj && typeof obj==="object"){
	        for(let key in obj){
	            if(obj.hasOwnProperty(key)){
	                //判断ojb子元素是否为对象，如果是，递归复制
	                if(obj[key] && typeof obj[key] ==="object"){
	                    objClone[key] = this.deepClone(obj[key]);
	                }else{
	                    //如果不是，简单复制
	                    objClone[key] = obj[key];
	                }
	            }
	        }
	    }
	    return objClone;
	}    
}
export default utils;
