const app = require('express')();
const path = require('path');
const PORT = process.env.PORT || 3000;

app.use(require('express').static(path.join(__dirname, 'www')));

app.use('/health', (req, res) => {
    res.status(200).send('OK');
});

app.use('api/data', (req, res) => {
    res.json({ message: 'Hello from the API' });
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
