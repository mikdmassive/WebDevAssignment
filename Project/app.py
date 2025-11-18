from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html', name='World')

@app.route('/AboutUs')
def AboutUs():
    return render_template('AboutUs.html')

@app.route('/Courses')
def Courses():
    return render_template('Courses.html')

@app.route('/Facilities')
def Facilities():
    return render_template('Facilities.html')

@app.route('/LearningResources')
def LearningResources():
    return render_template('LearningResources.html')

if __name__ == '__main__':
      app.run(host='127.0.0.1', port=5000, debug=True)