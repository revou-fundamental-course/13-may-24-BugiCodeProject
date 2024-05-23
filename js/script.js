//ini js

function myFunction() {console.log("masuk");
  var x = document.getElementById("Konten_KelilingSegitiga");
  var y = document.getElementById("Konten_LuasSegitiga");
  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "none";
    document.getElementById('nama-rumus').innerHTML = 'Switch Luas Segitiga';
  } else {
    x.style.display = "none";
    y.style.display = "block";
    document.getElementById('nama-rumus').innerHTML = 'Switch Keliling Segitiga';
  }
}


window.onload = myFunction;

function validationLuas() {
let alasValue = document.getElementById("alas-input").value;
let tinggiValue = document.getElementById("tinggi-input").value;
console.log(alasValue);
console.log(tinggiValue);

if (alasValue != "" && tinggiValue != "") {
    console.log("Inputan Berhasil");
    let flowvalue = '1/2' + ' X ' + alasValue + ' X ' + tinggiValue
    let result = 1/2 * parseFloat(alasValue) * parseFloat(tinggiValue)

    document.getElementById('rumusLuas').innerHTML = '1/2 X a X t';
    document.getElementById('flowLuas').innerHTML = 'L = ' + flowvalue;
    document.getElementById('ResultLuas').innerHTML = 'L = ' + result;
}else {
    alert("Inputan Kosong");
}

}

function resetluas() {
    console.log("masuk reset");
    document.getElementById('alas-input').value = '';
    document.getElementById('tinggi-input').value = '';
    document.getElementById('rumusLuas').innerHTML = '';
    document.getElementById('flowLuas').innerHTML = '';
    document.getElementById('ResultLuas').innerHTML = '';   
}


function validationHitungKeliling() {
let SisiAValue = document.getElementById("SisiA-input").value;
let SisiBValue = document.getElementById("SisiB-input").value;
let SisiCValue = document.getElementById("SisiC-input").value;
console.log(SisiAValue);
console.log(SisiBValue);
console.log(SisiCValue);

if (SisiAValue != "" && SisiBValue != "" && SisiCValue != "") {
    console.log("Inputan Berhasil");
}else {
    alert("Inputan Kosong");
}

let flowvalue = SisiAValue + '+' + SisiBValue + '+' + SisiCValue
let result = parseFloat(SisiAValue) + parseFloat(SisiBValue) + parseFloat(SisiCValue)

document.getElementById('rumus').innerHTML = 'S1 + S2 + S3';
document.getElementById('flow').innerHTML = 'K = ' + flowvalue;
document.getElementById('Result').innerHTML = 'K = ' + result;

}

function resetkeliling() {
    console.log("masuk reset");
    document.getElementById('SisiA-input').value = '';
    document.getElementById('SisiB-input').value = '';
    document.getElementById('SisiC-input').value = '';
    document.getElementById('rumus').innerHTML = '';
    document.getElementById('flow').innerHTML = '';
    document.getElementById('Result').innerHTML = '';
    
}
