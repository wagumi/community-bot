import { On, Once, UseGuards } from '@discord-nestjs/core';
import { Injectable, Logger } from '@nestjs/common';
import { Message } from 'discord.js';
import { MessageGuard } from './guards/message.guard';

@Injectable()
export class BotGateway {
  private readonly logger = new Logger(BotGateway.name);

  @Once('ready')
  onReady() {
    this.logger.log('Bot was started!');
  }

  @On('messageCreate')
  @UseGuards(MessageGuard)
  async onMessage(message: Message): Promise<void> {
    if (message.content === '!ping') {
      await message.channel.sendTyping();
      message.channel.send('Pong.');
    }
  }
}
