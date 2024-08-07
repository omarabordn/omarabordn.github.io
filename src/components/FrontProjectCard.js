import { Col } from "react-bootstrap";



export const FrontProjectCard = ({ title, description, imgUrl, link }) => {
    return (
        <Col size={12} sm={6} md={4}>
            <a href={link} target="open" className="proj-link">
                <div className="proj-imgbx">
                    <img src={imgUrl} />
                    <div className="proj-txtx">
                        <h4>{title}</h4>
                        <span>{description}</span>
                    </div>
                </div>
            </a>
        </Col>
    )
}