const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, 'pic');
const outputFilePath = path.join(__dirname, 'images.json');

fs.readdir(imagesDir, (err, files) => {
    if (err) {
        console.error("❌ 读取 pic 目录出错:", err);
        return;
    }

    const imageFiles = files
        .filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file)) // 仅筛选图片
        .map(file => `pic/${file}`); // 添加路径前缀

    fs.writeFile(outputFilePath, JSON.stringify(imageFiles, null, 2), err => {
        if (err) {
            console.error("❌ 写入 images.json 失败:", err);
        } else {
            console.log("✅ images.json 已生成！");
        }
    });
});
