export interface NewsFeedItem {
    title: string;
    description: string;
    urlToImage: string;
    author:string
   
  }
  
  export interface NewsFeedRes {
    articles : NewsFeedItem[]
  }