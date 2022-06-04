import { SET_FILTER } from "../actions/index.js";
import { Component, createElement } from "../lib/react/index.js";
import { store } from "../store.js";
import Select from "./Select.js";

class Filters extends Component {

    handleChange = (event) => {
        store.dispatch({
            type: SET_FILTER,
            payload: event.target.value
        })
    }

    render(){
        return (
            Select({
                onChange: this.handleChange,
                id:"filter",
                children: [
                    createElement('option', { value: 'all' }, 'Todas'),
                    createElement('option', { value: 'mostValued' }, 'Más valoradas'),
                    createElement('option', { value: 'leastValued' }, 'Menos valoradas')
                ]
            })
        )
    }
}

export default Filters