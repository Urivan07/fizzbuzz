const ExplorerController = require("./../../lib/controllers/ExplorerController");

describe("Test para ExplorerController", ()=>{
    test("obteniendo explorers con mision node", () =>{
        const ExplorersByMission = ExplorerController.getExplorersByMission("node")
        expect(ExplorersByMission.length).toBe(10)
    })
    test("obteniendo explorers con mision java", () =>{
        const ExplorersByMission = ExplorerController.getExplorersByMission("java")
        expect(ExplorersByMission.length).toBe(5)
    })
})