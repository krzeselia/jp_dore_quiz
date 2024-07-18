const things = [
    {
        pl: "okulary",
        jp: "めがね"
    },
    {
        pl: "szczotka do włosów",
        jp: "ヘアブラシ"
    },
    {
        pl: "smartfon",
        jp: "スマホ"
    },
    {
        pl: "nóż",
        jp: "ナイフ"
    },
    {
        pl: "liceum",
        jp: "こうこう"
    },
    {
        pl: "herbata",
        jp: "おちゃ"
    },
    {
        pl: "pies",
        jp: "いぬ"
    },
    {
        pl: "kot",
        jp: "ねこ"
    },
    {
        pl: "niedźwiedź",
        jp: "くま"
    },
    {
        pl: "lis",
        jp: "きつね"
    },
    {
        pl: "komar",
        jp: "か"
    },
    {
        pl: "motyl",
        jp: "ちょう"
    },
    {
        pl: "jabłko",
        jp: "りんご"
    },
    {
        pl: "winogrona",
        jp: "ぶどう"
    },
    {
        pl: "gruszka",
        jp: "なし"
    },
    {
        pl: "brzoskwinia",
        jp: "もも"
    },
    {
        pl: "mandarynka",
        jp: "みかん"
    },
    {
        pl: "cebula",
        jp: "たまねぎ"
    },
    {
        pl: "pomidor",
        jp: "トマト"
    },
    {
        pl: "grzyb",
        jp: "きのこ"
    },
    {
        pl: "mleko",
        jp: "ぎゅうにゅう"
    }
]

const tea = ["Która herbata", "おちゃ",
    {
        pl: "czarna herbata",
        jp: "こうちゃ"
    },
    {
        pl: "zielona herbata",
        jp: "りょくちゃ"
    },
    {
        pl: "matcha",
        jp: "まっちゃ"
    }
]

const animals = ["Które zwierzę", "どうぶつ",
    {
        pl: "pies",
        jp: "いぬ"
    },
    {
        pl: "kot",
        jp: "ねこ"
    },
    {
        pl: "niedźwiedź",
        jp: "くま"
    },
    {
        pl: "lis",
        jp: "きつね"
    },
    {
        pl: "ptak",
        jp: "とり"
    }
]

const insects = ["Który owad", "むし",
    {
        pl: "komar",
        jp: "か"
    },
    {
        pl: "motyl",
        jp: "ちょう"
    }
]

const plants = ["Która roślina", "しょくぶつ",
    {
        pl: "wiśnia",
        jp: "さくら"
    },
    {
        pl: "grzyb",
        jp: "きのこ"
    }
]

const drinks = ["Który napój", "のみもの",
    {
        pl: "woda",
        jp: "みず"
    },
    {
        pl: "herbata",
        jp: "おちゃ"
    },
    {
        pl: "piwo",
        jp: " ビール "
    },
    {
        pl: "mleko",
        jp: "ぎゅうにゅう"
    }
]

const fruits = ["Który owoc", "くだもの",
    {
        pl: "jabłko",
        jp: "りんご"
    },
    {
        pl: "gruszka",
        jp: "なし"
    },
    {
        pl: "winogrono",
        jp: "ぶどう"
    },
    {
        pl: "brzoskwinia",
        jp: "もも"
    },
    {
        pl: "mandarynka",
        jp: "みかん"
    }
]

const vegetables = ["Które warzywo", "やさい",
    {
        pl: "cebula",
        jp: "たまねぎ"
    },
    {
        pl: "pomidor",
        jp: "トマト"
    }
]

const vocabGroups = [tea, animals, insects, plants, drinks, fruits, vegetables];

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let question;
let answer;

const questionDiv = document.querySelector(".question");
const answerDiv = document.querySelector(".answer");
const nextButton = document.querySelector(".next");
nextButton.addEventListener("click", generateQuestion);

function generateQuestion() {
    const random = randomNumber(1, 3);

    if (!answerDiv.classList.contains("hidden")) {
        answerDiv.classList.add("hidden")
    }

    if (random == 1) {
        const random = randomNumber(0, things.length);
        question = `Które to ${things[random].pl}?`
        answer = `どれ が ${things[random].jp}？`
    } else if (random == 2) {
        const random = randomNumber(0, things.length);
        question = `Które z tych dwóch to ${things[random].pl}?`
        answer = `どっち が ${things[random].jp}？`
    } else if (random == 3) {
        const random1 = randomNumber(0, vocabGroups.length-1);
        const randomGroup = vocabGroups[random1];
        const random2 = randomNumber(2, randomGroup.length-1);
        const randomItem = randomGroup[random2];
        question = `${randomGroup[0]} to ${randomItem.pl}?`
        answer = `どの ${randomGroup[1]} が ${randomItem.jp}？`
    }

    questionDiv.textContent = question;
    answerDiv.textContent = answer;
}

const showAnswerButton = document.querySelector(".show_answer");
showAnswerButton.addEventListener("click", function() {
    if (answerDiv.classList.contains("hidden")) {
        answerDiv.classList.remove("hidden");
    }
})

generateQuestion();