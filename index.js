function myFunction() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  // const togglePassword = document.querySelector("#togglePassword");
  //  const password = document.querySelector("#password");
  //   togglePassword.addEventListener("click", function () {
  //      // toggle the type attribute 
  //      const type = password.getAttribute("type") === "password" ? "text" : "password"; password.setAttribute("type", type); 
  //      // toggle the icon
  //       this.classList.toggle("bi-eye"); });