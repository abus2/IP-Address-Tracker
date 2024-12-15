from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/track', methods=['POST'])
def track_ip():
    data = request.json
    ip = data.get('ip')
    if not ip:
        return jsonify({"error": "Invalid IP address"}), 400

    # Simulated response (you can replace this with actual tracking logic)
    result = {
        "ip": ip,
        "location": "New York, USA",
        "isp": "Example ISP",
        "coordinates": {"latitude": 40.7128, "longitude": -74.0060}
    }
    return jsonify(result)

if __name__ == "__main__":
    app.run(debug=True)




from flask import Flask, render_template

app = Flask(__name__)

# Simulating pricing data
pricing_plans = [
    {
        "name": "Free Plan",
        "price": "$0",
        "features": ["Basic tracking features", "Up to 100 IPs/month"],
        "cta_text": "Get Started"
    },
    {
        "name": "Pro Plan",
        "price": "$9.99/month",
        "features": ["Advanced tracking", "Up to 500 IPs/month", "API access"],
        "cta_text": "Subscribe"
    },
    {
        "name": "Enterprise Plan",
        "price": "$49.99/month",
        "features": ["Custom solutions", "Unlimited IPs/month", "Dedicated support"],
        "cta_text": "Contact Sales"
    }
]

@app.route('/')
def pricing():
    return render_template('pricing.html', pricing_plans=pricing_plans)

if __name__ == "__main__":
    app.run(debug=True)



from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/contact', methods=['POST'])
def contact():
    name = request.form['name']
    email = request.form['email']
    message = request.form['message']
    # You can store this in a database or send an email.
    print(f"Received message from {name} ({email}): {message}")
    return render_template('thank_you.html', name=name)

if __name__ == '__main__':
    app.run(debug=True)
