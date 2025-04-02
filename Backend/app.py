# Mazin Taher: 30185832
# Ebad Rehman: 30209407

from flask import Flask, request, jsonify
from flask_cors import CORS 

app = Flask(__name__)
CORS(app)

students = [
    {
        "id": 1,
        "username": "mazin123",
        "password": "mazinpass",
        "email": "mazin@example.com",
        "enrolled_courses": ["Web Development"]
    },
    {
        "id": 2,
        "username": "ebad456",
        "password": "ebadpass",
        "email": "ebad@example.com",
        "enrolled_courses": []
    }
]

@app.route('/')
def home():
    return "Flask app is running"

@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')

    for student in students:
        if student['username'] == username:
            return jsonify({"message": "Username already taken."}), 401

    new_student = {
        "id": len(students) + 1,
        "username": username,
        "password": password,
        "email": email,
        "enrolled_courses": []
    }
    students.append(new_student)

    return jsonify({"message": "Signup successful! Redirecting to login...", "student": new_student}), 201

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    for student in students:
        if student['username'] == username and student['password'] == password:
            return jsonify({"message": "Login successful! Redirecting...", "studentId": student["id"]}), 201

    return jsonify({"message": "Invalid username or password!"}), 401

if __name__ == '__main__':
    app.run(debug=True)
