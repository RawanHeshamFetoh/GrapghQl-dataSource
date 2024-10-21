export const resolver = {
    Query: {

        getMovie: async (_source, { id }, { dataSources }) => {
            return dataSources.movieAPI.getMovieById(id);
        },

        getActor: async (_source, { id }, { dataSources }) => {
            return dataSources.movieAPI.getActorById(id);
        }
    }
};