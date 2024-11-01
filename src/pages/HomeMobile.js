import { React, useState } from 'react'
import imageData from '../data/home_images.json';
import shadowImg from "../components/images/shadow.png";
import { useHistory, useLocation } from 'react-router-dom';
import { Box } from '@mui/material';
import { PageTransition } from '@steveeeie/react-page-transition';

function Homemobile() {
  const history = useHistory();
  const location = useLocation();
  const [isAnimating, setIsAnimating] = useState(false);
  
  const portfolios = ["tax3", "bubbic", "nasty", "kusomegane", "ifc", "luchia", "wasshoi","thoot","nest","tunageru","keio","movanage"];
  const images = imageData.projects.map(project => require(`../components/images/${project.image}`));

  const handleClick = (e, path) => {
    e.preventDefault();
    setIsAnimating(true);
    
    setTimeout(() => {
      history.push(path);
    }, 400);
  };

  return (
    <PageTransition
      preset="scaleUpScaleUp"
      transitionKey={location.pathname}
    >
      <Box 
        sx={{marginBottom: "3rem"}} 
        className={`slider-container ${isAnimating ? 'fade-out' : ''}`}
      >
        <ul
          className="slider-images"
          style={{
            listStyleType: "none",
          }}
        >
          {images.map((src, index) => (
            <li
              key={index}
              className={`slider-image ${isAnimating ? 'image-fade-out' : ''}`}
              style={{ margin: "0px 16px" }}
            >
              <a 
                href={"/portfolio/" + portfolios[index]}
                onClick={(e) => handleClick(e, "/portfolio/" + portfolios[index])}
                className="portfolio-link"
              > 
                <img
                  className="dropshadow"
                  src={src}
                  alt={`Slide ${index + 1}`}
                  width={"100%"}
                />
                <img alt={"shadow"} className="shadowImg" src={shadowImg} />
              </a>
            </li>
          ))}
        </ul>
      </Box>
    </PageTransition>
  )
}

export default Homemobile