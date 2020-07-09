
import React, {useState} from 'react'
function Device(props) {
    
    const [btnColor, setBtnColor] = useState( props.Room.roomDevices[props.index].status)
 
           
    return (
      <div>
        {/* When the button is clicked, the color of it is changed : */}
        <div>
         
          <button
            className='btn btn-success'
            style={{ background: btnColor }}
            onClick={() => {
              if (props.Room.roomDevices[props.index].status == 'red') {
                props.ChangeBtnColor(props.indexRoom, props.index, 'green');

                setBtnColor(props.Room.roomDevices[props.index].status);
              } else if (props.Room.roomDevices[props.index].status == 'green') {
                props.ChangeBtnColor(props.indexRoom, props.index, 'red');
              }
              setBtnColor(props.Room.roomDevices[props.index].status);

              // button delete a device and re render the component:
            }}
          >
            {props.Room.roomDevices[props.index].Device}
          </button>
          <div>
              <h6 style={{ color: 'red', cursor: 'pointer' }}
                onClick={() => {
                props.deleteDevice(props.indexRoom, props.index);
                props.ReRenderApp();
              }}>Delete</h6>
          </div>
        </div>
        <br />
      </div>
    );
}
export default Device
