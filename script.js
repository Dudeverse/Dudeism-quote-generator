const generateQuote = function() {
    const quotes = [
    {   quote: "Time you enjoy wasting is not wasted time",
        author: "- Bertrand Russel"},
    {
        quote: " Boredom is the feeling that everything is a waste of time; serenity, that nothing is.",
        author: "- Thomas Szasz"
    },
    {
        quote: "Light-hearted people take serious things lightly and light things seriously.",
        author: "—Maria de Beausacq."
    },
    {
        quote: "Real action is in silent moments.",
        author: "- Ralph Waldo Emerson"
    },
    {
        quote: "Being different isn't a bad thing. I mean that you are brave enough to be yourself.",
        author: "- Luna Lovegood"
    },
    {
        quote: "If you learn to bend, then you need not break.",
        author: "- Kwai Chang Caine, Kung Fu: The Legend Continues"
    },
    {
        quote: "Think for yourselves and let others enjoy the privilege to do so, too.",
        author: "- Voltaire"
    },
    {
        quote: "Do what you can, with what you have, where you are.",
        author: "- Theodore Roosevelt"
    },
    {
        quote: "The first human being who hurled an insult instead of a stone was the founder of civilization.",
        author: "- Sigmund Freud"
    },
    {
        quote: "The happiest years go by and we fail to recognize them for what they are. They are obscured by petty annoyances, present anxieties, or dreams for the future.",
        author: "- Carobeth Laird, Encounter with an Angry God"
    },
    {
        quote: "And which of you by being anxious can add one cubit to his span of life?",
        author: "- Jesus Christ, Luke 12:25"
    }
];
let arrayIndex = Math.floor(Math.random() * quotes.length);
console.log(arrayIndex);
document.getElementById("quotes").textContent = quotes[arrayIndex].quote;
document.getElementById("author").textContent = quotes[arrayIndex].author;


}
window.onload = function() {
    generateQuote();
    document.getElementById("generate").addEventListener('click', generateQuote);
}



