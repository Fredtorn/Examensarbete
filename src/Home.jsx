import React from 'react';
import { useNavigate } from "react-router-dom";

import Card from './Card';
import PageContainer from './PageContainer';

const Home = () => {
    const navigate = useNavigate();
    
    const cardData = [
    {
      id: 1,
      imageUrl: "src/assets/Tulpan.svg",
      imageAlt: "Illustrerad tulpan",
      buttonText: "Examensarbete",
      onButtonClick: () => navigate('/examensarbete')
    },
    {
      id: 2,
      imageUrl: "src/assets/Sol.svg",
      imageAlt: "Illustrerad sol",
      buttonText: "Skriv en hälsning",
      onButtonClick: () => navigate('/skriv')
    },
  ];

  return (
    <PageContainer>
      <article className='w-full'>
        <h1 className="text-7xl md:text-9xl text-center font-shippori-mincho text-white font-light mb-12">
          FEST
        </h1>
        <div className="mt-8">
          <p className="font-roboto text-xl md:text-2xl text-white mt-4 mb-8">
            Jag heter Fredrika Elisabet Sally Törnkvist och det här är mitt examensprojekt. Studien undersöker hur e-handel kan bygga vidare på befintlig kunskap och efterlikna den personliga vägledning som ges i butik – för en tryggare och mer informativ köpupplevelse online. Ta gärna en titt – och skicka ett grattis, för nu tar jag examen!
          </p>
        </div>

        <div className="mt-12">
          <div className="flex flex-col md:flex-row flex-wrap justify-center gap-8">
            {cardData.map(card => (
              <Card
                key={card.id}
                imageUrl={card.imageUrl}
                imageAlt={card.imageAlt}
                buttonText={card.buttonText}
                onButtonClick={card.onButtonClick}
              />
            ))}
          </div>
        </div>
      </article>
    </PageContainer>
  );
};

export default Home;