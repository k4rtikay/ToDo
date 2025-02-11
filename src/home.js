export function loadHome(){
    const headerText = document.querySelector('.headerText');
    headerText.textContent='Whisker Haven';

    const content = document.getElementById('content');
    
    content.innerHTML=`
    <div class="bodyContent">Step into Whisker Haven, a cozy and welcoming cat café where relaxation and furry companionship come together. Our café is the perfect spot to unwind, sip on a freshly brewed coffee, and spend quality time with our friendly, adoptable cats. Whether you're looking for a quiet corner to read, a spot to catch up with friends, or just some playful feline antics to brighten your day, there's something for everyone. Enjoy a selection of delicious pastries, light bites, and specialty drinks while our cats roam freely, offering purrs, cuddles, and playful moments. It’s not just a café – it’s a little escape where every visit feels like home.</div>
    <img src="https://images.unsplash.com/photo-1655629831927-aab93514acc6?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="a woman feeding a cat" class="homeImg">
    `;

    document.querySelector('header').appendChild(headerText);
}