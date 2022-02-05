import { connect } from "react-redux";
// import { set_data } from "./store/action";
import { chek, facebook, set_data } from "../store2/action/index";
import { writeUserData, fcreate, flogin, google_login, readfirebase } from "../store2/action/index";

import "../App.css";
import svg from "../pics/undraw_texting_re_l11n.svg"

import { useNavigate } from "react-router-dom";






const App = (props) => {




  let navigate = useNavigate();

  return (

    <div>

      <h1>
        Home
      </h1>

      <hr />
      <div className="span0" >





        <div className="mainpage2">

          <img className="svg" src={svg} alt="" />

        </div>




        <div className="mainpage" >

          <h4 className="welcome" >
            Welcome to chat club! Enjoy free texting to friends and family
          </h4>

          {/* <button onClick={() => fcreate()} >Sign up with email</button>
      <button onClick={() => flogin()} >Login with email</button>  */}

          {/* <button onClick={() => props.set_data(ku)} >Print</button> */}

          <button onClick={() => {props.readfirebase() ; props.google_login(navigate) } } >Google Login</button>
          {/* <button onClick={() => facebook(navigate)} >Facebook Login</button> */}

        </div>



      </div>
    </div>

  )


}

const mapStateToProps = (state) => ({
  users: state.users




})

const mapDispatchToProps = (dispatch) => ({
  set_data: (data) => dispatch(set_data(data)),
  google_login: (navigate) => dispatch(google_login(navigate)),
  readfirebase: () => dispatch(readfirebase())

})

export default connect(mapStateToProps, mapDispatchToProps)(App)