import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PingController } from './ping/ping.controller';
import { PingService } from './ping/ping.service';

@Module({
  imports: [],
  controllers: [AppController, PingController],
  providers: [AppService, PingService],
})
export class AppModule {}
