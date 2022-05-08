class ExplorerService {
    static filterByMission(explorers, mission) {
        const explorerByMission = explorers.filter((explorer) => explorer.mission === mission);
        return explorerByMission;
    }
    static getAmountOfExplorersByMission(explorers, mission) {
        const amountOfExplorers = explorers.filter(explorer => explorer.mission === mission);
        return amountOfExplorers.length;
    }
    static getExplorersUsernamesByMission(explorers, mission) {

    }
}

module.exports = ExplorerService;
