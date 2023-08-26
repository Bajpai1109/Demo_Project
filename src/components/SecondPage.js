import React from "react";
import playstorelogo from '../components/google-play-badge.png';
import appstorelogo from '../components/AppStoreBadge.png';
function SecondPage(){
    return (
        <div className='main-div-second-page'>
        <div class="container">
  <div class="row  " style={{marginLeft:"0"}}>
    <div class="col colored-side-sp">
    <div className='color-side-sp-text'>
        <h2 className='sp-heading'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h2>
        <p className='sp-para-colorside'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
             when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        
    <div className='image-color-sp1'>
        <img src={appstorelogo}></img>
        <img style={{marginLeft:"40px"}} src={playstorelogo}></img>
    </div>
    
    </div>
    </div>
    <div class="col image-side-sp" >
        <div >
            <p className='image-side-text'>Type Text</p>
            <p className='image-side-text2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
    </div>
    
  </div>
</div>
</div>
    )
}


export default SecondPage;