function saludar() {
    document.getElementById('resultado').textContent = '¡Hola desde CI/CD! 🎉';
    console.log("✅ Saludar ejecutado correctamente.");
}

function error() {
    document.getElementById('error').textContent = '¡Ups! Algo salió mal. 😱';
    console.error("❌ Error forzado.");
    throw new Error("Error forzado para probar el monitoreo.");
}

// Función para sumar (con error controlado)
function sumar(a, b) {
    if (a < 0 || b < 0) {
        throw new Error("No se pueden sumar números negativos.");
    }
    return a + b;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { sumar, saludar, error };
}
