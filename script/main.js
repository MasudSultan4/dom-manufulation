const div1 = document.getElementById('first');
const div2 = document.getElementById('second');
const div3 = document.getElementById('third');

const img = document.getElementById('art');

const desc = document.getElementById('desc');
const price = document.getElementById('price')

const free = document.getElementById('free');
const express = document.getElementById('express');

const shippingField = document.getElementById('shipping');
const total = document.getElementById('total');


free.addEventListener('click',function(){
    shippingField.innerText = '5';
    updatePrice();
})

express.addEventListener('click',function(){
  shippingField.innerText = '30'
  updatePrice()
})

function updatePrice() {
    const shippingCharge = Number(shippingField.innerText);
    const productPrice = Number(price.innerText);

    const grandTotal = shippingCharge + productPrice;
    total.innerText = grandTotal;
}

div1.addEventListener('click',function(){
    img.src = 'images/1.jpg';
    desc.innerText = "First - Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerumbeatae laboriosam, commodi quis tempore necessitatibus. Voluptatibus minima aut non doloremque?"
    price.innerText = "750"
    // chaing total value 
    total.innerText = price.innerText;
});
div2.addEventListener('click',function(){
    img.src = 'images/2.jpg';
    desc.innerText = "Second - Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerumbeatae laboriosam, commodi quis tempore necessitatibus. Voluptatibus minima aut non doloremque?";
    price.innerText = "550";
    // chaing total value 
    total.innerText = price.innerText;
});
div3.addEventListener('click',function(){
    img.src = "images/3.jpg";
    desc.innerText = "Third - Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerumbeatae laboriosam, commodi quis tempore necessitatibus. Voluptatibus minima aut non doloremque?"
    price.innerText = "330";
    // chaing total value 
    total.innerText = price.innerText;
});
