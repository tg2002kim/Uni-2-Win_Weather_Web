Dankook University, 2nd Year Winter Session (Winter 2024)

# DKU Weather App

**Open Source AI Applications Project - React + Weather APIs**

DKU Weather App is a web-based weather dashboard developed using **React**. It integrates multiple external weather APIs to provide real-time conditions and forecasted weather information through a clean, responsive user interface.

---

## Project Overview

### Objective
To build a functional weather dashboard by integrating open-source APIs, demonstrating key skills in frontend development, data fetching, and component-based design.

### Course Information
This project was developed during the **2nd Year, 2nd Semester (Fall 2024)** for the **Open Source AI Applications** course at **Dankook University** (Department of Mobile Systems Engineering).

---

## Core Features

| Feature | Description |
| :--- | :--- |
| **Location Search** | Real-time weather search capability by city or location name. |
| **API Integration** | Fetches and combines data from OpenWeatherMap and WeatherAPI. |
| **Dashboard View** | Displays current temperature, humidity, wind speed, etc. |
| **Responsive Design** | Optimized for seamless viewing and functionality across both mobile and desktop devices. |
| **Secure Configuration** | API keys are managed securely via local .env configuration files. |

---

## Getting Started

Follow these steps to set up and run the application locally.

### Prerequisites
- Node.js (Recommended version 18+)
- npm

### 1. Clone the Repository
git clone https://github.com/your-username/dku-weather-app.git
cd dku-weather-app

### 2. Install Dependencies
npm install

### 3. Set Up API Keys

Create a file named **.env** in the root directory and add your API keys:

VITE_OWM_API=<OpenWeatherMap_API_KEY>
VITE_WA_API=<WeatherApi_API_KEY>

### 4. Run Development Server
npm run dev

---

## Repository Structure
dku-weather-app/
├── src/
│   ├── components/        # Reusable UI components (e.g., WeatherCard)
│   ├── pages/             # Main application views
│   ├── services/          # Centralized API handling and data fetching logic
│   └── App.jsx            # Main component setup
├── .env.example           # Example file for API keys
├── index.html
└── vite.config.js

---

## Test Scenarios

The following scenarios were used for testing and verification:

1.  Search for a valid location (e.g., "Seoul").
2.  Enter an invalid location to verify fallback/error handling behavior.
3.  Check responsiveness on mobile devices.
4.  Verify API error handling when required keys are missing from the .env file.

---

## Team & Contribution

This project was a **team effort**. The collaborative work and contributions were managed through a dedicated repository.

**GitHub Repository:** [https://github.com/Minsu4302/OpenSource-Project](https://github.com/Minsu4302/OpenSource-Project)

### Contribution Guidelines
1.  Fork the repository
2.  Create a feature branch
3.  Commit your changes with a clear message
4.  Open a Pull Request to main
5.  Explain the motivation for your changes

---

## Reflection & Future Improvements

This project was developed as part of the Open Source AI Applications course at Dankook University. It was instrumental in solidifying skills in modern frontend architecture and multi-API integration.

### Further Development Ideas
-   Adding multi-language support (i18n).
-   Integrating a geolocation API to automatically fetch the user's local weather.
-   Developing interactive graph components for the 5-day forecast data.

---

## License

This project is licensed under the **MIT License** - see the LICENSE file for details.

---

## Acknowledgements
* WeatherAPI
* OpenWeatherMap
* React Icons
