document.getElementById('BasicInfoForm').addEventListener('submit', function(e) {
    e.preventDefault(); 

    document.querySelectorAll(".error").forEach(el => el.textContent = "");

    const firstname = this.firstname.value.trim();
    const lastname = this.lastname.value.trim();
    const email = this.email.value.trim();
    const phone = this.phone.value.trim();
    const gender = this.querySelector('input[name="gender"]:checked');
    const message = this.message.value.trim();
    const terms = this.terms.checked;
    const dob = this.dob.value;
    
    const hobbies = [];
    this.querySelectorAll('input[name="hobbies"]:checked').forEach(cb => hobbies.push(cb.value));
    const newsletter = this.newsletter.checked;
    const promo = this.promo.checked;

    const nameRegex = /^[A-Za-z][A-Za-z\s]{4,}$/;
    const lastRegex = /^[A-Za-z][A-Za-z\s]{4,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{7,}$/;  

    let valid = true;

    if (!firstname) {
        document.getElementById("firstnameError").textContent = "First Name is required.";
        valid = false;
    } else if (!nameRegex.test(firstname)) {
        document.getElementById("firstnameError").textContent = "First Name must be at least 5 characters.";
        valid = false;
    }

    if (!lastname) {
        document.getElementById("lastnameError").textContent = "Last Name is required.";
        valid = false;
    } else if (!lastRegex.test(lastname)) {
        document.getElementById("lastnameError").textContent = "Last Name must be at least 5 characters.";
        valid = false;
    }


    if (!email) {
        document.getElementById("emailError").textContent = "Email is required.";
        valid = false;
    } else if (!emailRegex.test(email)) {
        document.getElementById("emailError").textContent = "Please enter a valid email format.";
        valid = false;
    }

   
    if (!phone) {
        document.getElementById("phoneError").textContent = "Phone number is required.";
        valid = false;
    } else if (!phoneRegex.test(phone)) {
        document.getElementById("phoneError").textContent = "Phone number must be at least 7 digits.";
        valid = false;
    }


    if (!gender) {
        document.getElementById("genderError").textContent = "Please select your gender.";
        valid = false;
    }

    if (!message) {
        document.getElementById("messageError").textContent = "Message is required.";
        valid = false;
    }

    if (!terms) {
        document.getElementById("termsError").textContent = "You must agree to the Terms & Conditions.";
        valid = false;
    }
    if (hobbies.length === 0) {
        document.getElementById("hobbyError").textContent = "Please select at least one hobby.";
        valid = false;
    }

    if (!dob) {
        document.getElementById("dobError").textContent = "Please select your date of birth.";
        valid = false;
    }

    if (valid) {
        const formData = {
            firstname,
            lastname,
            email,
            phone,
            dob,
            gender: gender.value,
            hobbies,
            message,
            newsletter,
            terms,
            promo
        };

        console.log('Form Data Submitted:', formData);
        alert('Form submitted successfully! Check the console for data.');
        this.reset();
    }
});
