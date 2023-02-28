var name="Aden";


var x=15;
var y=25.89;
var xTostring=x.toString

var myString="Bonjour Mr Aden"

var positionAden=myString.indexOf("Aden")

var newstring= myString.replace("Mr Aden","M Hasna");

var string1='Salut!'
var string2="Comment allez-vous?"

var phrase= string1+" "+ string2

var xo=12;
var yo=5;

var result=xo%yo

// console.log(result)



/* BOOLEAN ET COMPARAISON*/ 

var xb= 4;
var yb=17;
var myboolean1=(x!==5);

var myboolean2=(xb>2 && yb<10);
var myboolean3=(xb>2 || yb<10);


console.log(myboolean2);
console.log(myboolean3);


/* CONDITION*/ 

var speed=40;

if(speed<80){ 
    if(speed<50){
        console.log("Acceleres un petit peu");
    }
    else{
    console.log("Tu roules a la bonne vitesse");}
}
else if(speed<100){
    console.log("il faut que tu ralentisses un petit peu");

}
else{
    console.log("Tu rolues beaucoup trop vite, c'est dangeurex!");
}

// syntaxe switch()

var favoriteColor= "Orange";

switch(favoriteColor)
{

    case "blue":
        console.log("Wouah! le blue c'est trop beau");
        break;
    case "red":
        console.log("J'aimerais bien une voiture rouge!");
        break;
    default:
        console.log("Je ne connais pas ta couleur!");
    


    

}




/* Boucles*/

var number=0;

while(number<3){
    console.log(number);
    number++;
}

console.log("-----------------------");
//////////////////

for(var number1=0; number1<5; number1++){
    console.log(number1);
}

console.log("-----------------------");

// FONCTION
function multiply(numb1,numb2){
    return numb1*numb2;
}

var a= 5;
var b=6;
var result1= multiply(a,b);

console.log(result1);

console.log("-----------------------");

var fruits=["Pomme","Banane","Orange","Citron"];


/*for(var i=0;i<fruits.length; i++){
    console.log(fruits[i]);
}*/
fruits.pop();
fruits.push("Kiwi");
console.log(fruits);


console.log("-----------------------");

//// Tableaux

var myArray1=["Pomme", 15, true];
var myArray2=[[0,1],[5,7,8],[12,18]];
console.log(myArray2[1]);


/// Objets

var Homme={
    name:"ADEN",
    color:"Black",
    age:24,
    profession:"Jeune diplome"
};
//console.log(Homme.age);

for(var property in Homme)
{
    console.log(Homme[property]);
}

var dog= new Object();
dog.name="Jean";
dog.age=4;
dog.color="White";
dog.aboie=function(number5)
{
    while(number5>0)
    {
        console.log(number5.toString()+"Wouaf");
        number5--;
    }
};

dog.aboie(4);