import React from 'react';
import ReactDOM from 'react-dom/client';

const Header = () =>{
    return (
        <div className='header'>
            <div className='logo-container'>
                <img 
                className='logo'
                src="https://imgs.search.brave.com/RrOhvqioSFYMakDEmNj8hU0alqCyxxbWht-_vXsUURM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9sb2dv/LmNvbS9pbWFnZS1j/ZG4vaW1hZ2VzL2t0/czkyOHBkL3Byb2R1/Y3Rpb24vN2FiNWRl/ZjBhYjFkYWQyNmE5/MGJjMzVjYjdlZWQ5/ZTYyOGY3ZjIwMS00/MzB4NDMwLnBuZz93/PTEwODAmcT03Mg" alt='logo'
                />
            </div>

            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}

const AppLayout = () =>{
     return <div className = "app">
        <Header/>
     </div>    
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
