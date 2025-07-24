const jokes = document.querySelector("#jokes");
const btn = document.querySelector("#btn");
const URL = "https://official-joke-api.appspot.com/random_joke";
const getJokes = async()=>{
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    jokes.innerHTML = data.setup +"<br>"+ data.punchline;
}
btn.addEventListener("click", async () => {
      jokes.textContent = "Loading joke... 😂";
});
btn.addEventListener("click", getJokes);