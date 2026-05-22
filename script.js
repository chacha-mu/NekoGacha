const rouletteCats = [

  {
    name: "スコティッシュフォールド",
    image: "スコ.jpeg",
    text: "折れた耳とまんまるな顔が魅力の人気猫。おっとりした性格で、人に甘えるのが大好きな猫です。"
  },

  {
    name: "マンチカン",
    image: "マンチカン.jpeg",
    text: "短い足で一生懸命走る姿がとてもかわいい遊ぶことが大好きで元気いっぱいな猫です。"
  },

  {
    name: "ラグドール",
    image: "ラグドール.jpeg",
    text: "ふわふわの毛並みと青い目が美しい穏やかで抱っこされるのが好きな癒し系の猫です。"
  },

  {
    name: "アメリカンショートヘア",
    image: "アメショ.jpeg",
    text: "丈夫で飼いやすく初心者にも人気で元気で遊び好きな猫です。"
  },

  {
    name: "ロシアンブルー",
    image: "ロシアンブルー.jpeg",
    text: "美しいグレーの毛並みとエメラルドの瞳が特徴の静かで上品な猫です。"
  },

  {
    name: "ノルウェージャンフォレストキャット",
    image: "ノルウェー.jpeg",
    text: "北欧生まれで長くふわふわな毛と優しい性格が人気の大型猫です。"
  },

  {
    name: "ベンガル",
    image: "ベンガル.jpeg",
    text: "ヒョウのような模様が特徴で運動神経が良くとても活発な猫です。"
  },

  {
    name: "ペルシャ",
    image: "ペルシャ.jpeg",
    text: "長い毛並みと高級感ある見た目が魅力のおっとりした優雅な猫です。"
  },

  {
    name: "シャム",
    image: "シャム.jpeg",
    text: "スリムな体が特徴で人懐っこくおしゃべり好きな猫です。"
  },

  {
    name: "メインクーン",
    image: "メイン.jpeg",
    text: "大型で迫力がありながらとても優しく穏やかな人気の猫です。"
  },

  {
    name: "エキゾチックショートヘア",
    image: "エキゾ.jpeg",
    text: "ぺちゃんこな顔と丸い体がかわいいのんびりした癒し系の猫です。"
  },

  {
    name: "サイベリアン",
    image: "サイベリアン.jpeg",
    text: "モフモフした長い毛が特徴で優しく甘えん坊な猫です。"
  },

  {
    name: "日本猫",
    image: "ダウンロード.jpeg",
    text: "昔から日本で親しまれてきた丈夫で賢く人になじみやすい猫です。"
  }

];

const button =
  document.getElementById("rouletteButton");

button.addEventListener("click", startRoulette);

let spinning = false;

function startRoulette() {
document.getElementById("catImage").style.display =
  "block";

document.querySelector(".start-message").style.display =
  "none";
  if (spinning) {
    return;
  }

  spinning = true;

  button.textContent =
    "でゅらららららら...";

  button.style.background =
    "#ff4444";

  let speed = 40;

  let count = 0;

  shuffle(speed, count);

}

function shuffle(speed, count) {

  const random =
    rouletteCats[
      Math.floor(
        Math.random() * rouletteCats.length
      )
    ];

  document.getElementById("catImage").src =
    random.image;

  document.getElementById("catName").textContent =
    random.name;

  document.getElementById("catText").textContent =
    random.text;

  count++;

  if (count < 45) {

    if (count > 15) {

      speed += 8;

    }

    if (count > 30) {

      speed += 15;

    }

    setTimeout(function() {

      shuffle(speed, count);

    }, speed);

  } else {

    document.querySelector(".roulette-card")
      .style.transform =
      "scale(1.12)";

    document.querySelector(".roulette-card")
      .style.transition =
      "0.25s";

    button.textContent =
      "ダン！！";
　　document
  .getElementById("finishSound")
  .play();
    button.style.background =
      "#ff9900";

    setTimeout(function() {

      document.querySelector(".roulette-card")
        .style.transform =
        "scale(1)";

      button.textContent =
        "もう一回まわす！";

      spinning = false;

    }, 800);

  }
}
document.getElementById("catImage").style.display =
  "none";
