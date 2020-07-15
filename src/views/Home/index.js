import React from "react";
import classnames from "classnames";
import api from 'services/api';
import { cpfMask, contactNumberMask } from 'components/mask';
// reactstrap components
import {
  Button,
  FormGroup,
  Label,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
} from "reactstrap";

export default class Home extends React.Component {
  state = {
    categories: [],
    subcategories: [],
    categorieId: null,
    subcategorieId: null,
    name: '',
    cpf: '',
    contactNumber: '',
    email: '',
    date: new Date(),
    messageError: '',
  };

  async componentDidMount() {
    const response = await api.get(`categories`);
    this.setState({categories: response.data});
  }

  async addCategorie(categorieId) {
    if (categorieId === '0') {
      this.setState({subcategories: []});
    } else {
      const response = await api.get(`subcategories?idCategory=${categorieId}`);
      this.setState({subcategories: response.data || [], categorieId});
    }
  }

  handleContinue = () => {
    const { name, cpf, contactNumber, email, categorieId, subcategorieId} = this.state;
    const {handlePage} = this.props;

    if (name !== '' && cpf !== '' && contactNumber !== '' && categorieId && subcategorieId) {
      handlePage(false, {
        name,
        cpf,
        contactNumber,
        email,
        category: {
          id: categorieId,
        },
        subCategory: {
          id: subcategorieId,
        },
      });
    } else {
      this.setState({messageError: 'Verifique os campos'});
    }
  }

  render() {
    const {categories, name, cpf, email, contactNumber, subcategories, messageError} = this.state;
    return (
      <>
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
              value={name}
              maxLength={255}
              minLength={3}
              onChange={e => this.setState({name: e.target.value})}
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
              maxLength='14'
              value={cpf}
              onChange={e => this.setState({cpf: cpfMask(e.target.value)})}
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
              required={true}
              placeholder="Telefone *"
              type="text"
              value={contactNumber}
              maxLength={15}
              onChange={e => this.setState({contactNumber: contactNumberMask(e.target.value)})}
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
              value={email}
              onChange={(e) => this.setState({email: e.target.value})}
              onFocus={e => this.setState({ emailFocused: true })}
              onBlur={e => this.setState({ emailFocused: false })}
            />
          </InputGroup>
        </FormGroup>

        {/* Selecionar Serviço */}
        <FormGroup>
          <Label for="exampleSelect">Selecione o serviço que deseja ser atendido *</Label>
          <Input
            type="select"
            name="select"
            id="exampleSelect"
            onChange={(e) => this.addCategorie(e.target.value)}
          >
            <option value={0}>Escolha uma opção</option>
            {categories.map((categorie) => (
              <option
                key={categorie.id}
                value={categorie.id}
              >
                {categorie.name}
              </option>
            ))}
          </Input>
        </FormGroup>

        {/* Subcategories */}
        <FormGroup>
          <Label for="exampleSelect">Subcategoria *</Label>
          <Input
            type="select"
            name="select"
            id="selectSubcategories"
            onChange={e => this.setState({subcategorieId: e.target.value})}
          >
            <option value={0}>Selecione</option>
            {subcategories.map((subcategory) => (
              <option
                key={subcategory.id}
                value={subcategory.id}
              >
                {subcategory.name}
              </option>
            ))}
          </Input>
        </FormGroup>

        <div>
          <Button
            block
            className="btn-round"
            color="default"
            size="lg"
            type="button"
            onClick={() => this.handleContinue()}
          >
            Próximo
          </Button>
        </div>
        <p>
          {messageError}
        </p>
        <br />
      </>
    );
  }
}
