const form = document.querySelector("form");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.querySelector('input[type="text"]').value;
    const email = document.querySelector('input[type="email"]').value;
    const message = document.querySelector("textarea").value;

    if (name === "" || email === "" || message === "") {

        alert("Please fill all the fields.");

    } else {

        alert("Thank you! Your message has been sent successfully.");

        form.reset();

    }

});