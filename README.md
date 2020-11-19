## A chat app and the local server with local mongoDB

The code of the app and its server is just a copy of https://github.com/bogoslavskiy/chat-app.

Here only a few amendments are made to keep the code up-to-date, e.g.:

1. Expo upgrade to v.39
2. expo-notifications has been used to replace the legacy expo Notifications
3. AsyncStorage module has been extracted from expo
3. Server code has been converted to javascript

To run the app, you computer needs to be react-native-Expo-ready and with a mongoDB installed.  To sum up:

For app and server:
1. yarn and npm should be installed
2. node.js installed
3. Android Studio installed with emulators being able to run (You may need to do something on BIOS to allow emulator running on x86 arch computer)
4. Expo CLI and react native CLI ready
5. Open a terminal (cmd or powershell or terminal) and type "Expo init" to see if an react native expo app can be initialised

For installing mongoDB database via Docker
6. Install Docker
7. In the root directory of this project where docker-compose.yml can be found, type "docker-compose -f docker-compose.yml up --build"
8. DB should now be running on http://localhost:27017

You may opte for installing mongoDB database own your own, but you should make sure that the database runs on http://localhost:27017.

9. Besides, you may download Robo 3t, a graphical DB management app, on your computer, and link it to http://localhost:27017.

For running the server
10. In the directory Chat-App-Server, run "yarn install" then run "yarn start", if everything works smoothly you may see the log on terminal telling the server is running on http://localhost:5000.

For running the app
11. Look for your server's local ip address and replace all 192.168.0.130 in the code of Chat-App with your server's local ip address 
12. In the directory Chat-App, run "yarn install" then run "yarn start", after a barcode poping up from a browser, you may download and install Expo app from ios or android play store, scan the barcode to install the app and run.

13. You may upload the DB server and intermediate server onto cloud service so that your chat app will be able to use anywhere in the world. But of course you need to build your expo app into a standalone app and apply for Firebase Cloud Messaging service for your expo push notifications to do so.
