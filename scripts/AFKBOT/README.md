🤖 Minecraft AFK Bot
This is a simple Node.js bot designed to stay online on a Minecraft server to prevent it from hibernating or to keep certain areas loaded.

✨ Features
Auto-Reconnect: 
Automatically rejoins the server if the connection is lost.
Anti-AFK Actions: Performs small movements (like jumping) to avoid being kicked for idling.
Lightweight: Uses minimal system resources.

🛠 Prerequisites
Before running the bot, ensure you have the following installed:

Node.js (Version 14 or higher is recommended).
A Minecraft server with online-mode=false (if using a non-premium account).

🚀 Installation & Setup
Download the files: Clone this repository or download the AFKBOT folder.

Install dependencies: Open your terminal in the bot's folder and run:
Bash
npm install

Configure the bot: Open index.js and edit the server details:

JavaScript
const botArgs = {
    host: 'your.server.ip', // Replace with your server IP
    port: 25565,            // Replace with your server port
    username: 'AFK_Bot',    // Bot's in-game name
    version: '1.20.1'       // Your server version
🏃 How to Run
To start the bot, run the following command in your terminal:

Bash
node index.js
⚠️ Important Notes
Server Permissions: Ensure the bot has permission to join. If you have a whitelist, remember to add the bot's username to it.

Security: Never share your package-lock.json or node_modules folder unnecessarily; only the core script and package.json are needed for GitHub.
