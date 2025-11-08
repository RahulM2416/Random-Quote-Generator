const quote = document.getElementById("quote");
const author = document.getElementById("author");
const btn = document.getElementById("btn");

const getQuote = async () => {
    try {
    const randomQuote = await fetch("https://quotes.domiadi.com/api");
    const data = await randomQuote.json();
    console.log(data);
    quote.textContent = `  ${data.quote}`;
    author.textContent = ` ~ ${data.from}`;

    } catch {
        quote.textContent = "Oops! Something went wrong..";
        author.textContent = "";
    }

} 
btn.addEventListener('click',getQuote);