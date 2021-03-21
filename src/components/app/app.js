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
                { label: 'I going to learn React', important: false, liked: false, id: 1 },
                { label: 'Want to learn JS', important: true, liked: false, id: 2 },
                { label: 'I learn C#', important: true, liked: false, id: 3 }
            ]
        }
        this.onDelete = this.onDelete.bind(this);
        this.onAdd = this.onAdd.bind(this);
        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onToggleLiked = this.onToggleLiked.bind(this);

        this.maxId = 4;
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

    onToggleImportant(id) {
        this.setState(({data}) => {
            const index = data.findIndex(item => item.id === id);

            const oldItem = data[index];
            const newItem = {...oldItem, important: !oldItem.important};

            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

            return {
                data: newArr
            };
        });
    }

    onToggleLiked(id) {
        this.setState(({data}) => {
            const index = data.findIndex(item => item.id === id);

            const oldItem = data[index];
            const newItem = {...oldItem, liked: !oldItem.liked};

            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

            return {
                data: newArr
            };
        });
    }

    render() {
        const {data} = this.state;
        const liked = data.filter(item => item.liked).length;
        const allPosts = data.length;

        return (
            <div className="app">
                <Header 
                    liked={liked}
                    allPosts={allPosts} />
                <div className="search-panel d-flex">
                    <SearchPanel />
                    <ListStatusFilter />
                </div>
                <AppList posts={this.state.data}
                    onDelete={this.onDelete}
                    onToggleImportant={this.onToggleImportant}
                    onToggleLiked={this.onToggleLiked} />
                <ItemAddForm onAdd={this.onAdd} />
            </div>
        );
    }
};