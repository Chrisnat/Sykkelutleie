import { connection } from './mysql_connection';

//Klasser og metoder for Sykler

export class Bike {}

class BikeService {
  getBikes(success: (Bike[]) => mixed) {
    connection.query('select * from Sykkel', (error: ?Error, results: Bike[]) => {
      if (error) return console.error(error);

      success(results);
    });
  }

  getBike(modell_id, success) {
    connection.query('select * from Sykkelinformasjon', [modell_id], (error, results) => {
      if (error) return console.error(error);

      success(results[0]);
    });
  }
}

//Klasser og metoder for kundelister

export class Customer {}
class CustomerService {
  getCustomers(success: (Customer[]) => mixed) {
    connection.query('select * from Kunde', (error: ?Error, results: Customer[]) => {
      if (error) return console.error(error);

      success(results);
    });
  }

  getCustomer(kunde_id, success) {
    connection.query('select * from Kunde where kunde_id=?', [kunde_id], (error, results) => {
      if (error) return console.error(error);

      success(results[0]);
    });
  }
}

//Klasser og metoder for utstyr

export class Eqpt {}

class EqptService {
  getEqpts(success: (Eqpt[]) => mixed) {
    connection.query('select * from Utstyr', (error: ?Error, results: Eqpt[]) => {
      if (error) return console.error(error);

      success(results);
    });
  }

  getEqpt(utstyr_id, success) {
    connection.query('select * from Utstyr where utstyr_id=?', [utstyr_id], (error, results) => {
      if (error) return console.error(error);

      success(results[0]);
    });
  }
}

//sted
export class Town {}

class TownService {
  getTowns(success: (Town[]) => mixed) {
    connection.query('select * from Sted', (error: ?Error, results: Town[]) => {
      if (error) return console.error(error);

      success(results);
    });
  }

  getTown(omraade_id, success) {
    connection.query(
      'select stednavn, navn from Sted, Omraade where Sted.omraade_id = Omraade.omraade_id',
      [omraade_id],
      (error, results) => {
        if (error) return console.error(error);

        success(results[0]);
      }
    );
  }
}

//bookinglister

export class Booking {}

class BookingService {
  getBookings(success: (Booking[]) => mixed) {
    connection.query('select * from Booking', (error: ?Error, results: Booking[]) => {
      if (error) return console.error(error);

      success(results);
    });
  }

  getBooking(booking_id, success) {
    connection.query('select * from Bookinginfo', [booking_id], (error, results) => {
      if (error) return console.error(error);

      success(results[0]);
    });
  }
}

export let bikeService = new BikeService();
export let customerService = new CustomerService();
export let eqptService = new EqptService();
export let townService = new TownService();
export let bookingService = new BookingService();
