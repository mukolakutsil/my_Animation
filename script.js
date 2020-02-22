let img = document.querySelector(".cx-5"),
    div = document.querySelector(".img"),
    btn = document.querySelector(".btn");



 let myAnimation = function() {
     let pos = 0;

     console.log("dwad");

     let id = setInterval(frame, 10);

     function frame() {
        if (pos == 180) {
          clearInterval(id);
    //    div.style.backgroundColor =   'blue';
    //    div.style.left =  "3000px";
       
        } else{
        
            pos ++;
       div.style.left =  pos + 'px';
    //    div.style.top =  pos + 'px';
    //    div.style.backgroundColor =   'red';
    //    div.style.backgroundColor =   'blue';



       console.log(pos);

      }
    }
   };
btn.addEventListener("click", myAnimation);