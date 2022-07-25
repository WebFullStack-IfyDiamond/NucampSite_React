import {Col, Row } from "reactstrap";
import CampsiteCard from "./CampsiteCard";
import {selectAllCampsites} from './CampsitesSlice';

const CampsitesList = () => {
    const campsites = selectAllCampsites();
    return (
    <Row className="ms-auto">
        { campsites.map((campsite) => {
                return(
                    <Col key={campsite.id} 
                    className='m-4' md='5'>
                    
                        <CampsiteCard campsite={campsite}/>
                    </Col>
                );
            })
        }
    </Row>
    )
}


export default CampsitesList;