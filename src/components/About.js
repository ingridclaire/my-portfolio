import React from 'react'
import Info from './Info'

const About = () => {
    return (
        <div id="about-container" className="mt-5">
            <h4 className="pb-2">Tech I work with:</h4>
            <section id="tech-stack" className="mx-auto">
                {[{icon: 'js-square', tooltip: 'JavaScript', color: '#efd81d'}, 
                {icon: 'react', tooltip: 'React', color: '#61dafb'},
                {icon: 'node', tooltip: 'Node.js', color: '#87c249'},
                {icon: 'html5', tooltip: 'HTML5', color: '#f34e2c'},
                {icon: 'css3-alt', tooltip: 'CSS3', color: '#1f5faa'},
                {tooltip: 'MongoDB', src: '/images/mongodb.png', width: '100px'}, 
                {tooltip: 'Firebase', src: '/images/firebase.png', width: '40px', padding: 'pb-2'}].map(el => (
                    <Info key={el.tooltip} padding={el.padding} icon={el.icon} tooltip={el.tooltip} color={el.color} src={el.src} width={el.width}/>
                ))}
               
            </section>
            
        </div>
    )
}

export default About
