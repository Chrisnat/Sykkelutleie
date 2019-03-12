import { connection } from './mysql_connection';

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

  getBike(serienr, success) {
    connection.query(
      'SELECT * FROM Sykkel JOIN Sykkelmodell ON Sykkel.modell_id = Sykkelmodell.modell_id',
      [serienr],
      (error, results) => {
        if (error) return console.error(error);

        success(results[0]);
      }
    );
  }
}

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

// updateBike(serienr, sted_id, modellnavn, modell_id, status, success) {
//   connection.query('update Sykkel set name=?, email=? where id=?', [name, email, id], (error, results) => {
//     if (error) return console.error(error);
//
//     success();
//   });
// }

// addBike(id, name, email, success) {
//   connection.query('insert into Bikes (name, email) values (?,?)', [name, email, id], (error, results) => {
//     if (error) return console.error(error);
//
//     success();
//   });
// }
// }
//
// //fag
//
// class SubjectService {
//   getSubjects(success) {
//     connection.query('select * from Subjects', (error, results) => {
//       if (error) return console.error(error);
//
//       success(results);
//     });
//   }
//
//   getSubject(id, success) {
//     connection.query('select * from Subjects where id=?', [id], (error, results) => {
//       if (error) return console.error(error);
//
//       success(results[0]);
//     });
//   }
//
//   updateSubject(id, name, code, success) {
//     connection.query('update Subjects set name=?, code=? where id=?', [name, code, id], (error, results) => {
//       if (error) return console.error(error);
//
//       success();
//     });
//   }
//   addSubject(id, name, code, success) {
//     connection.query('insert into Subjects (name, code) values (?,?)', [name, code, id], (error, results) => {
//       if (error) return console.error(error);
//
//       success();
//     });
//   }
// }
export let bikeService = new BikeService();
export let customerService = new CustomerService();
// export let subjectService = new SubjectService();
