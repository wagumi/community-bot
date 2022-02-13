export default () => ({
  guildId: process.env.DISCORD_GUILD_ID || '',
  devAllowedChannelList:
    process.env.DISCORD_DEV_CHANNEL_ALLOWED_LIST?.split(',') || [],
});
