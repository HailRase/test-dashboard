const sql = require('mssql');
const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const port = 3001;
/*app.use(cors());*/
/*app.use(cors({
    origin: ['http://localhost:3000']
}));*/
const corsOpts = { origin: '*', methods: [ 'GET', 'POST', ], allowedHeaders: [ 'Content-Type', ], };
app.use(cors(corsOpts));
const config = {
    user: 'sa',
    password: '123Oktell321',
    server: '10.200.115.249',
    database: 'oktell',
    port: 1433,
    options: {
        trustServerCertificate: true
    }
};
app.get('/data',(req, res) => {
    // подключение к БД
    sql.connect(config).then(() => {
        // создание объекта запроса
        const request = new sql.Request();
        // выполнение запроса на выборку данных
        request.query('SELECT * FROM A_Stat_Connections_1x1').then(result => {
            // отправка результата запроса в виде JSON-объекта
            res.json(result.recordset);
            // закрытие подключения
            sql.close();
        }).catch(err => {
            // отправка ошибки клиенту
            res.status(500).send(`Error executing query: ${err}`);
            // закрытие подключения
            sql.close();
        });
    }).catch(err => {
        // отправка ошибки клиенту
        res.status(500).send(`Error connecting to database: ${err}`);
    });
});
app.get('/execsvcscriptplain', async (req, res) => {
    const url = 'http://y.klimko:2195662Aa@10.200.115.249:4055/execsvcscriptplain?name=stat';
    const config = {
        auth: {
            username: 'y.klimko',
            password: '2195662Aa'
        },
        params: {
            name: 'stat',
        }
    };
    try {
        const response = await axios.get(url);
        res.send(response.data);
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
});
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});