import React, { Component } from 'react'
import Burger from '../../components/Burger/Burger'
import Imp from '../../hoc/Imp'

export default class BurgerBuilder extends Component {
    render() {
        return (
            <Imp>
                <Burger/>
                <div>Builder Controls</div>
            </Imp>
        )
    }
}
