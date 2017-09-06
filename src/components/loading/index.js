const loadingComponent = require('./Loading.vue');//引入组件
const loading = {                                 //定义Vue上面有这样一个组件
	install:function(Vue){
		Vue.component("loading",loadingComponent);
	}
}
module.exports = loading;						//导出