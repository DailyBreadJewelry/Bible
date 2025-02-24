async function getBibleQuotes() {
    try {
        const response = await fetch('bible_quotes.json');
        const bibleQuotes = await response.json();
        return bibleQuotes;
    } catch (error) {
        console.error("❌ 加载 Bible quotes 失败:", error);
        return [];
    }
}

async function getImages() {
    try {
        const response = await fetch('images.json');
        const images = await response.json();
        return images;
    } catch (error) {
        console.error("❌ 加载图片失败:", error);
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
        console.error("❌ 读取 quotes 或 images 失败！");
    }
}

window.onload = init;

