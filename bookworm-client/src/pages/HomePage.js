import axios from 'axios';
import { useState} from 'react';

import BookList from '../components/BookList';

function HomePage(){

    const [state, setState] = useState({
        title: '',
        author: '',
        genre: '',
        category: ''
    });

    const updateState = event => setState({
        ...state,
        [event.target.name]: event.target.value
      });

    const handleSubmit = event => {
        event.preventDefault();
        const storedToken = localStorage.getItem('authToken');
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/books`, state, {
            headers: {
            authorization: `Bearer ${storedToken}`
        }
      })
        .then(res => {
          console.log(res.data);
        })
        .catch(err => console.log(err))
        
    };

    const [view,setView] = useState('Currently-Reading');

    const viewPlanning = () => {
        setView('Planning-to-Read')
    }

    const viewCurrently = () => {
        setView('Currently-Reading')
    }

    const viewFinished = () => {
        setView('Finished-Reading')
    }

    return(
        <div>
            <h2>Add Book</h2>
            <form id="add-book">
                <input  
                type="text"
                placeholder="Title"
                name="title"
                value={state.title}
                onChange={updateState}
                required
                />
                <input
                    type="text"
                    placeholder="Author"
                    name="author"
                    value={state.author}
                    onChange={updateState}
                />
                <select 
                    name="genre"
                    onChange={updateState}
                    required 
                >
                    <option value="">Select Genre</option>
                    <option value="Fiction">Fiction</option>
                    <option value="Non-fiction">Non-fiction</option>
                    <option value="Science Fiction">Science Fiction</option>
                    <option value="History">History</option>
                    <option value="Fantasy">Fantasy</option>
                    <option value="Poetry">Poetry</option>
                    <option value="Romance">Romance</option>
                    <option value="Biography">Biography</option>
                    <option value="Other">Other</option>
                </select>
                <select 
                    name="category"
                    onChange={updateState}
                    required 
                >
                    <option value="">Select Category</option>
                    <option value="Planning-to-Read">Planning to Read</option>
                    <option value="Currently-Reading">Currently Reading</option>
                    <option value="Finished-Reading">Finished Reading</option>
                </select>
                <button onClick={handleSubmit}>Add Book</button>
            </form>
            
            <div id='category-select'>
                <h2>Categories</h2>
                <button onClick={viewPlanning}>Planning to Read</button>
                <button onClick={viewCurrently}>Currently Reading</button>
                <button onClick={viewFinished}>Finished Reading</button>
            </div>
            <div>
                <BookList view={view}/>
            </div>
        </div>
            
    )
}

export default HomePage;