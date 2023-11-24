from flask_app import app
from flask import render_template,redirect,request
from flask_app.models.filmmaker_model import Moviemaker
from flask_app.models.movie_model import Movie

@app.route('/')
def index():
    return render_template("index.html", allFilmmakers = Moviemaker.getall())

@app.route('/create/film', methods =['POST'])
def create_filmmaker():
    # data = {**request.form}
    data = {
        "name" : request.form['name']
    }
    Moviemaker.save(data)
    return redirect('/')