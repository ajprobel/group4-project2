const loginHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector("#username-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();
  console.log(username);
  if (username && password) {
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Oops! Failed to login.");
    }
  }
};
document.querySelector(".login-form").addEventListener("submit", loginHandler);

const makeActHandler = async (event) => {
  event.preventDefault();
  window.location.replace("/makeaccount");
};

document.querySelector("#make-acct").addEventListener("click", makeActHandler);
