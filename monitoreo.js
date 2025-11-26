const { error } = require('./app');

console.log("👀 Monitoreo activado. Revisando errores cada 5 segundos...");

setInterval(() => {
    try {
        error();
    } catch (err) {
        console.error("🚨 Alerta de monitoreo:", err.message);
    }
}, 5000);
