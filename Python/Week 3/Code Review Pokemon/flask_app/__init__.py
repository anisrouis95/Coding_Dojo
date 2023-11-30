from flask import Flask

app = Flask(__name__)

DATABASE = "pokemon_db"

app.secret_key = "Stay safe"