import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import logo from '../logo.png';

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
        <div id = "signup">
            <div className="header">
                <img src={logo} alt="Website Logo" /> {/* Website logo */}
                <h1>Bookworm</h1> {/* Website title */}
            </div>
            <div class="centered-page">
                <h1>Sign Up</h1>
                <form>
                    <div>
                    <label htmlFor="name"></label>
                    <input
                        type="text"
                        placeholder="Name"
                        name="name"
                        value={state.name}
                        onChange={updateState}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="username"></label>
                    <input
                        type="text"
                        placeholder="Username"
                        name="username"
                        value={state.username}
                        onChange={updateState}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password"></label>
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={state.password}
                        onChange={updateState}
                        required
                    />
                </div>
                <button onClick={handleSubmit}>Sign Up</button>  
                </form>
            </div>
           
        </div>
    );
}

export default SignUpPage;