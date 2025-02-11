export function loadMenu(){

    const content = document.getElementById('content');
    content.innerHTML=`
    <div class="menuitem">
        <div class="itemDes">🍮 Golden Whisker Pudding -- A silky caramel custard with a glossy golden caramel top. Light, creamy, and melt-in-your-mouth delicious, it's the perfect dessert for a sweet and comforting indulgence.</div>
        <img src="https://images.unsplash.com/photo-1702728052103-69473aa7ed77?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Caramel Pudding" class="itemImg">
    </div>
    <div class="menuitem">
        <div class="itemDes">🍙 Nyan Rice Balls -- Cute and tasty Japanese onigiri shaped like tiny cat faces! Filled with flavorful ingredients and wrapped in crisp nori, they're the perfect savory snack to enjoy with a warm drink.</div>
        <img src="https://plus.unsplash.com/premium_photo-1674062989255-8300787d0944?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Japanese Rice Balls" class="itemImg">
    </div>
    <div class="menuitem">
        <div class="itemDes">🐾 Purrfect Hot Chocolate -- A rich, velvety hot cocoa topped with fluffy whipped cream and a sprinkle of chocolate shavings. Served with an adorable cat-shaped marshmallow for the ultimate cozy treat.</div>
        <img src="https://images.unsplash.com/photo-1518274953354-99dec5dc065f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Hot chocolate" class="itemImg">
    </div>
    `;

}