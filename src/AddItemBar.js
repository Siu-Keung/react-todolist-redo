import React, {Component} from 'react';
import './todo.css';
import emitter from './emitter'

class AddItemBar extends Component{
    constructor(props) {
        super(props)
        this.newItemContent = React.createRef();
    }

    onAddButtonClicked = () => {
        emitter.emit("addItem", this.newItemContent.current.value);
    }

    render(){
        return(
            <div>
                <input ref={this.newItemContent} className="input-text" type="text" name="ListItem"/>
                <div id="button" onClick={this.onAddButtonClicked}>Add</div>
            </div>
        );
    }
}

export default AddItemBar;