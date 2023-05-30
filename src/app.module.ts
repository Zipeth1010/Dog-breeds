import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DogBreedsController } from './dog-breeds.controller';
import { DogBreedsService } from './dog-breeds.service';

@Module({
  imports: [],
  controllers: [AppController, DogBreedsController],
  providers: [AppService, DogBreedsService],
})
export class AppModule {}
