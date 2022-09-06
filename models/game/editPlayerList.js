const db = require.main.require('./models');

db.Game.prototype.editPlayerList = async function(msg) {
    let players = await this.getPlayers();
    await msg.edit(`Players (${players.length}/${25}):\n\n${players.map(p => `<@${p.user}>`).join('\n')}`);
};