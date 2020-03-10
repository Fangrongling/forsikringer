function numLength(obj){
    obj.value=obj.value.replace(/[^\d]/g)//only number is allow
    if(obj.value.length>11){
        obj.value=obj.value.slice(0,11)//only 11 siffer
    }
}

function regnPris(){
    console.log("2");
    var rigthNumber = true;
   //burde gjøre validering av form informasjon her, men jeg har
   //ikke tid å gjøre det nå pga. jobbing med master oppgaven. 
    $("#form-elements").hide()
    $("#thankyou_message").show()
}

function clearFrom(){
    $("#name1").val("")
    $("#name2").val("")
    $("#email").val("")
    $("#bonus").val("")
    $("#registreringsnumme").val("")
    $("#fodselsnummer").val("")
}


$("#goback-button").click(
    event => {
        event.preventDefault()
        $("#form-elements").show()
        $("#thankyou_message").hide()
        $("#name1").val("")
        $("#name2").val("")
        $("#email").val("")
        $("#bonus").val("")
        $("#registreringsnumme").val("")
        $("#fodselsnummer").val("")
    }
);