import { Component } from 'react'
import './movies-add-form.css'
import { v4 as uuidv4 } from 'uuid';

class MoviesAddForm extends Component {
    constructor (props){
        super(props)
        this.state = {
            name : '' ,
            views: '' ,
        }
    }

    changeHandInput = e => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    addFormHandler = e => {
        e.preventDefault()
        this.props.addForm({ name: this.state.name,  viewers: this.state.views, id:uuidv4() })
        this.setState({
            name: '',
            views: '',

        })
        
    }


    render(){
        const {name, views} = this.state


        return (
            <div className="movies-add-form">
                <h3>Yangi film qo'shish</h3>
                <form className='add-form d-flex' onSubmit={this.addFormHandler}>
                    <input type="text" 
                    className='form-control new-post-label' 
                    placeholder='Qanday kino?' 
                    onChange={this.changeHandInput} 
                    name='name' 
                    value={name}
                    />
                    <input type="number" 
                    className='form-control new-post-label' 
                    placeholder= "Necha marotaba ko'rilgan?" 
                    onChange={this.changeHandInput} 
                    name='views'
                    value={views}
                    />
                    <button type='submit' className='btn btn-outline-dark'>
                        Qo'sish
                    </button>
                </form>
            </div>
                )
    }
   
    
    
}

export default MoviesAddForm