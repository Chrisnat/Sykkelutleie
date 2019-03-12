//@flow

import * as React from 'react';
import { Component } from 'react-simplified';
import ReactDOM from 'react-dom';
import { NavLink, HashRouter, Route } from 'react-router-dom';
import { Customer, customerService } from './services';
import { Card, List, Row, Column, NavBar, Button, Form } from './widgets';

import createHashHistory from 'history/createHashHistory';
const history = createHashHistory();

export class CustomerList extends Component {
  customers = [];

  render() {
    return (
      <Card title="Kunder">
        <List>
          {this.customers.map(customer => (
            <List.Item key={customer.kunde_id} to={'/customers/' + customer.kunde_id}>
              {customer.fornavn + customer.etternavn}
            </List.Item>
          ))}
        </List>
      </Card>
    );
  }

  mounted() {
    customerService.getCustomers(customers => {
      this.customers = customers;
    });
  }
}

export class CustomerDetails extends Component<{ match: { params: { kunde_id: number } } }> {
  customer = new Customer();

  render() {
    return (
      <div>
        <Card title="Kundeinfo">
          <Row>
            <Column width={2}>Fornavn:</Column>
            <Column>{this.customer.fornavn}</Column>
          </Row>
          <Row>
            <Column width={2}>Etternavn:</Column>
            <Column>{this.customer.etternavn}</Column>
          </Row>
          <Row>
            <Column width={2}>Adresse:</Column>
            <Column>{this.customer.adresse}</Column>
          </Row>
        </Card>
        <Button.Light onClick={this.edit}>Edit</Button.Light>
      </div>
    );
  }
  mounted() {
    customerService.getCustomer(this.props.match.params.kunde_id, customer => {
      this.customer = customer;
    });
  }
}
