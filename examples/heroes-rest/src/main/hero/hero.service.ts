import { Service, NotFoundException } from '@umberware/the-way';

import { Observable, of } from 'rxjs';

import { HeroModel } from './model/hero.model';

@Service()
export class HeroService {
    private heroesMock: Array<HeroModel> = [{
        name: 'Batman',
        id: 1,
        power: 1349
    }]

    public getHeroById(id: number): Observable<HeroModel> {
        const heroFound = this.heroesMock.find((hero: HeroModel) => hero.id === id);
        if (!heroFound) {
            throw new NotFoundException('Hero not found');
        }
        return of(heroFound)
    }
}
