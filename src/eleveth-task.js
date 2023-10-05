const sec=3665;
const chas=Math.round(sec / 3600);
const minyt=Math.round((sec % 3600) / 60);
const secund=(sec % 3600) % 60;
console.log(chas, " ч ", minyt, " мин ", secund, " сек");
