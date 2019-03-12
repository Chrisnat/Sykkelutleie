import { connection } from './mysql_connection';

//Klasser og metoder for Sykler

export class Bike {
  serienr: number;
  modellnavn: string = '';
  type: string = '';
  sted_id: number;
}

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

export class Customer {
  kunde_id: number;
  fornavn: string = '';
  etternavn: string = '';
  adresse: number;
  postnr: number;
  epost: string = '';
  tlf: number;
}
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

export class Eqpt {
  utstyr_id: number;
  utstyr_type: string = '';
  utstyr_navn: string = '';
  pris: number;
}

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

export let bikeService = new BikeService();
export let customerService = new CustomerService();
export let eqptService = new EqptService();
// export let subjectService = new SubjectService();
