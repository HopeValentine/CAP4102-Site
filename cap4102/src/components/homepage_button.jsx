import React from 'react'
import { Link } from "react-router-dom";
import styles from './button.css';
import { Popup } from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export const Button = (props) => {
    var action = false
    if('action' in props)
    {
        action = true
    }

    if(!action)
    {
        var dest = "/" + props.location
        return (
          <div className='button-component'>
          <Link className="link" to={dest}>
          <button className='button'>
              <div className='button_internal'>
                      <p className='linktext'>{props.location}</p>
              </div>
          </button>
          </Link>
          </div>
        )      
    }
    else
    {
        if(props.action == 'hours')
        {
           
            return (
                <div className='button-component'>
                <Popup trigger={
                    <button className='button'>
                    <div className='button_internal'>
                            <p className='linktext'>{props.location}</p>
                    </div>
                    </button>} position="left center">
                        <div>
                        <p className="button-body-title">
            Business Hours
        </p>
        <p className="button-body-text">
            Sun: 12:00 PM - 8:00 PM
        </p>
        <p className="button-body-text">
            Mon: CLOSED
        </p>
        <p className="button-body-text">
            Tues: 11:00 AM - 8:00 PM
        </p>
        <p className="button-body-text">
            Weds: 11:00 AM - 8:00 PM
        </p>
        <p className="button-body-text">
            Thurs: 11:00 AM - 8:00 PM
        </p>
        <p className="button-body-text">
            Fri: 11:00 AM - 8:00 PM
        </p>
        <p className="button-body-text">
            Sat: 11:00 AM - 8:00 PM
        </p>

                        </div>
                </Popup>
                
                </div>)
        
        }
        else
        {
            return (
                <div className='button-component'>
                <a  href="tel:+18503564410">
                    <button className='button'>
                    <div className='button_internal'>
                            <p className='linktext'>{props.location}</p>
                    </div>
                    </button>
                </a>
                </div>
            )
        }
    }
}

export default Button