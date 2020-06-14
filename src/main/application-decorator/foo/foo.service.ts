import { Service } from '@nihasoft/the-way';

@Service()
export class FooService {
    public print(): void {
        console.log('BAR!');
    }
}