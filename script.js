let selectedGame = "";

const packages = {

PUBG: [
{ name:"60 UC", price:3500 },
{ name:"325 UC", price:14000 },
{ name:"660 UC", price:28000 },
{ name:"1800 UC", price:70000 }
],

"Free Fire": [
{ name:"100 جوهرة", price:2800 },
{ name:"310 جوهرة", price:7000 },
{ name:"520 جوهرة", price:12000 },
{ name:"1060 جوهرة", price:24000 }
],

"FC Mobile": [
{ name:"105 FC Points", price:2800 },
{ name:"520 FC Points", price:12000 },
{ name:"1070 FC Points", price:24000 },
{ name:"2200 FC Points", price:47000 }
]

};

function selectGame(card, game){

selectedGame = game;

document.querySelectorAll(".card").forEach(c=>{
c.classList.remove("selected");
});

card.classList.add("selected");

let select=document.getElementById("package");

select.innerHTML="<option value=''>اختر الباقة</option>";

packages[game].forEach(item=>{

select.innerHTML+=`
<option value="${item.name}" data-price="${item.price}">
${item.price.toLocaleString()} جنيه سوداني = ${item.name}
</option>
`;

});

}

function goPayment(){

let pack=document.getElementById("package");

if(selectedGame==""){
alert("اختر اللعبة");
return;
}

if(pack.value==""){
alert("اختر الباقة");
return;
}

localStorage.setItem("game",selectedGame);
localStorage.setItem("package",pack.value);
localStorage.setItem("amount",pack.options[pack.selectedIndex].dataset.price);

location.href="payment.html";

}