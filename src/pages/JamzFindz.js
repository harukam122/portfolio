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
                    <div className="mx-5">
                        <h4 className="subtitle">&#128081; Hierarchy</h4>
                        <p>
                            The most apparent usability principle I used was hierarchy. The difference in font weights and sizes in both the Album cards and the sidebar are both meant to create a hierarchy that is intuitive and readable for the user. album vs. single info is also contained in a rounded box for quick access to the particular information.
                        </p>
                        <h4 className="subtitle">&#128170;&#127995; User Control</h4>
                        <p>
                            The user is able to reset all selected filters via a single click, giving the user more control/freedom.
                        </p>
                        <h4 className="subtitle">&#128065; Visibility of Status</h4>
                        <p>
                            By making the sorting/filtering options and the favorites icon one of checkboxes, radio buttons, or changing icons, I made sure that the status of the page was clear to the user. If these were simply buttons, the user will have a difficult time understanding the page state.
                        </p>
                    </div>
                </div>

                <hr class="hr"/>

                <div className="container">
                    <h2 className="section-title">Organization of Components &#128221;</h2>
                    <h4 className="mb-2">I used the below components within the App component to organize my code:</h4>
                    <ol className='list list-decimal'>
                        <li className="mb-2"><b>Album:</b> this component represents a card that shows each album's data pulled from the Spotify API.</li>
                        <li><b>Filter:</b> this component is the sidebar containing the filtering and sorting options displayed.</li>
                    </ol>
                </div>

                <hr class="hr"/>

                <div className="container">
                    <h2 className="section-title">Flow of Data &#10024;</h2>
                    <h4 className="mb-2">I pass down the following data through components:</h4>
                    <ol className='list list-decimal'>
                        <li className="mb-2"><b>filters:</b> A dictionary of all the filters and their respective states. This is passed down through the Filters component and used to update the filters' states when a user checks or unchecks a filter.</li>
                        <li className="mb-2"><b>favItems:</b> A list of favorited albums. This is passed through the Album component and used to add an album to the list when favorited by user.</li>
                        <li className="mb-2"><b>totalTracks:</b> The total number of tracks in all favorited albums. This is passed through both the Album and Filters components. The Album component uses it to add/subtract newly favorited or un-favorited album's track number to/from the total. The Filters component uses this data to display under the Favorites filter option.</li>
                        <li><b>musicData/setMusicData:</b> The items within the original data pulled from Spotify (JSON of albums and their information). This is passed through the Filters component and used to sort the data when user selects a sorting option.</li>
                    </ol>
                </div>

                <hr class="hr"/>

                <div className="container justify-center">
                    <h2 className="section-title">Final Product &#128173;</h2>
                    <div className="flex justify-center">
                        <img className="mb-5 mx-4 shadow-xl" src={require("../assets/jamz/jamz-final.gif")} alt="final website gif"/>
                    </div>
                    <div className="flex justify-center">
                        <a className="btn mt-10" href="https://happyquokka123.github.io/jamz-findz/" target="_blank">Take Me to the Page! &#10145;&#65039;</a>
                    </div>
                </div>

                <hr className="hr"/>

                <div className="container justify-center">
                    <h2 className="section-title">Takeaways &#128477;</h2>
                    <p className="mb-2">
                        Through this project, I learned the fundamentals of React, including how components, props, useState, and useEffect work. I definitely learned about the best ways to use useEffect the hard way, as I ran into issues with my useEffect callbacks running on load, but I absolutely love what I ended up with! Especially since it uses real-time data pulled from Spotify, I think this web app could bring value to users in a way that is user-friendly!
                    </p>
                </div>
            </div>
        </main>
    )
}

export default JamzFindz;