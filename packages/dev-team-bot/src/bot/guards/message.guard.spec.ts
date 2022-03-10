import { Test, TestingModule } from '@nestjs/testing';
import { ConfigService } from '@nestjs/config';
import { MessageGuard } from './message.guard';

describe('MessageGuard', () => {
  let messageGuard;
  const guildId = '111222333444555666';
  const firstChannelId = '222333444555666777';
  const secondChannelId = '333444555666777888';

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: ConfigService,
          useValue: {
            get: jest.fn((key: string) => {
              if (key === 'guildId') {
                return guildId;
              }

              if (key === 'devAllowedChannelList') {
                return [firstChannelId, secondChannelId];
              }

              return null;
            }),
          },
        },
      ],
    }).compile();

    const configService = moduleRef.get<ConfigService>(ConfigService);

    messageGuard = new MessageGuard(configService);
  });

  it('should be defined canActive method', () => {
    expect(messageGuard.canActive).toBeDefined();
  });

  it('should be returned false when the message author is bot', () => {
    expect(
      messageGuard.canActive('messageCreate', [
        { author: { bot: true }, guildId, channelId: firstChannelId },
      ]),
    ).toBe(false);
  });

  it('should be returned false when the guild ID is different', () => {
    expect(
      messageGuard.canActive('messageCreate', [
        {
          author: { bot: false },
          guildId: '000111222333444555',
          channelId: firstChannelId,
        },
      ]),
    ).toBe(false);
  });

  it('should be returned false when the channel ID is not included dev allowed channel list', () => {
    expect(
      messageGuard.canActive('messageCreate', [
        { author: { bot: false }, guildId, channelId: '999888777666555444' },
      ]),
    ).toBe(false);
  });
});
