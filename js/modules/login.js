function login() {
  const loginForm = document.getElementById("loginForm");
  // Check if the form exists
  if (!loginForm) return;
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    // Remove all error message
    const errorMessage = document.querySelectorAll("form p");
    errorMessage.forEach((p) => p.remove());
    let error = false;
    // Retrieve the user to the local store
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user);

    // check if the user exists
    if (!user) {
      const p = document.createElement("p");
      p.textContent = "Aucun utilisateur enregistré.";
      p.style.color = "red";
      loginForm.prepend(p);
      return;
    }
    // Retrieve inputs data
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    // Check if the email not match with the retrieve email
    if (email !== user.email) {
      error = true;
      // Create a paragraph
      const paraph = document.createElement("p");
      paraph.textContent =
        "l'utilisateur avec cette addresse email, n'existe pas.";
      paraph.style.color = "red";
      loginForm.prepend(paraph);
    }
    // Check if passwords match
    if (password !== user.password) {
      error = true;
      // Create a paragraph
      const paraph = document.createElement("p");
      paraph.textContent = "mot de passe incorrect.";
      paraph.style.color = "red";
      loginForm.prepend(paraph);
    }
    if (!error) {
      // sto the connect user to the local storage
      const connectUserFirstName = user.firstName;
      localStorage.setItem("connectUserFirstName", connectUserFirstName);
      // Redirect to the home page
      window.location.href = "../templates/home.html";
    }
  });
}
export { login };
