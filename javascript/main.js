let search = document.getElementById('search-btn');
let navbtn=document.getElementById('nav-btn');
let cartbtn=document.getElementById('cart-btn')
let form = document.querySelector('.search-form');
let nav=document.querySelector('.navbar');
let cart=document.querySelector('.cart-items-container');
let arrow=document.getElementById('bt');


search.onclick = () => {
        form.classList.toggle('active');
        nav.classList.remove('active');
        cart.classList.remove('active')
        
}
navbtn.onclick = () => {
    form.classList.remove('active');
    nav.classList.toggle('active');
    cart.classList.remove('active')
    
}
cartbtn.onclick = () => {
    form.classList.remove('active');
    nav.classList.remove('active');
    cart.classList.toggle('active')
    
}

arrow.onclick=() =>{
        scroll({
            top:0,
            behavior:"smooth"
        })
}

window.onscroll = () =>{
    form.classList.remove('active');
    nav.classList.remove('active');
    cart.classList.remove('active');
    if (window.scrollY >= 716) {
        arrow.style.display = 'block';
    } else {
        arrow.style.display = 'none';
    }
}
