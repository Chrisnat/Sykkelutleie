//@flow

import * as React from 'react';
import { Component } from 'react-simplified';
import ReactDOM from 'react-dom';
import { NavLink, HashRouter, Route } from 'react-router-dom';
import { Eqpt, eqptService } from './services';
import { Card, List, Row, Column, NavBar, Button, Form } from './widgets';

import createHashHistory from 'history/createHashHistory';
const history = createHashHistory();

export class EqptList extends Component {
  eqpts = [];

  render() {
    return (
      <Card title="Utstyr">
        <List>
          {this.eqpts.map(eqpt => (
            <List.Item key={eqpt.utstyr_id} to={'/eqpts/' + eqpt.utstyr_id}>
              {eqpt.utstyr_navn + eqpt.utstyr_type}
            </List.Item>
          ))}
        </List>
      </Card>
    );
  }

  mounted() {
    eqptService.getEqpts(eqpts => {
      this.eqpts = eqpts;
    });
  }
}

export class EqptDetails extends Component<{ match: { params: { utstyr_id: number } } }> {
  eqpt = new Eqpt();

  render() {
    return (
      <div>
        <Card title="Utstyrinfo">
          <Row>
            <Column width={2}>Type:</Column>
            <Column>{this.eqpt.utstyr_type}</Column>
          </Row>
          <Row>
            <Column width={2}>Navn:</Column>
            <Column>{this.eqpt.utstyr_navn}</Column>
          </Row>
          <Row>
            <Column width={2}>Pris:</Column>
            <Column>{this.eqpt.pris}</Column>
          </Row>
        </Card>
        <Button.Light onClick={this.edit}>Edit</Button.Light>
      </div>
    );
  }
  mounted() {
    eqptService.getEqpt(this.props.match.params.utstyr_id, eqpt => {
      this.eqpt = eqpt;
    });
  }
}
