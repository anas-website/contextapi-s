import React ,{useState}from 'react'

export default function AddDevice(props) {
    const [device,setDevice]= useState('select')


 let validNumOfStereo=true
  let BoilerInBathroom=true
  let validNumOFDevices=true 
// 


  // Ensure that devices are added to the appropriate rooms
  const validAndAddDevice=()=>{
 
                
        
            if(props.Room.roomDevices.length<5||props.Room.roomName=='Bathroom') 
            {validNumOFDevices=true}
            else{validNumOFDevices=false}
    
             if( !(props.Room.roomName=='Bathroom')&&device=='Boiler')
             {BoilerInBathroom=false}
             else if( (props.Room.roomName=='Bathroom'&&device=='Boiler'))
             {BoilerInBathroom=true}
             else if (props.Room.roomName=='Bathroom'&&(!(device=='Boiler')))
             {BoilerInBathroom=false}
             else{BoilerInBathroom=true}
           //###
           let ObjWithStereo= props.Room.roomDevices.find( ({ Device }) => Device == 'Stereo')
     
            if((ObjWithStereo)&&device=='Stereo')
            {validNumOfStereo=false 
                  }
            else{validNumOfStereo=true}
          
            
           //####
            if(validNumOFDevices&& validNumOfStereo&&BoilerInBathroom &&(!(device=='select'))){   
                props.Add(props.index,{Device:device,status:'red'})
        
        }
             else{ alert('Some input error')}
    
     }

//############################################


    return (
      <div>
        <div className='container'>
          <select
            className='form-control'
            onChange={(e) => {
              setDevice(e.target.value);
            }}
            name='devices'
          >
            <option value='select'>select</option>
            <option value='Air-Conditioner'>Air-Conditioner</option>
            <option value='Lamp'>Lamp</option>
            <option value='Boiler'>Boiler</option>
            <option value='Stereo'>Stereo</option>
          </select>

          {/* //################ */}

          <button
            className='btn btn-dark mt-4'
            onClick={() => {
              validAndAddDevice();
              props.ReRender();
            }}
          >
            Add Device
          </button>
        </div>
      </div>
    );
}
