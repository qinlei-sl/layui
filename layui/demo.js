!function(){
  //单个使用
  layer.open({
    content:'干嘛',
    skin: 'demo-class',
    anim: 1,
  });
  //全局使用。即所有弹出层都默认采用，但是单个配置skin的优先级更高
  layer.config({
    skin: 'demo-class'
  })
}()