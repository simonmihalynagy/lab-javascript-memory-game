class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards(cards) {
    // ... write your code here
    if (!cards) {
      return undefined;
    }

    /* let oldElement;
    for (let i = cards.length - 1; i > 0; i--) {
      let rand = Math.floor(Math.random() * (i + 1));
      oldElement = cards[i];
      cards[i] = cards[rand];
      cards[rand] = oldElement;
    }
    return cards; */
    let currentIndex = cards.length,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      cards[([currentIndex], cards[randomIndex])] = [
        cards[randomIndex],
        cards[currentIndex]
      ];
    }

    return cards;
  }

  checkIfPair(card1, card2) {
    // ... write your code here
    this.pairsClicked += 1;

    if (card1 === card2) {
      this.pairsGuessed += 1;
    }
    return card1 === card2;
  }

  checkIfFinished() {
    // ... write your code here
    return this.pairsGuessed * 2 === this.cards.length;
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
