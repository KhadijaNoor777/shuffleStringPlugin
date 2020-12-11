(function($){
    $.fn.shuffleString = function(options){

        var settings = $.extend({
            txtColor: "rgba(0,0,0)",
            fontSize: "50px",
            done: null
        }, options)

        return this.each(function(){
            //$(this).text("updated text");
            $(this).text(shuffleStr($(this).text()));

            $(this).css({
                'color': settings.txtColor,
                'font-size': settings.fontSize
            })

            if($.isFunction(settings.done)){
                settings.done.call(this);
            }

            function shuffleStr(str){
                var arr = str.split("");
                for(var i=arr.length-1; i>0; i--){
                    var val = Math.floor(Math.random() * i+1);
                    var temp = arr[i];
                    arr[i] =arr[val];
                    arr[val] = temp;
                }

                return arr.join("");
            }

        })
    }
}(jQuery));