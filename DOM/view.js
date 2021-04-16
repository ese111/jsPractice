  
        
        window.onload =  function (){
            s.onclick =  function(){
             var c = prompt("c=?");
           var z = prompt("z=?");
            c = parseInt(c);
           z = parseInt(z);
         
           s.value = c + z;
        };
        d.onclick = function(){
            d.innerText = "누름";
        }
        };