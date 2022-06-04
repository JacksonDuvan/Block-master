import { ADD_MOVIES, SET_FILTER, SEARCH_MOVIE } from "../actions/index.js"
import { moviesListAsMap, getAllIds, getLeastValuedIds, getMostValuedIds } from "../normalize.js"

function filterByTitle(title, movies){
  const list = []

  movies.forEach(movie => {
      if(movie.title.toLowerCase().includes(title.toLowerCase())){
        list.push(movie.id)
      }
  })

  return list
}

function findById(id, allIds){
  const parseId = parseInt(id, 10)
  if(allIds.includes(parseId)){
    return [parseId]
  }
  return allIds
}

function searchMovie(query, list, allIds){
  if(isNaN(query)){
      return filterByTitle(query, list)
  }

  return findById(query, allIds)
}

const reducer = (state, action) => {
    switch (action.type) {
      case ADD_MOVIES:{
        const movieList = moviesListAsMap(action.payload, state.movieList)
        const all = getAllIds(action.payload, state.list.all)
        const leastValued = getLeastValuedIds(action.payload, state.list.leastValued)
        const mostValued = getMostValuedIds(action.payload, state.list.mostValued)
        return {
          ...state,
          movieList,
          list: {
            ...state.list,
            all,
            leastValued,
            mostValued
          }
        }
      }
      case SET_FILTER:
        return {
            ...state,
            filter: action.payload
          }
      case SEARCH_MOVIE:
        return {
            ...state,
            filter: 'search',
            list: {
              ...state.list,
              search: searchMovie(action.payload, state.movieList, state.list.all)
            }
        }
      default:
        return state
    }
}

export default reducer