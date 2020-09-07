### React Chat Messenger for Cognite
 
# Technologies that is being used:
- React.js;
- Node.js;
- Socket.js;

# Acessing projects:
- Server: "http://localhost:5000/";
- Client: "http://localhost:3000/";

# Documentation:
- Socket.io: "https://socket.io/get-started/chat";

# Runnin Project:
## Development Mode:
### Server:
- Go to the server folder, open CMD and type `npm install` to install dependencies;
- Type: `npm start`;

### Client:
- Go to the client folder, open CMD and type `npm install` to install dependencies;
- Type: `npm start`;

## Building Mode:
### Server:
- Type: `npm run build`;

### Client:
- Type: `npm run build`;

## Execution Mode
- Open 3 tabs and start to chat:
http://localhost:3000/chat?name=bot&room=cognite
http://localhost:3000/chat?name=joao&room=cognite
http://localhost:3000/chat?name=vitor&room=cognite

## Deploying Code
### Server:
- Here, I have used Heroku for it: https://www.heroku.com/ and these steps;
- Create Account;
- Login;
- Create a new App;
- Download Heroku CLI and install it: https://devcenter.heroku.com/articles/heroku-cli;
- Add the CORS lib to my index.js;
- Use Terminal CMD and execute those commands:
- `cd server`;
- `heroku login`;
- Press Any key to open authentication on the browser;
- After logged in;
- `git init`;
- `heroku git:remote -a react-chat-messenger-cognite`;
- `git add .`;
- `git commit -a -m 'first commit'`;
- `git push heroku master'`;
- Go to Heroku project Overview;
- Copy the URL and use it as the ENDPOINT on the Chat.js component;

### Client:
- Here, I have used Netlify for it: https://www.netlify.com/ and these steps;
- Go to the Client folder and Install Nettlify CLI;
- `npm install netlify-cli -g`;
- Create Account;
- Login;
- Drag and Drop a folder (client) of React front-end to Create a new App;
- `netlify login`;
- Authorize it via Browser;
- `npm run build` under the client folder;
- `netlify deploy`;
- Go next on the steps and when the CMD asks you the Directory to Publish:
- `./build`;

### MY URL:
https://5f559954989466689fb6e727--clever-fermi-fa0b4f.netlify.app/