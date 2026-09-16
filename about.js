const translations = {
    en: { back: "Back home", eyebrow: "INTERNATIONAL COLLEGIATE PROGRAMMING CONTEST", subtitle: "Code. Compete. Create.", description: "A place for programmers, problem solvers, and everyone who enjoys competitive programming.", what_gay: "What is ICPC.GAY?", what_gay_desc: "A place made by programmers, for programmers.", what_gay_long: "ICPC.GAY is an independent community for people who love competitive programming, software, and building things.", why_gay: "Why .GAY (Fun)?", fun: "Because programmers are allowed to have fun too.", disclaim: "ICPC.GAY isn't affiliated with ICPC. The name is simply a playful way of saying that we're a bunch of people who are way too passionate about competitive programming.", what_we_believe: "What we believe", who_is_it_for: "Who is it for?", beginner: "Beginners", contestants: "Competitive programmers", developers: "Developers", tinkerers: "Tinkerers", anyone: "Anyone who enjoys code", have_something: "HAVE SOMETHING TO BUILD?", go_build: "Go build it." },
    zh: { back: "回到首页", eyebrow: "国际大学生程序设计竞赛", subtitle: "编码。竞赛。创造。", description: "这里属于程序员、解题者，以及所有享受竞赛编程的人。", what_gay: "ICPC.GAY 是什么？", what_gay_desc: "一个由程序员创造、为程序员而生的地方。", what_gay_long: "ICPC.GAY 是一个独立社区，献给热爱竞赛编程、软件和创造事物的人。", why_gay: "为什么是 .GAY（好玩）？", fun: "因为程序员当然也可以玩得开心。", disclaim: "ICPC.GAY 与 ICPC 没有任何关联。这个名字只是用一种好玩的方式说：我们是一群对竞赛编程过于热爱的人。", what_we_believe: "我们相信什么", who_is_it_for: "这里属于谁？", beginner: "初学者", contestants: "竞赛选手", developers: "开发者", tinkerers: "喜欢折腾的人", anyone: "所有享受编程的人", have_something: "有想做的东西吗？", go_build: "那就去做吧。" }
};
const language = localStorage.getItem("language") || "en";
const translation = translations[language] || translations.en;
document.documentElement.lang = language;
document.querySelectorAll("[data-i18n]").forEach((element) => { element.textContent = translation[element.dataset.i18n] || element.textContent; });
if (translation.claim) document.querySelector("[data-i18n=claim]").textContent = translation.claim;

const claim = document.querySelector("[data-i18n=claim]");
if (language === "zh" && claim) claim.innerHTML = "<p>代码不只是解决问题。</p><p>它关乎好奇心。<br>关乎创造东西。<br>关乎从失败中学习。<br>关乎熬夜，只因为你真的想弄明白它为什么有效。</p><p>竞赛编程只是故事的一部分。</p>";
const title = document.querySelector("title");
if (title) title.textContent = language === "zh" ? "关于 ICPC.GAY" : "About ICPC.GAY";
