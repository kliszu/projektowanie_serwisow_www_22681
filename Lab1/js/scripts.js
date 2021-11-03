/*!
* Start Bootstrap - Bare v5.0.7 (https://startbootstrap.com/template/bare)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-bare/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

const Products = ["Banan", "Truskawki", "Wiśnie", "Arbuz", "Śliwki","Borówki","Winogrona","Awokado","Kaki","Mango"];
var total_price = 0.00;

function change_backgroud_color(){
    var color_rgb = document.getElementById("change-bg").value;
    document.getElementById("letter").style.backgroundColor = color_rgb;
};

function get_current_date(){
    let currentDate = new Date();
    let cDay = currentDate.getDate();
    let cMonth = currentDate.getMonth() + 1;
    let cYear = currentDate.getFullYear();
    var formatted_date = + cDay + "/" + cMonth + "/" + cYear;
    return formatted_date;
}

function generate_summary() {
    if (document.body.contains(document.getElementById("order_summary")) == true ){
        document.getElementById("order_summary").remove();
    }
    var summary_form = document.createElement("div");
    summary_form.id = "order_summary";
    document.getElementsByClassName("container")[1].parentNode.insertBefore(summary_form, document.getElementsByClassName("container")[1].nextElementSibling);

    var date = document.createElement("p");
    date.style.textAlign = "right";
    date.innerHTML = "Gdynia, " + get_current_date();
    
    var client_data = document.createElement('p');
    client_data.innerHTML = "Imię i Nazwisko: "+document.getElementById("name").value;
    
    var client_mail = document.createElement("p");
    client_mail.innerHTML =  "Email: "+document.getElementById('email').value;
    
    var header = document.createElement('h2');
    header.style.fontWeight = "bolder";
    header.style.textAlign = "Center";
    header.innerHTML = "Zamówienie";
    
    var label_name = document.createElement("p");
    label_name.innerHTML = "Nazwa";
    label_name.style.fontWeight = "bolder";
    label_name.style.float = "Left";
    
    var label_quantity = document.createElement("p");
    label_quantity.innerHTML = "Cena";
    label_quantity.style.fontWeight = "bolder";
    label_quantity.style.textAlign = "right";

    var label_total = document.createElement("p");
    label_total.innerHTML = "Łącznie";
    label_total.style.fontWeight = "bolder";
    label_total.style.float = "Left";

    var label_total_price = document.createElement("p");
    label_total_price.style.textAlign = "Right";

    var label_sign = document.createElement("p");
    label_sign.innerHTML = "Podpis nabywcy";
    label_sign.style.textAlign = "center";
    label_sign.style.padding = "5px";
    label_sign.style.width = "10em";
    label_sign.style.borderTop = "4px solid black";

    picks = document.getElementsByClassName("form-check-input");

    form = document.getElementById("order_summary");

    form.appendChild(date);
    form.appendChild(client_data);
    form.appendChild(client_mail);
    for(let i = 0; i<=3; i++){
        form.appendChild(document.createElement('br'));
    }
    form.appendChild(header)
    form.appendChild(document.createElement('br'));
    form.appendChild(label_name);
    form.appendChild(label_quantity);
    form.appendChild(document.createElement("hr"));

    for(let i = 0; i < picks.length; i++){
        if(picks[i].checked == true){
            
            var item = document.createElement("p");
            item.innerHTML = Products[picks[i].value];
            item.style.float = "Left";

            var price = document.createElement("p");
            let price_value = (Math.random() * (10.00 - 1.00 + 1.00) + 1.00);
            total_price =total_price + price_value;
            price.innerHTML = price_value.toFixed(2);
            price.style.textAlign = "right";

            form.appendChild(item)
            form.appendChild(price)
            form.appendChild(document.createElement("hr"));
        }
    
    }
    label_total_price.innerHTML = total_price.toFixed(2);
    form.appendChild(label_total);
    form.appendChild(label_total_price);
    for(let i = 0; i<=10; i++){
        form.appendChild(document.createElement('br'));
    }
    form.appendChild(label_sign);

};