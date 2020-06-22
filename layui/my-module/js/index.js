/**
  项目JS主入口
  以依赖layui的layer和form模块为例
**/
layui.define(['layer', 'form'], function (exports) {

  var obj = {
    index:function(i=123){
      return `你传的是${i}`
    }
  }
  exports('index',obj); //注意，这里是模块输出的核心，模块名必须和use时的模块名一致
});