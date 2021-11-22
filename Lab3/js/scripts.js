var scale_multipler = 1;
var counter_val = 0;
document.body.addEventListener('wheel', function(){document.getElementById('task_1_res').innerHTML = (Number(document.getElementById('task_1_res').innerHTML)+1).toString()});

document.getElementById('task_2_btn').addEventListener('click', say_hello);

function say_hello(){
    var name=prompt("Input your name");
    document.getElementById('greeting').innerHTML = "Hello, "+name+"!";
}

document.getElementById('arena').addEventListener('mouseenter', onArena);
document.getElementById('arena').addEventListener('mouseleave', offArena);


function onArena(){
    var arena = document.getElementById('arena');
    arena.innerHTML = '';
    arena.style.backgroundColor = 'green';
    arena.appendChild(document.createTextNode("Dobrze ci idzie!"));
}

function offArena(){
    var arena = document.getElementById('arena');
    arena.style.backgroundColor = 'red';
    arena.innerHTML = '';
    arena.appendChild(document.createTextNode("Opuściłeś obszar, wracaj!"));
}

document.getElementById('text').style.fontSize = '10px';

document.getElementById('text').addEventListener('dblclick', getBigger);

function getBigger(){
    var text = document.getElementById('text');
    
    text.style.transform = "scale(1."+(scale_multipler++).toString()+")";
}

document.getElementsByTagName('h5')[4].addEventListener('mouseover', function(){document.body.style.backgroundColor = '#'+(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6);})

document.addEventListener('keydown', function (event) {
    if(event.key ==  'Enter'){
        document.getElementById('task_6_text').style.letterSpacing = (scale_multipler++).toString()+'px';
    }
});

document.addEventListener('mousemove', function (event){
    res = document.getElementById('position');
    res.innerHTML = '';
    res.innerHTML = "Pozycjaa myszki:\nX= "+event.clientX+"\nY= "+event.clientY;
});

document.getElementById('task_8_btn').addEventListener('click', function (){
    counter = document.getElementById('counter_val');
    counter.innerHTML = "Licznik kliknięć = "+(counter_val++).toString();
});

window.addEventListener('resize', function(event){
    if(event.target.innerWidth < 1280 || event.target.innerHeight < 720) {
        document.body.style.border = 'solid 10px red';
        document.getElementById('rozmiar').innerHTML = "rozmiar okna jest mniejszy niż HD";
    }
    else{
        document.getElementById('rozmiar').innerHTML = "rozmiar jest prawidłowy!";
        document.body.style.border = 'solid 10px green';
    }
});

document.getElementById('task_10_input').addEventListener('input', function(){
    document.getElementById('task_10_btn').value = document.getElementById('task_10_input').value;
});
