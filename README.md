# InterviewTracker One-stop-shop for all engineers on their way to get hired!


# Part 1: Set up

  * Install your npm dependencies by running 'npm install' in your terminal
  * Run 'npm run dev' to start your server and bundle the frontend. It will 
    launch the frontend application in a browser window. If it does not launch
    then go to https://localhost:8080
  * Run npm install @material-ui/core (for Material UI framework)




# Part 2: MongoDB/mongoose Set up

 * Install the MongoDB Community by following the instructions on the links below: 
  * https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/
  * https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/
* You can check to make sure the CLI is installed by typing 'mongo --version' in a terminal 



  * Sign up for a MongoDB Atlas account here (https://www.mongodb.com/cloud/atlas)
    * Choose a provider and region where the free tier is available and select that free tier. Be sure to opt out of any features like backups that will cost extra. 
    * Go to your Cluster view and click on CONNECT 
    * Setup connection security by whitelisting your connection IP address and creating a MongoDB User. Remember this username and password for the next step.
    * For the connection method, select "Connect Your Application" and copy the connection string. You will need this URI for later. 




# Part 3: Access to process.env Variable


* Create a 'config' folder in root directory and create a 'config.env' file within that folder. You can access these variables by doing 'process.env."nameOfVariable"'

* Do not use quotes for strings like passwords. Such as: 
  * PORT = 3000
  * MONGO_URI = mongoURI (make sure you have replaced <password> in your connection string with your MongoDB user password created earlier. Make sure you replace <db> with your database's name. 
  * TOKEN_SECRET = coolTokenWord



# Part 4: Have fun! 

  * Look through our folders and files and have a great time! 