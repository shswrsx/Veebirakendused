function tekstKast(){
    let nimi=document.getElementById("nimi");
    let vastus=document.getElementById("vastus");

    vastus.innerHTML="Tere hommikust, "+nimi.value;
    vastus.style.color="red";
}
function radioValik(){
    let vastus2=document.getElementById("vastus2");
    let mees=document.getElementById("mees");
    let naine=document.getElementById("naine");
    let pilt=document.getElementById("pilt");

    if(mees.checked){
        vastus2.innerHTML="Sa valisid mees";
        vastus2.style.color="red";
        pilt.src="Nimetu.png"
    } else if(naine.checked){
        vastus2.innerHTML="Sa valisid naine"
        vastus2.style.color="red";
        pilt.src="Nimetu1.png"
    } else {
        vastus2.innerHTML="palun vali sugu";
        vastus2.style.color="red";
        pilt.src="";
    }

}
function selectValik() {
    let vastus3 = document.getElementById("vastus3");
    let linn = document.getElementById("linn");
    if (linn.selectedIndex !== 0) {
        vastus3.innerHTML = "sa oled sündinud " + linn.value + "Linnas";
        vastus3.style.color = "red";
    } else {
        vastus3.innerHTML="palun vali linn ";
    }
}

function checkboxValik(){
    let vastus4=document.getElementById("vastus4");
    let jazz=document.getElementById("jazz");
    let rock=document.getElementById("rock");
    let tehnotrans=document.getElementById("tehnotrans");
    let metal=document.getElementById("metal");
    let rep=document.getElementById("rep");
    let popp=document.getElementById("popp");

    let muusika="";
    if(jazz.checked){
        muusika+=jazz.value+", ";
    }
    if(popp.checked){
        muusika+=popp.value+", ";
    }
    if(metal.checked){
        muusika+=metal.value+", ";
    }
    if(rock.checked){
        muusika+=rock.value+", ";
    }
    if(tehnotrans.checked){
        muusika+=tehnotrans.value+", ";
    }
    if(rep.checked){
        muusika+=rep.value+", ";
    }
    vastus4.innerHTML="Tee valisite muusika: "+muusika;
}
function puhasta(){
    vastus.innerHTML="";
    vastus2.innerHTML="";
    vastus3.innerHTML="";
    vastus4.innerHTML="";
    pilt.src="";
}