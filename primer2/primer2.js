function shuffleAndDeal(numPlayers, cardsPerPlayer, numDecks = 1){

    //Error handling
    if (isNaN(numPlayers) || numPlayers === null || numPlayers < 1 || numPlayers % 1 !== 0) { 
        throw new Error(`Number of players invalid`);
    }
    if (isNaN(cardsPerPlayer) || cardsPerPlayer === null || cardsPerPlayer < 1 || cardsPerPlayer % 1 !== 0) { 
        throw new Error(`Number of cards per player invalid`);
    }
    if (numDecks*52 < numPlayers*cardsPerPlayer) { 
        throw new Error(`Number of cards requested exeeds the number of available cards.`);
    }

    //Declare possibile card combinations
    const suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
    const figures = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
    
    //Empty array to store Deck
    let deck = [];
    //For loops within a do-while loop create an ordered array of as many decks as required
    do {
        for (const suit of suits) {
            for (const figure of figures) {
                deck.push(`${figure} of ${suit}`);
            }
        }
    } while (deck.length < numDecks*52);

    //Perform a shuffle of the created stack of cards
    for (let i = deck.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }

    //Empty array to store hands
    let arrayOfHands = [];
    //Deal cards
    for (let i = numPlayers; i > 0; i--) {
        arrayOfHands.push(deck.splice(0, cardsPerPlayer));
    }

    return arrayOfHands;
}


export default shuffleAndDeal;
