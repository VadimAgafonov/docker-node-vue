import express from 'express';

const app = express();
const port = 3000;

app.get('/api/data', (req, res) => {
    res.json({ message: "Hello, it's data for server!" });
});

app.listen(port, () => {
    console.log(`Backend was running on http://localhost:${port}`);
})