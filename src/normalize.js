
const moviesListAsMap = (newList, oldList = new Map()) => {
    return newList.reduce((list, movie) => {
        list.set(movie.id, movie)
        return list
    }, oldList)
}

const getAllIds = (list, oldList = []) => {
    return oldList.concat(list.map(movie => movie.id))
}

const getMostValuedIds = (list, oldList = []) => {
    return list.reduce((list, movie) => {
        if(movie.vote_average >= 7){
            list.push(movie.id)
        }
        return list
    }, oldList)
}

const getLeastValuedIds = (list, oldList = []) => {
    return list.reduce((list, movie) => {
        if(movie.vote_average < 7){
            list.push(movie.id)
        }
        return list
    }, oldList)
}
// const all = rawMoviesList.map(movie => movie.id)

// const popular = rawMoviesList.reduce((list, movie) => {
//     if(movie.vote_average > 7){
//         list.push(movie.id)
//     }
//     return list
// }, [])

// const notPopular = rawMoviesList.reduce((list, movie) => {
//     if(movie.vote_average <= 7){
//         list.push(movie.id)
//     }
//     return list
// }, [])

export {
    // all,
    // popular,
    // notPopular,
    getAllIds,
    moviesListAsMap,
    getMostValuedIds,
    getLeastValuedIds,
}