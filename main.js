var dem;
var dem1 = 0 ;
function Random(){
    dem = Math.floor(Math.random() * 3)+1;
    switch(dem){
   
        case 1:
            text.innerHTML= "TÙY EM CHỌN";
            console.log(dem);
            break;
        case 2:
            text.innerHTML= "TÙY EM CHỌN";
            break;
        case 3:
            text.innerHTML= "CHÚC MAI MẮN LẦN SAU";
            break;
    }
    
}
var btn1 = document.querySelector(".btn1")
var btn2 = document.querySelector(".btn2")
var text = document.querySelector(".text")
var rd = document.querySelector(".random")

btn1.onclick= function(){
text.innerHTML= "CHÚC MƯNG SINH NHẬT EM";
}

btn2.onclick= function(){
    text.innerHTML= "8/3 VUI VẺ HẠNH PHÚC EM NHÉ";
    }

rd.onclick= function(){
    Random();
    dem1++;
    if(dem1>=3){
        console.log(dem1)
        alert("ĐỪNG CÓ MÀ THAM LAM");
    }
}
