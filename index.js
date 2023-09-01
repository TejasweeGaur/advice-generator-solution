const adviceId = document.querySelector(".adviceId");
const adviceText = document.getElementById("adviceText");
const getAdvice = document.querySelector(".adviceGetter");
let counter = 2;
const url = new URL("https://api.adviceslip.com/advice/");

// https://api.adviceslip.com/advice/1

getAdvice.addEventListener("click", async () => {
    getAdvice.classList.add("fetch");
    const { id, advice } = await fetchAdvice();
    setTimeout(() => {
        getAdvice.classList.remove("fetch");
    }, 800);
    adviceId.innerText = id;
    adviceText.innerText = `"${advice}"`;
});

async function fetchAdvice() {
    try {
        const respoonse = await fetch(`${url}${counter}`);
        const data = await respoonse.json();
        const { id, advice } = await data.slip;
        counter++;
        return { id, advice };
    } catch (err) {
        adviceText.innerHTML = "<h3 id='errorText'>Error fetching the advice right now. Please try again later !!</h3>";
        console.error(err);
    }
}
