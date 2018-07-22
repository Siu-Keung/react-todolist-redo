import React, {Component} from 'react';
import './todo.css';
import ListItem from "./ListItem";
import emitter from './emitter'


function generateUUID() {
    /*jshint bitwise:false */
    var i,
        random;
    var uuid = '';

    for (i = 0; i < 32; i++) {
        random = Math.random() * 16 | 0;
        if (i === 8 || i === 12 || i === 16 || i === 20) {
            uuid += '-';
        }
        uuid += (i === 12
            ? 4
            : (i === 16
                ? (random & 3 | 8)
                : random)).toString(16);
    }
    return uuid;
}


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
        emitter.addListener('addItem', this.handleAddItemEvent);
    }

    handleAddItemEvent = (newItemContent) =>{
        this.state.items.push({id: generateUUID(), content: newItemContent, checked: false});
        this.setState(this.state);
    }

    onCheckBoxClicked = (id) => {
        let targetItem = this.state.items.find(item => item.id === id);
        targetItem.checked = !targetItem.checked;
        this.setState(this.state);
    }


    render(){
        let itemList = this.state.items.map(item =>
            <ListItem id={item.id} content={item.content} checked={item.checked} onCheckBoxClicked={this.onCheckBoxClicked}/>);
        return (
            <ol>
                {itemList}
            </ol>
        );

    }
}

export default ListItemGroup;