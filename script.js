let header = document.querySelector('header');
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    navbar.classList.toggle('active');
}

// darkmode

let darkmode = document.querySelector('#darkmode');

darkmode.onclick = () => {
    if (darkmode.classList.contains('bx-moon')) {
        darkmode.classList.replace('bx-moon', 'bx-sun');
        document.body.classList.add('active');
    }
    else {
        darkmode.classList.replace('bx-sun', 'bx-moon');
        document.body.classList.remove('active');
    }
}

// Email.js link

function sendMail() {
    var params = {
        name: document.getElementById("fullName").value,
        email: document.getElementById("email_id").value,
        message: document.getElementById("message").value
    };
    const serviceID = "service_4bsnren";
    const templateID = "template_muadp78";

    emailjs.send(serviceID, templateID, params).then((res) => {
        document.getElementById("fullName").value = "";
        document.getElementById("email_id").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Your Message sent successfully");
    })
        .catch((err) => console.log(err));
}


