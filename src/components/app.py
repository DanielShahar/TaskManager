from flask import Flask, request, jsonify
import mysql.connector
import bcrypt
import jwt
import datetime

app = Flask(__name__)
app.config['SECRET_KEY'] = 'A2B2c3c4C5d5d'

#MySQL connection settings
db_config = {
    'host': '3305',
    'user': 'root',
    'password': 'Dd123456789',
    'database': 'manager_task'
}

def get_db_connection():
    return mysql.connector.connect(**db_config)

def hash_password(password):
    salt = bcrypt.gensalt()
    hashed_password = bcrypt.hashpw(password.encode('utf-8'), salt)
    return hashed_password

def verify_password(password, hashed_password):
    return bcrypt.checkpw(password.encode('utf-8'), hashed_password)

def generate_jwt(user_id):
    payload = {
        'user_id': user_id,
        'exp': datetime.datetime.utcnow() + datetime.timedelta(days=1)
    }
    return jwt.encode(payload, app.config['SECRET_KEY'], algorithm='HS256')

def decode_jwt(token):
    try:
        payload = jwt.decode(token, app.config['SECRET_KEY'], algorithms=['HS256'])
        return payload['user_id']
    except jwt.ExpiredSignatureError:
        return None
    except jwt.InvalidTokenError:
        return None

@app.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    hashed_password = hash_password(data['password'])
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("INSERT INTO users (email, username, password) VALUES (%s, %s, %s)",
                   (data['email'], data['username'], hashed_password))
    conn.commit()
    cursor.close()
    conn.close()
    return jsonify({'message': 'User created successfully'}), 201

if __name__ == '__main__':
    app.run(debug=True)