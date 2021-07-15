import React from 'react';
import PostListItem from '../post-list-item/post-list-item';
import './post-list.css';

const PostList = () => {
    return (
        <div>
            <ul className="app-list list-group">
                <PostListItem label='Going to learn react' important/>
                <PostListItem label='That is so good'/>
                <PostListItem label='I need a break...'/>

            </ul>
        </div>
    )
}
export default PostList;