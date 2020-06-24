/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";

class CardsFooter extends React.Component {
  render() {
    return (
      <>
        <footer className="footer has-cards">
          <Container>
            <Row className="row-grid align-items-center my-md">
              <Col lg="6">
                <h3 className="text-primary font-weight-light mb-2">
                  Obrigado!
                </h3>
                {/* <h4 className="mb-0 font-weight-light">
                  Let's get in touch on any of these platforms.
                </h4> */}
              </Col>
              <Col className="text-lg-center btn-wrapper" lg="6">
                <a href="http://www.maceio.al.gov.br/">
                  <img
                    alt="..."
                    style={{height: 80, width:160}}
                    src={require("assets/img/prefeitura.png")}
                  />
                </a>
              </Col>
            </Row>
            <hr />
            <Row className="align-items-center justify-content-md-between">
              <Col md="6">
                <div className="copyright">
                  © {new Date().getFullYear()}{" "}
                  <a
                    href="http://www.smttmaceio.com.br/"
                    target="_blank"
                  >
                    SMTT
                  </a>
                  .
                </div>
              </Col>
              <Col md="6">
                <Nav className="nav-footer justify-content-end">
                  <NavItem>
                    <NavLink
                      href="http://www.smttmaceio.com.br/"
                      target="_blank"
                    >
                      SMTT
                    </NavLink>
                  </NavItem>
                  {/* <NavItem>
                    <NavLink
                      href="https://www.creative-tim.com/presentation?ref=adsr-footer"
                      target="_blank"
                    >
                      About Us
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="http://blog.creative-tim.com?ref=adsr-footer"
                      target="_blank"
                    >
                      Blog
                    </NavLink>
                  </NavItem> */}
                </Nav>
              </Col>
            </Row>
          </Container>
        </footer>
      </>
    );
  }
}

export default CardsFooter;
