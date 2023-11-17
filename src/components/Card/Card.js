import React, { useEffect, useState } from "react";
//import axios from "axios";
import { CardWrapper } from './Card.styled';



const Card = () => (
   
   
 <CardWrapper>
   <div className='card'>
      <div className='header'>
      hello
      </div>
      <div className='textarea'>
         text
      </div>
      <div className='footer'>
         footer
      </div>
   </div>
    
 </CardWrapper>
);

Card.propTypes = {};

Card.defaultProps = {};

export default Card;
