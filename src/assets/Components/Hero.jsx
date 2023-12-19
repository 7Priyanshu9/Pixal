import React from 'react'
import mirror from '../Resources/mirror.jpg'
const Hero = () => {
    return (
        <div className='hero-main'>
            <div className='hero-text'>
                <h1>The free online photo editor built for creators</h1>
                <h5>
                    Free photo editor has every tool to bring your creative vision to life. From
                    intuitive drag-and-drop features to advanced editing tools that practically edit
                    photos for you, Picsart is photo editing made easy. Build your future, one image
                    at a time.</h5>
            </div>
            <div className='hero-img'><img src={mirror} alt="mirror " height={300} width={400} /></div>
        </div>
    )
}

export default Hero
