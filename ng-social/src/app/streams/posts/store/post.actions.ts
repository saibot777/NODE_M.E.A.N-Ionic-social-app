import { Action } from '@ngrx/store';

export enum PostsActionTypes {
    LoadPosts = '[Streams] Load Posts',
    LoadPostsSuccess = '[Streams] Load Posts Successfully',
    LoadPostsFail = '[Streams] Load Posts Failed',
    CreatePost = '[Streams] Create Post]',
    CreatePostSuccess = '[Streams] Create Post Successfully]',
    CreatePostFail = '[Streams] Create Post Failed]',
    AddLike = '[Streams] Add Like',
    AddLikeSuccess = '[Streams] Adding Like Successfully',
    AddLikeFail = '[Streams] Adding Like Failed',
}

/**
 * POSTS Actions
 */
export class LoadPosts implements Action {
    readonly type = PostsActionTypes.LoadPosts;
    // constructor(public payload: any) { }
}

export class LoadPostsSuccess implements Action {
    readonly type = PostsActionTypes.LoadPostsSuccess;
    constructor(public payload: any) { }
}

export class LoadPostsFail implements Action {
    readonly type = PostsActionTypes.LoadPostsFail;
    constructor(public payload: any) { }
}

export class CreatePost implements Action {
    readonly type = PostsActionTypes.CreatePost;
    constructor(public payload: any) { }
}

export class CreatePostSuccess implements Action {
    readonly type = PostsActionTypes.CreatePostSuccess;
    constructor(public payload: any) { }
}

export class CreatePostFail implements Action {
    readonly type = PostsActionTypes.CreatePostFail;
    constructor(public payload: any) { }
}

export class AddLike implements Action {
    readonly type = PostsActionTypes.AddLike;
    constructor(public payload: any) { }
}

export class AddLikeSuccess implements Action {
    readonly type = PostsActionTypes.AddLikeSuccess;
    constructor(public payload: any) { }
}

export class AddLikeFail implements Action {
    readonly type = PostsActionTypes.AddLikeFail;
    constructor(public payload: any) { }
}

export type PostsListActionsUnion =
    | LoadPosts
    | LoadPostsSuccess
    | LoadPostsFail
    | CreatePost
    | CreatePostSuccess
    | CreatePostFail
    | AddLike
    | AddLikeSuccess
    | AddLikeFail
