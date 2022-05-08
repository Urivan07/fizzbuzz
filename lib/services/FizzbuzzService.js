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
}

module.exports = FizzbuzzService;