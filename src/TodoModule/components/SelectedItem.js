import { Component } from "react";
import './SelectedItem.css';
import { ItemHistory } from "./History";
export class SelectedItem extends Component {
    state = {
        todoItem: {
            id: '',
            title: '',
            description: '',
            completed: false,
            selected: false
        },
        history: [ {
                field: '',
                action: '',
                prevValue: '',
                currentValue: '',
                appliedAt: ''
    
            }]
        }
    

    onChangedHandler = (event, target) => {
        this.setState({todoItem: {...this.props.item, description: event.target.value}},
            () => console.log(this.state.todoItem)) 
           
    
        
            event.preventDefault();
    }
/*
    onHistoryChange = (field, action, prevValue, currentValue, appliedAt) => {
        const newHistoryItem = { 
            field: field,
        action: action,
        prevValue: prevValue,
        currentValue: currentValue,
        appliedAt: appliedAt
    }
    this.setState({
        history: [...this.state.history, newHistoryItem]
    }, () => {
        console.log(this.state.history);
    })
   
    }
*/
    onChangedTitleHandler = (event, target) => {
        console.log(this.props.item.title, this.state.todoItem.title);
        this.setState({todoItem: {...this.props.item, title: event.target.value}},
            () => console.log(this.state.todoItem)) 
            event.preventDefault();
    }

    onBlurHandler = (event) => {
        event.preventDefault();
       /* this.onHistoryChange('v', 'b', 'b', 'j', 'j');*/
        const newItem = {...this.state.todoItem};
        
        console.log(newItem);
        this.props.onSelectedItemChange(newItem, newItem.id);
       
    }


    render() {
        return (
            <>
            <div className={this.props.item.title ? "unselected-sign" : 'unselected-screen'}>Nothing selected</div>
            <form className={this.props.item.title ? "selected-item-container" : 'unselected-sign'} 
                onSubmit={this.onSubmitHandler}>
                <span>
                   <textarea className={this.props.item.title ? 'selected-item-title' : 'unselected-sign'}  
                    value={this.state.todoItem.title ? this.state.todoItem.title : this.props.item.title} 
                    type='text' 
                    onChange={this.onChangedTitleHandler} 
                    onBlur={this.onBlurHandler}>
                    </textarea>
                   <textarea className={this.props.item.title ? 'selected-item-description' : 'unselected-sign'}  
                    onChange={this.onChangedHandler} 
                    onBlur={this.onBlurHandler} 
                    value={this.state.todoItem.description ? this.state.todoItem.description : this.props.item.description} 
                    type='text'>
                    </textarea>
                </span>
            </form>
            {this.state.history.map((historyItem) =>
                          <ItemHistory
                          history = {historyItem}

                          />)
                        }
            </>
        );
    }
}