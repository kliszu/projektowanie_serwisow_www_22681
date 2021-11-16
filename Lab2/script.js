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
    li.appendChild(document.createTextNode(document.getElementById('product_name').value));
    shopping_list.appendChild(li);
    element_after = document.getElementsByTagName('p')[2];
    element_after.appendChild(shopping_list);
}

function change_background_color(){
    document.body.style.backgroundColor = '#'+(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6);
}