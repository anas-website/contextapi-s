import React, {useState} from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import AddRoom from './component/AddRoom';
import Home from './component/Home';
import  RoomWithDevices from './component/RoomWithDevices'
import 'bootstrap/dist/css/bootstrap.min.css';
import Heder from './component/Heder'

function App() {
  const [ReRender,setReRender]=useState(false)

   //all the data of the application:
  const [rooms, setRooms] = useState([
    { roomName: 'Kitchen',RoomIdName:'aaa', roomColor: '#f9f0f0', roomDevices:[{Device:'Lamp',status:'red'},{Device:'Lamp',status:'red'}] },
    { roomName: 'Bedroom',RoomIdName:'bbb', roomColor: '#f9f0f0', roomDevices:[{Device:'Lamp',status:'red'},{Device:'Lamp',status:'red'}]},
  ]);
//###########################
 
// function add room:
const addRoom=( RName,RId, RColor)=>{

  setRooms([...rooms,{roomName: RName,RoomIdName:RId,roomColor:RColor,roomDevices:[]}])
}
//###########################
// function delete room:
   const DeleteRoom=(i)=>{
let tempo=rooms.filter((e,index)=>index!=i)
setRooms(tempo)
   }
//##########################

 // function add device:
const AddDevice=(i,DeviceObj)=>{
  let tempo=rooms
  tempo[i].roomDevices=[...tempo[i].roomDevices,DeviceObj]
  
  console.log(tempo[0].roomDevices);
  
  setRooms(tempo)
}
//#########################

// function change the button color (green/red):
const ChangeBtnColor=(indexRoom,indexDevice,btnColor)=>{
  let tempo=rooms
  tempo[indexRoom].roomDevices[indexDevice].status=btnColor
  setRooms(tempo)
}
//#######################

//function delete device:
    const deleteDevice=(indexRoom,indexDevice)=>{
      let DevicesObj=rooms[indexRoom].roomDevices.filter((e,index)=>index!=indexDevice)
     let tempo=rooms
     tempo[indexRoom].roomDevices=DevicesObj    
     setRooms(tempo)
    }
//######################
// function Re render "App" component
const ReRenderApp=()=>{ setReRender(!ReRender) }
   
  return (
    <div className='App'>
      <Router>
        <Heder/>

        <Switch>
          <Route
            exact
            path='/'
            component={() => {
              return <Home rooms={rooms} deleteRoom={DeleteRoom} />;
            }}
          />

          {/* Duplicate each "RoomWithDevices" component with different route according to the index of the rooms and pass with it  props..  */}
          {rooms.map((e, i) => {
            return (
              <Route
                key={i}
                exact
                path={'/room/' + i}
                component={() => {
                  return <RoomWithDevices index={i} Room={e} addDevice={AddDevice} ChangeBtnColor={ChangeBtnColor} deleteDevice={deleteDevice}  ReRenderApp={ ReRenderApp} />;
                }}
              />
            );
          })}

          {/* Route for component "AddRoom" with props the function addRoom */}
          <Route
            exact
            path='/addroom'
            component={() => {
              return <AddRoom Add={addRoom} />;
            }}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
