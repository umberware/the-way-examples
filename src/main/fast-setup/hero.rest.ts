import { Get } from '@nihasoft/the-way';
import { Observable, of } from 'rxjs';

export class HereRest {
    @Get('/hero')
    public getHero(): Observable<{id: number, name: string, power: number}> {
        return of({
            id: 10,
            name: 'Batman',
            power: 10000
        })
    }
}