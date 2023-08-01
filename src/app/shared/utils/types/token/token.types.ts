import { HttpContext, HttpHeaders, HttpParams } from "@angular/common/http";

export type Token = {
    headers: HttpHeaders | { [header: string]: string | string[]; } | undefined; context?: HttpContext | undefined; observe?: "body" | undefined; params?: HttpParams | undefined; reportProgress?: boolean | undefined; responseType?: "json" | undefined; withCredentials?: boolean | undefined;
};