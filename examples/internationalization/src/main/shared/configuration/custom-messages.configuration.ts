import { Configurable, Configuration, CORE_MESSAGES } from '@umberware/the-way';

@Configuration()
export class CustomMessagesConfiguration extends Configurable {
    public configure(): void {
        CORE_MESSAGES['pt'] = {
            'hello-world': 'Olá mundo'
        };
        CORE_MESSAGES['en']['hello-world'] = 'Hello World';
        CORE_MESSAGES['es'] = {
            'hello-world': 'Hola Mundo'
        }
    }
    public destroy(): void {}
}
