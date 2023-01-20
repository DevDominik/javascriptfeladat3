function Fuggveny(intake) {
    let befogo1 = parseFloat(document.getElementById("befogo1").value);
    let befogo2 = parseFloat(document.getElementById("befogo2").value);
    let atfogo = parseFloat(document.getElementById("atfogo").value);
    if (intake == "szerk") {
        if ((Math.pow(befogo1, 2)+Math.pow(befogo2,2))/2 < Math.pow(atfogo, 2)) {
            alert("Lehet szerkeszteni");
        } else {
            alert("Nem lehet szerkeszteni")
        };
    } else if (intake == "10-100valasz") {
        document.getElementById("befogo1").value = Math.ceil(Math.random()*100)
        document.getElementById("befogo2").value = Math.ceil(Math.random()*100)
        document.getElementById("atfogo").value = Math.ceil(Math.random()*100)
    } else if (intake == "szamitas") {
        document.getElementById("atfogo").value = (Math.pow(befogo1, 2) + Math.pow(befogo2, 2))/2
    };
};