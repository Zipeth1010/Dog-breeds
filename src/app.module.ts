import { Module } from '@nestjs/common';
import { DogBreedsController } from './dog-breeds.controller';
import { DogBreedsService } from './dog-breeds.service';

@Module({
  imports: [],
  controllers: [DogBreedsController],
  providers: [DogBreedsService],
})
export class AppModule {}
