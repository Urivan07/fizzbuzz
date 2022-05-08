const FizzbuzzService = require("./../../lib/services/FizzbuzzService");

describe("Test para FizzbuzzService", () => {
    test("trick equal to score", () => {
        const explorer = {name: "Explorer1", score: 1};
        const ExplorerTrick = FizzbuzzService.applyValidationInExplorer(explorer);
        expect(ExplorerTrick.trick).toBe(explorer.score);
    });
    test("trick equal to FIZZ", () =>{
        const explorer = {name : "Explorer2", score: 3};
        const ExplorerTrick = FizzbuzzService.applyValidationInExplorer(explorer);
        expect(ExplorerTrick.trick).toBe("FIZZ");
    });
    test("trick equal to BUZZ", ()=> {
        const explorer = {name : "Explorer3", score: 5};
        const ExplorerTrick = FizzbuzzService.applyValidationInExplorer(explorer);
        expect(ExplorerTrick.trick).toBe("BUZZ");
    });
    test("trick equal to FIZZBUZZ", ()=>{
        const explorer = {name : "Explorer4", score:15};
        const ExplorerTrick = FizzbuzzService.applyValidationInExplorer(explorer);
        expect(ExplorerTrick.trick).toBe("FIZZBUZZ");
    });
});