window.onload=function(){
    var img=this.document.getElementsByClassName("auto-img");
    var point=this.document.getElementsByClassName("point");
    var count=0;
    time=this.setInterval(function(){
        img[count].style.zIndex="1";
        point[count].style.borderColor="hsla(0,0%,100%,.3)";
        point[count].style.background="rgba(0,0,0,.4)";
        count++;
        count%=5;
        img[count].style.zIndex="2";
        point[count].style.borderColor="rgba(0,0,0,.4)";
        point[count].style.background="hsla(0,0%,100%,.4)";
    },2000)
}