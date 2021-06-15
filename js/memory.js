class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    // ... write your code here

    if (!this.cards.length) {
      return undefined;
    }

    // Esto lo he intentado adaptar de stackoverflow pero no lo acabo de entender
    else {
      for (let i = this.cards.length; i > 0; i--) {
        let j = Math.floor(Math.random() * i--);
        let temp = this.cards[i];
        this.cards[i] = this.cards[j];
        this.cards[j] = temp;
      }
    }
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
