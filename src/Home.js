import React from 'react'
import './App.css';
import Login from './Login'
import Default from './Default'


function Home() {
    
    
        return  (
            <div className="pab">
                <Default />
                <Login />
            </div>
        );
}

export default Home;


// import React from 'react'

// cont Home =()=> {
//     const [ loggedIn, setLoggedIn] = useState(false)

//     const handleLoggedInTab = () =>{
//     setLoggedIn(true)
// }

//     return (
//         <div>
//             <nav>
//                 <a>home</a>
//                 {loggedIn &&
//                 <a>logout</a> 
//                 }
//             </nav>
//             <button onClick={handleLoggedInTab}></button>
//         </div>
//     )
// }

// export default Home



