// import Swiper core and required modules
import { Navigation, Pagination, Autoplay, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
};

function Personas() {
    return (
        <main className="flex flex-col font-body text-gray-600 text-xl">
            <div className="w-screen sm:h-[60vh] h-[50vh] bg-gradient-to-r from-blue-200 to-pink-100 opacity-80">
                <img
                    alt="project-img"
                    className="p-7 inset-0 w-full h-full object-scale-down object-center"
                    src={require("../assets/redesign/redesign-mockup.png")}
                    />
            </div>
            <div className="sm:max-w-[55%] max-w-[80%] flex flex-col justify-center items-center mx-auto mt-14 mb-10">
                <div className="container mb-16">
                    <h1 className="text-gray-600 text-2xl md:text-4xl font-semibold">Responsive Redesign</h1>
                </div>

                <div className="container">
                    <h2 className="section-title">About &#128269;</h2>
                    <p className="d-inline-block mx-lg-5">
                        The goal of this assignment was to understand, empathize with, and tell the story 
                        of users of a particular interface. To achieve this, I observed and interviewed users 
                        of the Coca Cola drink dispenser placed in the Ratty. Based on the findings, I generated
                        two different personas to best represent the users, and a storyboard to tell one of the personas' story.
                        Scroll down &#11015;&#65039; to read about more details and my findings!
                    </p>
                </div>

                <hr class="hr"/>

                <div className="container">
                    <h2 className="section-title">Interface: Coca Cola Drink Dispenser</h2>
                    <br/>
                    <img id="webpage-img" className="mb-5 mx-4 max-h-[50vh]" src={require("../assets/personas/interface.png")} alt="drink dispenser img"/>
                    <div className="d-inline-block mx-5 mb-8">
                        <h4 className="subtitle">Key Components</h4>
                        <ul className='list'>
                            <li>
                                touch panel
                                <ul className='list'>
                                    <li><b>drink options:</b> allows the user to tap and select various flavors for each option</li>
                                    <li><b>category filter buttons:</b> allows the user to filter via low/no calorie, caffeine free, etc.</li>
                                    <li><b>exclusive flavors button:</b> displays and allows the user to select exclusive flavors not found elsewhere on the interface</li>
                                    <li><b>QR code:</b> the user can scan to pour a drink contact-free</li>
                                </ul>
                            </li>
                            <li><b>ice dispenser:</b> the user can dispense ice by pressing on the metal bar with a cup</li>
                            <li><b>drink dispenser:</b> the user can dispense the selected drink by pressing on the metal part with a cup</li>
                        </ul>
                    </div>
                </div>

                <hr class="hr"/>

                <div className="container">
                    <h2 className="section-title">Key Issues &#128477;&#65039;</h2>
                    <br/>
                    <div className="d-inline-block mx-5">
                        <h4>&#128077; Responsiveness</h4>
                        <img id="webpage-img" className="items-center col-7 m-4" src={require("../assets/redesign/bgc-resp.gif")} alt="bagel gourmet café responsiveness gif"/>
                        <ul className="list">
                            <li>When the screen shrinks, the page simply gets cut off horizontally, so you have to manually scroll to the end. On smaller devices, the page display simply shrinks, making the lettering too small to read</li>
                        </ul>
                        <br/>
                        <h4 className="subtitle mt-3">&#129504; Conceptual vs Mental Model</h4>
                        <br/>
                        <ul className="list">
                            <li>Some style choices like underlining make certain texts seem like links while they aren’t</li>
                            <li>Navigation buttons change location based on the page a user is on. The user's mental model will likely expect it to stay in one location.</li>
                            <li>Clicking on the logo does not take the user back to home page, which is now a part of most mental models of modern websites</li>

                        </ul>
                        <br/>
                        <h4 className="subtitle mt-3">&#127912; Visual Design & Usability</h4>
                        <br/>
                        <ul className="list">
                            <li>Bottom buttons blend in with the background, and so does the link randomly placed at the top left corner</li>
                            <li>Layout of prices are offset with varying styles––some bolded, some not &#10145;&#65039; very hard to read or compare prices</li>
                            <li>Hard to tell which options belong to what menu item, since the only distinctions are underlined vs. non-underlined (sometimes italics and/or bolded) 😵‍💫</li>
                            <li>The difference in font styles––sometimes serif, other times sans serif––of the same information type (i.e. availanble flavors/toppings) may leave the user confused what the difference could be</li>
                            <li>Despite all the available space on the right, all contents are shifted to the left with very tight columns and small text. The margins are also missing in some text displays.</li>
                            <li>The color scheme in some places offers little contrast, making elements like the links at the bottom very difficult to read</li>
                        </ul>
                        <br/>
                        <h4 className="subtitle mt-3">&#128155; Accessibility</h4>
                        <br/>
                        <ul className="list">
                            <li>There is no alt text for the images, so screen readers cannot read them</li>
                            <li>Only uses h4 and h5 elements, and no h1 is found &#10145;&#65039; not enough hierarchy</li>
                            <li>Language is never identified</li>
                            <li>Poor color contrast</li>
                            <li>There are empty headings, which can confuse screen readers</li>
                            <li>Missing or uninformative page title</li>
                            <li>No page regions are identified</li>
                            <li>Non-link texts are underlined</li>
                            <li>Texts overall are very small</li>
                            <li>Layout tables are present: can cause reading/navigation order issues</li>
                        </ul>
                    </div>
                    <h4 className="blurb mt-5">...so, how could I make this better?</h4>
                </div>

                <hr class="hr"/>

                <div className="container">
                    <h2 className="section-title">Lo-Fi Prototypes &#128221;</h2>
                    <br/>
                    <h4 className="blurb">First, I created three wireframes. <br/> Below are my lo-fi for laptop, iPad, and iPhone, created using Balsamiq.</h4>
                    <br/>
                    <div className="d-inline-block text-start mx-5 mb-5">
                        <h4 className="subtitle mt-3">&#128161; Main Focus</h4>
                        <br/>
                        <ul className='list'>
                            <li>poor readability due to confusing fonts, font styles, and small text size</li>
                            <li>poor usability due to its menu layout</li>
                            <li>lack of responsiveness, especially when resizing a window</li>
                            <li>accessibility issues––in particular the lack of alt tags & hierarchy, small text, etc.</li>
                        </ul>
                    </div>
                    <br/>
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
                        scrollbar={{ draggable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        className="w-full h-full">
                        <SwiperSlide>
                            <img className="items-center drop-shadow-xl" src={require("../assets/redesign/lofi-laptop.png")} alt="laptop lofi prototype"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="items-center drop-shadow-xl" src={require("../assets/redesign/lofi-ipad.png")} alt="ipad lofi prototype"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="items-center drop-shadow-xl" src={require("../assets/redesign/lofi-iphone.png")} alt="iphone lofi prototype"/>
                        </SwiperSlide>
                    </Swiper>
                </div>

                <hr class="hr"/>

                <div className="container">
                    <h2 className="section-title">Hi-Fi Prototypes &#10024;</h2>
                    <br/>
                    <h4 className="blurb">Next, I moved onto my hi-fi prototypes! <br/> Below are my UI style guide and my hi-fi for laptop, iPad, and iPhone.</h4>
                    <br/>
                    <h4 className="subtitle mt-3">Style Guide</h4>
                    <img className="items-center w-1/2 my-5 drop-shadow-xl" src={require("../assets/redesign/style-guide.png")} alt="ui style guide"/>
                    <br/>
                    <h4 className="subtitle mt-3">Prototypes</h4>
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
                        scrollbar={{ draggable: true }}
                        className="w-full h-full">
                        <SwiperSlide>
                            <img className="items-center drop-shadow-xl" src={require("../assets/redesign/hifi-laptop.png")} alt="laptop hifi prototype"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="items-center drop-shadow-xl" src={require("../assets/redesign/hifi-ipad.png")} alt="ipad hifi prototype"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="items-center drop-shadow-xl" src={require("../assets/redesign/hifi-iphone.png")} alt="iphone hifi prototype"/>
                        </SwiperSlide>
                    </Swiper>
                </div>

                <hr class="hr"/>

                <div className="container justify-center mb-36">
                    <h2 className="section-title">Takeaways &#128477;</h2>
                    <br/>
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

                <div className="flex justify-center text-base">
                    <button onClick={scrollToTop}>back to the top &#128070;</button>
                </div>
            </div>
        </main>
    )
}

export default Personas;