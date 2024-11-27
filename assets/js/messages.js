document.getElementById("sendEmail").addEventListener("click", function () {
    const name = document.getElementById("name-1").value;
    const email = document.getElementById("email-1").value;
    const message = document.getElementById("message-1").value;

    const subject = encodeURIComponent("Message from Contact Form");
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);

    window.location.href = `mailto:pexpert46@gmail.com?subject=${subject}&body=${body}`;
});
document.getElementById("sendWhatsApp").addEventListener("click", function () {
    const name = document.getElementById("name-1").value;
    const email = document.getElementById("email-1").value;
    const message = document.getElementById("message-1").value;

    const whatsappNumber = "+256760341361"; // Your WhatsApp number
    const whatsappMessage = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;

    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, "_blank");
});
