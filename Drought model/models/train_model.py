import pandas as pd
from sklearn.model_selection import train_test_split, cross_val_score
from sklearn.metrics import accuracy_score, classification_report
from sklearn.preprocessing import StandardScaler
import joblib
import lightgbm as lgb
import os

# === Load and preprocess dataset ===
data_path = os.path.join(os.path.dirname(__file__), '..', 'data', 'raw', 'D_Data_U2SL.csv')
data = pd.read_csv(data_path)

# Drop rows with missing values
data.dropna(inplace=True)

# Encode categorical target
label_mapping = {'No Risk': 0, 'Low Risk': 1, 'Moderate Risk': 2, 'High Risk': 3}
reverse_mapping = {v: k for k, v in label_mapping.items()}
data['Drought Risk'] = data['Drought Risk'].map(label_mapping)

X = data[['Rainfall Deficit', 'SPI', 'SPEI']]
y = data['Drought Risk']

# === Feature scaling ===
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# === Train/test split ===
X_train, X_test, y_train, y_test = train_test_split(X_scaled, y, test_size=0.2, random_state=42, stratify=y)

# === Initialize LightGBM classifier ===
model = lgb.LGBMClassifier(
    boosting_type='gbdt',
    objective='multiclass',
    num_class=4,
    n_estimators=15,
    learning_rate=0.02110,
    max_depth=8,
    subsample=0.8,
    colsample_bytree=0.8,
    num_leaves=64,
    random_state=42
)

# === Train the model ===
model.fit(X_train, y_train)

# === Evaluate ===
y_pred = model.predict(X_test)
y_train_pred = model.predict(X_train)

# ✅ Print Training & Validation Accuracy
print("Training Accuracy:  {:.4f}".format(accuracy_score(y_train, y_train_pred)))
print("Validation Accuracy: {:.4f}".format(accuracy_score(y_test, y_pred)))

# (Optional) Full report
# print("Classification Report:\n", classification_report(y_test, y_pred))

# === Save the model and scaler ===
output_dir = os.path.join(os.path.dirname(__file__), '..', 'models')
os.makedirs(output_dir, exist_ok=True)

joblib.dump(model, os.path.join(output_dir, 'drought_predictor.pkl'))
joblib.dump(scaler, os.path.join(output_dir, 'scaler.pkl'))
joblib.dump(reverse_mapping, os.path.join(output_dir, 'label_mapping.pkl'))
print(f"Model, scaler, and label mapping saved to {output_dir}")
