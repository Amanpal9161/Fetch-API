const userContainer = document.getElementById("userContainer");
const reloadBtn = document.getElementById("reloadBtn");

async function fetchUserData() {
  userContainer.innerHTML = "Loading users...";

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    const users = await response.json();
    displayUsers(users);
  } catch (error) {
    userContainer.innerHTML = `<p style="color: red;">Error fetching data: ${error.message}</p>`;
  }
}

function displayUsers(users) {
  userContainer.innerHTML = ""; // Clear previous content

  users.forEach((user) => {
    const userCard = document.createElement("div");
    userCard.classList.add("user-card");

    userCard.innerHTML = `
      <h3>${user.name}</h3>
      <p><strong>Email:</strong> ${user.email}</p>
      <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
    `;

    userContainer.appendChild(userCard);
  });
}

reloadBtn.addEventListener("click", fetchUserData);

fetchUserData();
