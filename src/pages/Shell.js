import { useEffect } from 'react';

function Shell() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <main className="flex flex-col body-text">
            <div className="w-screen sm:h-[60vh] h-[50vh] bg-gradient-to-r from-blue-200 to-pink-100 opacity-80">
                <img
                    alt="project-img"
                    className="p-7 inset-0 w-full h-full object-scale-down object-center"
                    src={require("../assets/shell/shell.png")}
                    />
            </div>
            <div className="sm:max-w-[55%] max-w-[80%] flex flex-col justify-center items-center mx-auto mt-14 mb-10">
                <div className="container mb-16">
                    <h1 className="text-gray-600 text-2xl md:text-4xl font-semibold">Shell</h1>
                </div>

                <div className="container">
                    <h2 className="section-title">About &#128269;</h2>
                    <p>
                        In this project for CS33: Intro to Computer Systems, I created a Linux style shell that supports basic commands like <i>cd</i>, <i>rm</i>, <i>ln</i>, and <i>exit</i>, as well as redirection.
                        It also handles signals like SIGINT and SIGTSTP, and supports job control via the <i>fg</i> and <i>bg</i> commands.
                        Scroll down &#11015;&#65039; to learn more!
                    </p>
                </div>

                <hr className="hr"/>

                <div className="container">
                    <h2 className="section-title">What it does &#128173;</h2>
                    <l>
                        <li>Continuously reads input from the user until it receives EOF</li>
                        <li>Executes programs and passes the appropriate arguments to those programs</li>
                        <li>Supports <i>cd</i>, <i>rm</i>, <i>ln</i>, and <i>exit</i></li>
                        <li>Supports redirections via &lt;, &gt;, and &gt;&gt;, including both input and output redirection in the same line</li>
                        <li>Handles switching between foreground and background jobs via <i>fg</i> and <i>bg</i></li>
                        <li>Launches a background job when reading <i>&</i> at the end of line input</li>
                        <li>Reaping of any terminated child processes</li>
                        <li>Prints the current backgronud jobs list via <i>jobs</i> command</li>
                        <li>Handles signals like SIGINT and SIGTSTP</li>
                    </l>
                </div>
            </div>
        </main>
    )
}

export default Shell;