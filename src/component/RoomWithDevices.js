import React,{useState} from 'react'
import AddDevice from './AddDevice';
import Device from './Device'




export default function RoomWithDevices(props) {


    const[btnName,setBtnName]= useState('Add Device')
    const [flag, setflag] = useState(false)
    const[render,setrender]=useState(false)
//Function change button name
 const changeFlag=()=>{
    setflag(!flag)
  if(btnName=='Add Device'){ setBtnName('Cancel')}
  else{setBtnName('Add Device')}
   }
// Function Re render "RoomWithDevices" component
  const ReRender=()=>{setrender(!render)}

  //Function display and hide   "AddDevice" component 
    const hideAndShowAddDevice=()=>{

              if(flag){ 
            
                 return(<AddDevice Room={props.Room}  Add={props.addDevice}index={props.index} ReRender={ReRender}  />)}  
               
            }
         
    return (
      <div>
        <br />
        <div className='row'>
          <div className='col-6'>
            <h6> Room Name: {props.Room.roomName}</h6>
            <h6> Room ID: {props.Room.RoomIdName}</h6>
          </div>
          <div className='col-6'>
            {/* Display "Device" component */}
            {props.Room.roomDevices.map((e, i) => {
              return <Device key={i} Room={props.Room} index={i} indexRoom={props.index} ChangeBtnColor={props.ChangeBtnColor} deleteDevice={props.deleteDevice}  ReRenderApp={props.ReRenderApp} />;
            })}
          </div>

          {/* When the button is clicked, the button name is changed to "Cancel/Add Device" and "AddDevice" component is Displayed  or hidden */}
          <div className='container' style={{ backgroundColor: "gray", padding: "20px" }}>
            {" "}
            <button
              className='btn btn-dark mb-4 '
              onClick={() => {
                changeFlag();
              }}
            >
              {btnName}
            </button>
            {hideAndShowAddDevice()}
          </div>
        </div>
      </div>
    );
}



