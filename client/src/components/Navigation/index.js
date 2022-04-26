// import NavLink from './NavLink';
import React,{useState} from 'react';
import { Link } from "react-router-dom";
import {Navbar, Modal,Nav,Button,Tab,Tabs} from 'react-bootstrap';
import {Login,Register,Checkout} from '../'
import { useStoreContext } from "../../utils/GlobalState";
import './nav.css';

function Navigation() {
  const loggedIn = true;
  const [state, dispatch] = useStoreContext();
  // const navigationLinks = ['Charity','Products','Profile','Checkout','Logout']
  const [show, setShow] = useState(false);
  const [key, setKey] = useState('login');
  const [showCart, setShowCart] = useState(false);

  const handleCartClose = () => setShowCart(false);
  const handleCartShow = () => setShowCart(true);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setKey('login')
    setShow(true)
  };

  return (
    <>
    <Navbar className="navigation p-4 d-flex justify-content-between" bg="secondary" variant="dark" expand="lg">
        <div>

          <Navbar.Brand className="brandName display-1" href="#home"as={Link} to='/'>Charity</Navbar.Brand>
        </div>
        <div>
          <Navbar.Toggle aria-controls="navbar" />
          <Navbar.Collapse id="navbar">
            <Nav className="navRight">
              {/* <Nav className="navLink fs-3" as={Link} to='/'>Home</Nav> */}
              <Nav className="navLink fs-3" as={Link} to='/Product'>Raffles</Nav>
              <Nav className="navLink fs-3" as={Link} to='/Profile'>My Profile</Nav>
              <Nav onClick={handleCartShow} className="navLink fs-3 navCheckout" >Cart<span className="cartCount">{state.cart.length?state.cart.length:<></>}</span></Nav>
              {loggedIn?
              <Nav className="navLink fs-3" as={Link} to='#'> Logout</Nav>
              :
              <Nav onClick={handleShow} className="navLink fs-3" as={Link} to='#'> Login</Nav>
              }
            </Nav>
          </Navbar.Collapse>
          </div>
          </Navbar>

        <Modal show={show} onHide={handleClose} size="lg">
          <Modal.Header closeButton >
            CHARITY
          </Modal.Header>
          <Modal.Body>

          {/* <Tab.Container> */}

          <Tabs
              id="login-tab"
              activeKey={key}
              onSelect={(k) => setKey(k)}
              className="mb-3 d-flex"
            > 
            {/* <Tab.Content> */}

              <Tab.Pane eventKey="login" title="Login">
                <Login handleModalClose={()=>setShow(false)} />
              </Tab.Pane>
              <Tab.Pane eventKey="Register" title="Register">
                <Register handleModalClose={()=>setShow(false)} />
              </Tab.Pane>
            {/* </Tab.Content> */}
            
            </Tabs>
          {/* </Tab.Container> */}
          </Modal.Body>
            {/* <Modal.Title>Login</Modal.Title>
          <Login handleModalClose={()=>setShow(false)} /> */}
        </Modal>

        <Modal show={showCart} onHide={handleCartClose} size="lg">
          <Modal.Header closeButton >
            CHARITY Cart
          </Modal.Header>
          <Modal.Body>
            <Checkout handleModalClose={()=>setShowCart(false)}/>
          
          </Modal.Body>
            
        </Modal>
        
    </>
    





//     <div className="navContainer">

//     <div className="navName">
//             Charity
//     </div>
//     <div className="navLinkContainer">  

//             <div className={`navLink`} >
//                 <Link className={`Link`} to='/'>
//                     Charity
//                 </Link>
//             </div>
//             <div className={`navLink`} >
//                 <Link className={`Link`} to='/Products'>
//                     Product
//                 </Link>
//             </div>
//             <div className={`navLink`} >
//                 <Link className={`Link`} to='/Profile'>
//                     Profile
//                 </Link>
//             </div>
//             <div className={`navLink`} >
//                 <div className={`Link`}>
//                   Logout

//                 </div>
                
//             </div>
//     </div>
// </div>
  );
}

export default Navigation;
