import * as ElecSign from '../module/ElecSign';

var bytePdfBase = null;

function OnChangeFile(event) {
    var file = event.target.files[0];
    var reader = new FileReader();
    reader.onload = function(e) {
        bytePdfBase = e.target.result;
        //console.log(bytePdfBase);
        ElecSign.capture();
    };

    reader.readAsArrayBuffer(file);
}