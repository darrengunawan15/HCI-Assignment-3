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

let viewAllData = document.querySelector(".hidden-transactions")

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
