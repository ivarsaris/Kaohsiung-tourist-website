// function which sends a filled out e-mail template to the website owner requestions a 
// custom tailored holiday
function sendMail(contactForm) {
  // used emailjs, a free e-mail service
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
        // to stop from reloading page
        return false;
}