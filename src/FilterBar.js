import React, {Component} from 'react';
import './todo.css';
import ListItem from "./ListItem";
import emitter from './emitter'

class FilterBar extends Component{
    constructor(props) {
        super(props);
        this.state = {selectedFilter: '全部'};
    }

    handleFilterChange = (newFilterName) => {
        emitter.emit('filterChanged', newFilterName);
    }

    render(){
        return (
            <div>
                <ul id="filters">
                    <li>
                        <a onClick={this.handleFilterChange.bind(this, '全部')} href="#" className={this.state.selectedFilter === '全部' ? 'selected' : ''}>全部</a>
                    </li>
                    <li>
                        <a onClick={this.handleFilterChange.bind(this, '未完成')} href="#" className={this.state.selectedFilter === '未完成' ? 'selected' : ''}>未完成</a>
                    </li>
                    <li>
                        <a onClick={this.handleFilterChange.bind(this, '已完成')} href="#" className={this.state.selectedFilter === '已完成' ? 'selected' : ''}>已完成</a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default FilterBar;