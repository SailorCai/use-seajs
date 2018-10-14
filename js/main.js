define(function(require, exports, module){
    var popModule = require('./pop.js');    //该方法没有回调，传入第二个参数会导致模块不能引入
    var a = '1';
    console.log(a);
    function test(){
        console.log('now you are testing');
    };
    popModule.pop();
    //console.log(b);   此处报错，说明pop模块下的变量是私有变量
});