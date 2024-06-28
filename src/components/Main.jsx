import React from 'react';
import Image from 'next/image';
import marsPic from '../../public/marscivil.jpg';

function Main(){
    return (
        <div className='flex flex-col'>
            <Image className='h-full w-full flex-1 object-cover' src={marsPic} alt='picture of the day'  />
           
        </div>
    );
};

export default Main;