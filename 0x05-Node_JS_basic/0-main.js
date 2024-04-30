const questions = ['What is your name?', 'What is your gender?', 'How old are you'];
const answers = [];
function ask (i) {
    process.stdout.write(questions[i] + '\n');
}
process.stdin.on('data', (data) => {
    answers.push(data.toString().trim())
    if (answers.length < questions.length) {
        ask(answers.length)
    } else {
        process.exit()
    }
})
process.on('exit', () => process.stdout.write(`${answers[0]} is a ${answers[1]} and is ${answers[2]} years old\n`))
ask(0);