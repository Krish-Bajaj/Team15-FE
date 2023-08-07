import React, { useState } from 'react';
import { Button } from "@mui/material";


const ListOfBonds = () => {




    return (
        <div className='list' >
            
            <div className="near">
                <h1>Near Maturity Bonds</h1>
                <Button variant="outlined"  >HUL bond</Button>
                <br/>
                <Button variant="outlined" className="btn-space">Himalaya bond</Button>
                <br/>
                <Button variant="outlined" className="btn-space">Axis bond</Button>
                 <br/>
                <Button variant="outlined" className="btn-space">DB bond</Button>
            </div>

            <div className="mature">
                <h1>Matured Bonds</h1>
                <Button variant="outlined" className="btn-space">HUL bond</Button>
                <br />
                
                <Button variant="outlined" className="btn-space">Himalaya bond</Button>
                <br/>
                <Button variant="outlined" className="btn-space">Axis bond</Button>
                 <br/>
                <Button variant="outlined" className="btn-space">DB bond</Button>
            </div>

            <div className="not_matured">
                <h1>Non Matured Bonds</h1>
                <Button variant="outlined"className="btn-space">HUL bond</Button>
                <br/>
                <Button variant="outlined" className="btn-space">Himalaya bond</Button>
                <br />
                
                <Button variant="outlined" className="btn-space">Axis bond</Button>
                 <br/>
                <Button variant="outlined" className="btn-space">DB bond</Button>
            </div>
        </div>
    )
}

export default ListOfBonds;