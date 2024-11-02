var btn=document.getElementById("top-button")
window.onscroll=function(){
    if(window.scrollY===0){
        btn.style.display="none"
    }else{
        btn.style.display="block"
    }
}
btn.onclick=function(){
    window.scrollTo({
        left:0,
        top:0,
        behavior:"smooth"
    })
}

