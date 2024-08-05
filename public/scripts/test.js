const btnGetAll = document.getElementById("btn-get");
const btnFetch = document.getElementById("btn-fetch");
const input = document.getElementById("input-username");
const eId = document.querySelector("#edit-user input:nth-child(1)");
const eUsername = document.querySelector("#edit-user input:nth-child(2)");
const ePassword = document.querySelector("#edit-user input:nth-child(3)");
const eButton = document.querySelector("#edit-user button");
const cUsername = document.querySelector("#create-user input:nth-child(1)");
const cPassword = document.querySelector("#create-user input:nth-child(2)");
const cButton = document.querySelector("#create-user button");
const dId = document.querySelector("#delete-user input");
const dButton = document.querySelector("#delete-user button");

btnGetAll.addEventListener("click", async () => {
  console.log(await fetchGetAll());
});

btnFetch.addEventListener("click", async () => {
  const users = await fetchData();
  console.log(users);
});

eButton.addEventListener("click", async () => {
  console.log(await fetchEdit());
});

cButton.addEventListener("click", async () => {
  console.log(await fetchCreate());
});

dButton.addEventListener("click", async () => {
  console.log(await fetchDelete());
});

async function fetchGetAll() {
  const res = await fetch("/users/all");
  const data = await res.json();
  return data;
}

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

async function fetchCreate() {
  const res = await fetch("/users/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: cUsername.value,
      password: cPassword.value,
    }),
  });
  const data = await res.json();
  return data;
}

async function fetchDelete() {
  const res = await fetch(`/users/delete/${dId.value}`, {
    method: "DELETE",
  });
  const data = res.json();
  return data;
}
