import React from 'react'
import './Home.css';
/***************
 * image imports    
 ****************/ 
import img1 from '../../assets/img/mt-1993-brand-img01.png';
import img2 from '../../assets/img/mt-1993-brand-img02.png';
import img3 from '../../assets/img/mt-1993-brand-img03.png';

import img4 from '../../assets/img/mt-1993-img02.jpg';
import img5 from '../../assets/img/mt-1993-gallery-img02bg.jpg';

import img6 from '../../assets/img/mt-1993-img03.jpg';
import img7 from '../../assets/img/mt-1993-img04.jpg';
import img8 from '../../assets/img/mt-1993-img05.jpg';
import img9 from '../../assets/img/mt-1993-img06.jpg';

export const Home = () => {
  return (
    <div>
        <div class="image">
  <div class="container container1 py-auto btext">
    
    <p class="text-white text-center fs1 fnt2">Welcome to Wedding Solutions</p>
    <p class="text-white text-center fs2 fnt2">The Best Wedding Hall For Your Party</p>
  </div>
</div>
<div class="container mt-4">
  <div class="row">
    <div class="col-md-6">
      <h1 class="fnt2">

        At a Glance -----
      </h1>
      <p>

        Wedding Solutions is a state-of-the-art venue that holds different kinds of Wedding Solutions (birthday
        celebrations, corporate, wedding, and other parties) from 5 to 1000 persons in compliance with restaurant
        service standards. The variety of premises lets us accommodate numerous events for both large and small groups.
        With Wedding Solution’s team, you can carefully plan the tiniest details of your meeting or celebration. Whether
        you need to arrange a personal or business event, we are here to help you. Our professionals can organize and
        cater for different occasions indoors and outdoors, making your day unforgettable.
      </p>
      <h3 class="fnt3">

        ----Our Partners
      </h3>
      <div class="mx-auto text-center">

        <span class="me-4">Golf Club</span>
        <span class="me-4">Sena Malancha</span>
        <span class="me-2">BGB Convension Hall</span>
        <div class="row">
          <div class="col"><img src={img1} alt=""/></div>
          <div class="col"><img src={img2} alt=""/></div>
          <div class="col"><img src={img3} alt=""/></div>
        </div>
      </div>
    </div>
    <div class="col-md-6 ">
      <div class="">

        <img src={img4} class="img-fluid img02" alt=""/>
        <img src={img5} class="img-fluid" alt=""/>
      </div>
    </div>
  </div>
</div>
<br/>
<br/>
<br/>
<br/>
<br/>
<div class="event_perfect align-middle">
  <p class="text-white text-center align-middle fs3 fnt2">Let Us Make Your Events Perfect</p>
</div>
<div class="container my-4">
  <div class="row programme_img">
    <div class="col-md-6">
      <h3 class="fnt3 my-4">

        ----We are premier catering and event planning company
      </h3>
      <div class="">

        <img src={img6} class="img-fluid" alt="Responsive image"/>
        <p class="business_p">Business Dinners and Meetings</p>
        <img src={img7} class="img-fluid" alt="Responsive image"/>
        <p class="business_p">Corporate Event Management</p>
      </div>

      <br/>
    </div>
    <div class="col-md-6">
      <div class="">

        <img src={img8} class="img-fluid" alt=""/>
        <p class="business_p">Engagement and Wedding Parties</p>
        <img src={img9} class="img-fluid" alt=""/>
        <p class="business_p">Birthday and Graduation Parties</p>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
