let display = document.getElementById('calNum');
let frame = document.getElementById('display-box');

let buttons = Array.from(document.getElementsByClassName('num'));

buttons.map( button => {
  button.addEventListener('click',(e) => {
    switch(e.target.innerHTML){
      case 'CE':
        display.innerHTML=" ";
        break;
      case 'DEL':
      if(display.innerHTML){
        display.innerHTML=display.innerHTML.slice(0,-1);
      }
          break;
      case '=':
      try{
        display.innerHTML=eval(display.innerHTML);
      }
      catch{
        frame.style.border='2px solid red';
      }
      break;
    
      default:
        display.innerHTML += e.target.innerHTML;
    }
  });
} );
