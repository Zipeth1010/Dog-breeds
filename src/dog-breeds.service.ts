import { Injectable } from '@nestjs/common';

@Injectable()
export class DogBreedsService {
  getAllBreeds(): { breed: string; description: string; image: string }[] {
    const breeds: { breed: string; description: string; image: string }[] = [
      {
        breed: 'Labrador Retriever',
        description: 'The cuddliest and woofiest of the lot',
        image:
          'https://www.thelabradorsite.com/wp-content/uploads/2017/07/When-Do-Dogs-Stop-Growing-LS-long.jpg',
      },
      {
        breed: 'German Shepherd',
        description: 'The smartest and scariest of the lot',
        image:
          'https://media.zenfs.com/en/pethelpful_915/25a694c61991611ab32d49a41b3eb4cf',
      },
      {
        breed: 'Golden Retriever',
        description: 'The most energetic and playful of the lot',
        image:
          'https://global-uploads.webflow.com/59dbe1c3542805000192616b/63178a7970d1b57a4c6a7a05_golden-retriever.png',
      },
      {
        breed: 'Pug',
        description: 'The least intelligent and loudest of the lot',
        image: 'https://wallpapercave.com/wp/QbA40M5.jpg',
      },
    ];
    return breeds;
  }
}
