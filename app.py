from flask import Flask, request, render_template, jsonify
import os
import requests
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
API_KEY = os.getenv("OPENROUTER_API_KEY")

@app.route('/')
def home():
    return render_template("index.html")

@app.route('/generate', methods=['POST'])
def generate_content():
    data = request.json
    prompt = data.get('prompt')

    headers = {
        "Authorization": f"Bearer {API_KEY}",
        "Content-Type": "application/json"
    }

    body = {
        "model": "openai/gpt-3.5-turbo",  # works reliably
        "messages": [{"role": "user", "content": prompt}]
    }

    response = requests.post("https://openrouter.ai/api/v1/chat/completions", headers=headers, json=body)

    print("🔁 OpenRouter raw response:")
    print(response.text)

    result = response.json()
    return jsonify(result)

if __name__ == "__main__":
    app.run(debug=True)
import os

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)