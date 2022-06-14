import { Component } from "react";

export class ItemHistory extends Component {
    state = {

    }
    render() {
        return (
            <div>
                <span>{this.props.history.action ? this.props.history.action : ''}</span>
            </div>
        )
    }

}