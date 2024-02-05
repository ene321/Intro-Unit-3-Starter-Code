let dog = document.querySelector('.story-opening');
let buttons = document.querySelector('.buttons');
let op1 = document.querySelector('.option-one');
let op2 = document.querySelector('.option-two');
let screen1 = document.querySelector('.option-one-screen');
let screen2 = document.querySelector('.option-two-screen');
let end1 = document.querySelector('.option-one-end');
let end2 = document.querySelector('.option-two-end');
let h3 = document.querySelector('h3');
let h2 = document.querySelector('h2');
let backButton = document.querySelector('.back-button');
let body = document.querySelector('.body');
let title = document.querySelector('.title');
let peroZalen = document.querySelector('.pero-zalen');
op1.onclick=function(){ 
  buttons.style.display = 'none';
  dog.style.display = 'none';
  screen1.style.display = 'block';
};
op2.onclick=function(){
buttons.style.display = 'none';
dog.style.display = 'none';
  screen2.style.display = 'block';
  };
h3.onclick=function(){
  screen1.style.display = 'none';
  end1.style.display = 'block';
  
};
h2.onclick=function(){
screen2.style.display = 'none';
  end2.style.display = 'block';
  
};
backButton.onclick=function(){
  end1.style.display = 'none';
  dog.style.display = 'block';
  buttons.style.display = 'block';
  
}
peroZalen.onclick=function(){
  end2.style.display = 'none';
  dog.style.display = 'block';
  buttons.style.display = 'block';
}
h3.innerHTML = "You drive off like a fast a furious movie!";
