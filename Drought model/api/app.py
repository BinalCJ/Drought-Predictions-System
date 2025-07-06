from flask import Flask, request, jsonify
from flask_cors import CORS
from utils.predictions import forecast_drought_risk  
from datetime import datetime
from pymongo import MongoClient

client = MongoClient("mongodb://localhost:27017")
db = client['drought_db']
collection = db['predictions']

app = Flask(__name__)
CORS(app, resources={r"/predict": {"origins": "http://localhost:5173"}})

@app.route('/predict', methods=['POST'])
def predict():
    try:
        input_data = request.get_json(force=True)
        result = forecast_drought_risk(input_data)

        entry = {
            "Region": input_data.get("Region"),
            "Rainfall Deficit": input_data.get("Rainfall Deficit"),
            "SPI": input_data.get("SPI"),
            "SPEI": input_data.get("SPEI"),
            "Prediction Result": result["Monthly Drought Forecast"],
            "Timestamp": datetime.now()
        }
        collection.insert_one(entry)

        return jsonify(result)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
