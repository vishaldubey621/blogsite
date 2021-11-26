import { Component } from '@angular/core';
import { BlogService } from './blog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practicaltest';

  alldata : any=[];

  constructor(private blogservice : BlogService) { }
  ngOnInit()
  {
    this.getLatestdata();
    
  }

  public getLatestdata()
  {
      this.blogservice.getblog().subscribe((response)=>{
      this.alldata = response ;
       })
  }
}
