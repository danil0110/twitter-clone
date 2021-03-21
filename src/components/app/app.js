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
            ],
            term: '',
            filter: 'all'
        }
        this.onDelete = this.onDelete.bind(this);
        this.onAdd = this.onAdd.bind(this);
        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onToggleLiked = this.onToggleLiked.bind(this);
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
        this.onFilterSelect = this.onFilterSelect.bind(this);

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

    searchPosts(array, term) {
        if (term.length === 0) {
            return array;
        }

        return array.filter(item => item.label.indexOf(term) > -1);
    }

    filterPosts(array, filter) {
        if (filter === 'liked') {
            return array.filter(item => item.liked);
        } else {
            return array;
        }
    }

    onUpdateSearch(term) {
        this.setState({term});
    }

    onFilterSelect(filter) {
        this.setState({filter});
    }

    render() {
        const {data, term, filter} = this.state;
        const liked = data.filter(item => item.liked).length;
        const allPosts = data.length;

        const visiblePosts = this.filterPosts(this.searchPosts(data, term), filter);

        return (
            <div className="app">
                <Header 
                    liked={liked}
                    allPosts={allPosts} />
                <div className="search-panel d-flex">
                    <SearchPanel
                        onUpdateSearch={this.onUpdateSearch} />
                    <ListStatusFilter
                        filter={filter}
                        onFilterSelect={this.onFilterSelect} />
                </div>
                <AppList posts={visiblePosts}
                    onDelete={this.onDelete}
                    onToggleImportant={this.onToggleImportant}
                    onToggleLiked={this.onToggleLiked} />
                <ItemAddForm onAdd={this.onAdd} />
            </div>
        );
    }
};