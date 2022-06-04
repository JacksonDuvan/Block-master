import movies from "./movies.js"
import reducer from "./reducers/index.js"
import { createStore } from "./redux/index.js"
import { 
    getLeastValuedIds,
    getMostValuedIds,
    moviesListAsMap,
    getAllIds
} from './normalize.js'

const INITIAL_STATE = { 
    movieList: moviesListAsMap(movies),
    filter: 'all',
    list: {
        all: getAllIds(movies),
        mostValued: getMostValuedIds(movies),
        leastValued: getLeastValuedIds(movies)
    }
}

export const store = createStore(reducer, INITIAL_STATE)