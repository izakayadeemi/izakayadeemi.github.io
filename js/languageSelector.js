console.log("logging")

function translate(text, curLang, selectedLang){
    const translatePromise = fetch(`strings_${curLang}.txt`)
        .then((res) => res.text())
        .then((text) => text.split("\n").indexOf(text))
        // .then((index) => fetch(`strings_${selectedLang}.txt`)
        //         .then((res) => res.text())
        //         .then((text) => text.split("\n").at(index))
        //         .catch((e) => console.error(e))
        // )
        // .catch((e) => console.error(e));
    return Promise.resolve(translatePromise)
}

document.getElementById("languageSelector").onchange = function () {
    console.log("changeListener")
    const selectedLang = this.value
    console.log(selectedLang);

    const curLocation = window.location.href;
    console.log(curLocation);

    let curLang;

    let newLocation = curLocation.split("/").map((s, i) => {
        let retV;
        if (i < 3) {
           retV = s
        } else if (i == 3) {
            curLang = s
            retV = selectedLang
        } else {
            retV = translate(s, curLang, selectedLang)
        }
        return retV
    }).join("/")
    console.log(newLocation);

    if (newLocation != curLocation) {
        console.log("opening newLocation");
        window.open(newLocation, "_self")
    }
}
