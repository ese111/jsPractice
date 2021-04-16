        //ex8
        window.addEventListener("load",function(){
            var sec = document.querySelector("#ex8");
            var noticeList = sec.querySelector(".notice-list");
            var tbodyNode = noticeList.querySelector("tbody");
            var upButton = sec.querySelector(".up-button");
            var downButton = sec.querySelector(".down-button");
            
            var currentNode = tbodyNode.firstElementChild;

            downButton.onclick = function(){
                var nextNode = currentNode.nextElementSibling;

                if(nextNode == null){
                    alert("don't move!");
                    return;   
                }
                 //tbodyNode.removeChild(nextNode);
                 //tbodyNode.insertBefore(nextNode, currentNode);
                 currentNode.insertAdjacentElement("beforebegin",nextNode);
            };
            upButton.onclick = function(){
                var previousNode = currentNode.previousElementSibling;
     
                if(previousNode == null){
                    alert("don't move!");
                    return;   
                }
                 //tbodyNode.removeChild(currentNode);
                 //tbodyNode.insertBefore(currentNode, previousNode);
                 currentNode.insertAdjacentElement("afterend",previousNode);
            };
        });
        
        
        //ex7
        window.addEventListener("load",function(){
            var notice = [{id:5,title:"fire~~!",regDate:"2019-01-26",writer:"흥",count:3},
                          {id:6,title:"화이팅~~!",regDate:"2019-01-27",writer:"수",count:2}]
            var sec = document.querySelector("#ex7");
            var noticeList = sec.querySelector(".notice-list");
            var tbodyNode = noticeList.querySelector("tbody");
            var cloneButton = sec.querySelector(".clone-button");
            var templateButton = sec.querySelector(".template-button");
            cloneButton.onclick = function(){
                var trNode = noticeList.querySelector("tbody tr");
                var cloneNode = trNode.cloneNode(true);
                var tds = cloneNode.querySelectorAll("td");
                tds[0].textContent = notice[0].id;
                tds[1].innerHTML = '<a href= "'+notice[0].id+'">'+notice[0].title+'</a>';
                tds[2].textContent = notice[0].regDate;
                tds[3].textContent = notice[0].writer;
                tds[4].textContent = notice[0].count;
                tbodyNode.append(cloneNode);
            };
            templateButton.onclick = function(){
                for(var i=0; i<notice.length; i++){
                var template = sec.querySelector("template");
                var cloneNode = document.importNode(template.content, true);
                var tds = cloneNode.querySelectorAll("td");
            
                tds[0].textContent = notice[i].id;
                //tds[1].innerHTML = '<a href= "'+notice[0].id+'">'+notice[0].title+'</a>';
                var aNode = tds[1].children[0];
                aNode.href = notice[i].id;
                aNode.textContent = notice[i].title;
                tds[2].textContent = notice[i].regDate;
                tds[3].textContent = notice[i].writer;
                tds[4].textContent = notice[i].count;
                tbodyNode.appendChild(cloneNode);
                };
            };
        });
        
        //ex6
         window.addEventListener("load",function(){
            var sec = document.querySelector("#ex6");
            var titleInput = sec.querySelector("title-input");
            var menuList = sec.querySelector(".menu-list");
            var addInput = sec.querySelector(".add-input");
            var delInput = sec.querySelector(".del-input");
   
            
            addInput.onclick = function(){  
                var title = titleInput.value;
                var txtNode = document.createTextNode(title);
                menuList.appendChild(txtNode);
            };

            delInput.onclick = function(){
                 var txtNode = menuList.childNodes[0];
                 menuList.de
            };
        }); 
         
         
         //ex5
         window.addEventListener("load",function(){
            var sec = document.querySelector("#ex6");
            var titleInput = sec.querySelector("title-input");
            var menuList = sec.querySelector(".menu-list");
            var addInput = sec.querySelector(".add-input");
            var delInput = sec.querySelector(".del-input");
   
            
            addInput.onclick = function(){  
                var title = titleInput.value;
                var txtNode = document.createTextNode(title);
                menuList.appendChild(txtNode);
            };

            delInput.onclick = function(){
                 var txtNode = menuList.childNodes[0];
                 menuList.de
            };
        }); 

        //ex4
        window.addEventListener("load",function(){
            var sec4 = document.querySelector("#ex4");
            var box = sec4.querySelector(".box");
            var input1 = box.children[0];
            var input2 = box.children[1];

            input1.value="Hello";
            input2.value="Hi!";
        });
        //ex2
        window.addEventListener("load",function(){
            var sec2 = document.getElementById("ex2");
            var txtX = sec2.querySelector(".txt-x");
            var txtY = sec2.querySelector(".txt-y");
            var txtAdd = sec2.querySelector(".txt-add");
            var txtSum = sec2.querySelector(".txt-sum");
            txtAdd.onclick =  function(){
            
               var x = parseInt(txtX.value);
               var y = parseInt(txtY.value);

               txtSum.value = x + y;
            };
        });
        
        //ex
         window.addEventListener("load",function(){
            var sec = document.getElementById("ex");
            var txtX = sec.getElementsByClassName("txt-x")[0];
            var txtY = sec.getElementsByClassName("txt-y")[0];
            var txtAdd = sec.getElementsByClassName("txt-add")[0];
            var txtSum = sec.getElementsByClassName("txt-sum")[0];
            txtAdd.onclick =  function(){
            
               var x = parseInt(txtX.value);
               var y = parseInt(txtY.value);

               txtSum.value = x + y;
            };
        });
         
        //window.onload =  function (){
        window.addEventListener("load",function(){
            var txtX = document.getElementById("txt-x");
            var txtY = document.getElementById("txt-y");
            var txtAdd = document.getElementById("txt-add");
            var txtSum = document.getElementById("txt-sum");
            txtAdd.onclick =  function(){
            
               var x = parseInt(txtX.value);
               var y = parseInt(txtY.value);

               txtSum.value = x + y;
            };
        }); 