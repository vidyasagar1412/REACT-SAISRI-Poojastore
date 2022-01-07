import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../actions/userActions'

const Header = () => {
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    console.log(userInfo)

    const dispatch = useDispatch()

    const logoutHandler = () => {
        console.log('logout')
        dispatch(logout())
    }
 
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">Sri Sai Pooja Stores</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/cart/:id"><i className="fas fa-shopping-cart"></i>&nbsp;Cart</Nav.Link>
                    {userInfo ? (
                        <div>
                        {/* <Nav.Link href="#">&nbsp;{userInfo.name}</Nav.Link> */}
                        <NavDropdown title={userInfo.name}id='username'>
                            <LinkContainer to='/profile'>
                                <NavDropdown.Item>Profile</NavDropdown.Item>
                            </LinkContainer>
                            <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                        </NavDropdown>
                        </div>
                    ) : (
                        <Nav.Link href="/login">Login</Nav.Link>
                    )}

                    {userInfo && userInfo.isAdmin && (
                        <NavDropdown title='Admin' id='adminmenu'>
                            <LinkContainer to='/admin/userlist'>
                                <NavDropdown.Item>Users</NavDropdown.Item>
                            </LinkContainer>

                            <LinkContainer to='/admin/productslist'>
                                <NavDropdown.Item>Products</NavDropdown.Item>
                            </LinkContainer>

                            <LinkContainer to='/admin/orderlist'>
                                <NavDropdown.Item>Orders</NavDropdown.Item>
                            </LinkContainer>

                        </NavDropdown>
                    )}   
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header
