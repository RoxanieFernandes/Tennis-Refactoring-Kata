class TennisGame1 {
  player1;
  player2;

  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    this.scorePlayer1 = 0;
    this.scorePlayer2 = 0;
  }

  wonPoint(player) {
    if (player === this.player1) {
      ++this.scorePlayer1;
    } else {
      ++this.scorePlayer2;
    }
  }

  getScore() {
    const score = {
      0: "Love-All",
      1: "Fifteen-All",
      2: "Thirty-All",
      3: "Deuce",
    };
    if (this.scorePlayer1 <= 3 && this.scorePlayer1 === this.scorePlayer2) {
      return score[this.scorePlayer1];
    } else {
      const result = this.scorePlayer1 - this.scorePlayer2;
      let resultText = "";

      if (result === 1) resultText = "Advantage player1";
      else if (result === -1) resultText = "Advantage player2";
      else if (result >= 2) resultText = "Win for player1";
      else resultText = "Win for player2";
      return resultText;
    }
  }
}
