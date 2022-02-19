

import React from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth, database } from "../../config/firebase";
import { signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { getDatabase, ref, set , onValue ,get , child  } from "firebase/database";




const fcreate = () => {

  var email = "mehdiraza2@yahoo.com"
  var password = "kuch bhi"

  createUserWithEmailAndPassword(auth, email, password)

    .then((userCredential) => {


      const user = userCredential.user;
      console.log("account bangya", user)

    })
    .catch((error) => {

      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("Error ==> ", errorCode)
    });


}



const flogin = () => {
  var email = "mehdiraza1@yahoo.com"
  var password = "kuch bhi"

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {

      const user = userCredential.user;
      console.log("hogya login mubarak", user);


    })

    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
    });
}



const set_data = (data) => {

  return (dispatch) => {
    console.log("idhr b arha hai");
    dispatch({ type: "setuser", payload: data })
  }
}



const google_login = (navigate) => {
  
  return (dispatch) => {
    

    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)

      .then((result) => {

        const user = result.user;

        var user_data = {
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
          uid: user.uid
        }

        console.log("google login hogya ==> ", user_data)

        writeUserData(user_data.uid, user_data.name, user_data.email, user_data.photo);
        dispatch({ type: "setuser", payload: user_data })
        navigate("/ch");
       



        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        

      })

      .catch((error) => {

        const errorCode = error.code;
        const errorMessage = error.message;


        const email = error.email;


        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log("google login nae hua ", errorCode)
      });

  }
}





const facebook = (navigate) => {



  const provider = new FacebookAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {

      const user = result.user;




      const credential = FacebookAuthProvider.credentialFromResult(result);
      const accessToken = credential.accessToken;

      navigate("/chat")
      console.log("hogya facebook login =>", user);




    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = FacebookAuthProvider.credentialFromError(error);
      console.log("nae hoska facebook ==> ", errorCode)


    });
}






const writeUserData = (userId, name, email, imageUrl) => {

    const db = getDatabase();
    

    set(ref(db, 'users/' + userId), {
      username: name,
      email: email,
      profile_picture : imageUrl,
      uid : userId
    });
  }
  


const readfirebase = () => {
  
  return(dispatch) => {
    console.log("oakakakakakakkak")
    

// const dbRef = ref(getDatabase());


// get(child(dbRef, `users`)).then((snapshot) => {

//   if (snapshot.exists()) {

//     console.log(snapshot.val())
//     let users = [];
//     users.push (snapshot.val())
    



    


//   } else {
//     console.log("No data available");
//   }
// }).catch((error) => {
//   console.error(error);
// });


const db = getDatabase();
const starCountRef = ref(db, 'users');
onValue(starCountRef, (snapshot) => {
  const data = snapshot.val();
  console.log(data)
  let updata = Object.values(data)
  console.log(updata)
  dispatch( {type : "friends" , payload : updata} )
 
});

  

         


}


}



    
   





export {
  set_data,
  fcreate,
  flogin,
  google_login,
  facebook,
  writeUserData,
  readfirebase

}