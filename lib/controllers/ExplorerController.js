const ExplorerService = require("./../services/ExplorerService");
const Reader = require("./../utils/Reader");
const explorers = Reader.readJsonFile("./explorers.json");


class ExplorerController {
    static getExplorersByMission(mission) {
        const filterByMission = ExplorerService.filterByMission(explorers,mission);
        return filterByMission;
    }
    static explorersAmountInMission(mission) {
        const AmountInMission = ExplorerService.getAmountOfExplorersByMission(explorers, mission);
        return AmountInMission;
    }
    static explorersUsernamesByMission(mission) {
        const UsernamesByMission = ExplorerService.getExplorersUsernamesByMission(explorers, mission);
        return UsernamesByMission;
    }
}

module.exports = ExplorerController;
