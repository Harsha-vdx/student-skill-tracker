function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Simple demo login (change later)
  if (username === "admin" && password === "1234") {
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid username or password");
  }
}
