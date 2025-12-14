from flask import Flask, render_template
from config import db_config 
import mysql.connector
app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/AboutUs')
def AboutUs():
    return render_template('AboutUs.html')

@app.route('/Courses')
def Courses():
    conn = mysql.connector.connect(**db_config)

    cursor = conn.cursor(dictionary=True)
    
    # Execute SQL query
    cursor.execute("SELECT * FROM courses")
    
    data = cursor.fetchall()

    cursor.close()
    conn.close()

    #convert html values
    for row in data:
        row['CourseSummary'] = row['CourseSummary'].replace('&ndash;', '-').replace('&nbsp;', ' ').replace('&rsquo;', '’') 

    return render_template('Courses.html', data=data)

@app.route('/Facilities')
def Facilities():
    return render_template('Facilities.html')

@app.route('/LearningResources')
def LearningResources():
    return render_template('LearningResources.html')

@app.route('/Information')
def Information():
    return render_template('Information.html')
    
@app.route('/ContactUs')
def ContactUs():
    return render_template('ContactUs.html')

if __name__ == '__main__':
      app.run(host='127.0.0.1', port=5000, debug=True)