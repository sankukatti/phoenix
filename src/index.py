from flask import Flask
from flask import render_template

from flask_pymongo import PyMongo

app = Flask(__name__)


@app.route("/")
def index():
    return "Index!"


@app.route("/hello")
def hello():
    return "Hello World!"


@app.route("/members")
def members():
    return "Members"


@app.route("/members/<string:name>/")
def getMember(name):
    return name

@app.route('/')
def home_page():
    online_users = mongo.db.users.find({'online': True})
    return render_template('index.html',
        online_users=online_users)

if __name__ == "__main__":
    app.run()
