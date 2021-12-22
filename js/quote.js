const quotes = [
  {
    quote: "거짓말도 100번 말하면 진실이 된다.",
    author: "파울 요제프 괴벨스",
  },
  {
    quote:
      "거리를 정복하면 군중을 장악할 수 있고 군중을 장악하면 국가를 장악할 수 있다.",
    author: "파울 요제프 괴벨스",
  },
  {
    quote:
      "선동은 한문장으로도 가능하지만, 그것을 반박하려면 수십장의 문서와 증거가 필요하다. 그리고 그것을 반박하려고 할때에는 사람들은 이미 선동되어있다.",
    author: "파울 요제프 괴벨스",
  },
  {
    quote:
      "대중은 거짓말을 처음에는 부정하고 그다음엔 의심하지만 되풀이 하면 결국에는 믿게된다.",
    author: "파울 요제프 괴벨스",
  },
  {
    quote: "나에게 한 문장만 달라 그러면 누구든지 범죄자로 만들수있다.",
    author: "파울 요제프 괴벨스",
  },
  {
    quote: "내 비장한 무기는 손 안에 있다. 그건 희망이다.",
    author: "나폴레옹",
  },
  {
    quote: "강력한 상상은 스스로 현실을 창조한다.",
    author: "몽테뉴",
  },
  {
    quote: "길을 가려면 자기가 어디로 가는지 알아야 한다.",
    author: "톨스토이",
  },
  {
    quote: "It ain't over till it's over.",
    author: "요기 베라",
  },
  {
    quote: "도전은 간단하며, 성공은 가까이에 있다.",
    author: "문태웅",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
