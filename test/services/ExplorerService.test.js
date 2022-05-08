const ExplorerService = require("./../../lib/services/ExplorerService");

const fs = require("fs");
const rawdata = fs.readFileSync("explorers.json"); // Read json file
const ExplorerJson = JSON.parse(rawdata);


describe("Test para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una mission", () => {
        const explorers = [{ mission: "node"}];
        const explorerInNode = ExplorerService.filterByMission(explorers, "node");
        
        expect(explorerInNode.length).toBe(1);
    });

    test("Amount of Explorers by mission", () => {
        const explorers = ExplorerJson
        const explorerInJava = ExplorerService.getAmountOfExplorersByMission(explorers, "java")
        
        expect(explorerInJava).toBe(5)

    })
});