from flask import Flask,abort
app = Flask(__name__) 

@app.route('/')         
def hello_world():
    return 'Hello World!' 

@app.route('/dojo')         
def dojo():
    return 'Dojo!' 

@app.route('/say/<username>')
def say_hi_username(username):
    return f"<h1>Hi {username}!</h1>"

@app.route('/repeat/<int:times>/<entry>')
def say_repeat_entry_ntimes(entry, times):
    return f"<h1>Hello {entry}</h1>\n" * int(times)

@app.route('/<path:path>')
def catch_all(path):
    abort(404, description="Sorry! No response. Try again.")



if __name__=="__main__":  
    app.run(debug=True, port="5000")

