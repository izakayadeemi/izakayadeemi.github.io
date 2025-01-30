console.log("logging")
document.getElementById("languageSelector").onchange = function () {
    console.log("changeListener")
    var value = this.value
    console.log(value);

    var curLocation = window.location.href
    console.log(curLocation);

    var newLocation = curLocation.split("/").map((s, i) => {
        let retV;
        if (i == 3) {
            retV = value
        } else {
            retV = s
        }
        return retV
    }).join("/")
    console.log(newLocation);

    if (newLocation != curLocation) {
        console.log("opening newLocation");
        window.open(newLocation, "_self")
    }
}
