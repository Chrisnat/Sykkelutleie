import { connection } from './mysql_connection';

class BikeService {
  getBikes(success) {
    connection.query('select * from Sykkel', (error, results) => {
      if (error) return console.error(error);

      success(results);
    });
  }

  getBike(serienr, success) {
    connection.query('select * from Sykkel where serienr=?', [serienr], (error, results) => {
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
// export let subjectService = new SubjectService();
