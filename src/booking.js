import * as React from 'react';
import { Component } from 'react-simplified';
import ReactDOM from 'react-dom';
import { NavLink, HashRouter, Route } from 'react-router-dom';
import { Booking, bookingService } from './services';
import { Card, List, Row, Column, NavBar, Button, Form } from './widgets';

import createHashHistory from 'history/createHashHistory';
const history = createHashHistory();

export class BookingList extends Component {
  bookings = [];

  render() {
    return (
      <div>
        <DashboardNav />
        <div>
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
              <Col sm={10}>
                <Tab.Content>
                  <Table>
                    <thead>
                      <tr>
                        <th>Fornavn</th>
                        <th>etternavn</th>
                        <th>Hente sted</th>
                        <th>Levere sted</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.bookings.map(booking => (
                        <tr key={booking.fornavn}>
                          <td>{booking.etternavn}</td>
                          <td>{booking.hente_sted}</td>
                          <td>{bike.lev_sted}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Tab.Content>
              </Col>
              <OversiktNav />
            </Row>
          </Tab.Container>
        </div>
      </div>
    );
  }
  mounted() {
    bookingService.getBookings(bookings => {
      this.bookings = bookings;
    });
  }
}

// export class BookingDetails extends Component<{ match: { params: { booking_id: number } } }> {
//   booking = new Booking();
//
//   render() {
//     return (
//       <div>
//         <Card title="Bookinginfo">
//           <Row>
//             <Column width={2}>Fornavn:</Column>
//             <Column>{this.booking.fornavn}</Column>
//           </Row>
//           <Row>
//             <Column width={2}>Etternavn:</Column>
//             <Column>{this.booking.etternavn}</Column>
//           </Row>
//           <Row>
//             <Column width={2}>Telefon:</Column>
//             <Column>{this.booking.tlf}</Column>
//           </Row>
//
//           <Row>
//             <Column width={2}>Hentes sted:</Column>
//             <Column>{this.booking.stednavn}</Column>
//           </Row>
//           <Row>
//             <Column width={2}>Leveres sted:</Column>
//             <Column>{this.booking.stednavn}</Column>
//           </Row>
//         </Card>
//         <Button.Light onClick={this.edit}>Edit</Button.Light>
//       </div>
//     );
//   }
//   mounted() {
//     bookingService.getBooking(this.props.match.params.booking_id, booking => {
//       this.booking = booking;
//     });
//   }
// }
