import { observable, action, computed} from 'mobx';

class UiStore {

	@observable search = "";


	@action handleSearch(search){
      this.search = search;
	  console.log(this.search);
    }





  // rootStore;
  //
  // @observable pesquisaAtividade = "";
  // @observable pesquisaProcesso = "";
  // @observable equipe = null;
  // @observable processo = null;
  // @observable atividade = null;
  // @observable tarefa = null;
  //
  // @observable lightboxUrl = null;
  //
  //
  // constructor(rootStore){
  //   this.rootStore = rootStore;
  // }
  //
  // @action pesquisarAtividade(pesquisa){
  //   this.pesquisaAtividade = pesquisa;
  //
  //   if(pesquisa.length > 3){
  //     this.rootStore.atividadeStore.filtrarAtividades(this.pesquisaAtividade, this.processo);
  //   }
  //   if(pesquisa.length == 0){
  //     this.rootStore.atividadeStore.filtrarAtividades("", this.processo);
  //   }
  // }
  //
  // @action pesquisarProcesso(pesquisa){
  //   this.pesquisaProcesso = pesquisa;
  //   this.rootStore.processoStore.filtrarProcessos(this.pesquisaProcesso);
  // }
  //
  // @action setProcesso(processo){
  //   this.processo = processo;
  //   this.rootStore.atividadeStore.filtrarAtividades(this.pesquisaAtividade, this.processo);
  // }
  //
  // @action setAtividade(atividade){
  //   this.atividade = atividade;
  //   this.tarefa = null;
  // }
  //
  // @action setTarefa(tarefa){
  //   this.atividade = null;
  //   this.tarefa = tarefa;
  // }
  //
  // @action setLightboxUrl(url){
  //   this.lightboxUrl = url;
  // }
  //
  // processoEquals(processo){
  //   if(this.processo){
  //     return this.processo.id === processo.id;
  //   }
  //   return false
  // }
  // equipeEquals(equipe){
  //   if(this.equipe){
  //     return this.equipe.id === equipe.id;
  //   }
  //   return false
  // }
}

export default UiStore;
