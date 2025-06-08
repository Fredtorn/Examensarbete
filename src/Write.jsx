import React, { useState, useEffect } from 'react';
import PageContainer from './PageContainer';

const Write = () => {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [greetings, setGreetings] = useState([]);
    const [formSubmitted, setFormSubmitted] = useState(false);

    useEffect(() => {
        const storedGreetings = localStorage.getItem('greetings');
        if (storedGreetings) {
            setGreetings(JSON.parse(storedGreetings));
        }
    }, []);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        
        if (!name.trim() || !message.trim()) {
            alert("Både namn och hälsning måste fyllas i.");
            return;
        }

        const newGreeting = {
            id: Date.now(),
            name: name,
            message: message,
            date: new Date().toLocaleDateString('sv-SE')
        };

        const updatedGreetings = [...greetings, newGreeting];
        setGreetings(updatedGreetings);
        
        localStorage.setItem('greetings', JSON.stringify(updatedGreetings));
        
        setName("");
        setMessage("");
        setFormSubmitted(true);

        setTimeout(() => {
            const successMessage = document.getElementById('submission-success');
            if (successMessage) {
                successMessage.focus();
            }
            setTimeout(() => {
                setFormSubmitted(false);
            }, 5000);
        }, 100);
    };

    return (
        <PageContainer>
            <div className="w-full">
                <h2 className="text-3xl md:text-7xl text-center font-shippori-mincho text-white font-light mb-4 mt-5">
                    Skriv en hälsning
                </h2>
                
                {formSubmitted && (
                    <div 
                        id="submission-success"
                        className="text-white p-4 rounded-lg my-4 text-center"
                        role="alert"
                        tabIndex="-1"
                    >
                        Din hälsning har skickats. Tack för ditt bidrag!
                    </div>
                )}
                
                <div className="w-full mb-12 mt-20">
                    <form 
                        className="p-8 border-2 border-white" 
                        onSubmit={onSubmitHandler}
                        aria-labelledby="form-heading"
                    >
                        <h3 id="form-heading" className="sr-only">Formulär för hälsningar</h3>
                        
                        <div className="mb-6">
                            <label htmlFor="name" className="block text-white text-xl mb-2 font-roboto">
                                Ditt namn
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full text-white border border-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white placeholder-white"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder='Skriv ditt namn här...'
                                required
                                aria-required="true"
                            />
                        </div>
                        
                        <div className="mb-6">
                            <label htmlFor="message" className="block text-white text-xl mb-2 font-roboto">
                                Din hälsning
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                className="w-full border border-white px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-white placeholder-white"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder='Skriv din hälsning här...'
                                required
                                aria-required="true"
                            ></textarea>
                        </div>
                        
                        <div className="flex justify-center">
                            <button
                                type="submit"
                                className="border-2 border-white rounded-full px-8 py-3 text-white hover:bg-white hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary focus:ring-white font-roboto text-lg"
                            >
                                Skicka hälsning
                            </button>
                        </div>
                    </form>
                </div>
                
                {greetings.length > 0 && (
                    <div className="mt-12" role="region" aria-labelledby="greetings-heading">
                        <h3 id="greetings-heading" className="text-3xl text-left font-roboto text-white font-light mb-6">
                            Hälsningar
                        </h3>
                        
                        <div className="space-y-6">
                            {greetings.map((greeting) => (
                                <div 
                                    key={greeting.id} 
                                    className="p-6 border-2 border-white"
                                    role="article"
                                    aria-labelledby={`greeting-${greeting.id}-name`}
                                >
                                    <div className="flex justify-between items-center mb-3">
                                        <h4 
                                            id={`greeting-${greeting.id}-name`} 
                                            className="text-white text-xl font-roboto"
                                        >
                                            {greeting.name}
                                        </h4>
                                        <time 
                                            dateTime={new Date(greeting.date).toISOString().split('T')[0]} 
                                            className="text-white/70 text-sm"
                                        >
                                            {greeting.date}
                                        </time>
                                    </div>
                                    <p className="text-white font-roboto">
                                        {greeting.message}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </PageContainer>
    );
};

export default Write;