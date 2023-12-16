const quote = document.getElementById("quote");
const apiURL = "https://api.chucknorris.io/jokes/random";

async function getQuote(url) {
    const response = await fetch(url);
    var data = await response.json();
    console.log(data.value);
    quote.innerHTML = data.value
}

getQuote(apiURL);

function tweet() {
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML, "Tweet Window", "width=600, height=300");
}