import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import Tag from './Tag'
import { Button, Modal } from 'react-bootstrap';
import './Project.css'
import { GoMarkGithub } from 'react-icons/go';
import { MdOpenInBrowser, MdRemoveRedEye, MdClose } from 'react-icons/md';

let tags = [];

function loadTags(item, index) {
    tags.push(<Tag tag={item} key={index.toString()} />)
}

const Project = (props) => {

    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let info = props.info;

    tags = [];

    info.tags.forEach(loadTags);

    let leftImageMargin = 'max(-50%, ' + (-30 * info.gifdimensions[0] / info.gifdimensions[1]) + 'vh)';

    return (
        <div className="project">
            <div className="description">
                <img 
                    src={info.logo} 
                    alt={info.name} 
                    className="projectmargin" 
                    style={{
                        marginLeft: '1em', 
                        marginRight: '1em', 
                        width: '192px', 
                        height: '192px'
                    }}
                />
                <div 
                    style={{
                        flexBasis: '70%', 
                        flexGrow: 1, 
                        margin: '1em'
                    }}
                >
                    <h3 className="projectmargin">
                        {info.name}
                    </h3>
                    <div className="projectmargin">
                        {tags}
                    </div>
                    <p className="projectmargin">
                        {info.description}
                    </p>
                </div>
            </div>
            <div className="buttons">
                <Button className="marginaround" variant="outline-primary" href={info.github}>
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
            <Modal show={show} onHide={handleClose} size="xl" centered scrollable>
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
                        <div style={{
                            width: '100%',
                            position: 'relative'
                        }}>
                            <div style={{
                                position: 'absolute',
                                left: '50%',
                                marginLeft: leftImageMargin,
                                width: 'min(100%, ' + (60 * info.gifdimensions[0] / info.gifdimensions[1]) + 'vh)',
                                maxHeight: '60vh'
                            }}>
                                <img 
                                    src={info.gif} 
                                    alt={info.name + " demonstration"} 
                                    className="modalimage"
                                />
                            </div>
                        </div>
                        {/* To prevent content reflow */}
                        <div style={{
                            width: '100%',
                            position: 'relative'
                        }}>
                            <img src={'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' + info.gifdimensions[0] + " " + info.gifdimensions[1] + ' "%3E%3C/svg%3E'}
                            alt="placeholder"
                            style={{
                                maxWidth: '100%',
                                maxHeight: '60vh'
                            }}/>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <div className="buttons" style={{marginLeft: 'auto', marginRight: 'auto'}}>
                        <Button className="marginaround" variant="outline-primary" href={info.github} style={{}}>
                            <GoMarkGithub style={{marginRight: '0.5em'}}/>
                            Github
                        </Button>
                        <Button className="marginaround" variant="outline-primary" href={info.website}>
                            <MdOpenInBrowser size='18px' style={{marginRight: '0.5em'}}/>
                            Website
                        </Button>
                        <Button className="marginaround" variant="outline-primary" onClick={handleClose}>
                            <MdClose style={{marginRight: '0.5em'}}/>
                            Close
                        </Button>
                    </div>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Project;