
$(document).ready(function(){ 
    var today = new Date();
    var color = "rgb(0, 139, 139)";

    var logic = function(lastDate, firstDay){
        var day1 = firstDay.getDay();
        var cnt = 1;  
        var x = 0; 
        var y = 5;
        if(day1 >= 5 && lastDate.getDate() == 31){
            y=6;
        }
        for(var i=0; i<y; i++){
            $("#content").append("<div class='week "+i+"'></div>");         
            for(var j=0; j<7; j++){
                $(".week."+i).append("<div class='day "+x+"'> </div>");
                if(j==day1&&cnt<=lastDate.getDate()){
                    $(".day."+x).text(cnt); 
                    if(cnt==today.getDate() && month==today.getMonth() + 1 && year == today.getFullYear()){
                        $(".day."+x).css("background-color","#008B8B");
                    }
                    if(day1==0){
                        $(".day."+x).css("color","crimson");
                    }
                    if(day1==6){
                        $(".day."+x).css("color","forestgreen");
                    }
                    console.log("cnt = "+ cnt+"day1 = "+ day1);                  
                    cnt++;
                    day1++; 
                }; 
                x++;                                      
            };
        day1 = 0;
        };
    }
    var mouse = function(){
        $(".day").mouseenter(function(){
            if($(this).css("background-color") == color){
                $(this).css("background-color","#00FFFF");
                color = $(this).css("background-color");
            }else{ 
            $(this).css("background-color","gray");
            }
        });
        $(".day").mouseleave(function(){
            if($(this).css("background-color") == color){
                $(this).css("background-color","#008B8B");
                color = "rgb(0, 139, 139)";
            }else{   
            $(this).css("background-color","black");
            }
        });
    };

    var build = function(){
        var lastDate = new Date(today.getFullYear(),today.getMonth()+1,0);
        var firstDay = new Date(today.getFullYear(), today.getMonth(), 1);
       
        logic(lastDate, firstDay);    
    };
   
    var year = today.getFullYear(); // ??????
    var month = today.getMonth() + 1;  // ???

    $(".date").val(year+"/"+month);
   
    build();
    mouse();
   
    $(".pre-button").click(function(){
        if(month!=1){
            month--;
        }else if(month==1){
            month = 12;
            year--;
        }
        $(".date").val(year+"/"+month);
        $("#content").html("");
        var lastDate = new Date(year, month,0);
        var firstDay = new Date(year, month-1, 1);
        
        logic(lastDate, firstDay);    
        mouse();
    });

    $(".next-button").click(function(){
        if(month!=12){
            month++;
        }else if(month==12){
            month = 1;
            year++;
        }
        $(".date").val(year+"/"+month);
        $("#content").html("");

        var lastDate = new Date(year, month,0);
        var firstDay = new Date(year, month-1, 1);
       
    logic(lastDate, firstDay);     
    mouse();
    }); 
});
