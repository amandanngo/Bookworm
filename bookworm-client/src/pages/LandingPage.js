import React from 'react';

function LandingPage() {
    const handleLogin = () => {
        console.log("Logging in...");
    };

    const handleCreateAccount = () => {
        console.log("Navigating to sign-up page...");
    };

    return (
        <div>
            <div>
                <div>
                    <label htmlFor="username">Username: </label>
                    <input type="text" id="username" />
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input type="password" id="password" />
                </div>
                <button onClick={handleLogin}>Login</button>
            </div>
            <div>
                <button onClick={handleCreateAccount}>Sign Up</button>
            </div>
        </div>
    );
}

export default LandingPage;