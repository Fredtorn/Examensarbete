import React from 'react'
import PageContainer from './PageContainer'

const Thesis = () => {
  return (
    <PageContainer>
      <article className='w-full mt-5'>
        <h2 className="text-4xl md:text-7xl text-center font-shippori-mincho text-white font-light">Examensarbete</h2>
        <div className="mt-20">
            <h3 className="text-3xl text-white font-shippori-mincho text-left mb-4 mt-8">Abstract</h3>
            <p className="font-roboto text-xl text-white mt-4">
              This study explores how digital guidance can be improved by understanding customer behavior, expectations, and decision-making processes when shopping online. The aim is to investigate how and where existing knowledge and support can be surfaced in order to better assist customers throughout their journey. By identifying key moments of uncertainty, the study seeks to bridge the gap between the trusted in-store experience — known for its personal service and expert knowledge — and the often less guided online experience. Ultimately, the goal is to help customers feel more informed, supported, and confident in their decisions, while reinforcing trust in the brand through thoughtful and accessible digital content.
            </p>
        </div>
        <div className="mt-12">
            <h3 className="text-3xl text-white font-shippori-mincho text-left mb-4">Sammanfattning</h3>
            <p className="font-roboto text-xl text-white mt-4">
              Den här studien undersöker hur digital guidning kan förbättras genom en djupare förståelse för kunders beteenden, förväntningar och beslutsprocesser vid onlineköp. Syftet är att utforska hur och var befintlig kunskap och stöd bäst kan lyftas fram för att hjälpa kunder genom hela köpresan. Genom att identifiera osäkerhetsmoment vill studien minska glappet mellan butikupplevelsen – känd för sin direkta personliga service och expertkunskap – och den ofta mindre vägledda onlineupplevelsen. Målet är att kunder ska känna sig mer informerade, stöttade och trygga i sina beslut, samtidigt som förtroendet för varumärket stärks genom relevant och tillgänglig digital kommunikation.
            </p>
        </div>
      </article>
    </PageContainer>
  )
}

export default Thesis