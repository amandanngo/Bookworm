//import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../contexts/auth.context';

function Navbar(){
    const { isLoggedIn , logOutUser} = useContext(AuthContext);

    return(
        <nav>
            <img></img>
            {!isLoggedIn && (
               <div id='loggedout-nav'>
                 
                </div>
            )}
           
           {isLoggedIn && (
                <div id='loggedin-nav'>
                    <button onClick={logOutUser} >Logout</button>
                </div>
           )}

        </nav>
    )
}

export default Navbar;