import { Post, BodyParam, UnauthorizedException, Inject, SecurityService } from '@nihasoft/the-way';
import { Observable, of } from 'rxjs';

export class UserRest {
    @Inject() securityService: SecurityService;

    user: {
        username: 'anakin',
        password: 'I\'m the force',
        profiles: ['master', 'jedi']
    }
    @Post('/sign/in')
    public signIn(@BodyParam signInForm: any): Observable<string> {
        if (this.user.username === signInForm.username && this.user.password === signInForm.password) {
            return of(this.securityService.generateToken({
                username: this.user.username,
                profiles: this.user.profiles
            }));
        } else {
            throw new UnauthorizedException('Username or password is incorrect.');
        }
    }
}