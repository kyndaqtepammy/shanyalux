import React from 'react'

/**
* @author
* @function DateCopyrightBanner
**/

const showCurrentYear = () => {
    return new Date().getFullYear();
}

const DateCopyrightBanner = (props) => {
  return(
    <div className="copy">
        {showCurrentYear()}
        <p>&copy; Shanyalux</p>
    </div>
   )

 }

export default DateCopyrightBanner