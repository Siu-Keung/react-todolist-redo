import React, {Component} from 'react';
import './todo.css';
import emitter from "./emitter";

class ListItem extends Component {
    constructor(props) {
        super(props);
        this.itemContentInput = React.createRef();
    }

    toggleCheckStatus = () => {
        this.props.onCheckBoxClicked(this.props.id);
    }

    onEnterKeyUp(event){
        if(event.keyCode === 13){
            this.props.handleUpdateItem(this.props.id, this.itemContentInput.current.value);
        }
    }

    onContentSpanClicked = () => {
        this.props.handleContentSpanClicked(this.props.id);
    }

    render() {
        let resultElem = (
            <li id={this.props.id} className={this.props.checked ? 'checked' : ''}>
                <input onClick={this.toggleCheckStatus} name="done-todo" type="checkbox" className="done-todo" checked={this.props.checked}/>
                {this.props.editable ?
                    <input defaultValue={this.props.content} type='text' onKeyUp={this.onEnterKeyUp.bind(this)} ref={this.itemContentInput}/> :
                    <span onDoubleClick={this.onContentSpanClicked}>{this.props.content}</span>}
            </li>
        );
        return resultElem;
    }
}

export default ListItem;
