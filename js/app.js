
// When page loads
window.onload = function () {

    let user = localStorage.getItem("user");

    if (!user) {
        window.location.href = "login.html";
    }

    let userSpan = document.getElementById("user");

    if (userSpan) {
        userSpan.innerText = user;
    }

    showSkills();
};


// Login
function login() {

    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (user === "" || pass === "") {
        alert("Fill all fields");
        return;
    }

    localStorage.setItem("user", user);

    window.location.href = "dashboard.html";
}


// Add Skill
function addSkill() {

    let skill = document.getElementById("skill").value;
    let level = document.getElementById("level").value;

    if (skill === "" || level === "") {
        alert("Enter all data");
        return;
    }

    let skills = JSON.parse(localStorage.getItem("skills")) || [];

    skills.push({
        name: skill,
        level: level
    });

    localStorage.setItem("skills", JSON.stringify(skills));

    showSkills();
}


// Show Skills
function showSkills() {

    let skills = JSON.parse(localStorage.getItem("skills")) || [];

    let list = document.getElementById("skillList");

    if (!list) return;

    list.innerHTML = "";

    skills.forEach((s, i) => {

    list.innerHTML += `
    <li>
        <strong>${s.name}</strong> - ${s.level}%

        <div class="bar">
            <div class="fill" style="width:${s.level}%"></div>
        </div>

        <button onclick="deleteSkill(${i})">X</button>
    </li>`;
});
}


// Delete Skill
function deleteSkill(index) {

    let skills = JSON.parse(localStorage.getItem("skills"));

    skills.splice(index, 1);

    localStorage.setItem("skills", JSON.stringify(skills));

    showSkills();
}


// Logout
function logout() {

    localStorage.removeItem("user");

    window.location.href = "login.html";
}
