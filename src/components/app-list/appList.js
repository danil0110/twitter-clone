import React from 'react';

import AppListItem from '../app-list-item/appListItem';
import ItemAddForm from '../item-add-form/itemAddForm';
import './appList.css';

const AppList = ({posts, onDelete}) => {
    const elements = posts.map(item => {
        return (
            <li key={item.id} className="list-group-item">
                <AppListItem label={item.label} important={item.important} onDelete={() => onDelete(item.id)} />
            </li>
        );
    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default AppList;