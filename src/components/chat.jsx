
import { useNavigate } from "react-router-dom"
import { connect } from "react-redux";
import "../chat.css"
import { readfirebase } from "../store2/action/index"




const Chat = (props) => {
    let navigate = useNavigate();





    return (


        <div className="div0" >

            <div className="line">
                <div className="rounddiv">
                    <img className="roundimg" src={props.img} alt="nae img arhi" />

                </div>

                <h2>
                    Chat Screen
                </h2>

                <div className="rounddiv">
                    {/* <img className="roundimg" src={} alt="nae img arhi bhai" /> */}

                </div>
            </div >

            <hr />

            <h4>
                Welcome {props.name}
            </h4>


            <h3>Chat with our users :</h3>
            <div className="f" >

                
                <img className="roundimg" src={props.users[0].profile_picture} alt="" />
                <h6>{props.users[0].username}</h6>
                <img className="roundimg" src={props.users[1].profile_picture} alt="" />
                <h6>{props.users[1].username}</h6> 
            </div>


            <div className="btn" >
                <button onClick={() => { navigate("/") }} >Log out</button>
            </div>


           



        
        </div>


    )
}


const mapStateToProps = (state) => ({
    name: state.current_user.name,
    img: state.current_user.photo,
    users: state.users

})

const mapDispatchToProps = (dispatch) => ({
    readfirebase: () => dispatch(readfirebase())
})



export default connect(mapStateToProps, mapDispatchToProps)(Chat)