// @flow

import * as React from 'react';
import { Component } from 'react-simplified';
import ReactDOM from 'react-dom';
import { NavLink, HashRouter, Route } from 'react-router-dom';
import { Town, townService } from './services';
import { Card, List, Row, Column, NavBar, Button, Form } from './widgets';

import createHashHistory from 'history/createHashHistory';
const history = createHashHistory();

export class TownList extends Component {
  towns = [];

  render() {
    return (
      <Card title="Utleiested">
        <List>
          {this.towns.map(town => (
            <List.Item key={town.sted_id} to={'/towns/' + town.sted_id}>
              {town.stednavn}
            </List.Item>
          ))}
        </List>
      </Card>
    );
  }

  mounted() {
    townService.getTowns(towns => {
      this.towns = towns;
    });
  }
}

export class TownDetails extends Component<{ match: { params: { omraade_id: number } } }> {
  town = new Town();

  render() {
    return (
      <div>
        <Card title="Stedinfo">
          <Row>
            <Column width={2}>Sted:</Column>
            <Column>{this.town.stednavn}</Column>
          </Row>
          <Row>
            <Column width={2}>Område:</Column>
            <Column>{this.town.navn}</Column>
          </Row>
        </Card>
        <Button.Light onClick={this.edit}>Edit</Button.Light>
      </div>
    );
  }
  mounted() {
    townService.getTown(this.props.match.params.omraade_id, town => {
      this.town = town;
    });
  }
}
