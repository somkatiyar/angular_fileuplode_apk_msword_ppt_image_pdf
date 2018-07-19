import { Injectable, Inject } from '@angular/core';
import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';



import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';


@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private http: Http, @Inject('baseURL') private baseURL: string ,@Inject('file_load') private file_load: string) {}






  uplodeFileDocs(value): Observable<any>{

    return this.http.post(this.baseURL+'uplodeFile',value).map(response => response.json())

    .catch((err: Response | any) => {
      return Observable.throw(err.statusText);
    })

}




  insertFile(value): Observable<any>{

    return this.http.post(this.baseURL+'insertFile',value).map(response => response.json())

    .catch((err: Response | any) => {
      return Observable.throw(err.statusText);
    })

}




showFile(): Observable<any>{

    return this.http.get(this.baseURL+'showFile').map(response => response.json())
    .catch((err: Response | any) => {
      return Observable.throw(err.statusText);
    })
  }



  removeFile(value): Observable<any>{

      return this.http.post(this.baseURL+'removeFile',value).map(response => response.json())
      .catch((err: Response | any) => {
        return Observable.throw(err.statusText);
      })
    }




}
