const ExplorerController = require("./controllers/ExplorerController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (req, res) => {
    res.json({message : "FizzBuzz Api welcome!"});
});

app.get("/v1/explorers/:mission", (req, res) => {
    const mission = req.params.mission;
    const explorersInMission = ExplorerController.getExplorersByMission(mission);
    res.json(explorersInMission);
});

app.get("/v1/explorers/amount/:mission", (req, res) => {
    const mission = req.params.mission;
    const explorersAmountInMission = ExplorerController.explorersAmountInMission(mission);
    res.json({mission: mission, quantity: explorersAmountInMission});
});

app.get("/v1/explorers/usernames/:mission", (req, res) => {
    const mission = req.params.mission;
    const UsernamesByMission = ExplorerController.explorersUsernamesByMission(mission);
    res.json({mission: mission, explorers: UsernamesByMission});
});

app.get("/v1/fizzbuzz/:numer", (req, res) => {
    const numer = req.params.numer;
    const trcik = ExplorerController.fizzbuzzNumber(numer);
    res.json({score: numer, trick: trcik});
});

app.listen(port, ()=>{
    console.log(`FizzBuzz API in localhost:${port}`);
});