document.getElementById("languageSelector").onchange = function() {
    console.log("changeListener")
    const value = this.value
    console.log(value);

    window.open(url = value, target = "_blank")
}
