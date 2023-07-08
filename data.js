let quote = document.getElementById("Quotes");
let btn = document.getElementById("btn");
let author = document.getElementById("author");
let url = "http://api.quotable.io/random";

let getQuote = () => {
    fetch(url).then(data => {
        return data.json();
    }).then((item) => {
        quote.innerText = `"${item.content}"`;
        author.innerText = item.author;
    });
};

window.addEventListener("load", getQuote);
btn.addEventListener("click", getQuote);
