import { animals } from './animals';
import React from 'react';
import {createRoot} from 'react-dom/client' ;

const container = document.getElementById('app');

const root = createRoot(container);


//estamos definiendo el titulo del proyecto
const title = '';


//Añade un fondo de pantalla al proyecto
const backGround = (
<img 
className='background'
alt= 'ocean'
src= '/images/ocean.jpg'
 />
);


//Genera los funFacts
const displayFact = (e) =>{
  const selectedAnimal = e.target.alt;
  const animalFactArray = animals[selectedAnimal].facts
  const randomIndex = Math.floor(Math.random() * animalFactArray.length);
  const funFact = animalFactArray[randomIndex];
  //Selecciona el elemnto del html que vamos a editar
  const p = document.getElementById('fact');
  if(p){
     p.innerHTML = funFact;
  }
}


//Agrega un array de imagenes
const images = [];
for (const animal in animals){
  const image = (
    <img
    onClick= {displayFact}
    key= {animal}
    className= 'animal'
    alt= {animal}
    src= {animals[animal].image}
    aria-label= {animal}
    role= 'button' 
    />
  );
  images.push(image);
}

const showBackground = false;


//Asigna un valor predeterminado si title esta vacio
const animalFacts = (
<div>
<h1>{title || 'Click an animal for a fun fact'}</h1>
<p id='fact'></p>
{showBackground && backGround}
<div className='animals'>
{images}</div>
</div>
);

root.render(animalFacts);
