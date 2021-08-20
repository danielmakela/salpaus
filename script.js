console.log("täällä ollaan!");

let ika=15
ika = ika + 1;
let ikakirjaimina = "15";
kakirjaimina = ikakirjaimina +1;
console.log(ikakirjaimina)
console.log("sinun ikasi on: + ika");

let juuvaiei =true;
console.log("boolean:" + juuvaiei);
let nimi = "Daniel Jim Makela";
console.log("kirjoita isolla: " + nimi.toUpperCase());
console.log("splittausharjoitus: " + nimi.split(" ")[0]);

for(let i=0; i<=10; i++){
  console.log("loopin iteraatioluku on: " + i);
}

if(ika => 18){
  console.log("kasva vielä vähän...");
}
else{
  console.error("kasva viellä vähän...");
}
function laskutehtava(ekaArvo, tokaArvo){
return ekaArvoo + tokaArvo;
}
console.log(ikakirjaimina)

ika = ika + 1; 
ikakirjaimina = ikakirjaimina + 1;

console.log(ikakirjaimina);

console.log ("sinun ikäsi on: " + ika);
console.log("boolean: " + juuvaiei);

let pvm = "2021/08/18";
console.log (pvm.split("/")[0]);
//function pvmFin(vuosi,kk){

//}
console.log(pvmFin(pvm.split("/")[0], pvm.split("/")[1], pvm.split("/")[2]))

function pvmFin(vuosi,kk,pv){
  if (kk==03 || kk==04 || kk==05){
    return "kevät "+pv+"."+kk+"."+vuosi;
  }
  else if(kk==06||kk==07||kk==08){
    return "kesä "+pv+"."+kk+"."+vuosi;
  }
  else if (kk==09||kk==10||kk==11){
    return "syksy "+pv+"."+kk+"."+vuosi;
  }
  else{
    return "talvi "+pv+"."+kk+"."+vuosi;
  }
}
console.log(document.querySelector('#kentta').type);
console.log(document.querySelector('.lisaanappi').value);

document.querySelector('.lisaanappi').addEventListener('click', e =>{
  e.preventDefault();
  console.log(document.querySelector('#kentta').value);

document.querySelector('.ilmotus').innerHTML = "kentän sisaltö on: <b>" + document.querySelector('#kentta').value + "</b>";
});