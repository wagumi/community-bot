import botConfig from './botConfig';

describe('botConfig', () => {
  let config;

  beforeEach(async () => {
    config = botConfig();
  });

  it('should be defined guildId', () => {
    expect(config.guildId).toBeDefined();
  });

  it('should be defined guildId that has number strings and 18-digits', () => {
    expect(config.guildId).toMatch(/[0-9]{18}/);
  });

  it('should be defined devAllowedChannelList', () => {
    expect(config.devAllowedChannelList).toBeDefined();
  });
});
