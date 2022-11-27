import { Test, TestingModule } from '@nestjs/testing';
import { RegistrationNumberService } from './registration_number.service';

describe('RegistrationNumberService', () => {
  let service: RegistrationNumberService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RegistrationNumberService],
    }).compile();

    service = module.get<RegistrationNumberService>(RegistrationNumberService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
