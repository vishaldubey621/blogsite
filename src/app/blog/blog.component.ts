import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor(private blogservice : BlogService,
    private router: Router) { }

  public blogForm: FormGroup = new FormGroup({
    image: new  FormControl('', [Validators.required]),
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    url : new FormControl('https://en.wikipedia.org/wiki/Employment')
  });

  ngOnInit(): void {
  }
  public onSubmit()
  {
    console.log(this.blogForm.value);
    this.blogservice.addblog(this.blogForm.value).subscribe((response)=>{
      
       alert("blog added sussesfully");
       this.router.navigate(['/']); 
  })

  }
}
