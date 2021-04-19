window.addEventListener("load",function(){
    var today = new Date(); 

    var cal = document.querySelector("#cal");
    var content = document.querySelector("#content");
    
    var preButton = cal.querySelector(".pre-button");
    var nextButton = cal.querySelector(".next-button");
    var date = cal.querySelector(".date");

    var year = today.getFullYear(); // 년도
    var month = today.getMonth() + 1;  // 월
    date.value = year+" / " + month;
    build();

    function build(){    
        var lastDate = new Date(today.getFullYear(),today.getMonth()+1,0);
        var firstDay = new Date(today.getFullYear(), today.getMonth(), 1);
        var cnt = 1;
        var day1 = firstDay.getDay();
        for(var i=0; i<6; i++){
            var template = cal.querySelector("template");
            var cloneNode = document.importNode(template.content, true);
            var divs = cloneNode.querySelectorAll("div .item");
            for(var j=0; j<7; j++){
                console.log("i= "+i+" j= "+j +" day1= "+day1);
                if(j==day1&&cnt<=lastDate.getDate()){
                    divs[j].textContent = cnt;
                   console.log('cnt= '+cnt+" div= "+divs[j].textContent);
                    cnt++;
                    day1++;
                }
            };
            content.appendChild(cloneNode);
            day1 = 0;
        };
       
    };
    
    preButton.onclick = function(){
       
        $("#content").html("");
        
        if(month!=1){
            month--;
        }else if(month==1){
            month = 12;
            year--;
        }
        
        var lastDate = new Date(year,month,0);
        var firstDay = new Date(year, month-1, 1);
        
        
        date.value = year+" / " + month;
        var cnt = 1;
        var day1 = firstDay.getDay();
        for(var i=0; i<6; i++){
            var template = cal.querySelector("template");
            var cloneNode = document.importNode(template.content, true);
            var divs = cloneNode.querySelectorAll("div .item");
            for(var j=0; j<7; j++){
                console.log("i= "+i+" j= "+j +" day1= "+day1);
                if(j==day1&&cnt<=lastDate.getDate()){
                    divs[j].textContent = cnt;
                   console.log('cnt= '+cnt+" div= "+divs[j].textContent);
                    cnt++;
                    day1++;
                }
            };
            content.appendChild(cloneNode);
            day1 = 0;
        };
    };
    nextButton.onclick = function(){
        $("#content").html("");
        
        if(month!=12){
            month++;
        }else if(month==12){
            month = 1;
            year++;
        }
        
        var lastDate = new Date(year,month,0);
        var firstDay = new Date(year, month-1, 1);
        
        
        date.value = year+" / " + month;
        var cnt = 1;
        var day1 = firstDay.getDay();
        for(var i=0; i<6; i++){
            var template = cal.querySelector("template");
            var cloneNode = document.importNode(template.content, true);
            var divs = cloneNode.querySelectorAll("div .item");
            for(var j=0; j<7; j++){
                console.log("i= "+i+" j= "+j +" day1= "+day1);
                if(j==day1&&cnt<=lastDate.getDate()){
                    divs[j].textContent = cnt;
                   console.log('cnt= '+cnt+" div= "+divs[j].textContent);
                    cnt++;
                    day1++;
                }
            };
            content.appendChild(cloneNode);
            day1 = 0;
        };
    };
});