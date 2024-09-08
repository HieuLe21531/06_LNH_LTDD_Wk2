type Poll = {
    question: string;
    options: string[];
    answers: number[];
    registerNewAnswer: () => void;
    displayResults: (type: 'string' | 'array') => void;
};

const poll: Poll = {
    question: "What is your favourite programming language?",
    options: ["JavaScript", "Python", "Rust", "C++"],
    answers: (() => {
        const length = 4;
        const initialValue = 0;
        const array: number[] = [];
        for (let i = 0; i < length; i++) {
            array.push(initialValue);
        }
        return array;
    })(),

    registerNewAnswer() {
        const answer = Number(
            prompt(
                `${this.question}\n${this.options
                    .map((option, index) => `${index}: ${option}`)
                    .join('\n')}\n(Write option number)`
            )
        );

        if (typeof answer === 'number' && answer < this.answers.length) {
            this.answers[answer]++;
            this.displayResults('string');
            this.displayResults('array');
        } else {
            alert("Invalid input. Please enter a number corresponding to an option.");
        }
    },

    displayResults(type: 'string' | 'array') {
        if (type === 'array') {
            console.log(this.answers);
        } else if (type === 'string') {
            console.log(`Poll results are ${this.answers.join(', ')}`);
        }
    },
};

document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));
