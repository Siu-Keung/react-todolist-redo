import React, {Component} from 'react';
import './todo.css';

class ListItem extends Component {
    constructor(props) {
        super(props);
    }

    toggleCheckStatus = () => {
        this.props.onCheckBoxClicked(this.props.id);
    }

    render() {
        let resultElem = (
            <li id={this.props.id} className={this.props.checked ? 'checked' : ''}>
                <input onClick={this.toggleCheckStatus} name="done-todo" type="checkbox" className="done-todo" checked={this.props.checked}/>
                <span>{this.props.content}</span>
            </li>
        );
        return resultElem;
    }
}

export default ListItem;
