import { Component , OnInit , ViewChild ,ElementRef , AfterViewInit , Renderer2} from '@angular/core';
import { ApiServiceService } from './Services/api-service.service';

interface NewsFeedItem {
  title: string;
  description: string;
  urlToImage: string;
  author:string
  // other properties
}

interface NewsFeedRes {
  articles : NewsFeedItem[]
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})




export class AppComponent implements OnInit , AfterViewInit {



  //public apiNewsFeedData : any[] = [];

  public apiNewsFeedData: NewsFeedItem[] = [];
  
 @ViewChild('lazyLoad') lazyLoad!: ElementRef;

 
 public currentIndex = 0;


  constructor(public newsFeedService : ApiServiceService){}
  
 ngOnInit(): void {
     
 }

  ngAfterViewInit() {
      //this.viewFeeds();

      const options = {
        root: document,
        rootMargin: '0px',
        threshold: 0.5
      };

      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          console.log('Intersecting');
          
          this.loadMoreFeeds();
        }
      }, options);
      observer.observe(this.lazyLoad.nativeElement);

    
  }

  loadMoreFeeds(){
    
    this.newsFeedService.getFeed().subscribe((res:NewsFeedRes) => {

      console.log('data is showing');

      if (res!==null) {
        
      const newData = res.articles.slice(this.currentIndex, this.currentIndex + 30);
      this.apiNewsFeedData = [...this.apiNewsFeedData, ...newData];
      this.currentIndex += 30;
        
      } else {

        console.log('data is null');
        
      }

      


      

      
    });
  }

  

 
  

}
