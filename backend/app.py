from flask import Flask, request, jsonify
from flask_cors import CORS
import uuid
from datetime import datetime
app = Flask(__name__)
CORS(app)
tasks = []
@app.route('/tasks', methods=['GET'])
def get_tasks():
    return jsonify(tasks)
# ADD task
@app.route('/tasks', methods=['POST'])
def add_task():
    data = request.json
    if not data.get('title'):
        return jsonify({"error": "Title is required"}), 400
    task = {
        "id": str(uuid.uuid4()),
        "title": data['title'],
        "completed": False,
        "createdAt": str(datetime.now())
    }
    tasks.append(task)
    return jsonify(task), 201
# UPDATE task (toggle complete)
@app.route('/tasks/<id>', methods=['PATCH'])
def update_task(id):
    for task in tasks:
        if task['id'] == id:
            task['completed'] = not task['completed']
            return jsonify(task)
    return jsonify({"error": "Task not found"}), 404
# DELETE task
@app.route('/tasks/<id>', methods=['DELETE'])
def delete_task(id):
    global tasks
    tasks = [task for task in tasks if task['id'] != id]
    return jsonify({"message": "Task deleted"})
if __name__ == '__main__':
    app.run(debug=True)
