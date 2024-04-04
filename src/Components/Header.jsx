import React from 'react';

function Header() {
    return<>
    <nav className="navbar navbar-expand-lg bg-primary ">
      <div className="container-fluid">
        <div className = "menu">
            
            <ul className="navbar-nav">

              <div className="navbarlogo"> 
                <div className="row">
                   <img src="./college logo.png" alt="Logo"/>
                </div>
                  <div class="column">
                   <p>ABC College of Engineering</p>
                  </div>
              </div>
             

                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">HOME</a>
                </li>
            
                <li className="nav-item">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  CAMPUS
                  </a> </li>
                
                <li className="nav-item">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  PLACEMENT 
                  </a></li>
                

                <li className="nav-item">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      CAREERS
                    </a></li>
                    
              <li className="nav-item">
                <a className="nav-link" href="#">LOGIN</a>
              </li>
             
          </ul>
      </div>
    </div>
  </nav>
 
    </>
}

export default Header;

