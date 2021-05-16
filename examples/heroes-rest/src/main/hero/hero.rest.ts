import { Get, Inject, PathParam, Rest } from '@umberware/the-way';

import { Observable } from 'rxjs';

import { HeroModel } from './model/hero.model';
import { HeroService } from './hero.service';

@Rest( '/hero')
export class HeroRest {
    @Inject heroService: HeroService;

    @Get(':id')
    public getHeroById(@PathParam('id') id: string): Observable<HeroModel> {
        return this.heroService.getHeroById(parseInt(id, 10));
    }
}
