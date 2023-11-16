from flask import Flask , render_template # Import Flask to allow us to create our app
app = Flask(__name__)    # Create a new instance of the Flask class called "app"

# http://127.0.0.1/
@app.route('/')          # The "@" decorator associates this route with the function immediately following
def hello_world():
    return 'Hello World!'  # Return the string 'Hello World!' as a response

# http://127.0.0.1/hello 
@app.route('/hello')          # The "@" decorator associates this route with the function immediately following
def hello():
    return 'Hello from server!'

# http://127.0.0.1/hello/user 
@app.route('/hello/user')
def say_hello():
    return "<h1>Hello James 😂😂😂</h1>"

# http://127.0.0.1/hello/user/<username>
@app.route('/hello/user/<username>')
def say_hello_username(username):
    return f"<h1>Hello {username} 😂😂😂</h1>"

# http://127.0.0.1/hello/user/<username>/<times>
@app.route('/hello/user/<username>/<int:times>')
def say_hello_username_ntimes(username, times):
    return f"<h1>Hello {username} 😂😂😂</h1>\n" * int(times)

# http://127.0.0.1/index
@app.route('/index/<username>/<int:age>')
def index(username, age):
    users = [
        {'name':'John','age':35},
        {'name':'Sarah','age':25},
        {'name':'Alex','age':28},
        {'name':'Amelia','age':23},
        {'name':'James','age':22},
        {'name':'Eric','age':56}
    ]
    return render_template("index.html",user = username, number = age, users = users)


if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
    app.run(debug=True, port = 1337)    # Run the app in debug mode.

