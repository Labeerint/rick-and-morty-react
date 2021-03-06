import {makeAutoObservable} from "mobx";
import axios from "axios";


class Store{
    activeMenuItem = '1'
    characters = []
    locations =[]
    episodes = []
    info = {}
    currentPage= 1
    currentName= ''
    currentStatus= ''
    currentSpecies= ''
    currentGender= ''

    constructor() {
        makeAutoObservable(this)
    }

    changeMenuItem(obj){
        const key = obj.key
        this.characters= []
        this.activeMenuItem = key
        this.locations=[]
        this.info= {}
        this.currentPage= 1
        this.currentName= ''
        this.currentStatus= ''
        this.currentSpecies= ''
        this.currentGender= ''
        this.fetchDataByKey()
    }

    fetchDataByKey(){
        switch (this.activeMenuItem) {
            case '1':
                this.fetchCharracters()
                break;
            case '2':
                this.fetchEpisodes()
                break;
            case '3':
                this.fetchLocations()
                break;
            default:
                return

        }
    }

    fetchCharracters(){
        axios.get(`https://rickandmortyapi.com/api/character?page=${this.currentPage}
            ${this.currentName.length > 0 ? `&name=${this.currentName}` : ''}
            ${this.currentStatus.length > 0 ? `&status=${this.currentStatus}` :''}
            ${this.currentSpecies.length > 0 ? `&species=${this.currentSpecies}`: ''}
            ${this.currentGender.length > 0 ? `&gender=${this.currentGender}`: ''}`)
            .then(({data})=>{
                this.characters = data.results
                this.info = data.info
            })
    }

    fetchLocations(){
        axios.get(`https://rickandmortyapi.com/api/location?page=${this.currentPage}
        ${this.currentName.length > 0 ? `&name=${this.currentName}` : ''}`)
            .then(({data})=>{
                this.locations = data.results
                this.info = data.info
            })
    }

    fetchEpisodes(){
        axios.get(`https://rickandmortyapi.com/api/episode?page=${this.currentPage}
         ${this.currentName.length > 0 ? `&name=${this.currentName}` : ''}`)
            .then(({data})=>{
                this.episodes = data.results
                this.info = data.info
        })
    }

    selectPage(page){
        this.currentPage = page
        this.fetchDataByKey()
    }

    inputName(e){
        this.currentName = e.target.value
        this.currentPage = 1
        this.fetchDataByKey()
    }


    onFilter(payload){
        if(payload){
            this.[payload.name] = payload.property
            this.currentPage = 1}
            this.fetchCharracters()
    }

}

export default new Store()