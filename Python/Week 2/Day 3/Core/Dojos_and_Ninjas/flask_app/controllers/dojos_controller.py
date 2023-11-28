from flask_app import app
from flask import render_template,redirect,request
from flask_app.models.dojo_model import Dojo
from flask_app.models.ninja_model import Ninjas

@app.route('/')
def index():
    return render_template("index.html", allDojos = Dojo.getall())

@app.route('/create/dojo', methods =['POST'])
def create_dojos():
    # data = {**request.form}
    data = {
        "name" : request.form['name']
    }
    Dojo.save(data)
    return redirect('/')

