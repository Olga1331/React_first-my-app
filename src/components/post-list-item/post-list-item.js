import React from 'react';
import './post-list-item.css';

const PostListItem = ({label, important = false}) => {



    return (
        <li className='app-list-item d-flex justify-content-between'>
            <span className='app-list-item-label'>
            {label}
            </span>
            <div className='d-flex justify-content-center align-items-center'>
                <button type='buttton' className='btn-star btn-sm'>
                    <i className='fa fa-star'></i>
                </button>
                <button type='buttton' className='btn-trash btn-sm'>
                    <i className='fa fa-trash'></i>
                </button>
                    <i className='fa fa-heart'></i>
            </div>

        </li>
    )
}
export default PostListItem;