import React, { useState } from 'react';
import Datetime from 'react-datetime';

export default function Dtpicker(){
    const [datetime, setdatetime] = useState(new Date())
    let inputProps = {
        disabled: false        
       
    }; 

    return(
    <>
        <Datetime  
        inputProps={ inputProps }
        value={datetime}
        onChange = {setdatetime}
        />
    </>
    )
}