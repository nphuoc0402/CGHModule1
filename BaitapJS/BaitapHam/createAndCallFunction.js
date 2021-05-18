function processConFirm(answer){
    let result ="";
    if(answer){
        result = "Excelent. We'll play a nice game chess";
    }else {
        result = "Maybe later then.";
    }
    return result;
}
let conFirmAnswer = confirm("Shall we play a game");
let theAnswer = processConFirm(conFirmAnswer);
alert(theAnswer);