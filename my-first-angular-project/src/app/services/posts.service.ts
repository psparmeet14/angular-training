import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { Post } from "../http-requests-container/post.model";

@Injectable({providedIn: 'root'})
export class PostsService {

    constructor(private http: HttpClient) {}

    createAndStorePosts(title: string, content: string) {
        const postData = { title: title, content: content };
        this.http
        .post<{ name: string }>(
          'https://ng-my-first-angular-project-default-rtdb.firebaseio.com/posts.json',
          postData)
        .subscribe(responseData => { 
            console.log(responseData)
        }
        );
    }

    fetchPosts() {
        return this.http
            .get<{ [key: string]: Post }>('https://ng-my-first-angular-project-default-rtdb.firebaseio.com/posts.json')
            .pipe(
                map(responseData => { 
                    const postsArray: Post[] = [];
                    for (const key in responseData) {
                        if (responseData.hasOwnProperty(key)) {
                            postsArray.push({ ...responseData[key], id: key })
                        }
                    }
                    return postsArray;
                })
            ); 
    }

    clearPosts() {
        return this.http
            .delete('https://ng-my-first-angular-project-default-rtdb.firebaseio.com/posts.json');
    }
}