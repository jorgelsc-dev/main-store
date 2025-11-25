// src/registerServiceWorker.js
/* eslint-disable no-console */

import { register } from "register-service-worker";

if (process.env.NODE_ENV === "production") {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready() {
      console.log("PWA lista para servir desde caché.");
    },
    registered() {
      console.log("Service worker registrado.");
    },
    cached() {
      console.log("Contenido cacheado para uso sin conexión.");
    },
    updatefound() {
      console.log("Nueva versión descargándose...");
    },
    updated() {
      console.log("Nuevo contenido disponible.");
      window.location.reload();
    },
    offline() {
      console.log("Sin conexión. Modo offline.");
    },
    error(error) {
      console.error("Error en el registro del service worker:", error);
    },
  });
}
