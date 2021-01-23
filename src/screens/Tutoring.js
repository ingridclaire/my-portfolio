import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Tutoring = () => {
    return (
        <div className='mt-3'>
            <h3>Why book a tutoring session?</h3>
            <Carousel className="py-5" autoPlay infiniteLoop showThumbs={false} transitionTime={400} interval={4000}>
                <div>
                    <img style={{width: '500px'}} src="/images/tutorial.png" alt="break out of tutorial hell" />
                    
                </div>
                <div>
                    <img style={{width: '500px'}} src="/images/newskill.png" alt="learn a new skill" />
               
                </div>
                <div>
                    <img style={{width: '500px'}} src="/images/projectkinks.png" alt="get help with a current project" />
                 
                </div>
                <div>
                    <img style={{width: '500px'}} src="/images/questions.png" alt="ask all your questions" />
                 
                </div>
            </Carousel>
            
        </div>
    )
}

export default Tutoring
