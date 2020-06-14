import { Get, Put, BodyParam, Post, BadRequestException, PathParam, Delete, QueryParam, NotFoundException} from '@nihasoft/the-way';
import { Observable, of } from 'rxjs';
import { HeroModel } from './hero.model';

export class HeroRest {
    heroes: Array<HeroModel> = [{
        id: 10,
        name: 'Batman',
        power: 10000
    }];
    @Get('/heroes')
    public getHeroes(): Observable<Array<HeroModel>> {
        return of(this.heroes);
    }
    @Get('/hero/{id}')
    public getHero(@PathParam('id') id: number): Observable<HeroModel> {
        const hero = this.getHeroById(id);
        if (!hero) {
            throw new NotFoundException('Hero not found');
        }
        return of(hero);
    }
    @Get('/hero')
    public getHeroesWithQuery(@QueryParam query: {ids: Array<number>}): Observable<Array<HeroModel>> {
        const heroes: Array<HeroModel> = [];
        for (const id of query.ids) {
            const hero: HeroModel = this.getHeroById(id);
            if (hero) {
                heroes.push(hero);
            }
        }
        return of(heroes);
    }
    @Put('/hero', true)
    public updateHero(@BodyParam updateHero: HeroModel): Observable<HeroModel> {
        const hero = this.getHeroById(updateHero.id);
        if (!hero) {
            throw new BadRequestException('The hero not exists.');
        }
        hero.name = updateHero.name;
        hero.power = updateHero.power;
        return of(hero);
    }
    @Post('/hero')
    public createHero(@BodyParam newHero: HeroModel): Observable<HeroModel> {
        if (this.hasHero(newHero.id)) {
            throw new BadRequestException('The hero is registered.');
        }
        this.heroes.push(newHero);
        return of(newHero);
    }
    @Delete('/hero/{id}', true, ['master'])
    public deleteHero(@PathParam('id') id: number): Observable<boolean> {
        let hero: HeroModel;
        for (let i = 0; i < this.heroes.length; i++) {
            if (this.heroes[i].id === id) {
                hero = this.heroes.splice(i, 1)[0];
                break;
            }
        }
        if (!hero) {
            throw new BadRequestException('The hero not exists.');
        }
        return of(true);
    }
    public getHeroById(id: number): HeroModel {
        return this.heroes.find((hero:HeroModel) => hero.id === id)
    }
    public hasHero(id: number): boolean {
        return this.getHeroById(id) !== null;
    }
}