import pandas as pd

def preprocess_data(input_path='data/raw/D_Dataset_U2SL.csv', output_path='data/processed/D_Dataset_U2SL_processed.xlsx'):
    """
    Preprocess the raw dataset by adding a Drought Risk column and save as an Excel file.
    
    Parameters:
    - input_path (str): Path to the raw CSV file.
    - output_path (str): Path to save the processed Excel file.
    """
    try:
        data = pd.read_csv(input_path)
        print(f"Loaded raw data from {input_path}")
    except FileNotFoundError:
        print(f"Error: File {input_path} not found. Please ensure it exists in the specified directory.")
        return
    except Exception as e:
        print(f"Error loading file: {e}")
        return

    required_columns = ['Rainfall Deficit (mm)', 'Standardized Precipitation Index (SPI)', 
                       'Standardized Evapotranspiration Index (SPEI)']
    if not all(col in data.columns for col in required_columns):
        print("Error: One or more required columns are missing in the dataset.")
        print(f"Expected columns: {required_columns}")
        print(f"Found columns: {list(data.columns)}")
        return

    def assign_drought_risk(row):
        rainfall_deficit = row['Rainfall Deficit (mm)']
        spi = row['Standardized Precipitation Index (SPI)']
        spei = row['Standardized Evapotranspiration Index (SPEI)']
        if spi >= 0 and spei >= 0 and rainfall_deficit < 50:
            return 'No Risk'
        elif spi >= -1 and spei >= -1 and rainfall_deficit < 100:
            return 'Low Risk'
        elif spi <= -1.5 and spei <= -1.5 and rainfall_deficit >= 150:
            return 'High Risk'
        else:
            return 'Moderate Risk'

    data['Drought Risk'] = data.apply(assign_drought_risk, axis=1)
    print("Added 'Drought Risk' column to the dataset.")

    import os
    os.makedirs(os.path.dirname(output_path), exist_ok=True)

    try:
        data.to_excel(output_path, index=False)
        print(f"Preprocessed data saved as {output_path}")
    except Exception as e:
        print(f"Error saving file: {e}")

if __name__ == "__main__":
    preprocess_data()