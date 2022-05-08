class ExplorerService {
    static filterByMission(explorers, mission) {
        const explorerByMission = explorers.filter(
            (explorer) => explorer.mission === mission
        );
        return explorerByMission;
    }
    static getAmountOfExplorersByMission(explorers, mission) {
        const amountOfExplorers = this.filterByMission(explorers, mission);
        return amountOfExplorers.length;
    }
    static getExplorersUsernamesByMission(explorers, mission) {
        const explorerByMission = this.filterByMission(explorers, mission);
        const ExplorersUsername = explorerByMission.map(
            (explorer) => explorer.githubUsername
        );
        return ExplorersUsername;
    }
}

module.exports = ExplorerService;
