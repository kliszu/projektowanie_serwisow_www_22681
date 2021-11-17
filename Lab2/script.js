fonts = ['Hoefler Text', 'New Century Schoolbook', 'Calisto MT', 'Cambria', 'Rockwell Extra Bold', 'Baskerville', 'Lucida Sans Typewriter', 'Courier', 'Apple Chancery', 'URW Chancery', 'papyrus', 'Thai']

function random_style(){
    p = document.getElementById('text');
    font_size = Math.floor(Math.random() * 50) + 1;
    p.style.fontSize = font_size.toString()+'px';
    p.style.fontFamily = fonts[Math.floor(Math.random()* fonts.length) + 1];
    console.log(p.style.fontFamily);
}

function random_image(){
    img = document.getElementById('img_frame');
    num = Math.floor(Math.random() * 11) + 1;
    img.src = 'assets/images/rand_img_'+num.toString()+'.jpg';
}

function update_progress_bar(){
    value = document.getElementById('Range').value;
    progressBar = document.getElementsByClassName("progress-bar")[0];
    progressBar.style.width = value.toString()+'%';
    progressBar.innerHTML = value.toString()+'%';
    if(value < 25) {
        progressBar.style.backgroundColor = '#dc3545';
    }
    if(value >= 25 && value <= 75){
        progressBar.style.backgroundColor = "#ffc107";
    }
    if(value > 75) {
        progressBar.style.backgroundColor = '#198754';
    }
}

function change_btn_color(){
    button = document.getElementsByClassName("btn btn-dark")[3];
    button.style.backgroundColor = '#'+(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6);

}

function add_product_to_list() {
    if(document.getElementById('shopping_list') == null){
        shopping_list = document.createElement('ul');
    } else {
        shopping_list = document.createElement('ul');
    }
    li = document.createElement('li');
    if(document.getElementById('product_name').value == ''){
        return;
    }
    li.appendChild(document.createTextNode(document.getElementById('product_name').value));
    shopping_list.appendChild(li);
    element_after = document.getElementsByTagName('p')[2];
    element_after.appendChild(shopping_list);
}

function change_background_color(){
    document.body.style.backgroundColor = '#'+(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6);
}

function change_bg_color() {
    document.getElementById('square').style.backgroundColor = '#'+(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6);
}

function change_title(){
    title = document.getElementsByClassName("navbar-brand")[0];
    if(document.getElementById('title_val').value == ''){
        return;
    }
    title.innerHTML = document.getElementById('title_val').value;
}

function draw_figure(){
    width = document.getElementById('width').value;
    height = document.getElementById('height').value;

    if (document.getElementById('figure') != null){
        document.getElementsByClassName('feature')[0].removeChild(document.getElementById('figure'))
    }

    figure = document.createElement('div');
    figure.id = 'figure';
    figure.style.width = width.toString()+'px';
    figure.style.height = height.toString()+'px';
    figure.style.border = '4px solid black';
    document.getElementsByClassName("feature")[0].appendChild(figure);
}

function figure_fill(){
    draw_figure()
    color = document.getElementById('color_fill').value;
    figure = document.getElementById('figure');
    figure.style.backgroundColor = color;
}

function show_image(){
    img_path = document.getElementById('img_path').value;
    img_path = img_path.replace("C:\\fakepath\\", "");
    if(document.getElementById('image') !=null || img_path==''){
        return;
    }
    image = document.createElement('img');
    image.id = 'image';
    image.src = img_path;
    image.style.width = "400px";
    console.log(image);
    document.getElementsByClassName('feature')[0].appendChild(image);
}

function resize_image(){
    if(document.getElementById('image') == null){
        return;
    }
    image = document.getElementById('image');
    image.style.width = (document.getElementById('size_range').value * 3).toString()+'px';
}

function say_hello(){
    name_value = document.getElementById('name_val').value;
    if(name_value == ''){
        return;
    }
    welcome = document.createElement('p')
    welcome.innerHTML = "Witaj na mojej stronie, "+name_value+"!";
    element_before = document.getElementsByTagName('p')[1];
    element_before.appendChild(welcome);
}

function change_button_value(){
    button_text = document.getElementById('button_value').value;
    if(button_text == ''){
        return;
    }
    buttons = document.getElementsByClassName('btn btn-dark');
    for(let i= 0; i<buttons.length;i++){
        buttons[i].innerHTML = button_text;
        console.log(buttons[i]);
    }
}
function change_button_color(){
    button_color = document.getElementById("button_bg_color").value;
    buttons = document.getElementsByClassName('btn btn-dark');
    for(let i= 0; i<buttons.length;i++){
        buttons[i].style.backgroundColor = button_color;
    }
}