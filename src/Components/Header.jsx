import {Link,NavLink} from 'react-router-dom';

export default function Header() {
    return(
    <>
    {/* <div className="Navbar">
        <div> Logo </div>
        <div>
          <nav>
            <ul>
              <li> <NavLink to ="/">HOME </NavLink>  </li>
              <li> <NavLink to ="/">CAMPUS </NavLink>  </li>
              <li> <NavLink to ="/">PLACEMENT </NavLink>  </li>
              <li> <NavLink to ="/">CAREERS </NavLink>  </li>
              <li> <NavLink to ="/">LOGIN </NavLink>  </li>

            </ul>
          </nav>
        </div>
    </div> */}

    <nav className="navbar navbar-expand-sm bg-primary ">
      <div className="container-fluid">
      
        <div className="navbarlogo"> 
                <div className="row">
                   <img src="./college logo.png" className="Colllogo" alt="Logo"/>
                </div>
                  <div className="column">
                   <h3 className='collname'>ABC College of Engineering</h3>
                  </div>
                 </div>
          

              <div className = "menu">
                <ul className="navbar-nav">

                <li> <NavLink to ="/home">HOME </NavLink>  </li>
              <li> <NavLink to ="/campus">CAMPUS </NavLink>  </li>
              <li> <NavLink to ="/placement">PLACEMENT </NavLink>  </li>
              <li> <NavLink to ="/careers">CAREERS </NavLink>  </li>
              <li> <NavLink to ="/login">LOGIN </NavLink>  </li>
             
          </ul>
      </div>
    </div>
  </nav>
 
    </>
);};


