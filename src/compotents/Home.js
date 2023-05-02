import React from 'react'
import { useEffect } from 'react';
import { Carousel } from 'react-carousel-minimal';

const Home = ({setProgress})=>{

 const data = [
   
    {
      image: "slide-2.webp",
      caption: "Scotland"
    }, {
      image: "slide-1.jpg",
      caption: `<div>
                  San Francisco
                  <br/>
                  Next line
                </div>`
    },
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  useEffect(() => {
    setProgress(40)
    setProgress(100)
  }, [setProgress])
  
  return (
    <>
    <div className="App">
      <div style={{ textAlign: "center" }}>
        <div style={{
          padding: "0px"
        }}>
          <Carousel
            data={data}
            time={5000}
            width="1700px"
            height="500px"
            captionStyle={captionStyle}
            radius="0px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={false}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={false}
            style={{
              textAlign: "center",
              maxWidth: "100%",
              maxHeight: "500px",
            }}
          />
        </div>
      </div>
    </div>
    
    </>
  );
}
export default Home