
from flask import Flask, request, render_template, Response
import os

app = Flask(__name__)

@app.route('/')
def index():
    with open('index.html') as f:
        html_file = f.readlines()
    return Response(html_file)


@app.route('/static/<path:path>')
def serve(path):
    with open(path) as f:
        file = f.readlines()
    return Response(file)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=2020)
