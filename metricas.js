const express = require('express');
const client = require('prom-client');
const app = express();

const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics({ timeout: 5000 });

const errorCounter = new client.Counter({
    name: 'mi_app_errores_total',
    help: 'Total de errores en la aplicación'
});

app.get('/metrics', async (req, res) => {
    res.set('Content-Type', client.register.contentType);
    res.end(await client.register.metrics());
});

setInterval(() => {
    errorCounter.inc();
    console.log("📊 Métrica registrada: +1 error");
}, 10000);

app.listen(3000, () => {
    console.log("📊 Servidor de métricas en http://localhost:3000/metrics");
});
