const btnFetch = document.getElementById("btn-fetch");
const input = document.getElementById("input-username");

btnFetch.addEventListener("click", async () => {
  const users = await fetchData();
  console.log(users);
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
