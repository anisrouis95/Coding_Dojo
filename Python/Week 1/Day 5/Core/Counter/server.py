
from flask import Flask, render_template, redirect, session

app = Flask(__name__)

app.secret_key = 'your_secret_key'
reset=0

@app.route('/')
def index():
    counter = session.get('counter', 0)
    return render_template('index.html', counter=counter)

@app.route('/increment')
def increment():
    session['counter'] = session.get('counter', 0) + 1
    return redirect('/')

@app.route('/reset')
def reset():
    global reset
    session['counter'] = 1
    reset+=1 
    return redirect('/')

if __name__ == '__main__':
    app.run(debug=True)

