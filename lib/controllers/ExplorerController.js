const ExplorerService = require("./../services/ExplorerService");
const FizzbuzzService = require("./../services/FizzbuzzService");
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
    static fizzbuzzNumber(number) {
        const fizzbuzz = FizzbuzzService.applyValidationInNumber(number);
        return fizzbuzz;
    }
}

module.exports = ExplorerController;
