// @flow

import * as React from 'react';
import { Component } from 'react-simplified';
import ReactDOM from 'react-dom';
import { NavLink, HashRouter, Route } from 'react-router-dom';
import { bikeService } from './services';
import { Card, List, Row, Column, NavBar, Button, Form } from './widgets';

import createHashHistory from 'history/createHashHistory';
const history = createHashHistory(); // Use history.push(...) to programmatically change path, for instance after successfully saving a student

class Menu extends Component {
  render() {
    return (
      <NavBar brand="AS Sykkelutleie">
        <NavBar.Link to="/bikes">Sykler</NavBar.Link>
      </NavBar>
    );
  }
}

class Home extends Component {
  render() {
    return <Card title="Welcome">Welcome to WhiteBoard</Card>;
  }
}

class BikeList extends Component {
  bikes = [];

  render() {
    return (
      <Card title="Sykler">
        <List>
          {this.bikes.map(bike => (
            <List.Item key={bike.serienr} to={'/bikes/' + bike.serienr}>
              {bike.modellnavn}
            </List.Item>
          ))}
        </List>
      </Card>
    );
  }

  mounted() {
    bikeService.getBikes(bikes => {
      this.bikes = bikes;
    });
  }
}

// class BikeDetails extends Component<{ match: { params: { id: number } } }> {
//   bike = new Student();
//
//   render() {
//     return (
//       <div>
//         <Card title="Student details">
//           <Row>
//             <Column width={2}>Name:</Column>
//             <Column>{this.student.name}</Column>
//           </Row>
//           <Row>
//             <Column width={2}>Email:</Column>
//             <Column>{this.student.email}</Column>
//           </Row>
//         </Card>
//         <Button.Light onClick={this.edit}>Edit</Button.Light>
//       </div>
//     );
//   }
//
//   mounted() {
//     studentService.getStudent(this.props.match.params.id, student => {
//       this.student = student;
//     });
//   }
//
//   edit() {
//     history.push('/students/' + this.student.id + '/edit');
//   }
// }
//
// class StudentEdit extends Component<{ match: { params: { id: number } } }> {
//   student = new Student();
//
//   render() {
//     return (
//       <div>
//         <Card title="Edit student">
//           <Form.Label>Name:</Form.Label>
//           <Form.Input type="text" value={this.student.name} onChange={e => (this.student.name = e.target.value)} />
//           <Form.Label>Email:</Form.Label>
//           <Form.Input type="text" value={this.student.email} onChange={e => (this.student.email = e.target.value)} />
//         </Card>
//         <Row>
//           <Column>
//             <Button.Success onClick={this.save}>Save</Button.Success>
//           </Column>
//           <Column right>
//             <Button.Light onClick={this.cancel}>Cancel</Button.Light>
//           </Column>
//         </Row>
//       </div>
//     );
//   }
//
//   mounted() {
//     studentService.getStudent(this.props.match.params.id, student => {
//       this.student = student;
//     });
//   }
//
//   save() {
//     studentService.updateStudent(this.student, () => {
//       history.push('/students/' + this.props.match.params.id);
//     });
//   }
//
//   cancel() {
//     history.push('/students/' + this.props.match.params.id);
//   }
// }

let root = document.getElementById('root');
if (root)
  ReactDOM.render(
    <div>
      <HashRouter>
        <div>
          <Menu />
          <Route exact path="/" component={Home} />
          <Route exact path="/bikes" component={BikeList} />
        </div>
      </HashRouter>
    </div>,
    root
  );
