import UiStore from '../UiStore'
import MovieStore from '../MovieStore'

export default class RootStore {
  constructor() {
    this.uiStore = new UiStore(this);
    this.movieStore = new MovieStore(this);
  }
}
