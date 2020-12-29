const app = require('./app');
const PORT = process.env.PORT || 8080;

app.listen(8080, () => {
    console.log(`App listening on port ${PORT}`);
});