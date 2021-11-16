function random_style(){
    p = document.getElementById('text');
    var words = p.innerHTML.split(" ");
    for(var i=0;i<words.length;i++){
       //your code here 
    }
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