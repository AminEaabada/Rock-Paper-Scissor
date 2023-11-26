function playGame(playerChoice) {
    const choices = ['🪨', '📃', '✂️'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    const Fresult = document.getElementById('f-result');
    const Sresult = document.getElementById('s-result');
    let result;

    switch (true) {
        case playerChoice === computerChoice:
            result = "It's a Draw 🟰 !";
            break;
        case playerChoice === '🪨' && computerChoice === '✂️':
        case playerChoice === '📃' && computerChoice === '🪨':
        case playerChoice === '✂️' && computerChoice === '📃':
            result = 'You win!';
            break;
        default:
            result = 'Computer wins!';
            break;
    }

    console.log(computerChoice);

    Fresult.textContent = `You chose ${playerChoice}, computer chose ${computerChoice}.  `
    Sresult.textContent = `   ${result} ` 
}

