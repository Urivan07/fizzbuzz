const ExplorerService = require("./../services/ExplorerService");
const FizzbuzzService = require("./../services/FizzbuzzService");
const Reader = require("./../utils/Reader");

class ExplorerController {
    static getExplorersByMission(mission) {
        const explorers = Reader.readJsonFile("./explorers.json");
        const filterByMission = ExplorerService.filterByMission(explorers,mission);
        return filterByMission;
    }
}

module.exports = ExplorerController;
