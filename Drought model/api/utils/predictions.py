import joblib
import numpy as np
import pandas as pd
import datetime
import os
from collections import OrderedDict
from datetime import datetime
from dateutil.relativedelta import relativedelta

# Load model, scaler, and label mapping
model_path = os.path.join(os.path.dirname(__file__), '..', '..', 'models', 'drought_predictor.pkl')
scaler_path = os.path.join(os.path.dirname(__file__), '..', '..', 'models', 'scaler.pkl')
mapping_path = os.path.join(os.path.dirname(__file__), '..', '..', 'models', 'label_mapping.pkl')

model = joblib.load(model_path)
scaler = joblib.load(scaler_path)
reverse_mapping = joblib.load(mapping_path)

def forecast_drought_risk(input_data):
    """
    Forecast drought risk for the next 12 months (starting from next month)
    using the input data. Input should be a dict with keys:
    'Rainfall Deficit', 'SPI', 'SPEI', and 'Region'.
    """
    try:
        # Convert input dict to DataFrame
        df_input = pd.DataFrame([{
            'Rainfall Deficit': input_data['Rainfall Deficit'],
            'SPI': input_data['SPI'],
            'SPEI': input_data['SPEI']
        }])

        # Scale the input
        scaled_input = scaler.transform(df_input)

        # Predict same values for the next 12 months
        predictions = model.predict([scaled_input[0]] * 12)

        # Get real next 12 calendar months (e.g., June 2025, July 2025, ...)
        today = datetime.today()
        forecast_months = [
            (today.replace(day=1) + relativedelta(months=+i)).strftime('%B %Y')
            for i in range(1, 13)
        ]

                # Build forecast as a list of month-risk dictionaries to preserve order
        forecast_list = [
            {month: reverse_mapping[int(pred)]}
            for month, pred in zip(forecast_months, predictions)
        ]

        return {
            "Region": input_data["Region"],
            "Monthly Drought Forecast": forecast_list
        }


    except Exception as e:
        return {"error": str(e)}

