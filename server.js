require('dotenv').config();
const app = require('./src/app');

const PORT = process.env.SV_PORT;

const server = app.listen(PORT, () => {
    console.log(`WSV eCommerce start with port ${PORT}`);
});

process.on('SIGINT', () => {
    server.close(() => console.log(`Exit express server`));
});
