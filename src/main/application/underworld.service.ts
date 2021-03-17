import { Inject, Service } from '@umberware/the-way';
import { WorldService } from './world.service';
import { InjectionA } from './injection-a';
import { InjectionB } from './injection-b';

@Service()
export class UnderworldService {
    @Inject() world: WorldService;

}
