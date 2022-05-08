class FizzbuzzService {
    static applyValidationInExplorer(explorer) {
        let score = explorer.score;
        if (score % 5 === 0 && score % 3 === 0) {
            explorer.trick = "FIZZBUZZ";
        } else if (score % 5 === 0) {
            explorer.trick = "BUZZ";
        } else if (score % 3 === 0) {
            explorer.trick = "FIZZ";
        } else {
            explorer.trick = score;
        }
        return explorer;
    }

    static applyValidationInNumber(number){
        let trick = number;
        if (number % 5 === 0 && number % 3 === 0) {
            trick = "FIZZBUZZ";
        } else if (number % 5 === 0) {
            trick = "BUZZ";
        } else if (number % 3 === 0) {
            trick = "FIZZ";
        }
        return trick;
    }
}

module.exports = FizzbuzzService;