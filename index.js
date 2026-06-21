const express = require('express');
const cors = require('cors');

const transactionService = require('./transactionService');

const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.send('AWS 3 Tier Architecture Application Running');
});

app.get('/transactions', async (req, res) => {

    try {

        const data =
            await transactionService.getTransactions();

        res.json(data);

    } catch (error) {

        res.status(500).json({
            error: error.message
        });
    }
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(
        `Server started on port ${PORT}`
    );
});
