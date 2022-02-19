
import { useNavigate } from "react-router-dom"
import { connect } from "react-redux";
import "../chat.css"
import { readfirebase } from "../store2/action/index"
import { useState } from "react";

import { getDatabase, ref, onValue, push } from "firebase/database";






const Chat = (props) => {
    let navigate = useNavigate();


    const [name, setName] = useState({ chat_user: {}, chat: [], message: "" })


    const msg = (v) => {

        setName({ chat_user: v, chat: [], message: "" })
        console.log(name)


    }


    const send_msg = () => {


        let user = props.current_user;
        let chat_user = name.chat_user;




        const db = getDatabase();
        let merge;
        {
            user.uid < chat_user.uid ?
                merge = user.uid + chat_user.uid

                :

                merge = chat_user.uid + user.uid
        }

        
        push(ref(db, 'chats/' + merge), {

            message: name.message,
            namd: user.name,
            uid: user.uid


        });
        getmsg(merge, chat_user)
    }



    const getmsg = (merge, chat_user) => {


        
        const db = getDatabase();
        const starCountRef = ref(db, 'chats/' + merge);
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            
            let newdata = Object.values(data)
            
            newdata.map((v, i) => {

                
                console.log(v.message)
                // console.log(chat_user.uid)
            })



        })
    }

    // name.chat.push ({ message : name.message });
    // // console.log(name);

    // setName({
    //     chat_user : name.chat_user,
    //     chat : name.chat,
    //     message : "" 

    // })

    // console.log(name)

    // }

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
                    <img className="roundimg" src={name.chat_user.profile_picture} alt="nae img arhi bhai" />

                </div>
            </div >

            <hr />

            <h4>
                Welcome {props.name}
            </h4>


            <h3>Chat with our users :</h3>
            <div className="last" >


                <div>
                    {props.users.map((v, i) => {
                        return v.uid !== props.current_user.uid &&

                            <li key={i} >
                                <img className="roundimg" src={v.profile_picture} alt="nae arhi" />
                                <p>{v.username}</p>

                                <button onClick={() => msg(v)} >Chat</button>

                                {
                                    Object.values(name.chat_user).includes(v.uid) ?
                                        <div>
                                            <input onChange={(e) => {
                                                setName({
                                                    ...name, message: e.target.value

                                                })
                                                console.log(name)
                                            }} type="text" placeholder="Type your message" />

                                            <button onClick={() => send_msg()} >Send</button>
                                            <ul>
                                                <li>
                                                    {name.chat.map((v, i) => { return <li id="chatmsg" key={i} >{v.message}</li> })}
                                                </li>
                                            </ul>
                                        </div>
                                        :
                                        <h6>No chat</h6>
                                }
                            </li>

                    })}
                </div>

                <div>




                </div>



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
    users: state.users,
    current_user: state.current_user

})

const mapDispatchToProps = (dispatch) => ({
    readfirebase: () => dispatch(readfirebase())
})



export default connect(mapStateToProps, mapDispatchToProps)(Chat)