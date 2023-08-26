import react from 'react';
import playstorelogo from '../components/google-play-badge.png';
import appstorelogo from '../components/AppStoreBadge.png';
import dog1 from '../components/Group.png';
import dog2 from '../components/Group2.png';
import logo from '../components/Logo.png';
import AliceCarousel from 'react-alice-carousel';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import 'react-alice-carousel/lib/alice-carousel.css';
import facebook from '../components/FB-icon-black.png';
import linked from '../components/linkedin-icon-black.png';
import twitter from '../components/Twitter-icon-black.png';
import 'reactjs-popup/dist/index.css';
function FrontPage(){
    const handleDragStart= (e)=> e.preventDefault();
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    const items=[
        <img src={dog1} className='image-side-fp' onDragStart={handleDragStart}></img>,
        <img src={dog2} className='image-side-fp' onDragStart={handleDragStart}></img>
    ]
    return(
        <div className='main-div-front-page'>
        <div class="container">
  <div class="row" >
    <div class="col colored-side-fp">
        <div className='logo'>
            <img src={logo}></img>
        </div>
    <div className='color-side-fp-text'>
        <h2 className='fp-heading'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h2>
        <p className='fp-para-colorside'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
             when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        
    <div className='image-color-fp1'>
        <img src={appstorelogo}></img>
        <img style={{marginLeft:"40px"}} src={playstorelogo}></img>
    </div>
        
    </div>
    </div>
    <div className="col carousel" style={{width:"636px"}} >
        <div className='Header-buttons' style={{marginLeft:"350px"}}>About</div>
        <div className='Header-buttons' style={{marginLeft:"410px"}}>Blog</div>
        <div className='Header-buttons' style={{marginLeft:"476px"}}>Career</div>
        <div className='Header-buttons' style={{marginLeft:"550px"}}><button onClick={handleShow}>Contact</button></div>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Contact US</Modal.Title>
        </Modal.Header>
        <Modal.Body>Body</Modal.Body>
        
      </Modal>
        <div className='image-side-text'>Type Text</div>
        <div className='image-side-text2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
        <img className='logo-bottom' style={{position:"absolute",marginLeft:"280px"}} src={facebook}></img>
        <img className='logo-bottom' style={{position:"absolute", marginLeft:"310px"}} src={linked}></img>
        <img className='logo-bottom' style={{position:"absolute", marginLeft:"340px"}} src={twitter}></img>
        <div className='inner-carousel'>
        <AliceCarousel disableButtonsControls disableDotsControls infinite mouseTracking items={items} />
        </div>
        
        
    </div>
    
  </div>
</div>
</div>
    )
}

export default FrontPage;