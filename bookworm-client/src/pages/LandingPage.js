import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../contexts/auth.context';
import { Link } from 'react-router-dom';

import logo from '../logo.png';


function LandingPage() {
    const { storeToken, authenticateUser } = useContext(AuthContext)

    const navigate = useNavigate()
  
    const [state, setState] = useState({
      username: '',
      password: ''
    });
  
    const updateState = event => setState({
      ...state,
      [event.target.name]: event.target.value
    });

    const handleSubmit = event => {
        event.preventDefault();

    
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/auth/login`, state)
          .then(res => {
            console.log(res.data);
            storeToken(res.data.authToken);
            authenticateUser();
            navigate('/home');
          })
          .catch(err => console.log(err))
    
    }

    return (
        <div id = "landing">
            <div className="header">
                <img src={logo} alt="Website Logo" /> {/* Website logo */}
                <h1>Bookworm</h1> {/* Website title */}
            </div>
            <div class="centered-page">
                <h1>Log In</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="username">Username: </label>
                        <input 
                            type="text" 
                            placeholder="Username"
                            name="username" 
                            value={state.username}
                            onChange={updateState}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password: </label>
                        <input 
                            type="password" 
                            placeholder="Password"
                            name="password" 
                            value={state.password}
                            onChange={updateState}
                        />
                    </div>
                    <button>
                        Log In
                    </button>
                </form>
                <div>
                    <Link to="/signup">Create Account</Link>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;