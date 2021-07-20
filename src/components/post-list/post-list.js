import React from 'react';
import PostListItem from '../post-list-item/post-list-item';
import './post-list.css';

const PostList = ({posts, onDelete}) => {

    const elements = posts.map((item) => { /* перебираем массив данных, котор пришли с сервера */
       
        const {id, ...itemProps} = item;
       
        return ( /* и возвращаем новый массив */
            <li key={id} className='list-group-item'>
                <PostListItem {...itemProps}   /* label, important */ 
                onDelete={() => onDelete(id)}/>
            </li>
        )
    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>   
    )
}
export default PostList;