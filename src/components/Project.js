import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import Tag from './Tag'
import { Button, Modal } from 'react-bootstrap';
import './Project.css'
import { GoMarkGithub } from 'react-icons/go';
import { MdOpenInBrowser, MdRemoveRedEye, MdClose } from 'react-icons/md';

let tags = [];


function loadTags(item) {
    tags.push(<Tag tag={item}/>)
}




const Project = (props) => {

    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let info = props.info;

    tags = [];

    info.tags.forEach(loadTags);


    return (
        <div className="project">
            <div className="description">
                <img src={info.logo} alt={info.name} className="projectmargin" style={{marginLeft: '1em', marginRight: '1em', width: '192px', height: '192px'}}/>
                <div style={{flexBasis: '70%', flexGrow: 1, margin: '1em'}}>
                    <h3 className="projectmargin">{info.name}</h3>
                    <div className="projectmargin">
                        {tags}
                    </div>
                    <p className="projectmargin">{info.description}</p>
                </div>
            </div>
            <div className="buttons" closeButton>
                <Button className="marginaround" variant="outline-primary" href={info.github} style={{}}>
                    <GoMarkGithub style={{marginRight: '0.5em'}}/>
                    Github
                </Button>
                <Button className="marginaround" variant="outline-primary" href={info.website}>
                    <MdOpenInBrowser size='18px' style={{marginRight: '0.5em'}}/>
                    Website
                </Button>
                <Button className="marginaround" variant="outline-primary" onClick={handleShow}>
                    <MdRemoveRedEye size='18px' style={{marginRight: '0.5em'}}/>
                    More Info
                </Button>
            </div>
            <Modal show={show} onHide={handleClose} size="xl" centered>
                <Modal.Header>
                    <Modal.Title>
                        <div style={{justifyContent: 'center'}}>
                            {info.name}
                        </div>
                    </Modal.Title>
                    <Button className="closebutton" variant="outline-primary" onClick={handleClose}>
                        <MdClose size='15px'/>
                    </Button>
                </Modal.Header>
                <Modal.Body>
                    <div className="modalwindow">
                        {info.extendedDescription}<br/><br/>
                        <img src={info.gif} alt={info.name + " demonstration"} className="modalimage"/>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-primary" onClick={handleClose} style={{marginLeft: 'auto', marginRight: 'auto'}}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Project;