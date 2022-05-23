import React from "react";

function Navigation({ onRouteChange, isSignedIn }) {
    if (isSignedIn) {
        return (
            <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <p onClick={() => onRouteChange('signout')} className="f3 b link dim black underline pr3 pointer">
                    Sign Out
                </p>
            </nav>
        )
    } else {
        return (
            <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <p onClick={() => onRouteChange('signin')} className="f3 b link dim black underline pr3 pointer">
                    Sign In
                </p>
                <p onClick={() => onRouteChange('register')} className="f3 b link dim black underline pr3 pointer">
                    Register
                </p>
            </nav>
        )
    }


}

export default Navigation;