import { DiscordGuard } from '@discord-nestjs/core';
import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Message } from 'discord.js';

@Injectable()
export class MessageGuard implements DiscordGuard {
  private readonly logger = new Logger(MessageGuard.name);
  private readonly guildId: string;
  private readonly allowdList: string[];

  constructor(configService: ConfigService) {
    this.guildId = configService.get('guildId');
    this.allowdList = configService.get('devAllowedChannelList');
  }
  canActive(event: 'messageCreate', [message]: [Message]): boolean {
    if (message.author.bot) return false;
    if (this.guildId !== message.guildId) {
      this.logger.log(`Not Wagumi Server -  guildId: ${message.guildId}`);
      return false;
    }
    if (!this.allowdList.includes(message.channelId)) {
      this.logger.log(
        `Only allowed listed channels art available -  channelId: ${message.channelId}`,
      );
      return false;
    }
    return true;
  }
}
