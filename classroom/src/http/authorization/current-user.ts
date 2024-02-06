import { ExecutionContext, createParamDecorator } from '@nestjs/common'
import { GqlExecutionContext } from '@nestjs/graphql'

export interface AuthUser {
  sub: string
}

export const CurrentUser = createParamDecorator(
  (data: unknown, context: ExecutionContext): AuthUser => {
    const ctx = GqlExecutionContext.create(context)
    const req = ctx.getContext().req

    req.user.sub = req.user.googleId
    delete req.user.googleId

    return req.user
  },
)
