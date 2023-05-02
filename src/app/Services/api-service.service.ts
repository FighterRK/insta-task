import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsFeedRes } from '../news-feed.model';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(public http:HttpClient) { }


  // getFeed(){

  //   return this.http.get(' https://newsapi.org/v2/everything?q=apple&from=2023-04-24&to=2023-04-24&sortBy=popularity/top-headlines?country=us&apiKey=5a7c9a72f2ee488bb5c393062a4de94e');
  
  // }

  getFeed(): Observable<NewsFeedRes> {
    return this.http.get<NewsFeedRes>('https://newsapi.org/v2/everything?q=apple&from=2023-04-24&to=2023-04-24&sortBy=popularity&apiKey=5a7c9a72f2ee488bb5c393062a4de94e');
  }
  


 
}
