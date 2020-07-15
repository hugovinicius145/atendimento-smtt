import React from "react";
// import classnames from "classnames";
import Home from './Home';
import Agendamento from './Agendamento';
// reactstrap components
import {Card, CardBody, Container, Row, Col} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";

export default class Landing extends React.Component {

  state = {
    pageInitial: true,
    agendamento: {},
  };

  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  Agendamento
  handlePage = (pageInitial, agendamento) => {
    this.setState({pageInitial, agendamento});
  }

  render() {
    const {pageInitial, agendamento} = this.state;
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-4 shape-default">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="6">
                      <h1 className="display-3 text-white">
                        Agende seu atendimento presencial{" "}
                        {/* <span>completed with examples</span> */}
                      </h1>
                      <p className="lead text-white">
                        Está precisando de atendimento para serviços da SMTT
                        como Defesa Prévia, Taxi, Turismo e Protocolo Unificado,
                        preencha o formulário abaixo que entraremos em contato como você.
                      </p>
                    </Col>
                  </Row>
                </div>
              </Container>
              {/* SVG separator */}
              <div className="separator separator-bottom separator-skew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
          </div>
          <br />
          <br />
          <br />
          <section className="section section-lg pt-lg-0 section-contact-us">
            <Container>
              <Row className="justify-content-center mt--300">
                <Col lg="8">
                  <Card className="bg-gradient-secondary shadow">
                    <CardBody className="p-lg-5">
                      <h4 className="mb-1">Atendimento Presencial</h4>
                      <p className="mt-0">
                        Informe seus dados.
                      </p>
                      <p className="mt-0">
                        * Campos Obrigatórios.
                      </p>
                      {pageInitial ?
                        (<Home handlePage={this.handlePage}/>)
                      :
                        (<Agendamento handlePage={this.handlePage} agendamento={agendamento}/>)
                      }
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
        <CardsFooter />
      </>
    );
  }
}
