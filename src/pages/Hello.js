import { useEffect } from 'react';

// import Swiper core and required modules
import { Navigation, Pagination, Autoplay, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Hello() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <main className="flex flex-col body-text">
            <div className="w-screen sm:h-[60vh] h-[50vh] bg-gradient-to-r from-blue-200 to-pink-100 opacity-80">
                <img
                    alt="project-img"
                    className="p-7 inset-0 w-full h-full object-scale-down object-center"
                    src={require("../assets/hello/hello-mockup.png")}
                    />
            </div>
            <div className="sm:max-w-[55%] max-w-[80%] flex flex-col justify-center items-center mx-auto mt-14 mb-10">
                <div className="container mb-16">
                    <h1 className="text-gray-600 text-2xl md:text-4xl font-semibold">Iterative Design for Hello</h1>
                </div>

                <div className="container">
                    <h2 className="section-title">About &#128269;</h2>
                    <p className="mb-16">
                        Iterative Design is a project we have done as a part of our CSCI1300: User Interface and User Experiences course at Brown University. 
                        Our task was to design an interactive interface for an emerging startup, going through the full process of mocking up a solution to the startup's concept. 
                        We chose Hello as our startup.
                    </p>
                    <div className="flex justify-center">
                        <a href="https://www.ycombinator.com/companies/hello" target="_blank" className="btn">Learn about Hello &#10145;&#65039;</a>
                    </div>
                </div>

                <hr class="hr"/>

                <div className="container">
                    <h2 className="section-title">Sketching and Wireframing &#9999;</h2>
                    <div className="mx-5 mb-8">
                        <h4 className="subtitle">&#129300; Predesign Thinking</h4>
                        <p>
                            Hello is a search engine that is optimized for developers and technical questions. 
                            It answers questions with simple explanations and code snippets from the web instantly. 
                            Hello uses Ai language models to quickly generate answers based on multiple resources.
                        </p>
                        <br/>
                        <p>
                            The intended audience of hello consists of developers and computer science students/ professionals. 
                            They can use hello to receive fast answers to their technical questions. 
                            Because of the coding nature of the startup, we chose to design a desktop interface.
                        </p>
                        <h4 className="subtitle">&#127775; Wireframes</h4>
                        <p className='mb-10'>
                            After the initial sketching, we came up with a new design to demonstrate our startup company's goals in the best way possible. 
                            We wanted our design to be simple, intuitive, and easy to use. 
                            We choose the split screen design to provide all the tools necessary for the developers. 
                            Furthermore, we wanted a clean yet unique look, which separated our startup’s project from other search engines available. 
                            Below is a low-fidelity wireframe of our design.
                        </p>
                        <Swiper
                            // install Swiper modules
                            modules={[Navigation, Pagination, A11y, Autoplay]}
                            spaceBetween={50}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            navigation={true}
                            pagination={{ clickable: true }}
                            centeredSlides={true}
                            scrollbar={{ draggable: true }}
                            onSwiper={(swiper) => console.log(swiper)}
                            className="w-5/6 flex drop-shadow-lg">
                            <SwiperSlide>
                                <img className="border" src={require("../assets/hello/wireframes/wireframe-1.png")} alt="wireframe 1"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className="border" src={require("../assets/hello/wireframes/wireframe-2.png")} alt="wireframe 2"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className="border" src={require("../assets/hello/wireframes/wireframe-3.png")} alt="wireframe 3"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className="border" src={require("../assets/hello/wireframes/wireframe-4.png")} alt="wireframe 4"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className="border" src={require("../assets/hello/wireframes/wireframe-5.png")} alt="wireframe 5"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className="border" src={require("../assets/hello/wireframes/wireframe-6.png")} alt="wireframe 6"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className="border" src={require("../assets/hello/wireframes/wireframe-7.png")} alt="wireframe 7"/>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>

                <hr class="hr"/>

                <div className="container">
                    <h2 className="section-title">Mockups &#9996;&#127995;</h2>
                    <div className="mx-5">
                        <h4 className="subtitle">&#128187; Interactive Hi-Fi Mockup</h4>
                        <p className='mb-10'>
                            Using Figma, we created an interactive high-fidelity prototype. 
                            While making our design, we choose a clean look with minimal distractions. 
                            We chose our fonts to reflect the startup's technical nature, and paid special attention to text hierarchy and color scheme to make our page easy to read and navigate. 
                            By using contrasting colors, such as black text on a blue background, we made the font more visible so that anyone could read the website. 
                            We chose to use icons on our website to express possible actions, such as bookmarking and history, to grab the user's attention and help the users find the content they are looking for. 
                            We made sure to use icons that the user can easily understand. We added a split screen option for users to view ‘Web Answers’ and ‘Hello Answers,’ which are generated simultaneously by hello’s AI algorithm.
                        </p>
                        <Swiper
                            // install Swiper modules
                            modules={[Navigation, Pagination, A11y, Autoplay]}
                            spaceBetween={50}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            navigation={true}
                            pagination={{ clickable: true }}
                            centeredSlides={true}
                            scrollbar={{ draggable: true }}
                            onSwiper={(swiper) => console.log(swiper)}
                            className="w-5/6 flex drop-shadow-lg">
                            <SwiperSlide>
                                <img className="border" src={require("../assets/hello/mockups-before/before-1.png")} alt="mockup 1"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className="border" src={require("../assets/hello/mockups-before/before-2.png")} alt="mockup 2"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className="border" src={require("../assets/hello/mockups-before/before-3.png")} alt="mockup 3"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className="border" src={require("../assets/hello/mockups-before/before-4.png")} alt="mockup 4"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className="border" src={require("../assets/hello/mockups-before/before-5.png")} alt="mockup 5"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className="border" src={require("../assets/hello/mockups-before/before-6.png")} alt="mockup 6"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className="border" src={require("../assets/hello/mockups-before/before-7.png")} alt="mockup 7"/>
                            </SwiperSlide>
                        </Swiper>

                        <h4 className="subtitle">&#128172; Crit Studio</h4>
                        <p className='mb-5'>
                            During Studio time, we asked for peer critiques to identify potential problems with our high-fidelity mockup. Below are some issues that were identified:
                        </p>
                        <ul className="list">
                            <li>What source links lead to should be more</li>
                            <li>We have to have more consistency between different display options</li>
                            <li>There should be a way to go back to home page</li>
                            <li>Hello’s logo should always be on the page</li>
                            <li>There were some problems with the text hierarchy</li>
                            <li>There should be a way to bookmark answers</li>
                            <li>There should be a way to see recently visited pages</li>
                            <li>The split screen icon should be changed to be more explicit</li>
                        </ul>

                        <h4 className="subtitle">&#10024; Updated High-Fidelity Frame</h4>
                        <p className='mb-10'>
                            We made the following changes to our initial high-fi mockup; below, you can find the updated version (go into full screen for best experience).
                        </p>
                        <iframe className="w-full md:h-[70vh] sm:h-[60vh] h-[50vh]" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FlRpub3LGDvUZkBJ05dRESl%2FHello%3Fpage-id%3D0%253A1%26node-id%3D127%253A102%26viewport%3D474%252C312%252C0.1%26scaling%3Dscale-down%26starting-point-node-id%3D127%253A102" allowFullScreen></iframe>
                        <ul className="list">
                            <li>Added a logo, which acts like a “home” button</li>
                            <li>Added a heading to clear up what the source links are</li>
                            <li>Made all “source” buttons explicit link buttons</li>
                            <li>Fixed font hierarchy problems</li>
                            <li>Added text to the “split screen” icon to make it clearer</li>
                            <li>Highlighted the selected display option</li>
                            <li>Changed the “languages” tab to be consistent on all pages</li>
                            <li>Added a bookmark icon next to the answers + Added a bookmarks and search history icon</li>
                            <li>Changed display from “click” to “hover” to see the list of all the programming/markup languages</li>
                        </ul>
                    </div>
                </div>

                <hr class="hr"/>

                <div className="container">
                    <h2 className="section-title">User Testing &#128269;</h2>
                    <div className="mx-5">
                        <h4 className="subtitle">&#128161; The Task</h4>
                        <p className='mb-5'>
                            We asked the users to imagine themselves as a computer science student and search for “how to implement Dijkstra’s algorithm” by following some task instructions which we have given. 
                            We asked them to verbalize their thoughts throughout the testing process. We informed them that they would not be using an actual website but instead testing an interactive mockup.
                        </p>
                        <h4 className="subtitle">&#128129;&#127995; Testing Instructions</h4>
                        <ol className='list list-decimal'>
                            <li>Without leaving the homepage, what are your initial impressions of the design and the functionalities available? Be specific.</li>
                            <li>Start your search by choosing Java as your intended language. Tell us how you selected it. Comment on the intuitivity of this step.</li>
                            <li>Search “How to implement Dijkstra’s algorithm” by clicking the correct suggestion in the dropdown menu.</li>
                            <li>Scroll through the pages. Comment on the dual layout of the search results. Describe in your own words how you might benefit from using this page.</li>
                            <li>Navigate to “Web Answers.” Comment on the design of this page.</li>
                            <li>Change your display to “Hello Answers.” Describe what you expect to find on this page. Comment both on the design and benefits of this view.</li>
                            <li>Go to the first referenced source link.</li>
                        </ol>
                        <h4 className="subtitle">&#10067; Questions</h4>
                        <ul className='list'>
                            <li>What frustrated you most about this site?</li>
                            <li>If you had a magic wand, how would you improve this site?</li>
                            <li>What did you like about the site?</li>
                            <li>How likely are you to recommend this site to a friend or colleague (0 = Not at all likely, and 10 = Very likely)? Why or why not?</li>
                        </ul>
                        <h4 className="subtitle">&#128373;&#127995; Analysis</h4>
                        <p className='mb-5'>Overall, our User Testing results were in line with our expectations. The users didn't have difficulty in completing the tasks and found our design intuitive.</p>
                        <p className='mb-5'><b>Task 1:</b> The users generally understood the layout and purpose of the website just from looking at the homepage. However, the first user mentioned that they would expect there to be a profile button, while the third user mentioned that the design seemed perfect for a developer.</p>
                        <p className='mb-5'><b>Task 2:</b> Based on the feedback given, in the future we would include more available languages in the mockup to give the idea that there would be a lot to choose from. Additionally, we could include a dropdown arrow after a language is chosen from the “see more” dropdown to show that users can change languages if they make a mistake.</p>
                        <p className='mb-5'><b>Task 3:</b> The overall consensus on searching “How to implement Dijkstra’s algorithm” was that it was very easy and intuitive. There was no confusion whatsoever associated with this task.</p>
                        <p className='mb-5'><b>Task 4:</b> Users felt that this task was also very intuitive. However, the first user did not see the need for a web answers section and found the web answers distracting, given that they would be using Hello for quick answers. They can simply use Google if they wanted web answers, so they prefer the web answers to be on the bottom of the page. On the other hand, the second and third users thought that the split screen was effective and helpful, with the third user even noting that this page was “everything I was looking for.”</p>
                        <p className='mb-5'><b>Task 5:</b> Users agreed that the web answers are easy to find. While the first user noted that they liked not having to go through Google, the second and third users preferred some differentiation from Google. The second and third users agreed that the whitespace on the screen can be utilized more, whether by making it full-screen or with more information on each search result.</p>
                        <p className='mb-5'><b>Task 6:</b> User liked the ‘Hello Answers’ more than the ‘Web Answers’. One user mentioned that the found the split screen more useful after seeing both pages. The users also mentioned that the answers generated by the algorithm including the quick answer and the code snippets met their expectations. They appreciated the minimal design of ‘Hello Answers’ page as there were no distractions. One user commented that they wished to see more answers instead of just the quick answer and they suggested that there could be a ‘see all answers’ button to view all the other answers relating to that question. One user found this page great for developers.</p>
                        <p className='mb-5'><b>Task 7:</b> All the users found going to the first referenced source link pretty intuitive and easy.</p>
                    </div>
                </div>

                <hr class="hr"/>

                <div className="container">
                    <h2 className="section-title">Future Considerations &#129300;</h2>
                    <p className='mb-5'>
                        Based on this feedback, we would definitely give less space to the web results. It was mentioned multiple times that the main draw of the platform is the hello answers, so the web answers can be deprioritized since users can just go to Google if they wanted regular search results.
                    </p>
                </div>

                <hr className="hr"/>

                <div className="container justify-center">
                    <h2 className="section-title">Takeaways &#128477;</h2>
                    <p className="mb-2">
                        From this project, I learned the importance of user feedback when designing a product. With two rounds of user inputs, one with peers and one with random testers, we were able to gather various inputs and shed light on places we could improve in our design. I also found that once we had settled on a design, it was difficult to pivot or change the design drastically. However, given user input, we sometimes may need to change directions completely. In the future, I would like to stay as flexible and open as I can to the feedback I receive!
                    </p>
                </div>
            </div>
        </main>
    )
}

export default Hello;