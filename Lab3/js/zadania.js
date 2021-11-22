var spaces = "                                                                                                        ";

function fixName(){
    var name = prompt("Podaj swoje imię");
    console.log("zadanie 2-2");
    console.log("wynik:");
    console.log("Imię "+name+" rozpoczyna się od litery "+name[0]);
}

function countWords(){
    var text = prompt("Podaj zdanie:");
    console.log("zadanie 2-1");
    word_num = text.split(' ').length;
    console.log("wynik:");
    console.log("Tekst \""+text+"\" składa się z "+word_num+" wyrazów");
}

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