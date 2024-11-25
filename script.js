const preciosSimulados = {
    maiz: { mercado1: 25000, mercado2: 24500, mercado3: 25800 },
    trigo: { mercado1: 28000, mercado2: 27800, mercado3: 29100 },
    soja: { mercado1: 45000, mercado2: 44800, mercado3: 46200 },
};

document.getElementById("comparar").addEventListener("click", function() {
    const cultivo = document.getElementById("select-cultivo").value;
    const precios = preciosSimulados[cultivo];

    if (precios) {
        let resultadosHTML = `
            <h3>Precios actuales en CLP para ${cultivo.charAt(0).toUpperCase() + cultivo.slice(1)}:</h3>
            <ul>
                <li>Mercado 1: $${precios.mercado1.toLocaleString()}/ton</li>
                <li>Mercado 2: $${precios.mercado2.toLocaleString()}/ton</li>
                <li>Mercado 3: $${precios.mercado3.toLocaleString()}/ton</li>
            </ul>
        `;
        document.getElementById("resultados-precios").innerHTML = resultadosHTML;
    } else {
        document.getElementById("resultados-precios").innerText = "No se encontraron precios para este cultivo.";
    }
});

document.getElementById("simular").addEventListener("click", function () {
    const riego = parseInt(document.getElementById("riego").value);
    const fertilizacion = parseInt(document.getElementById("fertilizacion").value);

    let mensajeRiego, mensajeFertilizacion;

    // Simulación para el nivel de riego
    if (riego <= 3) {
        mensajeRiego = "El nivel de riego es bajo. Se recomienda aumentar el riego para maximizar la producción.";
    } else if (riego >= 7) {
        mensajeRiego = "El nivel de riego es alto. Considere reducirlo para ahorrar agua.";
    } else {
        mensajeRiego = "El nivel de riego es adecuado. Mantenga este nivel para una producción óptima.";
    }

    // Simulación para el nivel de fertilización
    if (fertilizacion <= 3) {
        mensajeFertilizacion = "El nivel de fertilización es bajo. Se recomienda aplicar más fertilizante para mejorar el rendimiento.";
    } else if (fertilizacion >= 7) {
        mensajeFertilizacion = "El nivel de fertilización es alto. Reduzca la cantidad para evitar daños a los cultivos.";
    } else {
        mensajeFertilizacion = "El nivel de fertilización es adecuado. Mantenga este nivel para una producción óptima.";
    }

    // Mostrar resultados
    const resultadosHTML = `
        <h3>Resultados de la Simulación:</h3>
        <ul>
            <li>${mensajeRiego}</li>
            <li>${mensajeFertilizacion}</li>
        </ul>
    `;
    document.getElementById("resultados-optimizacion").innerHTML = resultadosHTML;
});
