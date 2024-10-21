import { RESTDataSource } from 'apollo-datasource-rest';

class MovieAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.themoviedb.org/3/';
  }

 
  async getMovieById(id) {
    try {
      const response = await this.get(`movie/${id}`, {
        api_key: '607f942283bb38ab33263ffad9ad07c8' 
      });
      return response;
    } catch (error) {
      throw new Error(`Failed to fetch movie with ID: ${id}`);
    }
  }

  
  async getActorById(id) {
    try {
      const response = await this.get(`person/${id}`, {
        api_key: '607f942283bb38ab33263ffad9ad07c8'
      });
      return response;
    } catch (error) {
      throw new Error(`Failed to fetch actor with ID: ${id}`);
    }
  }
}
export default MovieAPI
