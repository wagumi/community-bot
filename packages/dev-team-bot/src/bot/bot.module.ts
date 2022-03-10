import { BotGateway } from './bot.gateway';
import { DiscordModule } from '@discord-nestjs/core';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Intents } from 'discord.js';
import botConfig from '../config/botConfig';
import commonConfig from '../config/commonConfig';
import { BotService } from './bot.service';

@Module({
  imports: [
    DiscordModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        token: configService.get('DISCORD_BOT_TOKEN'),
        discordClientOptions: {
          intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
        },
      }),
      inject: [ConfigService],
    }),
    ConfigModule.forRoot({
      load: [botConfig, commonConfig],
    }),
  ],
  providers: [BotGateway, BotService],
})
export class BotModule {}
