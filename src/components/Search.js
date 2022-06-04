import { SEARCH_MOVIE, SET_FILTER } from "../actions/index.js";
import { Component } from "../lib/react/index.js";
import styled from "../lib/styled-components.js";
import { store } from "../store.js";
import Button from "./Button.js";

const FormStyled = styled.form`
    min-width: 320px;
    display: flex;
    gap: .5em;
`

const InputStyled = styled.input`
    font-size: 1rem;
    font-family: system-ui;
    padding: .5em 1em;
    flex: 1;
`

class Search extends Component {

    handleSubmit = (event) => {
        event.preventDefault() 
        const formData = new FormData(event.target)
        const query = formData.get('title')
        if(query){
            return store.dispatch({
                type: SEARCH_MOVIE,
                payload: query
            })
        }

        store.dispatch({
            type: SET_FILTER,
            payload: 'all'
        })
    }

    render(){
        return FormStyled({
                onSubmit: this.handleSubmit,
                action: "",
                id:"search-form",
                children: [
                    InputStyled({
                        placeholder: "Escribe tu película favorita",
                        name:"title",
                        type:"text" 
                    }),
                    Button(null, 'Buscar')
                ]
            })
    }
}

export default Search