/**
 * Part 1: Personality Test
 */

const QUESTIONS = [
    {
        text: "Q1. 仕事で大切にしたいのは？",
        options: [
            { label: "A", text: "安定して長く続けられること", value: "A" },
            { label: "B", text: "人の役に立っている実感", value: "B" },
            { label: "C", text: "成長や成果が目に見えること", value: "C" },
            { label: "D", text: "現場の作業をよりスマート、円滑にすること", value: "D" },
            { label: "E", text: "新しい技術や手法を試して検証すること", value: "E" }
        ]
    },
    {
        text: "Q2. 周囲からよく言われるイメージは？",
        options: [
            { label: "A", text: "落ち着いていて信頼できる", value: "A" },
            { label: "B", text: "優しくて相談しやすい", value: "B" },
            { label: "C", text: "行動力があって頼もしい", value: "C" },
            { label: "D", text: "道具やアプリを使いこなすのが得意", value: "D" },
            { label: "E", text: "好奇心旺盛でアイデアが豊富", value: "E" }
        ]
    },
    {
        text: "Q3. 初めての環境に入るときのあなたは？",
        options: [
            { label: "A", text: "まず全体を把握してから動く", value: "A" },
            { label: "B", text: "困っている人がいないか気になる", value: "B" },
            { label: "C", text: "とりあえず動きながら慣れる", value: "C" },
            { label: "D", text: "作業を助ける便利なツールがないかチェックする", value: "D" },
            { label: "E", text: "面白そうな仕組みや最新の技術がないか探す", value: "E" }
        ]
    },
    {
        text: "Q4. トラブルが起きたとき、近いのは？",
        options: [
            { label: "A", text: "ルールや前例を確認して冷静に対応", value: "A" },
            { label: "B", text: "相手の気持ちを考えながら寄り添う", value: "B" },
            { label: "C", text: "すぐに原因を見つけて解決策を考える", value: "C" },
            { label: "D", text: "詳しい人に画像や映像を見せて状況を共有する", value: "D" },
            { label: "E", text: "いろいろなアプローチを実験的に試してみる", value: "E" }
        ]
    },
    {
        text: "Q5. 仕事でやりがいを感じる瞬間は？",
        options: [
            { label: "A", text: "ミスなく業務を終えたとき", value: "A" },
            { label: "B", text: "「ありがとう」と直接言われたとき", value: "B" },
            { label: "C", text: "目標を達成した・成果が出たとき", value: "C" },
            { label: "D", text: "離れた場所ともチームで一体感を持って仕事ができたとき", value: "D" },
            { label: "E", text: "仕組みを作ったり、プロトタイプが形になったとき", value: "E" }
        ]
    },
    {
        text: "Q6. チームで動くときのあなたは？",
        options: [
            { label: "A", text: "まとめ役・調整役になりやすい", value: "A" },
            { label: "B", text: "サポート役になることが多い", value: "B" },
            { label: "C", text: "引っ張る・提案する立場が多い", value: "C" },
            { label: "D", text: "現場のリアルな状況を周囲に伝える役割", value: "D" },
            { label: "E", text: "専門的な視点から「新しいやり方」を出す役割", value: "E" }
        ]
    },
    {
        text: "Q7. 仕事の進め方として好みなのは？",
        options: [
            { label: "A", text: "手順が決まっているほうが安心", value: "A" },
            { label: "B", text: "相手に合わせて柔軟に対応したい", value: "B" },
            { label: "C", text: "自分で工夫できる余地がほしい", value: "C" },
            { label: "D", text: "両手を自由にして、スマートにテキパキこなしたい", value: "D" },
            { label: "E", text: "まだ誰もやっていない方法が有効か検証したい", value: "E" }
        ]
    },
    {
        text: "Q8. 将来の働き方として魅力を感じるのは？",
        options: [
            { label: "A", text: "社会や地域を支える仕事", value: "A" },
            { label: "B", text: "人の人生や健康に関わる仕事", value: "B" },
            { label: "C", text: "変化があり挑戦できる仕事", value: "C" },
            { label: "D", text: "デジタルの力で、場所や距離の壁をなくす仕事", value: "D" },
            { label: "E", text: "最新の技術に触れ、未来の当たり前を創る仕事", value: "E" }
        ]
    }
];

const RESULTS = {
    A: {
        title: "安定感と責任感を大切にする、信頼されるタイプ",
        booth: "公共ブース",
        icon: "🏛",
        description: "あなたは、物事を丁寧に進め、周囲との調和を大切にできる性格です。決められたルールや仕組みの中で、着実に役割を果たすことに安心感を覚える傾向があります。「縁の下の力持ち」として頼られる存在になりやすいタイプです。"
    },
    B: {
        title: "思いやりがあり、人に寄り添えるサポートタイプ",
        booth: "医療ブース",
        icon: "🏥",
        description: "あなたは、人の気持ちに気づきやすく、誰かの役に立つことにやりがいを感じる性格です。相手の立場を考えながら行動できるため、信頼関係を築くのが得意です。安心・安全を支える環境や、人と深く関わる仕事に向いています。"
    },
    C: {
        title: "行動力があり、変化を楽しめるチャレンジタイプ",
        booth: "民間ブース",
        icon: "🏢",
        description: "あなたは、新しいことに前向きで、自分なりの工夫や挑戦を楽しめる性格です。結果や成長が見える環境で、モチベーションを発揮しやすい傾向があります。スピード感のある仕事や、アイデアを活かせる分野と相性が良いタイプです。"
    },
    D: {
        title: "効率的で現場を支える、スマート・スペシャリストタイプ",
        booth: "クラウドブース",
        icon: "🕶️",
        description: "最新のツールを使いこなし、現場の課題をスマートに解決する性格。ハンズフリーな働き方や遠隔連携に関心が高く、場所や距離の壁を越えて活躍できる実用的なDX推進に向いています。"
    },
    E: {
        title: "知的好奇心が旺盛な、未来を創るイノベータータイプ",
        booth: "テックラボブース",
        icon: "🔬",
        description: "新しい技術や仕組みに興味を持ち、自分のアイデアを形にしていくことを楽しめる性格。実験や検証を重ねながら解決策を探求する傾向があります。最新技術を用いて新しい価値を創出する環境に向いています。"
    }
};

let currentIndex = 0;
let scores = { A: 0, B: 0, C: 0, D: 0, E: 0 };
let userAnswers = []; // 回答内容を保持

const dom = {
    screens: {
        branch: document.getElementById('initial-branch-screen'),
        welcome: document.getElementById('welcome-screen'),
        question: document.getElementById('question-screen'),
        result: document.getElementById('p1-result-screen')
    },
    questionText: document.getElementById('question-text'),
    optionsContainer: document.getElementById('options-container'),
    progress: document.getElementById('progress'),
    count: document.getElementById('question-count'),
    p1Title: document.getElementById('p1-title'),
    p1Icon: document.getElementById('p1-icon'),
    p1Desc: document.getElementById('p1-description'),
    p1BoothTitle: document.getElementById('p1-booth-title'),
    p1Actions: document.getElementById('p1-actions'),
    backBtn: document.getElementById('p1-back-btn'),
    backBtnContainer: document.getElementById('p1-back-btn-container')
};

function showScreen(name) {
    Object.values(dom.screens).forEach(s => s.classList.add('hidden'));
    dom.screens[name].classList.remove('hidden');
}

function updateProgress() {
    const percent = ((currentIndex / QUESTIONS.length) * 100);
    dom.progress.style.width = `${percent}%`;
    dom.count.innerText = `設問 ${currentIndex + 1} / ${QUESTIONS.length}`;
}

function renderQuestion() {
    const q = QUESTIONS[currentIndex];
    dom.questionText.innerText = q.text;
    dom.optionsContainer.innerHTML = '';
    
    // 1つ前の設問に戻るボタンの表示制御
    if (currentIndex > 0) {
        dom.backBtnContainer.classList.remove('hidden');
    } else {
        dom.backBtnContainer.classList.add('hidden');
    }

    // 学生の場合はC（民間）の選択肢を除外する
    const userType = localStorage.getItem('userType');
    let displayOptions = q.options;
    if (userType === 'student') {
        displayOptions = q.options.filter(opt => opt.value !== 'C');
    }
    
    // 保持されている回答があれば取得
    const currentAnswer = userAnswers[currentIndex];
    
    displayOptions.forEach((opt, index) => {
        const div = document.createElement('div');
        div.className = 'option-card';
        if (opt.value === currentAnswer) {
            div.classList.add('selected');
        }
        // ラベル（A, B, C...）を表示用に振り直す
        const displayLabel = String.fromCharCode(65 + index);
        div.innerHTML = `<span class="label">${displayLabel}</span> <span>${opt.text}</span>`;
        div.onclick = () => selectOption(opt.value);
        dom.optionsContainer.appendChild(div);
    });
    updateProgress();
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
    if (currentIndex < QUESTIONS.length) {
        renderQuestion();
    } else {
        dom.progress.style.width = `100%`;
        showResult();
    }
}

function showResult() {
    const winner = Object.keys(scores).reduce((a, b) => scores[a] >= scores[b] ? a : b);
    const res = RESULTS[winner];
    
    dom.p1Title.innerText = res.title;
    dom.p1Icon.innerText = res.icon;
    dom.p1Desc.innerText = res.description;
    dom.p1BoothTitle.innerText = res.booth;
    
    // Actions
    dom.p1Actions.innerHTML = '';
    
    if (winner === 'C') {
        const introMsg = document.createElement('p');
        introMsg.className = 'description';
        introMsg.style.marginBottom = '15px';
        introMsg.innerText = 'さらに詳しく、あなたのライフスタイルに合わせた「デジタル活用度」を診断してみませんか？';
        dom.p1Actions.appendChild(introMsg);

        const nextBtn = document.createElement('button');
        nextBtn.className = 'btn btn-accent';
        nextBtn.innerText = 'デジタル天気予報へ進む';
        nextBtn.onclick = () => location.href = 'weather.html';
        dom.p1Actions.appendChild(nextBtn);
    }
    
    const retryBtn = document.createElement('button');
    retryBtn.className = 'btn btn-outline';
    retryBtn.style.marginTop = winner === 'C' ? '12px' : '0';
    retryBtn.innerText = '最初からやり直す';
    retryBtn.onclick = () => location.reload();
    dom.p1Actions.appendChild(retryBtn);
    
    showScreen('result');
}

// Initial Screen Handlers
function setType(type) {
    localStorage.setItem('userType', type);
    showScreen('welcome');
}

document.getElementById('main-btn-student').onclick = () => setType('student');
document.getElementById('main-btn-worker').onclick = () => setType('worker');

document.getElementById('start-btn').onclick = () => {
    showScreen('question');
    renderQuestion();
};

document.getElementById('home-btn').onclick = () => {
    location.href = 'index.html';
};

dom.backBtn.onclick = goBack;
