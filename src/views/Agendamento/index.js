import React, {Component} from "react";
import {Table} from 'react-bootstrap';
import api from 'services/api';
import Calendar from 'react-calendar';
import 'components/Calendar/react-calendar.css';
// import api from '../services/api';
import { Button } from "reactstrap";

export default class Agendamento extends Component {
  state = {
    date: new Date(),
    hour: '',
    availableTime: [],

  };

  componentDidMount() {
    this.getSchedulingDay();
  }

  componentDidUpdate(prevProps, PrevState) {
    const {date} = this.state;
    if (PrevState.date !== date) {
      this.getSchedulingDay();
    }
  }

  async getSchedulingDay() {
    const {date} = this.state;
    const {agendamento} = this.props;
    const response = await api.get(
      `scheduling/consultdate?date=${date.toISOString().slice(0,10)}&idCategory=${agendamento.category.id}`
    );
    this.setState({availableTime: response.data || []})
  }

  handleGoback = () => {
    const {handlePage} = this.props;
    handlePage(true, {});
  }

  handleContinue = () => {
    const {date, hour} = this.state;
    const {agendamento} = this.props;
    const agendamentoAux = {...agendamento, date: date.toISOString().slice(0,10), hour};
  }

  render() {
    const {date, availableTime} = this.state;
    return (
      <>
        <Calendar
          onChange={(value) => this.setState({date: new Date(value)})}
          value={date}
          calendarType="ISO 8601"
          minDate={new Date()}
        />
        < br />
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Horário</th>
              <th>Vagas Disponíveis</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {availableTime.map((item) => (
              <tr>
                <td>{item.hour}</td>
                <td>{item.availableVacancies}</td>
                <td>Escolher</td>
            </tr>
            ))}
          </tbody>
        </Table>

        <div>
          <Button
            block
            className="btn-round"
            color="default"
            size="lg"
            type="button"
            onClick={() => this.handleContinue()}
          >
            Agendar
          </Button>
        </div>

        {/* Botao voltar */}
        <div>
          <Button
            block
            className="btn-round"
            size="lg"
            type="button"
            style={{backgroundColor: '#ff0000', color: '#fff', borderColor: '#ff0000', marginTop: 10}}
            onClick={() => this.handleGoback()}
          >
            Voltar
          </Button>
        </div>
      </>
    );
  }
}
