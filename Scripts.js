let tamaki = "gato";
let hitoshi = 1;
let chorch = false;
let ggenfield = ["azul",3,hitoshi];
let renfield = {
    name: "musita",
}
if (hitoshi > 0) {
    alert("hitoshi > 0")
} else {
    alert("hitoshi < 0")
}


let missio = "blueberry";
let blueberryBox = []
let appleBox = []
if (missio == "blueberry") {
    blueberryBox.push(missio)
}
else if (missio == "apple") {
    appleBox.push(missio)
} else{
    alert("unknown fruit")
}

let albondiga = ["carne","picada","son","apple","apple","blueberry"]
for (let index = 0; index < albondiga.length; index++) {
    let missio = albondiga[index]
    if (missio == "blueberry") {
       console.log(missio)
    }
    else if (missio == "apple") {
        console.log(missio)
    } else{
        console.log("unknown fruit")
    } 
}