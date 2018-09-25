import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Router } from '@angular/router';
import { Actions, Effect, ofType  } from '@ngrx/effects';

import {
  CommentsActionTypes,
  CommentsListActionsUnion,
  LoadComments,
  LoadCommentsSuccess,
  LoadCommentsFail,
  CreateCommentSuccess,
  CreateCommentFail
} from './comments.actions';

import {catchError, map, switchMap, retry} from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CommentsService } from '../services/comments.service';

@Injectable()
export class CommentsEffects {

  constructor(
    private actions: Actions,
    private commentsService: CommentsService,
    private router: Router,
  ) {}

//   @Effect()
//   loadPosts$: Observable<Action> = this.actions.ofType(PostsActionTypes.LoadPosts).pipe(
//     map((action: LoadPosts) => action),
//     // switchMap((payload: number) => -- for pagination later ToDo
//     switchMap(() =>
//       this.postService.getPosts().pipe(
//         retry(3),
//         map((result: any) => new LoadPostsSuccess(result.posts)),
//         catchError(error => of(new LoadPostsFail(error)))
//       )
//     )
//   );

  @Effect()
  createComment$: Observable<Action> = this.actions
    .ofType(CommentsActionTypes.CreateComment)
    .pipe(
      map((action: any) => action.payload),
      switchMap(payload => {
        return this.commentsService.createComment(payload)
          .pipe(
            retry(3),
            map(comment => {
              return new CreateCommentSuccess({ payload: comment })
            }),
            catchError(error => of(new CreateCommentFail({message: error})))
          )
      })
  );

}