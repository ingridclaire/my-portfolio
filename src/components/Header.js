import React from 'react';
import Media from 'react-media';
import '../App.css';

function Header() {
  // const [dimensions, setDimensions] = React.useState({
  //   height: window.innerHeight,
  //   width: window.innerWidth
  // })
  // React.useEffect(() => {
  //   const handleResize = () => {
  //     if (window.innerWidth < 1200)
  //     setDimensions({
  //       height: window.innerHeight,
  //       width: window.innerWidth
  //     })
  //     console.log(dimensions.width)
  //   }
  //   window.addEventListener('resize', handleResize);
  // })

  // const renderHome = () => {
  //   if (dimensions.innerWidth < 1200) {

  //   }
  // }
  return (
    <header className="header-container">
      <section className="header-left">
        <div className="header-left-container">
          <img src="https://s3-us-west-1.amazonaws.com/icc.portfolio/header-orange-circles.png" alt="" />
          <h1>
            Ingrid
            <br/>
            Claire
          </h1>
          <h3>Software Development Solutions</h3>
        </div>
      </section>
      <img className="header-right" src='https://s3-us-west-1.amazonaws.com/icc.portfolio/header-right.png' alt='' />

    </header>
  );
}

export default Header;