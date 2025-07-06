import pandas as pd
from sklearn.preprocessing import StandardScaler
import joblib
import os

# Load the saved scaler from models directory
SCALER_PATH = os.path.join(os.path.dirname(__file__), '../../models/scaler.pkl')
scaler = joblib.load(SCALER_PATH)

def preprocess_input(data):
    """
    Preprocesses raw input data for prediction.

    Args:
        data: Dictionary or DataFrame with 'Rainfall Deficit', 'SPI', 'SPEI'

    Returns:
        DataFrame: Preprocessed data ready for model prediction
    """
    if not isinstance(data, pd.DataFrame):
        data = pd.DataFrame([data], columns=['Rainfall Deficit', 'SPI', 'SPEI'])

    data.fillna(data.mean(), inplace=True)
    data[['Rainfall Deficit', 'SPI', 'SPEI']] = scaler.transform(data[['Rainfall Deficit', 'SPI', 'SPEI']])

    return data

def preprocess_csv(file_path, output_path=None):
    """
    Preprocesses data from a CSV file for training or batch prediction.

    Args:
        file_path: Path to the raw CSV file
        output_path: Path to save the preprocessed CSV (optional)

    Returns:
        DataFrame: Preprocessed data
    """
    data = pd.read_csv(file_path)
    required_columns = ['Rainfall Deficit', 'SPI', 'SPEI']
    if not all(col in data.columns for col in required_columns):
        raise ValueError("Missing required columns in the data")

    data[required_columns] = data[required_columns].fillna(data[required_columns].mean())
    data[required_columns] = scaler.transform(data[required_columns])

    if output_path:
        data.to_csv(output_path, index=False)
    return data

if __name__ == "__main__":
    sample_data = {'Rainfall Deficit': [50], 'SPI': [-1.2], 'SPEI': [-1.3]}
    print("Processed Single Input:\n", preprocess_input(sample_data))