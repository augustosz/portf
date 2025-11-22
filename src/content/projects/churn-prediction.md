---
name: 'Customer Churn Prediction'
description: 'Un modelo de Machine Learning para predecir si un cliente se va a dar de baja. Usa Random Forest y tiene una interfaz web hecha con Streamlit para probarlo en vivo. Ideal para retener clientes antes de que se las tomen.'
tags: ['machine-learning', 'python', 'scikit-learn', 'streamlit']
image: '../../../public/static/churn-prediction.svg'
link: 'https://github.com/augustosz/churn-prediction'
startDate: '2025-12-01'
---
# Customer Churn Prediction

![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![Scikit-Learn](https://img.shields.io/badge/scikit_learn-F7931E?style=for-the-badge&logo=scikit-learn&logoColor=white)
![Streamlit](https://img.shields.io/badge/Streamlit-FF4B4B?style=for-the-badge&logo=streamlit&logoColor=white)

Un proyecto de Machine Learning para identificar clientes en riesgo de abandono (Churn).

## 🧠 Cómo Funciona

El sistema usa un modelo de **Random Forest** entrenado con datos históricos de clientes. Analiza factores como:
- 📅 Antigüedad del cliente
- 💰 Cargos mensuales y totales
- 📝 Tipo de contrato
- 🛠️ Servicios contratados (Soporte, Seguridad, etc.)

## ✨ Características

- **Predicción en Vivo**: Cargá los datos y el modelo te tira la posta al toque.
- **Interfaz Simple**: Hecha con Streamlit, súper fácil de usar.
- **Resultados Claros**: Te dice si el cliente se queda o se va, y con qué probabilidad.

## 🚀 Cómo Arrancar

```bash
cd data-proyects/churn-prediction
pip install -r requirements.txt
python train_model.py
streamlit run app.py
```
