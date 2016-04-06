 (function($, window,document){
           // console.log(options)  //2016/04/01 11:00:00
            //获取要显示倒计时的位置
        var pluginName = "countTime";
        var defaults ={
            endTime:"",
            countCon: ".J_countCon",
            _dPos:'.J_days',
            _hPos:'.J_hours',
            _mPos:'.J_minutes',
            _sPos:'.J_seconds',
            info:"不好意思您来晚啦"
        } 
            
        function Plugin(elements, options) {
            this.element = elements;

            this.options = $.extend({},defaults, options);

            this._defaults = defaults;
            this._name = pluginName;
            //console.log(this.options)
            this.init();
        }
        
        Plugin.prototype.init = function(){

            var that = this; //保存作用域
            var count = function(){
                var endTime = new Date(that.options.endTime);
                var now = new Date();                                                                                                                                                                              
                var leftTime = parseInt((endTime.getTime()- now.getTime())/ 1000);
                var _d = parseInt(leftTime/3600/24); //天
                var _h = parseInt((leftTime/3600)%24); //小时
                var _m = parseInt((leftTime/60)%60); //分
                var _s = parseInt(leftTime%60); //秒
                
                if(leftTime <= 0){
                    //防止本来打开的时候就已经是过时的了
                    $(that.options.countCon).html("<p>"+that.options.info+"</p>")
                }else{
                    $(that.options._dPos).html(checkTime(_d));
                    $(that.options._hPos).html(checkTime(_h));
                    $(that.options._mPos).html(checkTime(_m));
                    $(that.options._sPos).html(checkTime(_s));
                }
                return {
                        lefttime: leftTime
                    }
            }
            
            
            //首先调用一次
            count();
            
            var timer = null;
            timer = setInterval(function(){
                if(count().lefttime <= 0){  //这里会导致countTime 走一遍
                    //完成之后清空计时器
                    clearInterval(timer);
                }else{
                    count();
                }
                
            },1000)
        }
        
        //保证数字显示的是两位
        function checkTime(time){
                if(time < 10){
                    return "0"+time;
                }
                return time;
        }
            

        //实例化插件的 虽然还不太明白为什么这么写
        $.fn[pluginName] = function(options){
            console.log(this)
            return this.each(function(){
                if(!$.data(this, "plugin_" + pluginName)){
                    $.data(this, "plugin_" + pluginName, new Plugin(this, options));
                }
            })
        }

            
    })(jQuery,window, document);