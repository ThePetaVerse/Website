const Submitted = document.getElementById("kennellookup")
document.getElementById("kennellookup").onclick = function() {
    let Knumber = document.getElementById("kennelnumber").value;
    let text;
    if (isNaN(Knumber) || Knumber < 1 || Knumber > 5) {
        text = "Invalid";
    } else {
        text = "Valid";
    }
    document.getElementById("test").innerHTML = text;
}
