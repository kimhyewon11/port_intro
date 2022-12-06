let text = "Web Publisher ;";
        let serveText ="";
        
        const typing = document.querySelector(".typing");

        let charIndex =0;
        let maxIndex ;


        let autoTyping = setInterval(()=>{
            texttoggle();
        },100)



        // 글자 toggle 함수 
        function texttoggle(){
            if(charIndex < text.length ) {
                typing.innerHTML += text.charAt(charIndex);
                charIndex++;
                if(charIndex >= text.length){
                    maxIndex = text.length;
                    stopAndStart ();
                }
            }
            else if( maxIndex >=0){
                typing.innerHTML = text.substring(0,maxIndex);
                maxIndex--;
                if(maxIndex < 0 ){
                    charIndex = 0;
                    stopAndStart()
                }
            }
        }


        function stopAndStart (){
            clearInterval(autoTyping);
            setTimeout(function(){
                autoTyping = setInterval(function(){
                    texttoggle();
                },200);
            },1000);

        }
