import React, {Component} from 'react';
import './post-list-item.css';

export default class PostListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
        important: false,
        like: false
    };
    this.onImportant = this.onImportant.bind(this);
    this.onLike = this.onLike.bind(this);
}

    onImportant() {
        this.setState(({important}) => ({/*  навешиваем обрабочкик событий */
            important: !important
        }))
    }

    onLike() {
        this.setState(({like}) => ({/*  навешиваем обрабочкик событий */
            like: !like
        }))
    }

    render () {
        const {label, onDelete} = this.props;
        const {important, like} = this.state;
        let classNames='app-list-item d-flex justify-content-between';

        if (important) { /* если передано значение,то добавляем класс important для звездочки */
            classNames +=" important"; /* обязательно ставим пробел,т.к. формируем строку в котоорой между классами есть пробелы. */
        }

        if (like) {
            classNames +=' like';
        }

        return(
            <div className={classNames}>
            <span className='app-list-item-label'
            onClick={this.onLike}>
            {label}
            </span>
            <div className='d-flex justify-content-center align-items-center'>
                <button type='buttton' className='btn-star btn-sm' 
                onClick={this.onImportant}>
                    <i className='fa fa-star'></i>
                </button>
                <button type='buttton' className='btn-trash btn-sm'
                onClick={onDelete}>
                    <i className='fa fa-trash'></i>  
                </button>
                    <i className='fa fa-heart'></i>
            </div>

        </div>
        )
    }
}

