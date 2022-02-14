import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BotModule } from './bot/bot.module';
import { PingController } from './ping/ping.controller';
import { PingService } from './ping/ping.service';

@Module({
  imports: [ConfigModule.forRoot(), BotModule],
  controllers: [AppController, PingController],
  providers: [AppService, PingService],
})
export class AppModule {}
