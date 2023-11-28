import { action, makeObservable, observable } from "mobx";

export  type Rep = {
    id: number;
    full_name: string;
    stargazers_count: number;
    forks_count: number;
    owner: {
      avatar_url: string;
      login: string;
    };
    html_url: string;
    content: string;
  }

class Store {
    reps: Rep[]  = [];
    favoriteReps: Rep[] = [];
    selectRep: string ='';
    selectRepDesc: any = null

 
    constructor() {
        makeObservable(this, {
          reps: observable,
          setRepositories: action,
          fetchData: action,
          favoriteReps: observable,
          setFavoriteReps: action,
          setSelectRep: action,
          selectRep: observable,
          fetchSelectedRep:action
        });
      }

      setRepositories(reps: Rep[]) {
        this.reps = reps;
      }

      setFavoriteReps(favoriterep: Rep[]){
        this.favoriteReps = favoriterep
      }
      addFavorite(rep: Rep) {
      return this.favoriteReps.includes(rep) ?  "" : this.setFavoriteReps([...this.favoriteReps, rep]) ;
    }

    setSelectRep(rep:string) {
      this.selectRep = rep;
    }

    setSelectRepDesc(rep: any) {
      this.selectRepDesc = rep;
    }
  

      async fetchData(inputValue:string){
        try {
          
          const response = await fetch(`https://api.github.com/search/repositories?q=${inputValue}`, {
            headers: {
            Authorization: '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',
          }});
    
          const data = await response.json();
         this.setRepositories(data.items)
        } catch (error) {
          console.error('Error loading repositories', error);
        }
      }

      async fetchSelectedRep(inputValue:string){
        try {
          
          const response = await fetch(`https://api.github.com/repos/${this.selectRep}/readme`, {
            headers: {
            Authorization: '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',
          }});
    
          const data = await response.json();
          console.log(data)
         this.setSelectRepDesc(data)
        } catch (error) {
          console.error('Error loading repositories', error);
        }
      }



}

export const store = new Store()

export const useStore = () => store