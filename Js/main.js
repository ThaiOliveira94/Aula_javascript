function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";

   // console.log(document.getElementById("agradecimento"));
   // alert ("obrigado por clicar")
}
function redirecionar(){
    //window.open("https://www.disneyplus.com/pt-br/home");// outra janela
    //window.location.href = "https://www.disneyplus.com/pt-br/home";//mesma janela
}

function trocar (elemento){
   // document.getElementById ("mousemove"). innerHTML = "Obrigado por passar o mouse"
   elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar (elemento){
    //document.getElementById ("mousemove"). innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}
 
function load (){
    alert ("pagina carregada");
}

function funcaoChange (elemento){
    console.log (elemento.value)
}

/*function soma(n1, n2) {
    return n1 + n2;
}
function validarIdade(idade) {
    var validar;
    if (idade >= 18) {
        validar = true
    } else {
        validar = false
    }
    return validar;
}

var idade = prompt("Qual sua idade?");
console.log(validarIdade(idade));
/*


/*var d = new Date();
alert(d);
/*
//alert (d.getDate());
//alert(d.getMonth()+1);
//alert (d.getTime());




/*
var count;
for(count = 0; count <= 5; count++){
    alert (count);
}
/*

/*
var count = 0;
while (count <= 10 ){
    console.log (count)
    alert (count);
    count ++
}
/*


/*var idade = prompt("Qual sua idade?");
if (idade >= 18){
alert ("maior de idade");
}else {
    alert("menor de idade");
};
/*




/*
var frutas = [{nome: "maça", cor:"vermelha"},{nome: "uva", cor:"roxa"}]
console.log(frutas).nome;
alert(frutas.cor);
/*


/*
var fruta = {nome: "maça", cor:"vermelha"}
console.log(fruta).nome;
alert(fruta.cor);
/*




//var lista = [ "maça", "pera","laranja"];
//lista.push("uva");
//lista.pop();
//console.log(lista);
//console.log (lista.length);
//console.log (lista.reverse());
//console.log(lista.tostring());
//console.log(lista.join("  ")) //coloca o que vc quer entre as letras



/*var nome ="Thai Oliveira";
var n1 = 26;
var n2 = 10;
var frase = "Japão e o pior time do mundo";
//alert(nome + "tem" + idade);
//alert( idade + idade2);
console.log(nome);
console.log(n1 * n2);
console.log (frase.replace("japao", "Brasil"));
alert(frase.replace("Japão","Brasil"));*/