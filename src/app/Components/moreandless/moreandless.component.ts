import { Component ,Input } from '@angular/core';

@Component({
  selector: 'app-moreandless',
  templateUrl: './moreandless.component.html',
  styleUrls: ['./moreandless.component.scss']
})
export class MoreandlessComponent {
  @Input() newsFeed !: string;
  @Input() wordLimit !: number;
  showMore : boolean;

  constructor (){
    this.showMore = false
  }

}
