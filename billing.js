
var unitPrices = document.querySelectorAll(".unit_price");
var quantities = document.querySelectorAll(".quantity");
var calculateButtons = document.querySelectorAll(".button");
var prices = document.querySelectorAll(".amount");
function calculation() {
    var price = unitPrices[this.i].value * quantities[this.i].value;
    prices[this.i].innerText = price;
}

calculateButtons.forEach((button,index)=>{
    button.addEventListener("click", calculation);
    button.i = index;
});


