import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class BotService {
  private readonly devAllowdList: string[];
  private readonly environment: string;
  private readonly deployBranch: string;

  constructor(configService: ConfigService) {
    this.environment = configService.get('environment');
    this.deployBranch = configService.get('deployBranch');
    this.devAllowdList = configService.get('devAllowedChannelList');
  }

  isProd(): boolean {
    return this.environment === 'production';
  }

  printDebugInfo(message: string): string {
    if (this.isProd()) {
      return message;
    }
    const info = this.getDebugInfo();
    let logMsg = 'ENV: ' + info.env;
    if (info.branch) {
      logMsg += ' BRANCH: ' + info.branch;
    }
    logMsg = '[' + logMsg + '] ';
    return logMsg + message;
  }

  private getDebugInfo() {
    return {
      date: Date.now().toLocaleString(),
      isProd: this.isProd(),
      branch: this.deployBranch,
      env: this.environment,
      devChannel: this.devAllowdList,
    };
  }
}
