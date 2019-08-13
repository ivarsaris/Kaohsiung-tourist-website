function sendMail(contactForm) {
    emailjs.send("gmail", "kaohsiung_tourist_website", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "days": contactForm.days.value,
        "phone_number": contactForm.phone.value,
        "traveling_from": contactForm.travelingFrom.value,
        "budget": contactForm.budget.value,
        "message": contactForm.message.value,
    })
    .then(
        function(response) {
            console.log("success", response);
        },
        function(error) {
            console.log("fail!", error);
        });
}