
import { Bounce, Zoom } from "react-reveal";

const ServiceListing = (props) => {
    return (
        <Bounce>
            <div className="col-md-6 p-2">
                <div className="bg-white p-3 px-md-4 rounded-3">
                    <div className="service_logo rounded-pill mb-3">
                        <img alt="img" src={props.Service_logo} />
                    </div>
                    <div className="mb-5 mt-3">
                        <p className="tc-plum fw-700 fs20">{props.Headline}</p>
                        <p className="tc-plum fw-500 fs16" >{props.Details}</p>
                    </div>
                    <div className="d-flex justify-content-between">

                        <Bounce top cascade>

                            <div className="sub_service_logo rounded-3 mb-3">
                                <img alt="img" src={props.Imag_1} />
                            </div>
                            <div className="sub_service_logo rounded-3 mb-3">
                                <img alt="img" src={props.Imag_2} />
                            </div>
                            <div className="sub_service_logo rounded-3 mb-3">
                                <img alt="img" src={props.Imag_3} />
                            </div>
                            <div className="sub_service_logo rounded-3 mb-3">
                                <img alt="img" src={props.Imag_4} />
                            </div>
                        </Bounce>
                    </div>
                </div>
            </div>
        </Bounce>
    );
}

export default ServiceListing;