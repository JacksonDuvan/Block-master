import { Component } from "../lib/react/index.js";
import styled from "../lib/styled-components.js";
import Movie from "./Movie.js";
import Wrapper from "./Wrapper.js";
import { store } from "../store.js";
import api from "../api.js";
import { ADD_MOVIES } from "../actions/index.js";

// import movies from '../movies.js'

const MovieListStyled = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fit, 200px);
    justify-content: center;
    box-sizing: border-box;
    gap: 1em;
`

class MovieList extends Component {
    constructor(props){
        super(props)
        this.state = {
            page: 1,
            movies: store.getState().movieList
        }
    }

    getPage = async (page) => {
        const { results } = await api.moviePage(page)
        store.dispatch({
            type: ADD_MOVIES,
            payload: results
        })
    }

    handleIntersection = (entries) => {
        if(entries[0].isIntersecting){
          this.getPage(this.state.page)
          this.setState({
              ...this.state,
              page: this.state.page + 1
          })
        }
    }

    componentDidMount(){
        store.subscribe(() => {
            this.setState()
        })

        const observer = new IntersectionObserver(this.handleIntersection)
        observer.observe(window.intersector)
    }

    render (){
        const state = store.getState()
        const { list, movieList, filter } = state

        return Wrapper({
            children: MovieListStyled({
                children: list[filter].map(id => new Movie(movieList.get(id)))
            })
        })
    }
}

export default MovieList