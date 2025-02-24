async function getBibleQuotes() {
    try {
        const response = await fetch('bible_quotes.json');
        const bibleQuotes = await response.json();
        return bibleQuotes;
    } catch (error) {
        console.error("Error loading Bible quotes:", error);
        return [];
    }
}

async function getImages() {
    try {
        const response = await fetch('/pic/');
        const text = await response.text();
        const parser = new DOMParser();
        const htmlDoc = parser.parseFromString(text, "text/html");
        const imageList = Array.from(htmlDoc.getElementsByTagName("a"))
            .map(a => a.href)
            .filter(href => href.match(/\.(jpg|jpeg|png|gif)$/i))
            .map(href => new URL(href).pathname);

        return imageList;
    } catch (error) {
        console.error("Error loading images:", error);
        return [];
    }
}

function setDailyContent(bibleQuotes, images) {
    const today = new Date().toISOString().split('T')[0];
    const storedData = JSON.parse(localStorage.getItem('dailyContent')) || {};

    if (storedData.date === today) {
        document.getElementById('quote').innerText = storedData.quote;
        document.body.style.backgroundImage = `url(${storedData.image})`;
        return;
    }

    const randomQuote = bibleQuotes[Math.floor(Math.random() * bibleQuotes.length)];
    const randomImage = images[Math.floor(Math.random() * images.length)] || 'pic/default.jpg';

    document.getElementById('quote').innerText = randomQuote;
    document.body.style.backgroundImage = `url(${randomImage})`;

    localStorage.setItem('dailyContent', JSON.stringify({ date: today, quote: randomQuote, image: randomImage }));
}

async function init() {
    const bibleQuotes = await getBibleQuotes();
    const images = await getImages();

    if (bibleQuotes.length > 0 && images.length > 0) {
        setDailyContent(bibleQuotes, images);
    } else {
        console.error("Failed to load quotes or images.");
    }
}

window.onload = init;

