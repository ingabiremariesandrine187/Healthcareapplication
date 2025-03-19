import React from 'react';
import '../Styles/UserInfo.css';
import image1 from '../assets/PROFILE.JPG'
const UserInfo = () => {
    return (
        <div className="user-info">
            <div class="profile-title">
                <div class="patient-profile"><img src={image1} alt="Patient" className="img1" /></div>
            <h3>Patient Info</h3>
            </div>
            <div className="info-card">
                <div class="ages">42 Years</div>
                <div class="blood-group">O+</div>
                <div class="height">1.40 M</div>
                <div class="weight">47 Kg</div>
            </div>
        </div>
    );
}


export default UserInfo;