$(function () {
    $("#languageSelector").selectmenu();

    document.getElementById("#languageSelector").onchange = changeListener;

    function changeListener() {
        var value = this.value
        console.log(value);

        var curLocation = window.location.href
        console.log(curLocation);

        var newLocation = curLocation.split("/").map((s, i) => {
            let retV;
            if (i == 4) {
                retV = value
            } else {
                retV = s
            }
            return retV
        }).join("/")
        console.log(newLocation);

        if (newLocation != curLocation) {
            console.log("opening newLocation");
            window.open(document.URL)
        }
    }
});