import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {


    //Method to debug the JWT
    handleRequest(err, user, info) {
        console.log({err, user, info});
        
        
        if (err || !user) {
            throw err || new UnauthorizedException();
        }
        return user;
    }
}
