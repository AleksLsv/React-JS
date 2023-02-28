import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
import React from "react";


let state = {
    posts: [
        {id: 1, message: 'Hi, how are you', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 23}
    ]
};


it('length of post should be incremented', () => {
    // 1. test initial data
    let action = addPostActionCreator("Hello friends");

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(3);

});


it('message of new post should be correct', () => {
    // 1. test initial data
    let action = addPostActionCreator("Hello friends");

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts[2].message).toBe("Hello friends");

});

it('after deleting length of messages should be decrement', () => {
    // 1. test initial data
    let action = deletePost(1);

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(1);

});

it('after deleting length of messages shouldn`t be decrement if id is incorrect', () => {
    // 1. test initial data
    let action = deletePost(1000);

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(2);

});
