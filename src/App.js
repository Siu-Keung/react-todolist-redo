import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListItemGroup from "./ListItemGroup";
import './todo.css'
import AddItemBar from "./AddItemBar";
import FilterBar from "./FilterBar";

class App extends Component {
  render() {
    return (
        <div className="container">
            <div>
                <h2>Jquery To Do List</h2>
                <p>
                    <em>Simple Todo List with adding and filter by diff status.</em>
                </p>
            </div>
            <br/>

            <AddItemBar/>
            <ListItemGroup/>
            <FilterBar/>

        </div>
    );
  }
}

export default App;
