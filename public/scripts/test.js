const btnGetAll = document.getElementById("btn-get");
const fId = document.querySelector("#find-id input");
const fbutton = document.querySelector("#find-id button");
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
const lUsername = document.querySelector("#login-user input:nth-child(1)");
const lPassword = document.querySelector("#login-user input:nth-child(2)");
const lButton = document.querySelector("#login-user button");

btnGetAll.addEventListener("click", async () => {
  console.log(await fetchGetAll());
});

fbutton.addEventListener("click", async () => {
  console.log(await fetchGetId());
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

lButton.addEventListener("click", async () => {
  const data = await fetchLogin();
  if (data) {
    window.location.href = "templates/index2.html";
  }
});

async function fetchGetAll() {
  const res = await fetch("/api/user/find/all");
  const data = await res.json();
  return data;
}

async function fetchGetId() {
  const res = await fetch(`/api/user/find/id/${fId.value}`);
  const data = await res.json();
  return data;
}

async function fetchData() {
  try {
    const res = await fetch(`/api/user/find/username/${input.value.trim()}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("An error has occurred:", error);
    return null;
  }
}

async function fetchEdit() {
  const res = await fetch("/api/user/edit", {
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
  const res = await fetch("/api/user/create", {
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
  const res = await fetch(`/api/user/delete/id/${dId.value}`, {
    method: "DELETE",
  });
  const data = res.json();
  return data;
}

async function fetchLogin() {
  const res = await fetch("/api/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: lUsername.value,
      password: lPassword.value,
    }),
  });
  const data = await res.json();
  return data;
}
