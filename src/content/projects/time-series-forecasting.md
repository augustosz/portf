---
name: 'Time Series Forecasting'
description: 'Proyecto avanzado de análisis y pronóstico de series temporales. Incluye EDA completo, descomposición, múltiples modelos (ARIMA, Prophet), detección de anomalías y un dashboard interactivo. Ideal para demostrar habilidades de análisis de datos de nivel profesional.'
tags: ['python', 'data-analysis', 'forecasting', 'statistics', 'streamlit']
image: '../../../public/static/time-series-forecasting.svg'
link: 'https://github.com/augustosz/time-series-forecasting'
startDate: '2025-11-30'
---
# Time Series Forecasting & Analytics

![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![Pandas](https://img.shields.io/badge/Pandas-150458?style=for-the-badge&logo=pandas&logoColor=white)
![Plotly](https://img.shields.io/badge/Plotly-3F4F75?style=for-the-badge&logo=plotly&logoColor=white)

Un proyecto completo de análisis y pronóstico de series temporales que demuestra habilidades avanzadas de análisis de datos.

## 🎯 Qué Hace

Este proyecto analiza series temporales de principio a fin:
- **Análisis Exploratorio**: Estadísticas, tests de estacionariedad
- **Descomposición**: Separa tendencia, estacionalidad y residuos
- **Pronóstico**: Usa ARIMA, Prophet y Promedios Móviles
- **Anomalías**: Detecta valores atípicos automáticamente

## ✨ Características Técnicas

### Modelos Implementados
- **ARIMA**: Modelo autorregresivo clásico
- **Prophet**: Framework de Facebook para series temporales
- **Promedio Móvil**: Baseline simple pero efectivo

### Análisis Estadístico
- Test de Dickey-Fuller (estacionariedad)
- Descomposición estacional
- Autocorrelación y autocorrelación parcial
- Detección de outliers

### Dashboard Interactivo
- 4 pestañas especializadas
- Visualizaciones con Plotly
- Configuración de parámetros en tiempo real
- Exportación de resultados

## 🛠️ Tech Stack

- **Python** - Lenguaje principal
- **Pandas & NumPy** - Manipulación de datos
- **Statsmodels** - Modelos estadísticos
- **Prophet** - Pronóstico avanzado
- **Plotly** - Gráficos interactivos
- **Streamlit** - Dashboard web

## 📖 README Completo

El proyecto incluye un README.md detallado con:
- Metodología completa
- Explicación de conceptos
- Instrucciones paso a paso
- Interpretación de resultados

## 🚀 Cómo Arrancar

```bash
cd data-proyects/time-series-forecasting
pip install -r requirements.txt
python generate_data.py
streamlit run app.py
```
