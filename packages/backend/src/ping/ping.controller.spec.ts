import { Test, TestingModule } from '@nestjs/testing';
import { PingController } from './ping.controller';
import { PingService } from './ping.service';

describe('PingController', () => {
  let controller: PingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PingController],
      providers: [PingService],
    }).compile();

    controller = module.get<PingController>(PingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return "pong"', () => {
    expect(controller.getPing()).toBe('pong');
  })
});
