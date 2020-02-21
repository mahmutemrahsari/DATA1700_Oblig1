const kinobilletRegister=[];
let error = false;
function visPersonRegister(){
    // skriv ut
    let ut = "<table><tr>" +
        "<th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnr</th><th>Epost</th>" +
        "</tr>";
    for (let p of kinobilletRegister){
        ut+="<tr>";
        ut+="<td>"+p.film+"</td><td>"+p.antall+"</td><td>"+p.fornavn+"</td><td>"+p.etternavn+"</td><td>"+p.telefonnr+"</td><td>"+p.epost+"</td>";
        ut+="</tr>";
    }
    document.getElementById("personRegister").innerHTML=ut;
}


function kjoppBillett(){
    const film = document.getElementById("film").value;
    const antall = document.getElementById("antall").value;
    const fornavn = document.getElementById("fornavn").value;
    const etternavn = document.getElementById("etternavn").value;
    const telefonnr = document.getElementById("telefonnr").value;
    const epost = document.getElementById("epost").value;

    if (isNaN(Number(antall))){
        alert(" Antallet er ikke et tall!");
        error=true;
    }else if(Number(antall)<1){
        alert("Antallet må være mer enn 0 !")
        error=true;
    }else{
        error = false;
    }

    if (isNaN(Number(telefonnr))){
        alert("Telefonnummeret er ikke et tall!");
        error=true;
    }else if ( 0>Number(telefonnr)){
        alert("Telefonnummeret er ulovlig!")
        error=true;
    } else{
        error = false;
    }




    let inputs = {"film":film, "antall":antall, "fornavn":fornavn, "etternavn":etternavn, "telefonnr":telefonnr, "epost":epost};



    for(let key in inputs){

        if(inputs[key]=='' || inputs[key]=='velgFilm'){
            document.getElementById(key+"feil").innerHTML = " Må skrive noe inn i "+key;
            error=true;
        }else {
            document.getElementById(key+"feil").innerHTML = "";
        }

    }


    if(!error){
        const person = {
            film : film,
            antall : antall,
            fornavn : fornavn,
            etternavn: etternavn,
            telefonnr : telefonnr,
            epost : epost
        };

        kinobilletRegister.push(person);
        //nullstill inputboksene
        document.getElementById("antall").value="";
        document.getElementById("film").value="velgFilm";
        document.getElementById("fornavn").value="";
        document.getElementById("etternavn").value="";
        document.getElementById("telefonnr").value="";
        document.getElementById("epost").value="";
        visPersonRegister()}
}

//Tommer arrayet og nullstiller Alle billetter paa skjerm
function slettAlleBillettene() {
    kinobilletRegister.length = 0;
    document.getElementById("personRegister").innerHTML="";

}
