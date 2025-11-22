---
name: 'ETL Pipeline'
description: 'Un pipeline ETL completo hecho con Python y SQL. Extrae data de CSVs, la transforma con pandas, y la carga en SQLite. Incluye un dashboard Streamlit para hacer consultas SQL en vivo y ver los resultados al toque.'
tags: ['python', 'sql', 'etl', 'sqlite', 'pandas']
image: '../../../public/static/etl-pipeline.svg'
link: 'https://github.com/augustosz/etl-pipeline'
startDate: '2025-11-29'
---
# ETL Pipeline

![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![SQLite](https://img.shields.io/badge/SQLite-003B57?style=for-the-badge&logo=sqlite&logoColor=white)
![Pandas](https://img.shields.io/badge/Pandas-150458?style=for-the-badge&logo=pandas&logoColor=white)

Un proyecto que muestra cómo armar un pipeline ETL (Extract, Transform, Load) de principio a fin.

## 🔄 Cómo Funciona

El pipeline tiene tres fases:

1. **Extract (Extracción)** 📥
   - Lee data de archivos CSV (clientes y ventas)
   
2. **Transform (Transformación)** 🔄
   - Limpia y procesa la data con pandas
   - Calcula métricas y hace joins
   
3. **Load (Carga)** 💾
   - Guarda todo en una base SQLite

## ✨ Características

- **Pipeline Automatizado**: Un script que hace todo el proceso de una.
- **Dashboard SQL**: Interfaz Streamlit para hacer consultas y ver resultados.
- **Consultas Predefinidas**: Queries listas para usar (top clientes, ventas por producto, etc.).
- **Data Sintética**: Generador de datos de ejemplo para probar.

## 🚀 Cómo Arrancar

```bash
cd data-proyects/etl-pipeline
pip install -r requirements.txt
python generate_sample_data.py
python etl.py
streamlit run app.py
```
