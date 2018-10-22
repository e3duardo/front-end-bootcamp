import { observable, action, computed, runInAction } from 'mobx'
// import { pesquisarEquipes } from '../../services/api'
// import { Equipe } from '../../model/Equipe'

const API_URL = 'http://www.omdbapi.com/?apikey={YOUR_API_KEY}';

class MovieStore {

	@observable movies = [];

	@computed get moviesIn() {
	  return this.movies;
	}
	@computed get hasMovies() {
	  return this.movies.length > 0;
	}

	@action searchMovies(search){
		try {
			this.movies.clear();
			fetch(`${API_URL}&s=${search}`)
			.then(result=>result.json())
			.then(
	            action("fetchSuccess", result => this.movies.replace(result.Search)),
	            action("fetchError", error => {
					console.log(error);
	            })
	        )
		} catch (e) {
			console.error(e);
		}
	}
	@action async searchMovie(imdbID){
		let result = {};
		try {
			result = await fetch(`${API_URL}&i=${imdbID}`);
			result = await result.json();
		} catch (e) {
			console.error(e);
		}
		return result;
	}

  // @observable equipes = [];
  // @observable isLoading = false;
  //
  // constructor(rootStore){
  //   this.filtrarEquipes("");
  // }
  //
  // @computed get loading() {
  //   return this.isLoading;
  // }
  //
  // @action load() {
  //   this.isLoading = true;
  // }
  //
  // @action loaded() {
  //   this.isLoading = false;
  // }
  //
  // @action limparEquipes(){
  //   this.equipes = [];
  // }
  //
  // @computed get listarTodos() {
  //   return this.equipes;
  // }
  //
  // @action filtrarEquipes(pesquisa){
  //   this.load();
  //   this.equipes = [];
  //   pesquisarEquipes(pesquisa).then(equipesJson => {
  //     equipesJson.forEach(json => this.updateEquipeFromServer(json));
  //     this.loaded();
  //   });
  // }
  //
  // @action updateEquipeFromServer(json) {
  //   if(json.excluido){
  //     return;
  //   }
  //   const temNaLista = this.equipes.find(equipe => equipe.id === json.id);
  //
  //   if (!temNaLista) {
  //       const equipe = new Equipe(this);
  //       equipe.updateFromJson(json);
  //       this.equipes.push(equipe);
  //   }
  // }

}

export default MovieStore
