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