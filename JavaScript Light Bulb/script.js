document.getElementById("Button").addEventListener("click", switcher);
let lightOn = false;

function switcher() {
    lightOn = !lightOn
    if (lightOn == false) {
        document.getElementById('LightBulb').setAttribute("src","https://i.postimg.cc/6QyTynzr/bulb-on.png");
        document.getElementById('body').style.backgroundColor = "lightyellow";
        document.getElementById('Button').style.backgroundColor = "darkgoldenrod";
        console.log("teste");
    } else {
        document.getElementById('LightBulb').setAttribute("src","https://i.postimg.cc/KjK1wL3c/bulb-off.png");
        document.getElementById('body').style.backgroundColor = "black";
        document.getElementById('Button').style.backgroundColor = "gray";
    }   
}
 