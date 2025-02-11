export function loadContact(){
    const content = document.getElementById('content');
    content.innerHTML=`
    <div class="contact">
        <h1 style="color:#8F2D56;">Contact Us</h1>
        <p>Got questions? Want to book a visit? We'd love to hear from you! Whether you're here for coffee, cuddles, or a forever friend, reach out to us anytime.</p>
        <h3 style="color:#8F2D56;">📍 Location:</h3>
        <p>Whisker Haven Cat Café</p>
        <p>123 Pawprint Lane, Meowtown, NY 10001</p>
        <h3 style="color:#8F2D56;">📞 Phone:</h3>
        <p>(555) 123-4567</p>
        <h3 style="color:#8F2D56;">📧 Email:</h3>
        <p><a href="">hello@whiskerhaven.com</a></p>
        <h3 style="color:#8F2D56;">⏰ Opening Hours:</h3>
        <p>Monday - Friday: 10:00 AM - 8:00 PM</p>
        <p>Saturday - Sunday: 9:00 AM - 9:00 PM</p>
        <h3 style="color:#8F2D56;">📝 Reservations:</h3>
        <p>We recommend booking ahead, especially on weekends! Secure your spot <a href="">here</a>.</p>
        <h3 style="color:#8F2D56;">📲 Follow Us:</h3>
        <p>🐾 Instagram: <a href="">@WhiskerHavenCafe</a></p>
        <p>🐾 Facebook: <a href="">Whisker Haven Cat Café</a></p>
        <p>🐾 TikTok: <a href="">@WhiskerHavenCats</a></p>
    </div>
    `;
    
}