/**
 * Part 2: Digital Weather Forecast
 */

const WORKER_QUESTIONS = [
    { text: "Q1. 何かを決めるとき、あなたはどれがラク？", options: [{label:"A",text:"その場で画面上で完結できる",value:"A"},{label:"B",text:"データで管理・見返せる",value:"B"},{label:"C",text:"紙でもらったほうが安心",value:"C"}] },
    { text: "Q2. 書類や資料を扱うなら？", options: [{label:"A",text:"紙は使わずに進めたい",value:"A"},{label:"B",text:"データでも残したい",value:"B"},{label:"C",text:"紙のほうが使いやすい",value:"C"}] },
    { text: "Q3. 誰かとやりとりするとき、近いのは？", options: [{label:"A",text:"オンラインでスピーディに",value:"A"},{label:"B",text:"情報が後から確認できればOK",value:"B"},{label:"C",text:"手渡しや郵送が実感ある",value:"C"}] },
    { text: "Q4. 大事な情報の保管方法として安心なのは？", options: [{label:"A",text:"クラウドなどで一元管理",value:"A"},{label:"B",text:"データ＋紙の併用",value:"B"},{label:"C",text:"ファイルや紙で保管",value:"C"}] },
    { text: "Q5. 「後から確認するかも」と思ったら？", options: [{label:"A",text:"すぐ検索できる形で残す",value:"A"},{label:"B",text:"なんとなく分かればいい",value:"B"},{label:"C",text:"手元にあれば十分",value:"C"}] },
    { text: "Q6. 何かを提出・共有するとしたら？", options: [{label:"A",text:"送信してすぐ届くのが理想",value:"A"},{label:"B",text:"相手に合わせたい",value:"B"},{label:"C",text:"実物を渡したほうが安心",value:"C"}] },
    { text: "Q7. もし作業の手間を減らせるとしたら？", options: [{label:"A",text:"できるだけ自動・簡単に",value:"A"},{label:"B",text:"今より少しラクになれば",value:"B"},{label:"C",text:"手間がかかっても確実さ",value:"C"}] },
    { text: "Q8. 新しい仕組みについてどう感じる？", options: [{label:"A",text:"便利ならどんどん使いたい",value:"A"},{label:"B",text:"必要になったら取り入れたい",value:"B"},{label:"C",text:"今のやり方を変えるのは不安",value:"C"}] }
];

const STUDENT_QUESTIONS = [
    { text: "Q1. 何かに申し込んだあと、安心なのは？", options: [{label:"A",text:"メールやアプリで確認できる",value:"A"},{label:"B",text:"データ＋控えもある",value:"B"},{label:"C",text:"紙でもらって手元にある",value:"C"}] },
    { text: "Q2. チケットや入場証を受け取るなら？", options: [{label:"A",text:"スマホに入っていればOK",value:"A"},{label:"B",text:"スマホと紙両方あると安心",value:"B"},{label:"C",text:"紙で持っていたい",value:"C"}] },
    { text: "Q3. あとから確認する情報は？", options: [{label:"A",text:"すぐ検索できるデジタル",value:"A"},{label:"B",text:"どちらでも確認できればいい",value:"B"},{label:"C",text:"見える所に紙を置きたい",value:"C"}] },
    { text: "Q4. 大事なお知らせが届いたときは？", options: [{label:"A",text:"データで保存できる方がいい",value:"A"},{label:"B",text:"一度見られれば十分",value:"B"},{label:"C",text:"紙の方が逃しにくい",value:"C"}] },
    { text: "Q5. 何かを提出・同意するときは？", options: [{label:"A",text:"スマホやPCで完結したい",value:"A"},{label:"B",text:"内容は問わない",value:"B"},{label:"C",text:"書いて渡した方が実感ある",value:"C"}] },
    { text: "Q6. 昔の情報を見返したいときは？", options: [{label:"A",text:"データ検索でパッと出す",value:"A"},{label:"B",text:"なんとなく分かればOK",value:"B"},{label:"C",text:"紙を探す方が安心",value:"C"}] },
    { text: "Q7. 新しいサービスについて", options: [{label:"A",text:"便利そうなら使いたい",value:"A"},{label:"B",text:"まわりが使い始めたら考える",value:"B"},{label:"C",text:"慣れたやり方を続けたい",value:"C"}] },
    { text: "Q8. 「ラクになる」と聞いて惹かれるのは？", options: [{label:"A",text:"持ち物が減る・探さない",value:"A"},{label:"B",text:"今より少し手間が減る",value:"B"},{label:"C",text:"変わらない安心感",value:"C"}] }
];

const RESULTS = {
    A: { title: "Digital 快晴", icon: "☀️", status: "電子化がかなり進みやすいタイプ", description: "あなたは、デジタルな進め方と相性がいいタイプ。画面上で完結したり、すぐ確認できる仕組みがあると、本来やりたいことに集中しやすい傾向があります。", recommend: "電子契約 ／ AI書庫 ／ 明細配信" },
    B: { title: "Digital くもり", icon: "⛅", status: "電子と紙のバランス型タイプ", description: "あなたは、便利さと安心感のバランスを大切にするタイプ。デジタルも使いつつ、必要なところは紙があると安心します。", recommend: "AI書庫 や 一部電子化" },
    C: { title: "Digital 雨模様", icon: "🌧️", status: "これから整えていく余地ありタイプ", description: "あなたは、確実さや慣れを大切にするタイプ。紙の方が分かりやすい・安心できると感じやすい傾向があります。「一部だけラクにする」ところから始めましょう。", recommend: "明細配信 や 部分的な電子化" }
};

let userType = null;
let currentIndex = 0;
let scores = { A: 0, B: 0, C: 0 };
let userAnswers = []; // 回答内容を保持

const dom = {
    screens: {
        branch: document.getElementById('branch-screen'),
        transition: document.getElementById('transition-screen'),
        question: document.getElementById('question-screen'),
        result: document.getElementById('p2-result-screen')
    },
    questionText: document.getElementById('question-text'),
    optionsContainer: document.getElementById('options-container'),
    progress: document.getElementById('progress'),
    count: document.getElementById('question-count'),
    p2Title: document.getElementById('p2-title'),
    p2Icon: document.getElementById('p2-icon'),
    p2Status: document.getElementById('p2-status'),
    p2Desc: document.getElementById('p2-description'),
    p2Recommend: document.getElementById('p2-recommend'),
    transitionMsg: document.getElementById('transition-msg'),
    backBtn: document.getElementById('p2-back-btn'),
    backBtnContainer: document.getElementById('p2-back-btn-container')
};

function showScreen(name) {
    Object.values(dom.screens).forEach(s => s.classList.add('hidden'));
    dom.screens[name].classList.remove('hidden');
}

function startTransition(type) {
    userType = type;
    if (type === 'worker') {
        dom.transitionMsg.innerText = "「もし民間企業で仕事をするとしたら？」をイメージして答えてください。今の立場は問いません。正解・不正解はありません。";
    } else {
        dom.transitionMsg.innerText = "この診断は、日常生活での「受け取り方・管理のしかた」をもとに、デジタルとの相性をチェックします。普段の生活をイメージして答えてください。";
    }
    showScreen('transition');
}

function startQuiz() {
    currentIndex = 0;
    scores = { A: 0, B: 0, C: 0 };
    userAnswers = []; // 初期化
    renderQuestion();
    showScreen('question');
}

function renderQuestion() {
    const list = userType === 'worker' ? WORKER_QUESTIONS : STUDENT_QUESTIONS;
    const q = list[currentIndex];
    dom.questionText.innerText = q.text;
    dom.optionsContainer.innerHTML = '';
    
    // 1つ前の設問に戻るボタンの表示制御
    if (currentIndex > 0) {
        dom.backBtnContainer.classList.remove('hidden');
    } else {
        dom.backBtnContainer.classList.add('hidden');
    }

    // 保持されている回答があれば取得
    const currentAnswer = userAnswers[currentIndex];
    
    q.options.forEach(opt => {
        const div = document.createElement('div');
        div.className = 'option-card';
        if (opt.value === currentAnswer) {
            div.classList.add('selected');
        }
        div.innerHTML = `<span class="label">${opt.label}</span> <span>${opt.text}</span>`;
        div.onclick = () => selectOption(opt.value);
        dom.optionsContainer.appendChild(div);
    });
    
    const percent = ((currentIndex / 8) * 100);
    dom.progress.style.width = `${percent}%`;
    dom.count.innerText = `設問 ${currentIndex + 1} / 8`;
}

function goBack() {
    if (currentIndex > 0) {
        currentIndex--;
        renderQuestion();
    }
}

function selectOption(val) {
    // もし既にその設問に回答していた場合は一旦スコアを引く（変更対応）
    const existingAnswer = userAnswers[currentIndex];
    if (existingAnswer) {
        scores[existingAnswer]--;
    }

    userAnswers[currentIndex] = val;
    scores[val]++;
    currentIndex++;
    if (currentIndex < 8) {
        renderQuestion();
    } else {
        dom.progress.style.width = `100%`;
        showResult();
    }
}

function showResult() {
    const winner = Object.keys(scores).reduce((a, b) => scores[a] >= scores[b] ? a : b);
    const res = RESULTS[winner];
    
    dom.p2Title.innerText = res.title;
    dom.p2Icon.innerText = res.icon;
    dom.p2Status.innerText = res.status;
    dom.p2Desc.innerText = res.description;
    dom.p2Recommend.innerText = res.recommend;
    
    showScreen('result');
}

// Initial load check
window.onload = () => {
    const savedType = localStorage.getItem('userType');
    if (savedType) {
        userType = savedType;
        dom.transitionMsg.innerText = "現在のライフスタイルから、\nあなたに最適なデジタル活用度を診断します。";
        showScreen('transition');
    } else {
        // Fallback for direct access: show branch screen
        showScreen('branch');
    }
};

// Handlers
document.getElementById('btn-student').onclick = () => startTransition('student');
document.getElementById('btn-worker').onclick = () => startTransition('worker');
document.getElementById('p2-start-btn').onclick = startQuiz;
dom.backBtn.onclick = goBack;

// Header Home Button
document.getElementById('p2-home-btn').onclick = () => {
    location.href = 'index.html';
};

// Small bottom home link during diagnosis
document.getElementById('p2-bottom-home-btn').onclick = () => {
    location.reload();
};

// Result Screen Buttons
document.getElementById('p2-back-p1-btn').onclick = () => {
    location.href = 'index.html';
};
document.getElementById('p2-retry-p2-btn').onclick = () => {
    location.reload();
};
