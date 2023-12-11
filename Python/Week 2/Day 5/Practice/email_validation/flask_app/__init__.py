from flask import Flask

app=Flask(__name__)
app.secret_key="anis"
database="email_validation_db"