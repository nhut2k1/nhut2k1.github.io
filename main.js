var dem;
var dem1 = 0 ;
function Random(){
    dem = Math.floor(Math.random() * 3)+1;
    switch(dem){
   
        case 1:
            text.innerHTML= "BẠN CHÚNG MÓN QUÀ A ";
            console.log(dem);
            break;
        case 2:
            text.innerHTML= "BẠN CHÚNG MÓN QUÀ B";
            break;
        case 3:
            text.innerHTML= "BẠN CHÚNG MÓN QUÀ C";
            break;
    }
    
}
var btn1 = document.querySelector(".btn1")
var text = document.querySelector(".text")
var rd = document.querySelector(".random")

btn1.onclick= function(){
text.innerHTML= "CHÚC MƯNG A";
}

rd.onclick= function(){
    Random();
    dem1++;
    if(dem1==3){
        console.log(dem1)
        alert("ĐỪNG CÓ MÀ THAM LAM");
    }
}
