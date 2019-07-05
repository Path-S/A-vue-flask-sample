# -*- coding: utf-8 -*-

from flask import Flask,render_template,request
app = Flask(__name__,
            static_folder = "../../dist/static",
            template_folder = "../../dist")



@app.route("/", defaults={"path": ""})
@app.route("/<path:path>")
def index(path):
    print ('path = ' + path)
    print (type(path))
    return render_template("index.html")

@app.route('/mark', methods=['POST'])
def sendAjax2():
    # password = request.form.get('password')
    # username = request.args.get('username')
 
    data = request.form
    username = data["username"]
    password = data["password"]
    res = ""
    if (len(username) == 0):
        res = "LOGIN_ERROE_EMPTY_USERNAME"
    elif (username==password): 
        res = "LOGIN_SUCCESS"
    else:
        res = "LOGIN_FAILED"
    return res

if __name__ == '__main__':
      app.run(debug = True)