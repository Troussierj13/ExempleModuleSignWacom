import {capture as Capture} from '../module/ElecSign';

var bytePdfBase = null;

function OnChangeFile(event) {
    var file = event.target.files[0];
    var reader = new FileReader();
    reader.onload = function(e) {
        bytePdfBase = e.target.result;
        //console.log(bytePdfBase);
        Capture();
    };

    reader.readAsArrayBuffer(file);
}