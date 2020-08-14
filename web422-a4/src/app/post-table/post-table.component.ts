import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Router } from '@angular/router';
import { BlogPost } from '../BlogPost';

@Component({
  selector: 'app-post-table',
  templateUrl: './post-table.component.html',
  styleUrls: ['./post-table.component.css']
})
export class PostTableComponent implements OnInit {
  blogPosts: Array<BlogPost> = [];
  private posts;
  constructor(private postServ: PostService, private router: Router) { }

  ngOnInit(): void {
    this.posts = this.postServ.getAllPosts().subscribe(data => this.blogPosts = data);
  }

  ngOnDestroy() {
    if (this.posts) { this.posts.unsubscribe(); }
  }

  rowClicked(e, id) {
    this.router.navigate(['/admin/post', id]);
  }
}
