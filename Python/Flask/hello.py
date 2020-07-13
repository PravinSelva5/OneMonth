from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')  #homepage of site
def index():
    title = "Home Page"
    return render_template("index.html",title=title)

@app.route('/about')
def about():
    title = "About Page"
    return render_template("about.html",title=title)

@app.route('/contact')
def contact():
    title = "Contact Page"
    return render_template("contact.html", title=title)

'''
The Server needs to be refreshed every time you make changes. So you need to shut it down
and re-run flaskdatetime A combination of a date and a time. 

*----------------------------------*
  UNLESS DEBUG MODE IS TURNED ON.
*----------------------------------* 
You use the following code:

export FLASK_ENV=development


*----------------------------------*
  FLASK INCLUDE FEATURE
*----------------------------------* 
Any repeatable feature of a website is copied to different html pages with the 
include feature in Flask.
DRY - Don't Repeat Yourself
'''

