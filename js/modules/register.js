function register() {
  // Select the form
  const registerForm = document.getElementById("registerForm");
  // Check if the form doesn't exists
  if (!registerForm) return;

  // Add an event listener to the form for prevent the default submit
  registerForm.addEventListener("submit", (event) => {
    event.preventDefault();

    // Remove all error message
    const errorMessage = document.querySelectorAll("form p");
    errorMessage.forEach((p) => p.remove());

    // Define error to false
    let error = false;

    // Retrieve all inputs
    const inputs = document.querySelectorAll("input");
    // Loop through retrieved inputs to check if the value is not provide
    inputs.forEach((input) => {
      if (input.value.trim() === "") {
        error = true;
        // Create a paragraph
        const paraph = document.createElement("p");
        paraph.textContent = "veuillez renseigner ce champ";
        paraph.style.color = "red";
        input.insertAdjacentElement("afterend", paraph);
      }
    });

    // Retrieve email value and Check if the email provided is correct
    const email = document.getElementById("email").value.trim();
    if (!email.includes("@") || !email.includes(".")) {
      error = true;
      const emailInput = document.getElementById("email");
      const p = document.createElement("p");
      p.textContent = "Adresse email invalide";
      p.style.color = "red";
      emailInput.insertAdjacentElement("afterend", p);
    }

    // Check if passwords matched
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document
      .getElementById("confirm_password")
      .value.trim();

    if (password !== confirmPassword) {
      error = true;
      const confirmPasswordInput = document.getElementById("confirm_password");
      const p = document.createElement("p");
      p.textContent = "Les mots de passe ne correspondent pas";
      p.style.color = "red";
      confirmPasswordInput.insertAdjacentElement("afterend", p);
    }

    // Check if error is false for create an user
    if (!error) {
      const user = {
        firstName: document.getElementById("first_name").value,
        lastName: document.getElementById("last_name").value,
        email: email,
        password: password,
      };

      // Store the user to the local store
      localStorage.setItem("user", JSON.stringify(user));
      alert("Inscription réussie");

      // Reset the form
      registerForm.reset();
      // Redirect to the login page
      window.location.href = "../templates/login.html";
    }
  });
}
export { register };
