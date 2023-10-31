function getComputerChoice() {
    const random = Math.floor(Math.random() * 3);
    switch (random) {
        case 0:
            return 'ROCK';
        case 1: 
            return 'PAPER';
        case 2: 
            return 'SCISSORS';
    }
}
