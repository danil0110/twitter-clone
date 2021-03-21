import React from 'react';

import './itemAddForm.css';

const ItemAddForm = ({onAdd}) => {
    return (
        <div className="bottom-panel d-flex">
            <input type="text" placeholder="О чем вы сейчас думаете?" className="form-control new-post-label" />
            <button type="submit" className="btn btn-outline-secondary" onClick={() => onAdd('Hello')}>Добавить</button>
        </div>
    )
}

export default ItemAddForm;