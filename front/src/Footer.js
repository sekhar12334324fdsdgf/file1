import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import './footer.css';

function Footer() {
  return (
    <div>
        <div className='foot'>
        <center> <p>&copy; 2024 company employee management. All rights reserved.</p></center>
        <div>
<ul style={{display:'flex',listStyleType:'none',gap:'550px',marginBottom: '10px'}}>
    <li><a href='https://www.instagram.com' style={{textDecoration:'none',color:'white'}} target=' _blank'><p style={{display:'flex',gap:'10px'}}><InstagramIcon/><small>INSTAGRAM</small></p></a></li>
    <li><a href='https://www.facebook.com' style={{textDecoration:'none',color:'white'}} target=' _blank'><p style={{display:'flex',gap:'10px'}}><FacebookIcon/><small>FACEBOOK</small></p></a></li>
    <li><a href='https://www.whatsup.com' style={{textDecoration:'none',color:'white'}} target=' _blank'><p style={{display:'flex',gap:'10px'}}><WhatsAppIcon/><small>WHATSApp</small></p></a></li>
</ul>
<ul style={{display:'flex',listStyleType:'none',gap:'550px'}}>
    <li><a href='https://www.youtube.com' style={{textDecoration:'none',color:'white'}} target=' _blank'><p style={{display:'flex',gap:'10px'}}><YouTubeIcon/><small>YOUTUBE</small></p></a></li>
    <li><a href='https://www.twitter.com' style={{textDecoration:'none',color:'white'}} target=' _blank'><p style={{display:'flex',gap:'10px'}}><XIcon/><small>TWITTER</small></p></a></li>
    <li><a href='https://www.goggle.com' style={{textDecoration:'none',color:'white'}} target=' _blank'><p style={{display:'flex',gap:'10px'}}><TravelExploreIcon/><small>GOOGLE</small></p></a></li>
</ul>
        </div>
        </div>
    </div>
  )
}

export default Footer