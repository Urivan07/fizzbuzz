const ExplorerService = require("./../../lib/services/ExplorerService");

const Reader = require("./../../lib/utils/Reader");
const explorers = Reader.readJsonFile("./explorers.json");



describe("Test para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una mission", () => {
        const explorers = [{ mission: "node"}];
        const explorerInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorerInNode.length).toBe(1);
    });
    test("Amount of Explorers by mission", () => {
        const explorerInJava = ExplorerService.getAmountOfExplorersByMission(explorers, "java");
        
        expect(explorerInJava).toBe(5);
    });
    test("Explorers username by mission", () => {
        const explorersUsername = ExplorerService.getExplorersUsernamesByMission(explorers, "node");
        expect(explorersUsername).toContain("ajolonauta2");
    });
});