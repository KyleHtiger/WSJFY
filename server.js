const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// In-memory storage for simplicity (replace with a database in a real-world scenario).
const selections = [];

app.post('/submit', (req, res) => {
    const { userName, selectedNumber } = req.body;
    selections.push({ userName, selectedNumber });
    res.sendStatus(200);
});

app.get('/results', (req, res) => {
    // Ensure proper authentication/authorization before providing results.
    res.json(selections);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
