import React, {Component} from 'react';
import './todo.css';
import ListItem from "./ListItem";

class ListItemGroup extends Component{
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {id: '1', content: '做作业', checked: false},
                {id: '2', content: '看电视', checked: false},
                {id: '3', content: '打游戏', checked: true},
                {id: '4', content: '看书', checked: false}
            ]
        };
    }


    render(){
        let itemList = this.state.items.map(item =>
            <ListItem id={item.id} content={item.content} checked={item.checked}/>);
        return (
            <ol>
                {itemList}
            </ol>
        );

    }
}

export default ListItemGroup;