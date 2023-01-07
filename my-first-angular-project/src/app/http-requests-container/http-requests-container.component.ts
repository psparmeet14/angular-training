import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { PostsService } from '../services/posts.service';
import { Post } from './post.model';

@Component({
  selector: 'app-http-requests-container',
  templateUrl: './http-requests-container.component.html',
  styleUrls: ['./http-requests-container.component.css']
})
export class HttpRequestsContainerComponent {
  loadedPosts: Post[] = [];
  isFetching: boolean = false;

  constructor(private http: HttpClient, private postsService: PostsService) {}

  ngOnInit() {
    this.fetchPosts();
  }

  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request
    this.postsService.createAndStorePosts(postData.title, postData.content);
  }

  onFetchPosts() {
    // Send Http request
    this.fetchPosts();
  }

  onClearPosts() {
    // Send Http request
    this.postsService.clearPosts().subscribe(() => {
      this.loadedPosts = [];
    });
  }

  private fetchPosts() {
    this.isFetching = true;
    this.postsService.fetchPosts().subscribe(posts => {
      this.isFetching = false;
      this.loadedPosts = posts;
    });
  }
}
