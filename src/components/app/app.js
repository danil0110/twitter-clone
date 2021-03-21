import React from 'react';

import Header from '../header/header';
import SearchPanel from '../search-panel/searchPanel';
import ListStatusFilter from '../list-status-filter/listStatusFilter';
import AppList from '../app-list/appList';
import ItemAddForm from '../item-add-form/itemAddForm';
import './app.css';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { label: 'I going to learn React', important: false, id: 1 },
                { label: 'Want to learn JS', important: true, id: 2 },
                { label: 'I learn C#', important: true, id: 3 }
            ]
        }
        this.maxId = 4;
        this.onDelete = this.onDelete.bind(this);
        this.onAdd = this.onAdd.bind(this);
    }

    onDelete(id) {
        this.setState(({data}) => {
            const index = data.findIndex(item => item.id === id);

            const result = [...data.slice(0, index), ...data.slice(index + 1)];

            return {
                data: result
            };
        });
    }

    onAdd(body) {
        const newItem = {
            label: body,
            important: false,
            id: this.maxId++
        };
        
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            };
        });
    }

    render() {
        return (
            <div className="app">
                <Header />
                <div className="search-panel d-flex">
                    <SearchPanel />
                    <ListStatusFilter />
                </div>
                <AppList posts={this.state.data} onDelete={this.onDelete} />
                <ItemAddForm onAdd={this.onAdd} />
            </div>
        );
    }
};