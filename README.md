# HT Sports App Móvil

<p align="center">
  <img src="https://github.com/user-attachments/assets/6a510eb9-31b3-4e53-870d-d498d91de35a" alt="HT Sports Logo" />
</p>

![Ionic](https://img.shields.io/badge/Ionic-Framework-3880ff?logo=ionic)&nbsp;![Angular](https://img.shields.io/badge/Angular-15-dd0031?logo=angular)&nbsp;![Android](https://img.shields.io/badge/Android-Compatible-3ddc84?logo=android)

> **HT Sports** es una plataforma web y móvil para la gestión integral de equipos deportivos, pensada tanto para aficionados, jugadores y cuerpo técnico de clubes de nivel modesto o en fase inicial.


## 📱 Descripción de la App Móvil

La app móvil de **HT Sports** está desarrollada con **Ionic + Angular** y empaquetada para Android. Utiliza la librería **InAppBrowser** para mostrar la versión web embebida dentro de la propia app sin abrir un navegador externo.  
> ⚠️ **Solo disponible para Android**. No está publicada en ningún marketplace

### Principales características
- **WebView embebida** con InAppBrowser  
- Carga segura de la web principal sin salir de la app  
- Compatible con dispositivos Android


## 🎯 Objetivos del Proyecto

Los objetivos se dividen en dos ámbitos:

1. **Personales**  
   - Afrontar nuevos retos técnicos.  
   - Aprender y aplicar nuevas tecnologías (Ionic, Android Studio).  

2. **Funcionales**  
   - Proveer una plataforma accesible para clubes deportivos de nivel modesto.  
   - Diferentes experiencias según el rol de usuario:
     - **Aficionado**: resultados en directo, tienda de merchandising y compra de entradas.  
     - **Jugador**: planificación semanal, estadísticas, dietas por IA.  
     - **Cuerpo Técnico**: creación de entrenamientos, alineaciones, scout y valoración de jugadores.

## 🏗️ Tecnologías

<p align="center">
  <img src="https://img.shields.io/badge/Ionic-Framework-3880ff?style=for-the-badge&logo=ionic" alt="Ionic" />
  <img src="https://img.shields.io/badge/Angular-15-dd0031?style=for-the-badge&logo=angular" alt="Angular" />
  <img src="https://img.shields.io/badge/Capacitor-4.1.2-0050ef?style=for-the-badge&logo=ionic" alt="Capacitor" />
  <img src="https://img.shields.io/badge/InAppBrowser-Plugin-000000?style=for-the-badge" alt="InAppBrowser" />
  <img src="https://img.shields.io/badge/Android_Studio-2021.1.1-3ddc84?style=for-the-badge&logo=android-studio" alt="Android Studio" />
</p>


## 📂 Estructura del Proyecto

```txt
TFC_HTSports_APP/
├── android/                     # Proyecto nativo Android (generado por Capacitor)
├── resources/                   # Iconos y splashscreens
├── src/
│   ├── app/
│   │   ├── app.component.ts     # Componente principal
│   │   └── app.module.ts
│   └── assets/
│       └── ...                  # Imágenes y estilos
├── capacitor.config.ts          # Configuración de Capacitor
├── ionic.config.json            # Configuración de Ionic
├── package.json
├── tsconfig.json
└── README.md
```
## ⚙️ Instalación y Entorno de Desarrollo

Clonar repositorio:

```txt
git clone https://github.com/sorgazb/TFC_HTSports_APP.git
cd TFC_HTSports_APP
```

Instalar dependencias:

```txt
npm install
```

Levantar la app en modo desarrollo:

```txt
ionic serve
Abre tu navegador en http://localhost:8100.
```

Construir APK para Android:

```txt
ionic build --prod
npx cap sync android
npx cap open android
```

## 🤝 Contribución
¡Todo aporte es bienvenido! Si quieres ayudar con:

Corrección de bugs

Nuevas funcionalidades

Documentación

Haz un fork del repositorio.

Crea una rama:

```txt
git checkout -b feature/nombre-feature
```

Realiza tus cambios y haz commit.

Abre un Pull Request describiendo los cambios.

Proyecto Final GS-DAW – Sergio Orgaz Bravo
