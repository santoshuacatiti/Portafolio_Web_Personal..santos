// 1. Menú interactivo para celulares
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", function () {
    menu.classList.toggle("abierto");
});

// 2. Botón modo oscuro / claro
const temaBtn = document.getElementById("temaBtn");

temaBtn.addEventListener("click", function () {
    document.body.classList.toggle("oscuro");

    if (document.body.classList.contains("oscuro")) {
        temaBtn.textContent = "☀️ Modo claro";
    } else {
        temaBtn.textContent = "🌙 Modo oscuro";
    }
});

// 3. Mensaje de bienvenida personalizado
const bienvenidaBtn = document.getElementById("bienvenidaBtn");
const mensajeBienvenida = document.getElementById("mensajeBienvenida");

bienvenidaBtn.addEventListener("click", function () {
    mensajeBienvenida.textContent =
        "¡Hola! Gracias por visitar mi portafolio web. Espero que conozcas mis proyectos y aprendizajes.";
});

// 4. Filtro interactivo de proyectos
const filtros = document.querySelectorAll(".filtro");
const proyectos = document.querySelectorAll(".proyecto");

filtros.forEach(function (boton) {
    boton.addEventListener("click", function () {
        filtros.forEach(function (b) {
            b.classList.remove("activo");
        });

        boton.classList.add("activo");
        const filtro = boton.dataset.filtro;

        proyectos.forEach(function (proyecto) {
            if (filtro === "todos" || proyecto.dataset.categoria === filtro) {
                proyecto.style.display = "block";
            } else {
                proyecto.style.display = "none";
            }
        });
    });
});

// 5. Demostración práctica de consumo de API con Fetch
const obtenerApiBtn = document.getElementById("obtenerApiBtn");
const resultadoApi = document.getElementById("resultadoApi");

if (obtenerApiBtn) {
    obtenerApiBtn.addEventListener("click", async function () {
        resultadoApi.textContent = "Cargando datos...";
        try {
            // Ejemplo de API pública (PokéAPI)
            const respuesta = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
            const datos = await respuesta.json();
            resultadoApi.innerHTML = `
                📌 <strong>API Respuesta:</strong><br>
                Nombre: ${datos.name.toUpperCase()}<br>
                ID: #${datos.id}<br>
                Tipo: ${datos.types[0].type.name}
            `;
        } catch (error) {
            resultadoApi.textContent = "Error al conectar con la API.";
            console.error("Error Fetch:", error);
        }
    });
}

// 6. Validación sencilla del formulario
const formulario = document.getElementById("formulario");
const respuestaFormulario = document.getElementById("respuestaFormulario");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();

    if (nombre === "") {
        respuestaFormulario.textContent = "Por favor, escribe tu nombre.";
        return;
    }

    respuestaFormulario.textContent =
        "Gracias, " + nombre + ". Tu mensaje fue recibido correctamente.";
    formulario.reset();
});

// Fecha actual
document.getElementById("fecha").textContent =
    "Página creada con HTML + CSS + JavaScript + Bootstrap | " +
    new Date().toLocaleDateString("es-BO");
