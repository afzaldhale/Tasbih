const start = document.querySelector("#start");
const  reset = document.querySelector("#reset");
const text = document.querySelector("h2");
let count = 0;


    start.addEventListener("click",function(){

        count++;
        text.innerHTML = count;

        if(count == 100)
        {
            alert("Hundred");
            count = 0;
        }
    });

    reset.addEventListener("click",function(){
        count = 0;
        text.innerHTML = count;
    });




