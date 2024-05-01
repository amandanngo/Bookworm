import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function SignUpPage() {

    const navigate = useNavigate()

    const [state, setState] = useState({
        name : '',
        username: '',
        password: ''
    });
    
    const updateState = event => setState({
        ...state,
        [event.target.name]: event.target.value
    });
    
    const handleSubmit = event => {
        event.preventDefault();

        axios.post(`${process.env.REACT_APP_BACKEND_URL}/auth/signup`, state)
          .then(res => {
            console.log(res.data);
            navigate('/')
          })
          .catch(err => console.log(err))
    
    }

    return (
        <div>
            <h1>Sign Up</h1>
            <form>
                <div>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    name="name"
                    value={state.name}
                    onChange={updateState}
                    required
                />
            </div>
            <div>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    name="username"
                    value={state.username}
                    onChange={updateState}
                    required
                />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    name="password"
                    value={state.password}
                    onChange={updateState}
                    required
                />
            </div>
            <button onClick={handleSubmit}>Sign Up</button>  
            </form>
           
        </div>
    );
}

export default SignUpPage;