import { BodyParam, Get, Inject, PathParam, Post, Rest } from '@umberware/the-way';

import { Observable } from 'rxjs';

import { HeroModel } from './model/hero.model';
import { HeroService } from './hero.service';

@Rest( '/hero')
export class HeroRest {
    @Inject heroService: HeroService;

    @Post('', true)
    public createAHero(@BodyParam hero: HeroModel): HeroModel {
        return this.heroService.createAHero(hero);
    }
    @Get(':id')
    public getHeroById(@PathParam('id') id: string): Observable<HeroModel> {
        return this.heroService.getHeroById(parseInt(id, 10));
    }
}
