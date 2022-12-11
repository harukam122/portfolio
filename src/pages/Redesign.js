import { useEffect } from 'react';

// import Swiper core and required modules
import { Navigation, Pagination, Autoplay, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Redesign() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    
    return (
        <main className="flex flex-col body-text">
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
                    <p>
                        In this project, I found a website to be improved, identified the key usability and 
                        accessibility issues, created lo-fi and hi-fi prototypes, and developed a 
                        responsive version of the website. Scroll down &#11015;&#65039; to read about more my process and the final product!
                    </p>
                </div>

                <hr class="hr"/>

                <div className="container">
                    <h2 className="section-title">Web Page &#128187;</h2>
                    <br/>
                    <img id="webpage-img" className="mb-5 mx-4" src={require("../assets/redesign/bgc-website.gif")} alt="bagel gourmet café menu gif"/>
                    <div className="d-inline-block mx-5 mb-8">
                        <h4 className="subtitle">&#129300; Why?</h4>
                        <p>I chose Bagel Gourmet Café's website and its Menu page to redesign, because the design is barely responsive 
                            for smaller screen sizes, and defies much of a user’s mental model when they navigate the website. 
                            It is also far from being accessible and currently unable to adapt to the needs of various users.</p>
                    </div>
                    <div className="flex justify-center">
                        <a href="http://bagelgourmetcafe.com/menu.html" target="_blank" className="btn w-44 mt-8">Take Me to the Original Page &#10145;&#65039;</a>
                    </div>
                </div>

                <hr class="hr"/>

                <div className="container">
                    <h2 className="section-title">Key Issues &#128477;&#65039;</h2>
                    <div className="d-inline-block mx-5">
                        <h4 className="subtitle">&#128077; Responsiveness</h4>
                        <img id="webpage-img" className="items-center m-4" src={require("../assets/redesign/bgc-resp.gif")} alt="bagel gourmet café responsiveness gif"/>
                        <ul className="list">
                            <li className="mb-1">When the screen shrinks, the page simply gets cut off horizontally, so you have to manually scroll to the end. On smaller devices, the page display simply shrinks, making the lettering too small to read</li>
                        </ul>
                        <h4 className="subtitle">&#129504; Conceptual vs Mental Model</h4>
                        <ul className="list">
                            <li className="mb-1">Some style choices like underlining make certain texts seem like links while they aren’t</li>
                            <li className="mb-1">Navigation buttons change location based on the page a user is on. The user's mental model will likely expect it to stay in one location.</li>
                            <li className="mb-1">Clicking on the logo does not take the user back to home page, which is now a part of most mental models of modern websites</li>

                        </ul>
                        <h4 className="subtitle">&#127912; Visual Design & Usability</h4>
                        <ul className="list">
                            <li className="mb-1">Bottom buttons blend in with the background, and so does the link randomly placed at the top left corner</li>
                            <li className="mb-1">Layout of prices are offset with varying styles––some bolded, some not &#10145;&#65039; very hard to read or compare prices</li>
                            <li className="mb-1">Hard to tell which options belong to what menu item, since the only distinctions are underlined vs. non-underlined (sometimes italics and/or bolded) 😵‍💫</li>
                            <li className="mb-1">The difference in font styles––sometimes serif, other times sans serif––of the same information type (i.e. availanble flavors/toppings) may leave the user confused what the difference could be</li>
                            <li className="mb-1">Despite all the available space on the right, all contents are shifted to the left with very tight columns and small text. The margins are also missing in some text displays.</li>
                            <li className="mb-1">The color scheme in some places offers little contrast, making elements like the links at the bottom very difficult to read</li>
                        </ul>
                        <h4 className="subtitle">&#128155; Accessibility</h4>
                        <ul className="list">
                            <li className="mb-1">There is no alt text for the images, so screen readers cannot read them</li>
                            <li className="mb-1">Only uses h4 and h5 elements, and no h1 is found &#10145;&#65039; not enough hierarchy</li>
                            <li className="mb-1">Language is never identified</li>
                            <li className="mb-1">Poor color contrast</li>
                            <li className="mb-1">There are empty headings, which can confuse screen readers</li>
                            <li className="mb-1">Missing or uninformative page title</li>
                            <li className="mb-1">No page regions are identified</li>
                            <li className="mb-1">Non-link texts are underlined</li>
                            <li className="mb-1">Texts overall are very small</li>
                            <li className="mb-1">Layout tables are present: can cause reading/navigation order issues</li>
                        </ul>
                    </div>
                    <h4 className="mt-5">...so, how could I make this better?</h4>
                </div>

                <hr class="hr"/>

                <div className="container">
                    <h2 className="section-title">Lo-Fi Prototypes &#128221;</h2>
                    <h4>First, I created three wireframes. <br/> Below are my lo-fi for laptop, iPad, and iPhone, created using Balsamiq.</h4>
                    <div className="d-inline-block text-start mx-5">
                        <h4 className="subtitle">&#128161; Main Focus</h4>
                        <ul className='list'>
                            <li className="mb-1">poor readability due to confusing fonts, font styles, and small text size</li>
                            <li className="mb-1">poor usability due to its menu layout</li>
                            <li className="mb-1">lack of responsiveness, especially when resizing a window</li>
                            <li className="mb-1">accessibility issues––in particular the lack of alt tags & hierarchy, small text, etc.</li>
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
                    <h4>Next, I moved onto my hi-fi prototypes! <br/> Below are my UI style guide and my hi-fi for laptop, iPad, and iPhone.</h4>
                    <h4 className="subtitle">Style Guide</h4>
                    <div className='flex justify-center'>
                        <img className="items-center w-1/2 my-5 drop-shadow-xl" src={require("../assets/redesign/style-guide.png")} alt="ui style guide"/>
                    </div>
                    <h4 className="subtitle">Prototypes</h4>
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

                <div className="container justify-center">
                    <h2 className="section-title">Final Product &#128173;</h2>
                    <br/>
                    <div className="flex justify-center">
                        <img className="mb-5 mx-4" src={require("../assets/redesign/final-product.gif")} alt="final redesigned website gif"/>
                    </div>
                    <div className="flex justify-center">
                        <a className="btn w-52 mt-10" href="https://happyquokka123.github.io/bagel-gourmet-redesign/" target="_blank">Take Me to the New & Improved Page! &#10145;&#65039;</a>
                    </div>
                </div>

                <hr className="hr"/>

                <div className="container justify-center">
                    <h2 className="section-title">Takeaways &#128477;</h2>
                    <p className="mb-2">
                        Through this project, I was able to learn the general flow of how a UI/UX designer might approach redesigning a website. It was definitely not easy learning to align elements in the way I wanted, but the final result is a very fulfilling one for sure! Given the improvements from the original to the redesigned website, the significance of accessibility, usability, and memorability became even more apparent to me. Overall, I'm glad I was able to learn some crucial skills like setting breakpoints and using Bootstrap from this assignment :D
                    </p>
                </div>
            </div>
        </main>
    )
}

export default Redesign;