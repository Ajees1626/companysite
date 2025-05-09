from flask import Flask, request, jsonify
from flask_cors import CORS
import smtplib
import os
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from dotenv import load_dotenv

# Load environment variables (for security)
load_dotenv()

app = Flask(__name__)
CORS(app)

# Email credentials (store in .env for security)
EMAIL_ADDRESS = os.getenv("EMAIL_ADDRESS")
EMAIL_PASSWORD = os.getenv("EMAIL_PASSWORD")
TO_EMAIL = os.getenv("TO_EMAIL", EMAIL_ADDRESS)  # Can send to yourself or a specific address

@app.route('/send-booking', methods=['POST'])
def send_booking():
    data = request.get_json()
   
    # Compose email
    subject = "New Taxi Booking Request"
    body = f"""
    You received a new booking:
    
    Name: {data.get('name')}
    Phone: {data.get('phone')}
    Pickup: {data.get('pickup')}
    Drop: {data.get('drop')}
    Date: {data.get('date')}
    """

    message = MIMEMultipart()
    message['From'] = EMAIL_ADDRESS
    message['To'] = TO_EMAIL
    message['Subject'] = subject
    message.attach(MIMEText(body, 'plain'))

    try:
        with smtplib.SMTP_SSL('smtp.gmail.com', 465) as server:
            server.login(EMAIL_ADDRESS, EMAIL_PASSWORD)
            server.send_message(message)
        return jsonify({"message": "Email sent successfully"}), 200
    except Exception as e:
        print("Error:", e)
        return jsonify({"error": "Failed to send email"}), 500

if __name__ == '__main__':
    app.run(debug=True)
