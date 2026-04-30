const mineflayer = require('mineflayer');

const botArgs = {
    host: 'localhost', // IP server
    port: 25565,       // Port
    username: 'AFK_Bot', 
    version: '1.20.1'  // Version Minecraft
};

function createBot() {
    const bot = mineflayer.createBot(botArgs);

    bot.on('login', () => {
        console.log('Bot has joined the server!');
    });

    // Chống bị kick AFK bằng cách thi thoảng nhảy lên
    setInterval(() => {
        bot.setControlState('jump', true);
        setTimeout(() => bot.setControlState('jump', false), 500);
    }, 60000); // Nhảy mỗi 60 giây

    bot.on('end', () => {
        console.log('Disconnected. Reconnecting in 5 seconds...');
        setTimeout(createBot, 5000);
    });

    bot.on('error', (err) => console.log('Error:', err));
}

createBot();