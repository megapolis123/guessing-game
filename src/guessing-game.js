class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.currentValue = Math.round((this.min + this.max) / 2);
        return this.currentValue;
    }

    lower() {
        this.max = this.currentValue;
    }

    greater() {
        this.min = this.currentValue;
    }
}

module.exports = GuessingGame;