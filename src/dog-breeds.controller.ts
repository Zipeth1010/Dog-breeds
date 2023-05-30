import { Controller, Get } from '@nestjs/common';
import { DogBreedsService } from './dog-breeds.service';

@Controller('dog-breeds')
export class DogBreedsController {
  constructor(private readonly dogBreedsService: DogBreedsService) {}

  @Get()
  async getAllBreeds() {
    const breeds = await this.dogBreedsService.getAllBreeds();
    return { breeds };
  }
}
