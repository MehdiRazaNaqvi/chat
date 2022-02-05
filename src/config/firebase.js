




import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";



// const firebaseConfig = {
//   apiKey: "AIzaSyBFr1dQ3fqkI3hK5BvhzuKHB0D68dE2JNE",
//   authDomain: "todo-reac.firebaseapp.com",
//   databaseURL: "https://todo-reac-default-rtdb.firebaseio.com",
//   projectId: "todo-reac",
//   storageBucket: "todo-reac.appspot.com",
//   messagingSenderId: "409022064845",
//   appId: "1:409022064845:web:6deee3f0cfd0cda2c72184"
// };

const firebaseConfig = {
  apiKey: "AIzaSyA1iZsYYmS5QJqhh1RjgtJKDL5mBQjC7cM",
  authDomain: "chatfeb1.firebaseapp.com",
  projectId: "chatfeb1",
  storageBucket: "chatfeb1.appspot.com",
  messagingSenderId: "505029605418",
  appId: "1:505029605418:web:35415d1292376a9d58ab53"
};



const app = initializeApp(firebaseConfig);


const auth = getAuth(app);
const database = getDatabase(app)

export {
  auth,
  database
}