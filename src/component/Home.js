import React, { useState } from 'react';
import Room from './Room';
import {Link} from 'react-router-dom';
export default function Home(props) {
 
  return (
    <div className=' container col-12' style={{ width: '400px' }}>
      <br />
      <div className='row'>
        {/* Display 'Room' component and pass with it props from the 'App' component */}
        {props.rooms.map((e, i) => {
          return (
            <div key={i} className='col-6' style={{ minWidth: '150px' }}>
              <Room Rooms={e} index={i} deleteRoom={props.deleteRoom} />
              <br />
            </div>
          );
        })}
      </div>
      <Link to='/addroom' style={{ textDecoration: 'none' }}>
        
        <div style={{ margin: 'auto', color: 'white', backgroundColor: 'gray', width: '100px', height: '70px', borderRadius: '50px', border: 'solid 2px black' }}>
          <h1 style={{ fontSize: '50px', color: 'whit', height: '50px' }}>+</h1>
        </div>
      </Link>
      <br />
    </div>
  );
}

