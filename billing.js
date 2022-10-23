
var unitPrices = document.querySelectorAll(".unit_price");
// console.log(unitPrices);
var quantities = document.querySelectorAll(".quantity");
var calculateButtons = document.querySelectorAll(".btn");
// console.log(calculateButtons);
var prices = document.querySelectorAll(".amount");
var totalButton=document.querySelector('.totalBtn');
// console.log(totalButton);
var totalAmount=document.querySelector('.totalAmt');
// console.log(totalAmount);

function calculation() {
    var price = unitPrices[this.i].value * quantities[this.i].value;
    prices[this.i].innerText = price;
}
calculateButtons.forEach((button,index)=>{
    button.addEventListener("click", calculation);
    button.i = index;
});
function total(){
    var total=parseInt(prices[0].innerText)+parseInt(prices[1].innerText)+parseInt(prices[2].innerText)+parseInt(prices[3].innerText)+parseInt(prices[4].innerText);
    totalAmount.innerText=total;
}
    
totalButton.addEventListener('click',total);


