
const bibleQuotes = [
    "主是我的牧者，我必不至缺乏。— 诗篇 23:1",
    "神是我们的避难所，是我们的力量。— 诗篇 46:1",
    "凡等候耶和华的，必重新得力。— 以赛亚书 40:31",
    "不要怕，只要信。— 马可福音 5:36",
    "你们要刚强壮胆，不要害怕。— 申命记 31:6",
    "耶和华靠近伤心的人，拯救灵性痛悔的人。— 诗篇 34:18",
    "耶和华是我的力量，是我的盾牌。— 诗篇 28:7"
];

const backgrounds = [
    'https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=2574&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=2565&auto=format&fit=crop',
    'https://plus.unsplash.com/premium_photo-1673292293042-cafd9c8a3ab3?q=80&w=2574&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1435224654926-ecc9f7fa028c?q=80&w=2574&auto=format&fit=crop',
    'https://plus.unsplash.com/premium_photo-1710849581742-f2151607c745?q=80&w=2630&auto=format&fit=crop',
    'https://plus.unsplash.com/premium_photo-1673697239936-c2599b0b0498?q=80&w=2671&auto=format&fit=crop',
    'https://plus.unsplash.com/premium_photo-1675805015392-28fd80c551ec?q=80&w=2664&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=2576&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=2576&auto=format&fit=crop',
    'https://plus.unsplash.com/premium_photo-1673002094029-7b23531aa342?q=80&w=2670&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1668215677573-59cbc8623701?q=80&w=2570&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1668215455269-e8592b90e9a5?q=80&w=2570&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1534629938736-b1b076531d3b?q=80&w=2574&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1581802255112-247d053929c3?q=80&w=2574&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1682366972379-95471e903f04?q=80&w=2670&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1577782784416-b43800027065?q=80&w=2671&auto=format&fit=crop'
];

const defaultBackground = 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0';

// 记录上一个背景，防止重复
let lastBackgroundIndex = -1;

// 预加载背景图
function preloadImages() {
    backgrounds.forEach(url => {
        const img = new Image();
        img.src = url;
    });
}

// 获取随机金句和背景
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * bibleQuotes.length);
    let randomBackground;

    // 避免连续相同背景
    do {
        randomBackground = Math.floor(Math.random() * backgrounds.length);
    } while (randomBackground === lastBackgroundIndex);

    lastBackgroundIndex = randomBackground;

    document.getElementById('quote').innerText = bibleQuotes[randomIndex];
    document.getElementById('date').innerText = new Date().toLocaleDateString();

    // 创建图片对象进行加载
    const img = new Image();
    img.src = backgrounds[randomBackground];
    img.onload = function () {
        // 淡入背景图
        document.body.style.transition = 'background-image 1s ease-in-out';
        document.body.style.backgroundImage = `url(${backgrounds[randomBackground]})`;
    };
    img.onerror = function () {
        // 加载失败时，选择下一个背景
        const fallbackIndex = (randomBackground + 1) % backgrounds.length;
        document.body.style.backgroundImage = `url(${backgrounds[fallbackIndex]})`;
    };
}

// 确保加载时即刻生效
window.onload = function () {
    preloadImages();
    getRandomQuote();
};

