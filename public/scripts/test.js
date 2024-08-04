const btnFetch = document.getElementById("btn-fetch");
const input = document.getElementById("input-username");
const eId = document.querySelector("#edit-user input:nth-child(1)");
const eUsername = document.querySelector("#edit-user input:nth-child(2)");
const ePassword = document.querySelector("#edit-user input:nth-child(3)");
const eButton = document.querySelector("#edit-user button");

btnFetch.addEventListener("click", async () => {
  const users = await fetchData();
  console.log(users);
});

eButton.addEventListener("click", async () => {
  console.log(await fetchEdit());
});

async function fetchData() {
  try {
    const res = await fetch(`/users/username/${input.value.trim()}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("An error has occurred:", error);
    return null;
  }
}

async function fetchEdit() {
  const res = await fetch("/users/edit", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: eId.value,
      username: eUsername.value,
      password: ePassword.value,
    }),
  });
  const data = await res.json();
  return data;
}
