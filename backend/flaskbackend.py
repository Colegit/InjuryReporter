print("calling to flask")
from flask import Flask, request, json, jsonify
import sqlite3
import datetime


app = Flask(__name__)



@app.route('/insert', methods=['POST'])
def dbconnect():

  frontdata = json.loads(request.data)
  print(frontdata)
  print(frontdata.get('content'))
  #json extraction of individual values from a 2d json https://stackoverflow.com/questions/47729562/how-to-address-multidimensional-json-array-in-python/47729655
  print(frontdata['content']['pain'])

  # Variables of the values from the passed in from the json sent from the frontend
  pain        = frontdata['content']['pain']
  excersise   = frontdata['content']['excersise']
  setback     = frontdata['content']['setback']
  setbackdesc = frontdata['content']['setbackdesc']
  doc         = frontdata['content']['doc']
  docdesc     = frontdata['content']['docdesc']
  notes       = frontdata['content']['notes']
  day         = datetime.date.today()
  now         = datetime.now()
  time        = now.strftime("%H:%M")

  print(day)
  print(time)


  return 'test'

  #db = sqlite3.connect('../injurydb.db')
  #cursor = db.cursor()
  #cursor.execute('INSERT INTO dataentry (pain, excersise, setback, setbackdesc, docvisit, doctype, notes, todaydate, currenttime) VALUES("7", "YES", "YES", "too much phone", "YES", "physiotherapist", "physio added new strength excersises", "2020-01-25", "13:35:12")')
  #db.commit()

  #return 'dbconnect'

@app.route('/test')
def test():
  return {
    'json': 'data'
  }

if __name__=='__main__':
  app.run(port=5000, debug=True)

#https://www.youtube.com/watch?v=wDWyOMHqPHY