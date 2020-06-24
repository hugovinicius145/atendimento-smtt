import React from "react";
import classnames from "classnames";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Label,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";

class Landing extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
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
            {/* 1st Hero Variation */}
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

                      {/* Nome */}
                      <FormGroup
                        className={classnames("mt-5", {
                          focused: this.state.nameFocused
                        })}
                      >
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-user-run" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Nome completo *"
                            type="text"
                            onFocus={e => this.setState({ nameFocused: true })}
                            onBlur={e => this.setState({ nameFocused: false })}
                          />
                        </InputGroup>
                      </FormGroup>

                      {/* Cpf */}
                      <FormGroup
                        className={classnames({
                          focused: this.state.cpfFocused
                        })}
                      >
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="fa fa-id-card" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="CPF *"
                            type="text"
                            onFocus={e => this.setState({ cpfFocused: true })}
                            onBlur={e => this.setState({ cpfFocused: false })}
                          />
                        </InputGroup>
                      </FormGroup>

                      {/* Telefone */}
                      <FormGroup
                        className={classnames({
                          focused: this.state.phoneFocused
                        })}
                      >
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              {/* <i className="ni ni-email-83" /> */}
                              <i className="fa fa-phone" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Telefone *"
                            type="text"
                            onFocus={e => this.setState({ phoneFocused: true })}
                            onBlur={e => this.setState({ phoneFocused: false })}
                          />
                        </InputGroup>
                      </FormGroup>

                      {/* Email */}
                      <FormGroup
                        className={classnames({
                          focused: this.state.emailFocused
                        })}
                      >
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-email-83" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Email"
                            type="email"
                            onFocus={e => this.setState({ emailFocused: true })}
                            onBlur={e => this.setState({ emailFocused: false })}
                          />
                        </InputGroup>
                      </FormGroup>

                      {/* Selecionar Serviço */}
                      <FormGroup>
                        <Label for="exampleSelect">Selecione o serviço que deseja ser atendido</Label>
                        <Input type="select" name="select" id="exampleSelect">
                          <option>Defesa Prévia</option>
                          <option>Táxi</option>
                          <option>Turismo</option>
                          <option>Protocolo Unificado</option>
                        </Input>
                      </FormGroup>


                      <FormGroup className="mb-4">
                        <Input
                          className="form-control-alternative"
                          cols="80"
                          name="name"
                          placeholder="Informações adcionais... *"
                          rows="4"
                          type="textarea"
                        />
                      </FormGroup>

                      <FormGroup className="mb-4">
                        <Input
                          placeholder="anexo"
                          type="file"
                        />
                      </FormGroup>
                      <div>
                        <Button
                          block
                          className="btn-round"
                          color="default"
                          size="lg"
                          type="button"
                        >
                          Agendar atendimento
                        </Button>
                      </div>
                      <br />
                      <p className="mt-0">
                        * Campos Obrigatórios.
                      </p>
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

export default Landing;
