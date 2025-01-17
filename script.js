
const bibleQuotes = [
    "Do not be wise in your own eyes; fear the Lord and shun evil. This will bring health to your body and nourishment to your bones." – Proverbs 3:7-8
    "For I know the plans I have for you,” declares the Lord, “plans to prosper you and not to harm you, plans to give you a hope and a future." – Jeremiah 29:11
    "The Lord is my shepherd; I lack nothing." – Psalm 23:1
    "I can do all things through Christ who strengthens me." – Philippians 4:13
    "The Lord is close to the brokenhearted and saves those who are crushed in spirit." – Psalm 34:18
    "In the beginning was the Word, and the Word was with God, and the Word was God." – John 1:1
    "And we know that in all things God works for the good of those who love him, who have been called according to his purpose." – Romans 8:28
    "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life." – John 3:16
    "Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight." – Proverbs 3:5-6
    "But the fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness, gentleness and self-control." – Galatians 5:22-23
    "I have told you these things, so that in me you may have peace. In this world you will have trouble. But take heart! I have overcome the world." – John 16:33
    "Cast all your anxiety on him because he cares for you." – 1 Peter 5:7
    "For the Spirit God gave us does not make us timid, but gives us power, love and self-discipline." – 2 Timothy 1:7
    "The Lord will fight for you; you need only to be still." – Exodus 14:14
    "The Lord is my light and my salvation— whom shall I fear? The Lord is the stronghold of my life— of whom shall I be afraid?" – Psalm 27:1
    "My grace is sufficient for you, for my power is made perfect in weakness." – 2 Corinthians 12:9
    "But the Lord stood by me and gave me strength." – 2 Timothy 4:17
    "The name of the Lord is a fortified tower; the righteous run to it and are safe." – Proverbs 18:10
    "The Lord is my rock, my fortress and my deliverer; my God is my rock, in whom I take refuge." – 2 Samuel 22:2-3
    "The Lord is compassionate and gracious, slow to anger, abounding in love." – Psalm 103:8
    "The Lord is near to all who call on him, to all who call on him in truth." – Psalm 145:18
    "Fear not, for I have redeemed you; I have called you by name, you are mine." – Isaiah 43:1
    "I will instruct you and teach you in the way you should go; I will counsel you with my loving eye on you." – Psalm 32:8
    "With God all things are possible." – Matthew 19:26
    "The Lord is good to all; he has compassion on all he has made." – Psalm 145:9
    "Come to me, all you who are weary and burdened, and I will give you rest." – Matthew 11:28
    "The joy of the Lord is your strength." – Nehemiah 8:10
    "I have told you this so that my joy may be in you and that your joy may be complete." – John 15:11
    "And we know that in all things God works for the good of those who love him, who have been called according to his purpose." – Romans 8:28
    "But the fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness, gentleness and self-control." – Galatians 5:22-23
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

