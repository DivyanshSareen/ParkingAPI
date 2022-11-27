import { Test, TestingModule } from '@nestjs/testing';
import { ClearController } from './clear.controller';

describe('ClearController', () => {
  let controller: ClearController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClearController],
    }).compile();

    controller = module.get<ClearController>(ClearController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
