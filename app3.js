const quizData = [
    {
        question: "In which of the following , NH3 is not used?",
        a: "Nessler’s reagent",
        b: "Reagent for the analysis of IV group basic radical",
        c: "Reagent for the analysis of III group basic radical",
        d: "Tollen’s reagent",
        correct: "d",
    },
    {
        question: "Which is true regarding nitrogen?",
        a: "least electronegative element",
        b: "has low ionisation enthalpy than oxygen",
        c: "d- orbitals available",
        d: "ability to form pπ − pπ bonds with itself",
        correct: "d",
    },
    {
        question: "An element belongs to group 15 and 3 rd period of the periodic table, its electronic configuration would be",
        a: "1s² 2s² 2p⁴",
        b: "1s² 2s² 2p³",
        c: "1s² 2s² 2p⁶ 3s² 3p²",
        d: "1s² 2s² 2p⁶ 3s² 3p³",
        correct: "d",
    },
    {
        question: "Solid (A) reacts with strong aqueous NaOH liberating a foul smelling gas(B) which spontaneously burn in air giving smoky rings. A and B are respectively",
        a: "P₄(red) and PH₃",
        b: "P₄(white) and PH₃",
        c: "S₈ and H₂S",
        d: "P₄(white) and H₂S",
        correct: "b",
    },
    {
        question: "On hydrolysis, PCl3 gives",
        a: "H₃PO₃",
        b: "PH₃",
        c: "H₃PO₄",
        d: "POCl₃",
        correct: "a",
    },
    {
        question: "P₄O₆ reacts with cold water to give",
        a: "H₃PO₃",
        b: "H₄P₂O₇",
        c: "HPO₃",
        d: "H₃PO₄",
        correct: "a",
    },
    {
        question: "The basicity of pyrophosphorous acid ( H4P2O5) is",
        a: "4",
        b: "2",
        c: "3",
        d: "5",
        correct: "b",
    },
    {
        question: "The molarity of given orthophosphoric acid solution is 2M. its normality is",
        a: "6N",
        b: "4N",
        c: "2N",
        d: "none of these",
        correct: "a",
    },
    {
        question: "Assertion : bond dissociation energy of fluorine is greater than chlorine gas Reason: chlorine has more electronic repulsion than fluorine",
        a: "Both assertion and reason are true and reason is the correct explanation of assertion.",
        b: "Both assertion and reason are true but reason is not the correct explanation of assertion.",
        c: "Assertion is true but reason is false.",
        d: "Both assertion and reason are false.",
        correct: "c",
    },
    {
        question: "Among the following, which is the strongest oxidizing agent?",
        a: "Cl₂",
        b: "F₂",
        c: "Br₂",
        d: "l₂",
        correct: "b",
    },
    {
        question: "he correct order of the thermal stability of hydrogen halide is",
        a: "HI > HBr > HCl > HF",
        b: "HF > HCl > HBr > HI",
        c: "HCl > HF > HBr > HI",
        d: "HI > HCl > HF > HBr",
        correct: "b",
    },
    {
        question: "Which one of the following compounds is not formed?",
        a: "XeOF₄",
        b: "XeO₃",
        c: "XeF₂",
        d: "NeF₂",
        correct: "d",
    },
    {
        question: "Most easily liquefiable gas is",
        a: "Ar",
        b: "Ne",
        c: "He",
        d: "Kr",
        correct: "d",
    },
    {
        question: "XeF₆ on complete hydrolysis produces",
        a: "XeOF₄",
        b: "XeO₂F₂",
        c: "XeO₃",
        d: "XeO₂",
        correct: "c",
    },
    {
        question: "Which of the following is strongest acid among all?",
        a: "HI",
        b: "HF",
        c: "HBr",
        d: "HCl",
        correct: "a",
    },
    {
        question: "Which one of the following orders is correct for the bond dissociation enthalpy of halogen molecules?",
        a: "Br₂> I₂ > F₂ > Cl₂",
        b: "F₂ > Cl₂ > Br₂ > l₂",
        c: "I₂ > Br₂ > Cl₂ > F₂",
        d: "Cl₂ > Br₂ > F₂ > I₂",
        correct: "d",
    },
    {
        question: "Among the following the correct order of acidity is",
        a: "HClO₂ < HClO < HClO₃ < HClO₄",
        b: "HClO₄ < HClO₂ < HClO < HClO₃",
        c: "HClO₃ < HClO₄ < HClO₂ < HClO",
        d: "HClO < HClO₂ < HClO₃ < HClO₄",
        correct: "d",
    },
    {
        question: "When copper is heated with conc HNO3 it produces",
        a: "Cu(NO₃)₂ , NO and NO₂",
        b: "Cu(NO₃)₂ and N₂O",
        c: "Cu(NO₃)₂ and NO₂",
        d: "Cu(NO₃)₂ and NO",
        correct: "c",
    }
];

let index = 0;
let correct = 0,
    incorrect = 0,
    total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")

const loadQuestion = () => {
    if (total === index) {
        return quizEnd();
    }
    reset();
    const data = quizData[index];
    if (data.question.includes('.jpg') || data.question.includes('.png') || data.question.includes('.jpeg')) {
        questionBox.innerHTML = `
            <div>
                <img src="${data.question}" alt="Question Image" />
            </div>
        `;
    } else {
        questionBox.innerHTML = `${index + 1}) ${data.question}`;
    }

    // Handling options
    if (data.a.includes('.jpg') || data.a.includes('.png') || data.a.includes('.jpeg')) {
        allInputs[0].nextElementSibling.innerHTML = `<img src="${data.a}" alt="Option A" />`;
    } else {
        allInputs[0].nextElementSibling.innerText = data.a;
    }

    if (data.b.includes('.jpg') || data.b.includes('.png') || data.b.includes('.jpeg')) {
        allInputs[1].nextElementSibling.innerHTML = `<img src="${data.b}" alt="Option B" />`;
    } else {
        allInputs[1].nextElementSibling.innerText = data.b;
    }

    if (data.c.includes('.jpg') || data.c.includes('.png') || data.c.includes('.jpeg')) {
        allInputs[2].nextElementSibling.innerHTML = `<img src="${data.c}" alt="Option C" />`;
    } else {
        allInputs[2].nextElementSibling.innerText = data.c;
    }

    if (data.d.includes('.jpg') || data.d.includes('.png') || data.d.includes('.jpeg')) {
        allInputs[3].nextElementSibling.innerHTML = `<img src="${data.d}" alt="Option D" />`;
    } else {
        allInputs[3].nextElementSibling.innerText = data.d;
    }

    // Add event listeners to option labels
    const optionLabels = document.querySelectorAll('.options label');
    optionLabels.forEach((label, i) => {
        label.addEventListener('click', () => {
            allInputs[i].checked = true;
        });
    });
};


document.querySelector("#submit").addEventListener(
    "click",
    function() {
        const data = quizData[index]
        const ans = getAnswer()
        if (ans === data.correct) {
            correct++;
        } else {
            incorrect++;
        }
        index++;
        loadQuestion()
    }
)

const getAnswer = () => {
    let ans;
    allInputs.forEach(
        (inputEl) => {
            if (inputEl.checked) {
                ans = inputEl.value;
            }
        }
    )
    return ans;
}

const reset = () => {
    allInputs.forEach(
        (inputEl) => {
            inputEl.checked = false;
        }
    )
}

const quizEnd = () => {
    // console.log(document.getElementsByClassName("container"));
    document.getElementsByClassName("container")[0].innerHTML = `
        <div class="col">
            <h2> Total correct ${correct} from ${total} </h2>
            <a align="center" href="./">Home</a>

        </div>
    `
}
loadQuestion(index);
