import React from "react";
import playstorelogo from '../components/google-play-badge.png';
import appstorelogo from '../components/AppStoreBadge.png';

function ThirdPage(){
    return (
        <div className='main-div-third-page'>
        <div class="container">
  <div class="row  " style={{marginLeft:"0"}}>
    <div class="col colored-side-tp">
    <div className='color-side-tp-text'>
        <h2 className='tp-heading'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h2>
        <p className='tp-para-colorside'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
             when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        
    <div className='image-color-tp1'>
        <img src={appstorelogo}></img>
        <img style={{marginLeft:"40px"}} src={playstorelogo}></img>
    </div>
    
    </div>
    </div>
    <div class="col image-side-tp" >
        <div >
            <p className='image-side-text'>Type Text</p>
            <p className='image-side-text2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
    </div>
    
  </div>
</div>
<div className="contact-page"></div>
</div>

    )
}


export default ThirdPage