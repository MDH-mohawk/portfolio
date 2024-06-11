var banner = document.getElementById('name_banner');
var slider = document.getElementById('slider');
var rect = document.getElementById('rect1')
var rect2 = document.getElementById('rect2')
var rect3 = document.getElementById('rect3')
var rect4 = document.getElementById('rect4')

rect.animate([
    {
        width:"0%",
    },
    {
        width:"100%",
    }
],{
    duration:1000,
    easing:"ease-in-out",
    fill: "forwards"
});

rect2.animate([
    {
        width:"0%",
    },
    {
        width:"70%",
    }
],{
    duration:1000,
    easing:"ease-in-out",
    fill: "forwards"
});

rect3.animate([
    {
        width:"0%",
    },
    {
        width:"90%",
    }
],{
    duration:1000,
    easing:"ease-in-out",
    fill: "forwards"
});

rect4.animate([
    {
        width:"0%",
    },
    {
        width:"50%",
    }
],{
    duration:1000,
    easing:"ease-in-out",
    fill: "forwards"
});

function changecol(){
    banner.style.backgroundColor = `rgb(${randomize()},${randomize()},${randomize()})`;
    console.log(banner.style.backgroundColor)
}

function randomize(){
   var num = Math.floor(Math.random()*255)
   return num;
}

banner.onclick = changecol

