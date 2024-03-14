/* eslint-disable @typescript-eslint/no-unused-vars */

import {  SetStateAction, useState } from 'react';
import TextField from '@mui/material/TextField';



const SearchBar = () =>{
    const [anchorElement, setAnchorElement] = useState(null);
    const open  = Boolean(anchorElement);
    const handleClick = (event: { target: { value: SetStateAction<null>; }; preventDefault: () => void; }) =>{
        setAnchorElement(event.target.value);
        event.preventDefault();
    };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const handleClose = (event: { target: { value: SetStateAction<null>; }; } ) =>{
        setAnchorElement(event.target.value);
    }


return (

    <button>

         🔍
         <TextField id="standard-basic" label="Search" variant="standard" />
           </button>
);


}


export default SearchBar;
