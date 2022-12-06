import { useEffect } from "react"

function Personas() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <main className="flex flex-col body-text">
            <div className="w-screen sm:h-[60vh] h-[50vh] bg-gradient-to-r from-blue-200 to-pink-100 opacity-80">
                <img
                    alt="project-img"
                    className="p-7 inset-0 w-full h-full object-scale-down object-center"
                    src={require("../assets/personas/personas.png")}
                    />
            </div>
            <div className="sm:max-w-[55%] max-w-[80%] flex flex-col justify-center items-center mx-auto mt-14 mb-10">
                <div className="container mb-16">
                    <h1 className="text-gray-600 text-2xl md:text-4xl font-semibold">Personas & Storyboard</h1>
                </div>

                <div className="container">
                    <h2 className="section-title">About &#128269;</h2>
                    <p>
                        The goal of this assignment was to understand, empathize with, and tell the story 
                        of users of a particular interface. To achieve this, I observed and interviewed users 
                        of the Coca Cola drink dispenser placed in the Ratty. Based on the findings, I generated
                        two different personas to best represent the users, and a storyboard to tell one of the personas' story.
                        Scroll down &#11015;&#65039; to read about more details and my findings!
                    </p>
                </div>

                <hr className="hr"/>

                <div className="container">
                    <h2 className="section-title">Interface Sketch &#127800;</h2>
                    <h4 className="subtitle">Coca Cola Drink Dispenser</h4>
                    <div className='flex justify-center'>
                        <img id="webpage-img" className="mb-5 mx-4 max-h-[50vh]" src={require("../assets/personas/interface.png")} alt="drink dispenser img"/>
                    </div>
                </div>

                <hr className="hr"/>

                <div className="container">
                    <h2 className="section-title">Research &#128373;&#127995;</h2>
                    <div className="mx-5">
                        <h4 className="subtitle">&#128269; Observations</h4>
                        <ul className="list">
                            <li>Many users seemed accustomed to the way the machine worked.</li>
                            <li>No user was confused as to which dispenser was for ice vs. drinks.</li>
                            <li>Only 1 user paused looking at the various flavors once selecting the drink type.</li>
                            <li>The users who changed their minds tended to pick a drink from the center cluster of drinks.</li>
                            <li>All users went to press the ice dispenser before looking at the digital screen.</li>
                        </ul>
                        <h4 className="subtitle">&#129504; Questions</h4>
                        <ol className="list list-decimal">
                            <li>What was the feature you first noticed?</li>
                            <li>Did you already have a drink in mind coming in?</li>
                            <li>If so, did the design/placement of the drink buttons change your mind at all?</li>
                            <li>Was the flow clear? In other words, was what to do next obvious?</li>
                            <li>Was there anything surprising or unexpected about the interface?</li>
                            <li>Did you notice the buttons on the bottom or the exclusive flavor options?</li>
                        </ol>
                        <h4 className="subtitle">&#128172; Responses</h4>
                        <ul className="list">
                            <li>3 out of the 4 users interviewed answered that the first feature they noticed was the collection of many options and colors on the screen.</li>
                            <li>Some already had a drink in mind, but others changed their mind after looking at the options. Those who changed their minds were not exactly sure whether their decisions were influenced by the placement/design of the drink options.</li>
                            <li>All users found the flow and the expected actions to take very clear and unconfusing. They are also accustomed users of the machine, so not much thinking was required.</li>
                            <li>No surprising elements were found while they were interacting with the interface, but later on, users were surprised to find the filters and the Exclusive Flavors button once looking at the interface closely.</li>
                            <li>3 out of the 4 users never noticed the filters. Most users had also dismissed the Exclusive Flavors button to be an advertisement, as it seemed like a static element similar to the QR code.</li>
                        </ul>
                    </div>
                </div>

                <hr className="hr"/>

                <div className="container">
                    <h2 className="section-title">Personas &#128221;</h2>
                    <h4 className="mb-10">First, I created three wireframes. <br/> Below are my lo-fi for laptop, iPad, and iPhone, created using Balsamiq.</h4>
                    <div className="flex flex-row flex-wrap gap-y-20 justify-between">
                        <div className="md:w-[45%] w-full">
                            <div className="flex justify-center">
                                <img className="rounded-full w-48 h-48 mb-3 border-[6px] border-sky-100" src={require("../assets/personas/user-1.jpg")} alt="persona icon"/>
                            </div>                            
                            <h5 className="subtitle">Sofia Randi</h5>
                            <div className="inline-block">
                                <p>
                                    <ul className="list">
                                        <li>is a Junior at Brown studying computer science</li>
                                        <li>is often busy and doesn't spend long periods of time on meals</li>
                                        <li>likes to be healthy and generally avoids sugary drinks</li>
                                        <li>generally likes having a routine lifestyle and does not like to be out of her comfort zone</li>
                                    </ul>
                                </p>
                            </div>
                            <h5 className="subtitle">Sofia's Empathy Map</h5>
                            <img className="empathy-map" src={require("../assets/personas/empathy-map-1.jpg")} alt="empathy map (persona 1)"/>
                        </div>
                        <div className="md:w-[45%] w-full">
                            <div className="flex justify-center">
                                <img className="rounded-full w-48 h-48 mb-3 border-[6px] border-sky-100" src={require("../assets/personas/user-2.jpg")} alt="persona icon"/>
                            </div>
                            <h5 className="subtitle">Parker Koche</h5>
                            <div className="inline-block">
                                <p>
                                    <ul className="list">
                                        <li>is a Freshman at Brown who is undecided and loves to explore</li>
                                        <li>loves exploring courses in different departments, restaurants in Providence, and new drinks</li>
                                        <li>likes to take time at their meals and enjoy conversations with friends</li>
                                        <li>is usually fickle, and their mind is easily changed</li>
                                    </ul>
                                </p>
                            </div>
                            <h5 className="subtitle">Parker's Empathy Map</h5>
                            <img className="empathy-map" src={require("../assets/personas/empathy-map-2.jpg")} alt="empathy map (persona 2)"/>
                        </div>
                    </div>
                </div>

                <hr className="hr"/>

                <div className="container">
                    <h2 className="section-title">Storyboard &#128173;</h2>
                    <h4>Lastly, below is a storyboard portraying what Parker's usage of the Coca Cola drink dispenser might look like.</h4>
                    <div className='flex justify-center'>
                        <img className="w-full" src={require("../assets/personas/storyboard.png")} alt="storyboard drawing"/>
                    </div>
                </div>

                <hr className="hr"/>

                <div className="container justify-center">
                    <h2 className="section-title">Takeaways &#128477;</h2>
                    <p>
                        Some of the key takeaways and findings of this assignment were...
                        <ul className='list'>
                            <li>The users of the drink dispenser are generally divided into two groups:
                                <ol className='list'>
                                    <li>users who appreciate the various, colorful flavors offered, and are willing to explore different flavors</li>
                                    <li>users who simply want to hydrate and are not willing to spend time exploring other options</li>
                                </ol>
                            </li>
                            <li>Although the first group of users may greatly benefit from the Exclusive Flavors page and the various filters offered, majority of users do not notice their existence.</li>
                            <li>Many users are repeat users, and are by now accustomed to the flow of the interface. Regardless, all interviewed users found the interface to be intuitive.</li>
                        </ul>
                    </p>
                </div>
            </div>
        </main>
    )
}

export default Personas;