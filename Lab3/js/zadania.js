var spaces = "                                                                                                        ";

//2-rozne-zadanie 2

function fixName(){
    var name = prompt("Podaj swoje imię");
    console.log("zadanie 2-2");
    console.log("wynik:");
    console.log("Imię "+name+" rozpoczyna się od litery "+name[0]);
}

//2-rozne-zadanie-1

function countWords(){
    var text = prompt("Podaj zdanie:");
    console.log("zadanie 2-1");
    word_num = text.split(' ').length;
    console.log("wynik:");
    console.log("Tekst \""+text+"\" składa się z "+word_num+" wyrazów");
}

//2-rozne-zadanie-10

function printBorderText(Text){
    var width = "║  To jest jakiś tekst                      ║";
    var max_size = width.length -2;
    if (Text.length >=max_size){
        Text = Text.slice(0,max_size-3);
        Text = Text+'...'

    }else{
        padding = spaces.slice(0, (max_size-Text.length)/2);
        if((max_size - Text)%2 != 0){
            Text = spaces.slice(0,(max_size-Text.length)/2 +1) + Text + padding;
        }
        else{
            Text =  padding + Text + padding;
        }
    }
    console.log("zadanie 2-10:")
    console.log("╔═══════════════════════════════════════════╗");
    console.log("║"+Text+"║");
    console.log("╚═══════════════════════════════════════════╝")
}

printBorderText("lolololololloloolo")
printBorderText("lololololollolooloaaaaaaaaaaten tekst jest za długi")


//3-tablice-zadanie-5
function random(max) {
    result = []
    sum = 0;
    for(var i = 0;i<20;i++){
        res = Math.random()*max;
        sum = sum + res;
        result.push(res)
    }
    result.sort()
    for(var i = 0;i<20;i++){
        console.log(result[i])
    }
    console.log("Suma = "+sum);
    console.log("Średnia = "+sum/20);
}
console.log("3-tablice-zadanie-5")
random(100)

//6-rwd-1-zadania-zadanie-1
var header = document.getElementsByClassName("header")[0];

window.addEventListener('scroll', function(event) {
    console.log(this.scrollY)
    if(this.scrollY >=100){
        header.classList.add("sticky");
    }
    else{
        header.classList = "header";
    }
});

//6-rwd-1-zdania-zadanie-2

window.addEventListener('resize', function () {
    if(this.innerWidth >= 600){
        header.style.position = 'fixed';
    }else{
        header.style.position = 'absolute';
    }
})

//5-dom-0-menu

document.getElementsByTagName('ul')[0].className = '.menu';
items = document.getElementsByTagName('li');
items[0].className = '.first';
items[4].className = '.last';
items[3].className = '.active';
items[2].children[0].style.color = '#fff';

for(let i = 0; i < items.length;i++){
    items[i].children[0].title = 'Przejdź na stronę '+items[i].children[0].innerHTML;
}

links = document.getElementsByTagName('a');
for(let k = 0; k < links.length; k++){
    links[k].href = '#';
}
items[0].addEventListener('click', function(){alert("Kliknięto "+items[0].children[0].innerHTML)});
items[1].addEventListener('click', function(){alert("Kliknięto "+items[1].children[0].innerHTML)});
items[2].addEventListener('click', function(){alert("Kliknięto "+items[2].children[0].innerHTML)});
items[3].addEventListener('click', function(){alert("Kliknięto "+items[3].children[0].innerHTML)});
items[4].addEventListener('click', function(){alert("Kliknięto "+items[4].children[0].innerHTML)});


document.getElementsByClassName('.active')[0].removeEventListener('click', function(){alert("Kliknięto "+items[3].children[0].innerHTML)});

//5-dom-2-menu

item = document.getElementsByClassName("nav-el");
list = document.getElementsByClassName('nav');
function handleForm(event) { event.preventDefault(); } 
function removeActiveTab(){
    for(let i = 0; i <=5;i++){
        item[i].classList.remove("nav-el-active");
    }
}

list[0].addEventListener('click', handleForm);

item[0].addEventListener("click", function() {removeActiveTab();item[0].classList.add("nav-el-active")});
item[1].addEventListener("click", function() {removeActiveTab();item[1].classList.add("nav-el-active")})
item[2].addEventListener("click", function() {removeActiveTab();item[2].classList.add("nav-el-active")})
item[3].addEventListener("click", function() {removeActiveTab();item[3].classList.add("nav-el-active")})
item[4].addEventListener("click", function() {removeActiveTab();item[4].classList.add("nav-el-active")})
item[4].addEventListener("click", function() {removeActiveTab();item[4].classList.add("nav-el-active")})
item[5].addEventListener("click", function() {removeActiveTab();item[5].classList.add("nav-el-active")})

//5-dom-5-lista-userow
var form = document.getElementsByTagName("form")[0];
var userList = document.getElementsByTagName("ul")[0];

function handleForm(event) { event.preventDefault(); }

userList.children[0].addEventListener('click', function (){ userList.removeChild(userList.children[0])});
userList.children[1].addEventListener('click', function (){ userList.removeChild(userList.children[1])});

function addNewUser(){
    values = form.elements;
    newElement = document.createElement('li');
    newElement.classList.add("user");
    newDiv = document.createElement('div');
    newDiv.classList.add("user-data");
    userName = document.createElement("div");
    userName.classList.add("user-name");
    userName.innerHTML = values[0].value; 
    userPhone = document.createElement("div");
    userPhone.classList.add("user-phone");
    userPhone.innerHTML = values[1].value;
    removeButton = document.createElement('button');
    removeButton.type = 'button';
    removeButton.classList = "btn user-delete";
    removeButton.innerHTML = 'Usuń';
    num = userList.children.length;
    removeButton.addEventListener('click', function () {this.parentNode.remove()})

    newElement.appendChild(newDiv);
    newDiv.appendChild(userName);
    newDiv.appendChild(userPhone);
    newElement.appendChild(removeButton);
    userList.appendChild(newElement);
}

form.addEventListener("submit", addNewUser);
form.addEventListener('submit', handleForm);

