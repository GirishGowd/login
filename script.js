document.addEventListener("DOMContentLoaded", function () {
    var loginBtn = document.getElementById("loginBtn");
    var registerBtn = document.getElementById("registerBtn");
    var loginForm = document.getElementById("login");
    var registerForm = document.getElementById("register");

    function login() {
        loginForm.style.left = "4px";
        registerForm.style.right = "-520px";
        loginBtn.className += " white-btn";
        registerBtn.className = "btn";
        loginForm.style.opacity = 1;
        registerForm.style.opacity = 0;
    }

    function register() {
        loginForm.style.left = "-510px";
        registerForm.style.right = "5px";
        loginBtn.className = "btn";
        registerBtn.className += " white-btn";
        loginForm.style.opacity = 0;
        registerForm.style.opacity = 1;
    }

    window.login = login;
    window.register = register;

    document.querySelector("#register .submit").addEventListener("click", function () {
        var firstName = document.querySelector("#register input[placeholder='Firstname']").value;
        var lastName = document.querySelector("#register input[placeholder='Lastname']").value;
        var email = document.querySelector("#register input[placeholder='Email']").value;
        var password = document.querySelector("#register input[placeholder='Password']").value;

        if (firstName && lastName && email && password) {
            localStorage.setItem("user", JSON.stringify({
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password
            }));
            alert("Signup successful! You can now login.");
            login();
        } else {
            alert("Please fill all fields.");
        }
    });

    document.querySelector("#login .submit").addEventListener("click", function () {
        var email = document.querySelector("#login input[placeholder='Username or Email']").value;
        var password = document.querySelector("#login input[placeholder='Password']").value;
        var storedUser = JSON.parse(localStorage.getItem("user"));

        if (storedUser && storedUser.email === email && storedUser.password === password) {
            alert("Login successful! Welcome, " + storedUser.firstName + " " + storedUser.lastName + "!");
            window.location.href = "dashboard.html";  // Redirecting to the new page
        } else {
            alert("Invalid login credentials!");
        }
    });
});
