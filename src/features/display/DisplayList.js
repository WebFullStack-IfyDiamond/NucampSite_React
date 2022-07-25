import { Row,Col } from "reactstrap";
import DisplayCard from './DisplayCard';
import { selectFeaturedCampsites } from "../campsites/CampsitesSlice";
import { selectFeaturedPromotion } from "../promotions/promotionsSlice";
import {selectFeaturedPartner} from '../partners/partnersSlice';

const DisplayList = () => {
    const items = [selectFeaturedCampsites(), selectFeaturedPromotion(), selectFeaturedPartner()];

    return (
        <Row>
            {
                items.map((item, idx) => {
                    return(
                        <Col className="m-1" key={idx}>
                            <DisplayCard item={item}/>
                        
                        </Col>
                    )
                })
            }
        </Row>
    )
}

export default DisplayList;