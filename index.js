/*
document.addEventListener('DOMContentLoaded', () => {
    gapi.load('client:auth2', initClient);

function initClient() {
    gapi.client.init({
        apiKey: 'TU_API_KEY',
        clientId: 'TU_CLIENT_ID',
        discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"],
        scope: "https://www.googleapis.com/auth/calendar.events"
    }).then(function () {
        // Botón de autenticación
        document.getElementById('authButton').onclick = function() {
            gapi.auth2.getAuthInstance().signIn();
        };
    });
}

function createCalendarEvent(tapCount, date, time) {
    const event = {
        'summary': `${tapCount} Taps Record`,
        'description': `Registro de actividad: ${tapCount} taps`,
        'start': {
            'dateTime': new Date().toISOString(),
            'timeZone': 'America/Santo_Domingo'
        },
        'end': {
            'dateTime': new Date(new Date().getTime() + (30 * 60 * 1000)).toISOString(),
            'timeZone': 'America/Santo_Domingo'
        }
    };

    gapi.client.calendar.events.insert({
        'calendarId': 'primary',
        'resource': event
    }).then((response) => {
        console.log('Evento creado: ' + response.htmlLink);
    });
}

    
    // Estilos globales
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.display = 'flex';
    document.body.style.flexDirection = 'column';
    document.body.style.alignItems = 'center';
    document.body.style.justifyContent = 'center';
    document.body.style.height = '100vh'; // Para centrar verticalmente
*/
/*
    // Elementos del DOM
    const countLabel = document.getElementById("countLabel");
    const activityLog = document.getElementById("activityLog");
    let count = 0;
    let activityRecords = []; // Array para almacenar registros de actividad en memoria

    // Botones
    const buttons = document.querySelectorAll('.buttons');
    buttons.forEach(button => {
        button.style.padding = '10px 20px';
        button.style.fontSize = '1.5em';
        button.style.color = 'white';
        button.style.backgroundColor = 'hsl(214, 100%, 74%)';
        button.style.borderRadius = '3%';
        button.style.border = 'none';
        button.style.cursor = 'pointer';
        button.style.margin = '5px'; // Espaciado entre botones

        button.onmouseover = () => {
            button.style.backgroundColor = 'hsl(214, 100%, 56%)';
        };
        button.onmouseout = () => {
            button.style.backgroundColor = 'hsl(214, 100%, 74%)';
        };
    });

    // Lógica del contador
    const decreaseBtn = document.getElementById("decreaseBtn");
    const resetBtn = document.getElementById("resetBtn");
    const increaseBtn = document.getElementById("increaseBtn");

    increaseBtn.onclick = function () {
        count++;
        countLabel.textContent = count;
    };

    decreaseBtn.onclick = function () {
        count--;
        countLabel.textContent = count;
    };

    resetBtn.onclick = function () {
        if (count > 0) {
            // Registrar la actividad solo si hay un conteo mayor a 0
            registerActivity(count);
        }
        count = 0; // Reiniciar el contador
        countLabel.textContent = count; // Actualizar el label
        displayActivity(); // Mostrar la actividad
    };

    // Función para registrar la actividad
    function registerActivity(currentCount) {
        const now = new Date(); // Obtener la fecha y hora actual
        const date = now.toLocaleDateString(); // Obtener la fecha en formato local
        const time = now.toTimeString().split(' ')[0]; // Formato HH:MM:SS
        activityRecords.push({ count: currentCount, date: date, time: time }); // Almacenar en memoria
    }

    // Función para mostrar la actividad
    function displayActivity() {
        activityLog.innerHTML = '<h3>Registro de Actividad</h3>';
        activityRecords.forEach(record => {
            activityLog.innerHTML += `<p>${record.count} taps on ${record.date} at ${record.time}</p>`;
        });
    }
});
*/
const SCOPES = "https://www.googleapis.com/auth/calendar.events";


authButton.onclick = function() {
    gapi.auth2.getAuthInstance().signIn().then(() => {
        console.log('Usuario autenticado');
    }).catch((error) => {
        console.log('Error en la autenticación', error);
    });
};

/*
function createCalendarEvent(tapCount, date, time) {
    const event = {
        'summary': `${tapCount} Taps Record`,
        'description': `Registro de actividad: ${tapCount} taps`,
        'start': {
            'dateTime': new Date().toISOString(),  // Fecha y hora de inicio del evento
            'timeZone': 'America/Santo_Domingo'
        },
        'end': {
            'dateTime': new Date(new Date().getTime() + (30 * 60 * 1000)).toISOString(),  // Termina 30 minutos después
            'timeZone': 'America/Santo_Domingo'
        }
    };

    gapi.client.calendar.events.insert({
        'calendarId': 'primary',  // Calendario principal
        'resource': event
    }).then((response) => {
        console.log('Evento creado: ' + response.htmlLink);
    }).catch((error) => {
        console.error('Error al crear el evento', error);
    });
}

*/
document.addEventListener('DOMContentLoaded', () => {
    let count = 0;
    let activityRecords = [];

    const CLIENT_ID = '653656640517-h8kvhggkbb7l064guklr09b88d5fc9dl.apps.googleusercontent.com';  // Reemplaza con tu Client ID
    const API_KEY = 'AIzaSyAStIv2fQDNeafMyRs_5rEusfdrPD1qI6k';      // Reemplaza con tu API Key
    const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
    const SCOPES = "https://www.googleapis.com/auth/calendar.events";

    const authButton = document.getElementById('authButton');
    const countLabel = document.getElementById("countLabel");
    const decreaseBtn = document.getElementById("decreaseBtn");
    const resetBtn = document.getElementById("resetBtn");
    const increaseBtn = document.getElementById("increaseBtn");
    const activityLog = document.getElementById("activityLog");

    // Estilos aplicados dinámicamente
    document.body.style.fontFamily = "Arial, sans-serif";
    document.body.style.textAlign = "center";
    document.body.style.backgroundColor = "#f4f4f9";
    document.body.style.margin = "0";
    document.body.style.padding = "20px";

    countLabel.style.fontSize = "5em";
    countLabel.style.display = "block";
    countLabel.style.margin = "20px auto";
    
    authButton.style.padding = "10px 20px";
    authButton.style.fontSize = "1.5em";
    authButton.style.backgroundColor = "#4285f4";
    authButton.style.color = "#fff";
    authButton.style.border = "none";
    authButton.style.borderRadius = "5px";
    authButton.style.cursor = "pointer";
    authButton.style.margin = "20px 0";
    
    authButton.onmouseover = function() {
        authButton.style.backgroundColor = "#357ae8";
    };
    authButton.onmouseout = function() {
        authButton.style.backgroundColor = "#4285f4";
    };

    const buttons = [decreaseBtn, resetBtn, increaseBtn];
    buttons.forEach(button => {
        button.style.padding = "10px 20px";
        button.style.fontSize = "1.5em";
        button.style.color = "#fff";
        button.style.backgroundColor = "#007bff";
        button.style.border = "none";
        button.style.borderRadius = "5px";
        button.style.cursor = "pointer";
        button.style.margin = "10px";
    });

    resetBtn.style.backgroundColor = "#dc3545";  // Cambiar color para resaltar el reset

    activityLog.style.marginTop = "20px";
    activityLog.style.padding = "10px";
    activityLog.style.backgroundColor = "#fff";
    activityLog.style.borderRadius = "5px";
    activityLog.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.1)";

    // Funciones para el contador
    increaseBtn.onclick = function () {
        count++;
        countLabel.textContent = count;
    };

    decreaseBtn.onclick = function () {
        if (count > 0) {
            count--;
            countLabel.textContent = count;
        }
    };

    resetBtn.onclick = function () {
        if (count > 0) {
            // Registrar actividad antes de resetear el contador
            registerActivity(count);
        }
        count = 0;  // Reiniciar el contador a cero
        countLabel.textContent = count;
        displayActivity();  // Mostrar las actividades registradas
    };

    // Función para registrar la actividad
    function registerActivity(currentCount) {
        const now = new Date();  // Obtener fecha y hora actual
        const date = now.toLocaleDateString();  // Fecha en formato local
        const time = now.toTimeString().split(' ')[0];  // Hora en formato HH:MM:SS
        activityRecords.push({ count: currentCount, date: date, time: time });

        // Crear un evento en Google Calendar
        createCalendarEvent(currentCount, date, time);
    }

    // Función para mostrar la actividad registrada
    function displayActivity() {
        activityLog.innerHTML = '<h3>Registro de Actividad</h3>';
        activityRecords.forEach(record => {
            activityLog.innerHTML += `<p>${record.count} taps on ${record.date} at ${record.time}</p>`;
        });
    }

    // Cargar la API de Google Calendar
    function handleClientLoad() {
        gapi.load('client:auth2', initClient);
    }

    // Inicializar el cliente de Google API
    function initClient() {
        gapi.client.init({
            apiKey: API_KEY,
            clientId: CLIENT_ID,
            discoveryDocs: DISCOVERY_DOCS,
            scope: SCOPES
        }).then(function () {
            authButton.onclick = function() {
                gapi.auth2.getAuthInstance().signIn();
            };
        }, function (error) {
            console.log('Error al inicializar la API de Google', error);
        });
    }

    
    function createCalendarEvent(tapCount, date, time) {
        if (!gapi.auth2.getAuthInstance().isSignedIn.get()) {
            alert('Por favor, autentícate primero.');
            return;
        }
    
        const event = {
            'summary': `${tapCount} Taps Record`,
            'description': `Registro de actividad: ${tapCount} taps`,
            'start': {
                'dateTime': new Date().toISOString(),  // Hora de inicio del evento
                'timeZone': 'America/Santo_Domingo'
            },
            'end': {
                'dateTime': new Date(new Date().getTime() + (30 * 60 * 1000)).toISOString(),  // Hora de finalización
                'timeZone': 'America/Santo_Domingo'
            }
        };
    
        // Probar la API: Mostrar el evento en la consola
        console.log("Datos del evento que se enviarán a Google Calendar:", event);
    
        // Intentar insertar el evento en el calendario
        
        gapi.client.calendar.events.insert({
            'calendarId': 'primary',
            'resource': event
        }).then((response) => {
            console.log('Evento creado exitosamente:', response);
        }, (error) => {
            console.error('Error al crear el evento:', error);
        });
    }
    
    // Función para crear un evento en Google Calendar
    function createCalendarEvent(tapCount, date, time) {
        const event = {
            'summary': `${tapCount} Taps Record`,
            'description': `Registro de actividad: ${tapCount} taps`,
            'start': {
                'dateTime': new Date().toISOString(),
                'timeZone': 'America/Santo_Domingo'
            },
            'end': {
                'dateTime': new Date(new Date().getTime() + (30 * 60 * 1000)).toISOString(),
                'timeZone': 'America/Santo_Domingo'
            }
        };
/*
        gapi.client.calendar.events.insert({
            'calendarId': 'primary',
            'resource': event
        }).then((response) => {
            console.log('Evento creado: ' + response.htmlLink);
        }, (error) => {
            console.error('Error al crear el evento', error);
        });
        */
    }

    // Cargar y autenticar el cliente de Google Calendar cuando la página esté lista
    handleClientLoad();
});
