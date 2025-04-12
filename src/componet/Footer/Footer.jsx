import { Col, Container, ListGroup, ListGroupItem, Row } from "reactstrap";

import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="6" className="mb-4">
            <div className="logo">
         
              <div>
                <h1 className="text-white">Enes Halil</h1>
              </div>
            </div>
            <p className="footer_text  mt-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
              eum, quis, et itaque ipsam vel necessitatibus porro sit ex
              quisquam, eaque repudiandae. Laboriosam error nostrum a tenetur
              corrupti voluptatibus dignissimos.
            </p>
          </Col>
          <Col lg="3" md="3" className="mb-4">
            <div className="footer_quick-links">
              <h4 className="quick_links_title">Top Categories</h4>

              {/* عرض قائمه من العناصر باسلوب جميل */}
              <ListGroup>     {/*في css لست كروب تمثل ul */}
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Mobile Phones</Link>
                </ListGroupItem>      {/*في css لست كروب ايتم تمثل li */}

                <ListGroupItem className="ps-0 border-0 ">
                  <Link to="#">Modern sofa</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Arm Chair</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Smart Watches</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
 {/* عرض قائمه من العناصر باسلوب جميل */}
          <Col lg="2" md="3" className="mb-4">
            <div className="footer_quick-links">
              <h4 className="quick_links_title">Useful Links</h4>            
              <ListGroup>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/shop">Shop</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="/cart">Cart</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="/login"> Login </Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Privacy Policy</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg="3">
            <div className="footer_quick-links">
              <h4 className="quick_links_title"> Contact</h4>

              {/* عرض قائمه من العناصر باسلوب جميل */}
              <ListGroup className="footer-contact">
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span>
                    <i className="ri-map-pin-line"></i>
                  </span>
                  <p>3251, Idlib,Syria</p>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span>
                    <i className="ri-phone-line"></i>
                  </span>
                  <p>+90 539 648 97 45</p>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span>
                    <i className="ri-mail-line"></i>
                  </span>
                  <p> enes@gmail.com</p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg="12" className="text-center">
            <p className="footer_copyright"> &copy; Copyright {year}    {/*حقوق النشر  */}
developed by Enes Halil. All rights reserved</p>     
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
