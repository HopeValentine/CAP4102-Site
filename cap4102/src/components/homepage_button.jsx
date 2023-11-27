import React from 'react'
import { Link } from "react-router-dom";
import styles from './button.css';

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
          <Link className="link" to={dest}>
          <button className='button'>
              <div className='button_internal'>
                      <p className='linktext'>{props.location}</p>
              </div>
          </button>
          </Link>
        )      
    }
    else
    {
        return (
            <a  href="tel:+14703855531">
                <button className='button'>
                <div className='button_internal'>
                        <p className='linktext'>{props.location}</p>
                </div>
                </button>
            </a>
        )
    }
}

export default Button