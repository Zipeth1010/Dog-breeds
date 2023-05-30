import { Injectable } from '@nestjs/common';

@Injectable()
export class DogBreedsService {
  getAllBreeds(): string[] {
    // Replace this with your logic to retrieve the list of dog breeds
    const breeds: string[] = [
      'Labrador Retriever',
      'German Shepherd',
      'Golden Retriever',
    ];
    return breeds;
  }
}
