import { useEffect } from 'react';

function JamzFindz() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <main className="flex flex-col body-text">
            <div className="w-screen sm:h-[60vh] h-[50vh] bg-gradient-to-r from-blue-200 to-pink-100 opacity-80">
                <img
                    alt="project-img"
                    className="p-7 inset-0 w-full h-full object-scale-down object-center"
                    src={require("../assets/jamz/jamz-mockup.png")}
                    />
            </div>
            <div className="sm:max-w-[55%] max-w-[80%] flex flex-col justify-center items-center mx-auto mt-14 mb-10">
                <div className="container mb-16">
                    <h1 className="text-gray-600 text-2xl md:text-4xl font-semibold">Jamz Findz</h1>
                </div>

                <div className="container">
                    <h2 className="section-title">About &#128269;</h2>
                    <p>
                        The focus of this project was to gain a better grasp of frontend development, so this project involved less of a design-oriented process. 
                        For my website, I created a page where users can browse through the newest releases from Spotify.
                        Scroll down &#11015;&#65039; to learn more!
                    </p>
                </div>

                <hr class="hr"/>

                <div className="container">
                    <h2 className="section-title">Goal and Value of Application &#128187;</h2>
                    <p>
                        This application allows the user to browse through the most recently released albums on Spotify 
                        based on its release date, whether it's a single or an album, and find out the number of tracks in each! 
                        The user can also add albums to favorites and find out the total number of tracks in their favorites at a glance.
                    </p>
                </div>

                <hr class="hr"/>

                <div className="container">
                    <h2 className="section-title">Usability Principles Considered &#128477;&#65039;</h2>
                    <div className="d-inline-block mx-5">
                        <h4 className="subtitle">&#128077; Hierarchy</h4>
                        <p>
                            The most apparent usability principle I used was hierarchy. The difference in font weights and sizes in both the Album cards and the sidebar are both meant to create a hierarchy that is intuitive and readable for the user. album vs. single info is also contained in a rounded box for quick access to the particular information.
                        </p>
                        <h4 className="subtitle">&#129504; User Control</h4>
                        <p>
                            The user is able to reset all selected filters via a single click, giving the user more control/freedom.
                        </p>
                        <h4 className="subtitle">&#127912; Visibility of Status</h4>
                        <p>
                            By making the sorting/filtering options and the favorites icon one of checkboxes, radio buttons, or changing icons, I made sure that the status of the page was clear to the user. If these were simply buttons, the user will have a difficult time understanding the page state.
                        </p>
                    </div>
                </div>

                <hr class="hr"/>

                <div className="container">
                    <h2 className="section-title">Organization of Components &#128221;</h2>
                    <h4>I used the below components within the App component to organize my code:</h4>
                    <ol className='list list-decimal'>
                        <li><b>Album:</b> this component represents a card that shows each album's data pulled from the Spotify API.</li>
                        <li><b>Filter:</b> this component is the sidebar containing the filtering and sorting options displayed.</li>
                    </ol>
                </div>

                <hr class="hr"/>

                <div className="container">
                    <h2 className="section-title">Flow of Data &#10024;</h2>
                    <h4>Next, I moved onto my hi-fi prototypes! <br/> Below are my UI style guide and my hi-fi for laptop, iPad, and iPhone.</h4>
                    <h4 className="subtitle">Style Guide</h4>
                    <div className='flex justify-center'>
                        <img className="items-center w-1/2 my-5 drop-shadow-xl" src={require("../assets/redesign/style-guide.png")} alt="ui style guide"/>
                    </div>
                </div>

                <hr class="hr"/>

                <div className="container justify-center">
                    <h2 className="section-title">Final Product &#128173;</h2>
                    <br/>
                    <div>
                        <img className="mb-5 mx-4" src={require("../assets/redesign/final-product.gif")} alt="final redesigned website gif"/>
                    </div>
                    <div className="flex justify-center">
                        <a className="btn w-52 mt-10" href="https://happyquokka123.github.io/bagel-gourmet-redesign/" target="_blank">Take Me to the New & Improved Page! &#10145;&#65039;</a>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default JamzFindz;