import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common'
import { Observable } from 'rxjs'
import { GoogleTokenVerify } from './google-token-verify.service'
import { GqlExecutionContext } from '@nestjs/graphql'

@Injectable()
export class AuthorizationGuard implements CanActivate {
  constructor(private readonly googleTokenVerify: GoogleTokenVerify) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const { req } = GqlExecutionContext.create(context).getContext()

    const authHeader = req?.headers?.authorization

    if (!authHeader) {
      throw new UnauthorizedException('Authorization header is missing.')
    }

    const [bearer, accessToken] = authHeader.split(' ')

    if (bearer !== 'Bearer' || !accessToken) {
      throw new UnauthorizedException('Invalid authorization header format.')
    }

    return this.googleTokenVerify
      .validate(accessToken)
      .then((tokenInfo) => {
        req.user = tokenInfo

        return true
      })
      .catch((error) => {
        console.log(error)

        throw new UnauthorizedException(error.message)
      })
  }
}
