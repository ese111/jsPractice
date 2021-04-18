$(document).ready(function(){
    var today = new Date(); 
    var year = today.getFullYear(); // 년도
    var month = today.getMonth() + 1;  // 월

    
    $(".date").val(year+"/"+month);

var lastDate = new Date(today.getFullYear(),today.getMonth()+1,0);
var firstDay = new Date(today.getFullYear(), today.getMonth(), 1);
var day1 = firstDay.getDay();
var cnt = 1;   
    
for(var i=0; i<6; i++){
    $("#cal").append("<div class='week"+i+"'></div>");
    console.log("week "+i+" creat!")            
    for(var j=0; j<7; j++){
        $(".week"+i).append("<div class='day"+j+"'> </div>");
        console.log("day "+j+" creat!")
        if(j==day1&&cnt<=lastDate.getDate()){
            $(".day"+j).text(cnt); 
            console.log(day1);                  
            cnt++;
            day1++; 
        }                                       
    };
    day1 = 0;
};

// for(var i=0; i<6; i++){
//     for(var j=0; j<7; j++){
//         
//     };
//      
// };
    
});
