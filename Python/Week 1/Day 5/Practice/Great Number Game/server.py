from flask import Flask,render_template,redirect,session,request
import random
app=Flask(__name__)
app.secret_key="this is the secret key"
rand=random.randint(1,100)

@app.route('/')
def show():
    return render_template('index.html')

@app.route('/greet',methods=['POST'])
def greet():
    global rand
    print(rand)
    session['guess']=request.form['guess']
    if int(session['guess'])>rand:
        return render_template('more.html')
    elif int(session['guess'])<rand:
        return render_template('less.html')
    else:
        return render_template('correct.html',rand=rand)


if __name__=='__main__':
    app.run(debug=True)