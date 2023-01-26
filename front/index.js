const fileSelector = document.getElementById("file");
fileSelector.addEventListener("change", event => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.addEventListener("load", e => {
        console.log(e.target.result);
    });
    reader.readAsBinaryString(file);
});