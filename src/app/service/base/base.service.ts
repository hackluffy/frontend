import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BaseService {

  constructor(protected http: HttpClient) { }

  get(uri: string, body: any): Promise<any> {
    return this.http.get(uri, body).toPromise().then(res => res);
  }

  post(uri: string, body: any): Promise<any> {
    return this.http.post(uri, body).toPromise().then(res => res);
  }

  delet(uri: string, body: any): Promise<any> {
    body = this.normalBody(body);
    return this.http.delete(uri, body).toPromise().then(res => res);
  }

  put(uri: string, body: any): Promise<any> {
    return this.http.put(uri, body).toPromise().then(res => res);
  }


  private normalBody(body: any): any {
    if (!body) {
      body = {};
    }
    for (const key in body) {
      if (!body.hasOwnProperty(key)) {
        continue;
      }
    }
    return body;
  }
}
