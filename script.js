let cardNumber = document.getElementsByClassName("card-numbers");
let card1 = document.querySelector("#card-1");
let card2 = document.querySelector("#card-2");
let card3 = document.querySelector("#card-3");

card2.style.display = "none";
card3.style.display = "none";

function activePage(){
    for (p of cardNumber){
        p.classList.remove("active");       
    }
    event.target.classList.add("active");
    currentValue = event.target.value;

    if(currentValue == 1){
        card1.style.display = "flex";
        card2.style.display = "none";
        card3.style.display = "none";
    } else if(currentValue == 2){
        card1.style.display = "none";
        card2.style.display = "flex";
        card3.style.display = "none";
    } else if(currentValue == 3){
        card1.style.display = "none";
        card2.style.display = "none";
        card3.style.display = "flex";
    }
}

let viewAllData = document.querySelector(".hidden-transactions");

let flag = 0;

function viewAll(){
    if(flag == 0){
        viewAllData.style.display = "block";
        flag = 1;
    } else if(flag == 1){
        viewAllData.style.display = "none";
        flag = 0;
    }
}

let closed = document.querySelector(".icon-hide");
let opened = document.querySelector(".icon-show");
let closed2 = document.querySelector(".icon-hide-2");
let opened2 = document.querySelector(".icon-show-2");

let money = document.querySelector(".value-balance");
let moneyHide = document.querySelector(".value-balance-hide");
let money2 = document.querySelector(".value-balance-2");
let moneyHide2 = document.querySelector(".value-balance-hide-2");

opened.style.display = "none";
money.style.display = "none";
opened2.style.display = "none";
money2.style.display = "none";
let eyes = 0;

function viewBalance(){
    if(eyes == 0){
        opened.style.display = "block";
        closed.style.display = "none";
        opened2.style.display = "block";
        closed2.style.display = "none";
        money.style.display = "block";
        money2.style.display = "block";
        moneyHide.style.display = "none";
        moneyHide2.style.display = "none";
        eyes = 1;
    } else if (eyes == 1){
        opened.style.display = "none";
        closed.style.display = "block";
        opened2.style.display = "none";
        closed2.style.display = "block";
        money.style.display = "none";
        money2.style.display = "none";
        moneyHide.style.display = "block";
        moneyHide2.style.display = "block";
        eyes = 0;
    }
}
