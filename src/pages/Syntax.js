import { useEffect } from 'react';

function Syntax() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <main className="flex flex-col body-text">
            <div className="w-screen sm:h-[60vh] h-[50vh] bg-gradient-to-r from-blue-200 to-pink-100 opacity-80">
                <img
                    alt="project-img"
                    className="p-7 inset-0 w-full h-full object-scale-down object-center"
                    src={require("../assets/syntax/syntax-mockup-side.png")}
                    />
            </div>
            <div className="sm:max-w-[55%] max-w-[80%] flex flex-col justify-center items-center mx-auto mt-14 mb-10">
                <div className="container mb-16">
                    <h1 className="text-gray-600 text-2xl md:text-4xl font-semibold">Syntax</h1>
                </div>

                <div className="container">
                    <h2 className="section-title">About &#128269;</h2>
                    <p>
                        In this project, I, along with my three groupmates, created a webapp that allows users to practice coding faster via a speed typing game, much like the well-known MonkeyType. 
                        Additionally, our application employs the new ChatGPT API to provide users with a description of the code snippet that they type out.
                        My main role throughout the project revolved mainly around the frontend development/design process, although I also contributed to the backend development.
                        Scroll down &#11015;&#65039; to learn more!
                    </p>
                </div>

                <hr className="hr"/>

                <div className="container">
                    <h2 className="section-title">Goal and Value of Application &#128187;</h2>
                    <p>
                        Whether you're new to coding or are a skilled programmer, there are always new coding languages to be learned, and 
                        room for improvement in your coding speed. With Syntax, a user is not only able to practice typing out various
                        code snippets to grasp the syntax and improve their speed, but also learn about what each displayed code snippet 
                        does via the help of our ChatGPT explanations. Our app makes it all fun by providing a leaderboard and thus an element 
                        of competition among the users.
                        <br/>
                        <br/>
                        Additionally, the user is able to gradually improve on their typing skills due to our original twist on the random walk algorithm 
                        used to provide the next code snippet. Depending on the user's experience level (1-10) which depends on the number of races they complete, 
                        the algorithm will give higher probability to those with higher difficulty levels relative to their experience level.
                    </p>
                </div>

                <hr className="hr"/>

                <div className="container">
                    <h2 className="section-title">Architecture &#128221;</h2>
                    <h4 className="mb-2">We used the following architecture to build Syntax:</h4>
                    <ol className='list list-decimal'>
                        <li className="mb-2"><b>Backend: </b>the backend communicates with the ChatGPT API, Firebase/Firestore, and the frontend.
                        It also performs the graph creation and the random walk algorithm we've developed to select the next code snippet.</li>
                        <li><b>Frontend: </b>the frontend is in communication with the backend API and Firestore (for user authentication).</li>
                    </ol>
                </div>

                <hr className="hr"/>

                <div className="container">
                    <h2 className="section-title">Usability Principles Considered &#128477;&#65039;</h2>
                    <div className="mx-5">
                        <h4 className="subtitle">&#128170;&#127995; User Control</h4>
                        <p>
                            The user is able to select either the dark mode (default) or light mode, giving them more freedom over the visuals of the page.
                        </p>
                        <h4 className="subtitle">&#128065; Aesthetics and Minimalist Design</h4>
                        <p>
                            We aimed for a very minimalistic, yet aesthetically pleasing design, thereby removing any distractions especially when speed-typing.
                        </p>
                    </div>
                </div>

                <hr className="hr"/>

                <div className="container justify-center">
                    <h2 className="section-title">Final Product &#128173;</h2>
                    <div className="flex justify-center">
                        <img className="mb-5 mx-4 shadow-xl" src={require("../assets/syntax/syntax.gif")} alt="final website gif"/>
                    </div>
                    <div className="flex justify-center">
                        <a className="btn mt-10" href="https://syntax-front.vercel.app/" target="_blank">Take Me to the Page! &#10145;&#65039;</a>
                    </div>
                </div>

                <hr className="hr"/>

                <div className="container justify-center">
                    <h2 className="section-title">Takeaways &#128477;</h2>
                    <p className="mb-2">
                        Through this project, I learned to work on a larger scale project with a team, and how to effectively communicate with my teammates. 
                        I found flexibility in all aspects to be especially important, as we had to make a few changes to our original plan due to the time constraint of 3 weeks, 
                        and be able to move in between the frontend/backend teams to help keep our overall progress consistent. Overall, this project was extremely fun and rewarding, 
                        and I'm very proud of what we were able to accomplish in such a short amount of time!
                    </p>
                </div>
            </div>
        </main>
    )
}

export default Syntax;