ReadMe

To run this app in your own dev environment, you will need a number of things installed. 

1) Install node.js (for react frontend) https://nodejs.org/en/download/

2) Install Python (for flask backend)

3) Install Pip (python tool for downloading python libraries)

4) Make sure you can access both python and node from your terminal by typing 'npm' and 'pip' and seeing results. If you cant see them, you may need to add them to your 'Environment Variables' window to see these tools in the cmd. Start -> Edit the Environment Variables. Im sure you have done this many times, but if not, i can help out with this part as i got stuck on it for awhile. 

5) Install flask (pip install Flask) https://flask.palletsprojects.com/en/1.1.x/installation/

6) Install Material UI (front end design library) material-ui.com/getting-started/installation/

7) Install SQLite3

8) pip install sqlAlchemy (pip install SQLAlchemy) https://pypi.org/project/SQLAlchemy/ this is a flask library for accessing our sqlite db file



To build,

Navigate first into the frontend folder in your terminal, and run 'npm start'

second, navigate into your backend folder, and run 'flask run'


You should now have a working dev environment with flask (unless i missed a library to install somewhere..)  




***Backend Navigation***: All backend coding runs out of the file 'flaskbackend.py' located in the backend folder. 

***Frontend Navigation***: Currently, all front end coding has been out of the App.js folder. Other files are from when i ran the create-react-app that generated a number of misc files

***Database***: Data will flow into the stockticker.db file located in the backend folder. 
