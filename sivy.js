document.querySelector('.lisaanappi').addEventListener('click', e =>{
  e.preventDefault();
  if(document.querySelector('#enimi').value==''||document.querySelector('#snimi').value=='' ){
    document.querySelector('.alert').style.display='block';
  }
  else{
    document.querySelector('.asdf').innerHTML= document.querySelector('#enimi').value + " " + document.querySelector('#snimi').value;
  }
});
document.querySelector('.nappi').addEventListener('click', e =>{
  e.preventDefault();

  if(document.querySelector('#A').checked){
    console.log('A');
    document.querySelector('#LA').innerHTML="A valmis";
  }
  else{
    console.log('NOT A');
    document.querySelector('#LA').innerHTML="A";
  }
  if(document.querySelector('#B').checked){
    console.log('B');
    document.querySelector('#LB').innerHTML="B valmis";
  }
  else{
    console.log('NOT B');
    document.querySelector('#LB').innerHTML="B";
  }
  if(document.querySelector('#C').checked){
    console.log('C');
    document.querySelector('#LC').innerHTML="C valmis";
  }
  else{
    console.log('NOT C');
    document.querySelector('#LC').innerHTML="C";
  }
  if(document.querySelector('#D').checked){
    console.log('D');
    document.querySelector('#LD').innerHTML="D valmis";
  }
  else{
    console.log('NOT D');
    document.querySelector('#LD').innerHTML="D";
  }
});
