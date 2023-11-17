from flask import Flask, render_template

app = Flask(__name__)

# http://127.0.0.1:5001/
@app.route('/')
def index():
    return render_template("index.html", number=8)

# http://127.0.0.1:5001/4
@app.route('/<int:number>')
def rectangle(number):
    return render_template("index.html", number=number)



if __name__ == "__main__":
    app.run(debug=True, port=5001)
