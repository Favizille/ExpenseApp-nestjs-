import { NestInterceptor, ExecutionContext, CallHandler } from "@nestjs/common";
import { map } from 'rxjs';

export class CustomInterceptor implements NestInterceptor{
    intercept(
        context:ExecutionContext, handler:CallHandler
    ){

        console.log("this is intercepting the request");

        return  handler.handle().pipe(
            map((data) => {
                console.log("This is intercepting the reposnse");

                return data;
            }),
        );
    }
}