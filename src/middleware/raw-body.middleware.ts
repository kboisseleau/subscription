
import { Response } from 'express'
import { json } from 'body-parser'
import RequestWithRawBody from './interface/request-with-raw-body.interface'
 
function rawBodyMiddleware () {
  console.log('use rawBodyMiddleware ========================')
  return json({
    verify: (request: RequestWithRawBody, response: Response, buffer: Buffer) => {
      if (request.url === '/api/webhook' && Buffer.isBuffer(buffer)) {
        request.rawBody = Buffer.from(buffer)
      }
      return true
    }
  })
}
 
export default rawBodyMiddleware

// import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common'
// import { Observable } from 'rxjs'

// @Injectable()
// export class WebHookInterceptor implements NestInterceptor {
//   intercept (context: ExecutionContext, next: CallHandler): Observable<any> {
//     const request = context.switchToHttp().getRequest()
//     console.log(request.rawBody)
//     if (request.url === '/api/webhook') {
//       // request.rawBody = Buffer.from(buffer)
//     }
//     return next.handle()
//   }
// }