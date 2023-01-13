
import { Component } from "react"
import AppInfo from "../app-info/app-info"
import SearchPanel from "../search-panel/search-panel"
import AppFilter from "../app-filter/app-filter"
import './app.css'
import '../movie-list/movie-list.css'
import MovieList from "../movie-list/movie-list"
import MoviesAddForm from "../movies-add-form/movies-add-form"
import '../movie-list-item/movie-list-item.css'

class App extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            data: [
                {name:'Harry Potter', viewers: 588, favourite: false, id: 1  },
                {name:'Snouden', viewers: 2674, favourite: false, id: 2 },
                {name:'Harry Potter', viewers: 588, favourite: true, id: 3},
            ],
        }
    }
    
    onDelete = id => {
     this.setState(({  data }) => ({
        data: data.filter(c => c.id !== id),
     }))
    }

    addForm =  item => {
        this.setState(({data}) => ({
            data: [ ...data, item],
        }))
    }
    
    
render(){
    const {data} = this.state

    return (
        <div className="app font-monospace">
            <div className="content">
                <AppInfo />
                <div className="search-panel">
                    <SearchPanel />
                    <div>
                        <AppFilter />
                    </div>
                </div>
                <MovieList data={data} onDelete={this.onDelete} />
                <MoviesAddForm addForm={this.addForm}/>
            </div>
           
        </div>
    
        )
}
    
}

export default App