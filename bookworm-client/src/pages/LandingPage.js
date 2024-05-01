import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../contexts/auth.context';
import { Link } from 'react-router-dom';


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
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username: </label>
                    <input 
                        type="text" 
                        name="username" 
                        value={state.username}
                        onChange={updateState}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input 
                        type="password" 
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
    );
}

export default LandingPage;