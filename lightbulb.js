const lightbulb = document.getElementById("lightbulb")
lightbulb.addEventListener("click",function() {
    if (lightbulb.getAttribute("id")=="change") {
        lightbulb.removeAttribute("id","change")
    }
    else{lightbulb.setAttribute("id","change")}
})