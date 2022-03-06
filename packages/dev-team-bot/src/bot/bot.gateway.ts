import { On, Once, UseGuards } from '@discord-nestjs/core';
import { Injectable, Logger } from '@nestjs/common';
import { Message } from 'discord.js';
import { BotService } from './bot.service';
import { MessageGuard } from './guards/message.guard';

@Injectable()
export class BotGateway {
  private readonly logger = new Logger(BotGateway.name);
  private readonly PING_MESSAGE = 'pong.';

  constructor(private botService: BotService) {}

  @Once('ready')
  onReady() {
    this.logger.log('Bot was started!');
  }

  @On('messageCreate')
  @UseGuards(MessageGuard)
  async onMessage(message: Message): Promise<void> {
    if (message.content === '!ping') {
      await message.channel.sendTyping();
      const replyMessage = this.botService.isProd()
        ? this.PING_MESSAGE
        : this.botService.printDebugInfo(this.PING_MESSAGE);
      message.channel.send(replyMessage);
    }
  }
}
