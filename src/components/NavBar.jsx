// import { Col, Row } from 'react-bootstrap';
import { Badge, Button, Container, Form, Nav, Navbar, Dropdown, Offcanvas, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

import '../assets/scss/style.scss';

// IMAGES & ICONS
const vbLogoNavBar = 'https://res.cloudinary.com/ferjen/image/upload/v1670441451/veggieBox/img/navbar/vb-logo-navbar_v3cux6.svg';

const NavBar = () => {
  return (
    <>
      {['lg'].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="m-0">
          <Container fluid className="navbar m-0 p-0">
            <Link to="/">
              <img className="navbar--logo" src={vbLogoNavBar} alt="VeggieBox logo" />
            </Link>
            {/* </Navbar.Brand> */}
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas id={`offcanvasNavbar-expand-${expand}`} aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`} placement="end">
              <Offcanvas.Header className="navbar--header__offcanvas" closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <img className="navbar--logo__offcanvas" src="https://res.cloudinary.com/ferjen/image/upload/v1670109429/veggieBox/img/logo/vb-logo_ds51mw.png" alt="VeggieBox logo" />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="d-flex align-items-center ps-5">
                <Nav className="d-flex ps-5 navbar-container__links">
                  <div className="navbar-leaves">
                    <img className="navbar-leaves__img" src="https://res.cloudinary.com/ferjen/image/upload/v1669927025/veggieBox/img/navbar/leavesString_cdyiun.png" alt="Decoración de guirnalda de hojas verdes" />
                  </div>
                  <Nav.Link className="navbar--link ps-5 pe-5" href="#elegi">
                    Elegi
                  </Nav.Link>
                  <Nav.Link className="navbar--link pe-5" href="#planes">
                    Planes
                  </Nav.Link>
                  <Nav.Link className="navbar--link pe-5" href="#faq">
                    Faq
                  </Nav.Link>
                </Nav>
                <Nav className="justify-content-end flex-grow-1 pe-5">
                  <Dropdown align="end">
                    <Dropdown.Toggle className="navbar--icon bg-transparent p-0 me-5">
                      <img className="navbar--icon " src="https://res.cloudinary.com/ferjen/image/upload/v1670119538/veggieBox/img/icons/vb-user-tag-icon_ysjx1v.svg" alt="User Icon" />
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="navbar--dropdown text-center">
                      <Dropdown.Header className="navbar--dropdown__header">INGRESA A TU CUENTA</Dropdown.Header>
                      <Dropdown.Divider className="navbar--dropdown__divider" />
                      <Form>
                        <Form.Group controlId="formEmail">
                          <Form.Label className="mt-2">TU EMAIL</Form.Label>
                          <Form.Control className="navbar--control" type="email" placeholder="ejemplo@email.com" />
                        </Form.Group>
                        <Form.Group controlId="formPassword">
                          <Form.Label>TU CONTRASEÑA</Form.Label>
                          <Form.Control className="navbar--control" type="password" placeholder="contraseña..." />
                        </Form.Group>
                        <Button className="btn-navbar justify-content-end mb-3" variant="primary" type="submit">
                          Ingresar
                        </Button>
                      </Form>
                      <ListGroup>
                        <ListGroup.Item>¿Olvidaste tu contraseña?</ListGroup.Item>
                        <ListGroup.Item>¿Todavía no tenes cuenta? Creala </ListGroup.Item>
                      </ListGroup>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown align="end">
                    <Dropdown.Toggle className="navbar--icon bg-transparent shadow-0 border border-0 p-0 me-5">
                      <img className="navbar--icon" src="https://res.cloudinary.com/ferjen/image/upload/v1670153544/veggieBox/img/icons/vb-favourites-tag-icon_b2dyfk.svg" alt="Favourites Icon" />
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="navbar--dropdown">
                      <Dropdown.Header className="navbar--dropdown__header">TUS FAVORITOS</Dropdown.Header>
                      <Dropdown.Divider className="navbar--dropdown__divider" />
                      <Dropdown.Item eventKey="1">FAVORITO 1</Dropdown.Item>
                      <Dropdown.Item eventKey="2">FAVORITO 2</Dropdown.Item>
                      <Dropdown.Item eventKey="3">FAVORITO 3</Dropdown.Item>
                      <div className="d-grid gap-2">
                        <Button className="fw-bold" variant="primary" size="lg">
                          VER TU CARRITO
                        </Button>
                      </div>
                    </Dropdown.Menu>
                  </Dropdown>

                  <Dropdown align="end">
                    <Dropdown.Toggle className="navbar--icon d-flex flex-start bg-transparent shadow-0 border border-0 p-0 me-5">
                      <img className="navbar--icon me-5 shadow-none border-none" src="https://res.cloudinary.com/ferjen/image/upload/v1670119538/veggieBox/img/icons/vb-cart-tag-icon_v9n7of.svg" alt="Icono de carrito de compras" />
                      <CartWidget />
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="navbar--dropdown">
                      <Dropdown.Header className="navbar--dropdown__header">TUS CARRITO</Dropdown.Header>
                      <Dropdown.Divider className="navbar--dropdown__divider" />
                      <ListGroup variant="flush">
                        <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                          <div className="ms-2 me-auto my-2 d-flex">
                            <img className="navbar--cart__item" src="https://res.cloudinary.com/ferjen/image/upload/v1670187571/veggieBox/img/dishes/100x90/quesadilla_porotos_negros_pimientos_ha3wdz.jpg" alt="A editar" />
                            <div className="d-flex flex-column">
                              <div className="fw-bold">Nombre del plato</div>
                              <div className="fw-bold">tags y otro dato</div>
                              <div>$400</div>
                            </div>
                          </div>
                          <Badge bg="primary" pill>
                            3
                          </Badge>
                        </ListGroup.Item>
                        <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                          <div className="ms-2 me-auto my-2 d-flex">
                            <img className="navbar--cart__item" src="https://res.cloudinary.com/ferjen/image/upload/v1670187572/veggieBox/img/dishes/100x90/wraps_veganos_de_lechuga_y_garbanzos_al_curry_b37bqp.jpg" alt="A editar" />
                            <div className="d-flex flex-column">
                              <div className="fw-bold">Nombre del plato</div>
                              <div>tags y otro dato</div>
                              <div>$400</div>
                            </div>
                          </div>
                          <Badge bg="primary" pill>
                            3
                          </Badge>
                        </ListGroup.Item>
                        <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                          <div className="ms-2 me-auto my-2 d-flex">
                            <img className="navbar--cart__item" src="https://res.cloudinary.com/ferjen/image/upload/v1670187571/veggieBox/img/dishes/100x90/curry_vegano_de_coco_y_garbanzos_xqpp4w.jpg" alt="A editar" />
                            <div className="d-flex flex-column">
                              <div className="fw-bold">Nombre del plato</div>
                              <div className="fw-bold">tags y otro dato</div>
                              <div>$400</div>
                            </div>
                          </div>
                          <Badge bg="primary" pill>
                            3
                          </Badge>
                        </ListGroup.Item>
                      </ListGroup>
                      <div className="d-grid gap-2">
                        <Button className="fw-bold" variant="primary" size="lg">
                          VER TU CARRITO
                        </Button>
                      </div>
                    </Dropdown.Menu>
                  </Dropdown>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default NavBar;
