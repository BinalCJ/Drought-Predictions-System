<<<<<<< HEAD>>>>>>>
# Disaster-Predictions-System
==========================
# Droughts Predictions System
Using Machine Learning to predict droughts. Used LightGBM model as ML Algorithm. Python backend with React frontend and using MongoDB Compass as a Database. Model training pipeline using LightGBM

Why I used LightGBM?
After I tried other models(Random Forest and Linear regression) and chose this one as the best model to implement the predictions system.
1. Faster training than Random Forest.
2. Best accuracy.
3. Supports multiclass classification.

## Explain
Frontend ➝ Backend ➝ ML Model ➝ MongoDB 

### Postman output
{
    "Monthly Drought Forecast": {
        "June 2025": "Moderate Risk",
        "July 2025": "Moderate Risk",
        "August 2025": "Moderate Risk",
        "September 2025": "Moderate Risk",
        "October 2025": "Low Risk",
        "November 2025": "Low Risk",
        "December 2025": "Low Risk",
        "January 2026": "Low Risk",
        "February 2026": "Moderate Risk",
        "March 2026": "Moderate Risk",
        "April 2026": "Moderate Risk",
        "May 2026": "High Risk",
        "June 2026": "High Risk",
    },
    "Region": "Anuradhapura AdministrativeArea4"
}


#### How to run 
.venv\Scripts\activate
pip install -r api/requirements.txt
python train_model.py
python app.py
