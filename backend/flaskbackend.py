print("calling to flask")
from flask import Flask 
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

app = Flask(__name__)

# Documentation: https://flask-sqlalchemy.palletsprojects.com/en/2.x/config/#connection-uri-format
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///stockticker.db'

db = SQLAlchemy(app)

# Table models in sqlite
class User(db.Model):
    CUSTID      = db.Column(db.Integer, primary_key = True, nullable=False )
    email       = db.Column(db.String(100), unique=True, nullable=False)
    password    = db.Column(db.String(120), unique=True, nullable=False)
    DateCreated = db.Column(db.DateTime, default=datetime.now)

class StockConnector(db.Model):
    CUSTID      = db.Column(db.Integer, primary_key = True, nullable=False)
    STOCKID     = db.Column(db.Integer, primary_key = True, nullable=False)

class StocksFollowed(db.Model):
    STOCKID     = db.Column(db.Integer, primary_key = True, nullable=False)
    Symbol      = db.Column(db.String(10), nullable=False)
    Open        = db.Column(db.Integer, nullable=False)
    High        = db.Column(db.Integer, nullable=False)
    Low         = db.Column(db.Integer, nullable=False)
    Close       = db.Column(db.Integer, nullable=False)

class StocksWatched(db.Model):
    CUSTID      = db.Column(db.Integer, primary_key = True, nullable=False )
    STOCKID     = db.Column(db.Integer, primary_key = True, nullable=False)
    UNIQUEID    = db.Column(db.Integer, nullable=False)
    Notifyby    = db.Column(db.String(10), nullable=False)
    Column      = db.Column(db.String(10), nullable=False)
    Boolean     = db.Column(db.String(20), nullable=False)
    Number      = db.Column(db.Integer, nullable=False)



@app.route('/<email>/<password>')
def addData(email, password):
  user = User(email=email, password=password) 
  db.session.add(user)
  db.session.commit()

  return '<h1> added a new user <h1>'

@app.route('/test')
def test():
  return {
    'json': 'data'
  }

if __name__=='__main__':
  app.run(port=5000, debug=True)

#https://www.youtube.com/watch?v=wDWyOMHqPHY