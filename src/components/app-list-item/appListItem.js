import React from 'react'

import './appListItem.css';

export default class AppListItem extends React.Component {
    render() {
        const {label, onDelete, onToggle, important, liked} = this.props;
        let classNames = 'app-list-item d-flex justify-content-between';
        if (important) {
            classNames += ' important';
        }

        if (liked) {
            classNames += ' like';
        }

        return (
            <div className={classNames}>
                <span className="app-list-item-label" onClick={() => onToggle('liked')}>{label}</span>
                <div className="d-flex justify-content-center align-items-center">
                    <button className="btn btn-star" onClick={() => onToggle('important')}>
                        <i className="fa fa-star"></i>
                    </button>
                    <button className="btn btn-trash" onClick={onDelete}>
                        <i className="fa fa-trash-o"></i>
                    </button>
                    <i className="fa fa-heart"></i>
                </div>
            </div>
        )
    }
}