import React from 'react'
import {Toast} from 'react-bootstrap'


export default class Toasts extends React.Component{
    constructor(){
        super()
        this.state={display: true}
        this.toggleDisplay = this.toggleDisplay.bind(this)
    }

    toggleDisplay () {
        this.setState((state) => ({display: !state.display}))
    }

    render(){
    return (
        <Toast show={this.state.display} onClose={() => this.toggleDisplay()}>
            <Toast.Header>
                <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                <strong className="mr-auto">Nomination Limit Reached!</strong>
            </Toast.Header>
            <Toast.Body>You Can Only Nominate Up To 5 Movies</Toast.Body>
        </Toast>
    )
    }
}