import { Button } from "@mui/material";

const ListMain = () => {
    return (
        <div className='list' >

            <div className="near">
                <h4>Near Maturity Bonds</h4>
                <Button variant="outlined"  >HUL bond</Button>
                <br/>
                <Button variant="outlined" className="btn-space">Himalaya bond</Button>
                <br/>
                <Button variant="outlined" className="btn-space">Axis bond</Button>
                 <br/>
                <Button variant="outlined" className="btn-space">DB bond</Button>
            </div>

            <div className="mature" style={{ marginTop: '2rem' }}>
                <h4>Matured Bonds</h4>
                <Button variant="outlined" className="btn-space">HUL bond</Button>
                <br />

                <Button variant="outlined" className="btn-space">Himalaya bond</Button>
                <br/>
                <Button variant="outlined" className="btn-space">Axis bond</Button>
                 <br/>
                <Button variant="outlined" className="btn-space">DB bond</Button>
            </div>

            <div className="not_matured" style={{ marginTop: '2rem' }}>
                <h4>Non Matured Bonds</h4>
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

export default ListMain