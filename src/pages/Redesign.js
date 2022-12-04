
function Redesign() {
    return (
        <main className="px-4 pb-24 justify-center">
            
            <div className="mx-auto px-6">
                <div className="p-5">
                    <h1 className="text-slate-700 mb-4 text-2xl md:text-4xl font-semibold mt-2">Responsive Redesign</h1>
                </div>

                <div className="container p-5">
                    <h2 className="section-title">About &#128269;</h2>
                    <p className="d-inline-block mx-lg-5">
                        In this project, I found a website to be improved, identified the key usability and 
                        accessibility issues, created lo-fi and hi-fi prototypes, and developed a 
                        responsive version of the website. Scroll down &#11015;&#65039; to read about more my process and the final product!
                    </p>
                </div>

                <div className="container p-5">
                    <h2 className="section-title">Web Page &#128187;</h2>
                    <br/>
                    <img id="webpage-img" className="mb-5 col-7 mx-4" src={require("../assets/redesign/bgc-website.gif")} alt="bagel gourmet café menu gif"/>
                    <h3>Bagel Gourmet Café &#10145;&#65039; Menu</h3>
                    <div className="d-inline-block mx-5 mb-5">
                        <h4>&#129300; Why?</h4>
                        <p>I chose this website and its Menu page because the design is barely responsive 
                            for smaller screen sizes, and defies much of a user’s mental model when they navigate the website. 
                            It is also far from being accessible and currently unable to adapt to the needs of various users.</p>
                    </div>
                    <a className="btn btn-primary" href="http://bagelgourmetcafe.com/menu.html" target="_blank" role="button">Take Me to the Page &#10145;&#65039;</a>
                </div>

                <hr className="w-5/6 text-slate-700"/>

                <div className="container p-5">
                    <h2 className="section-title">Key Issues &#128477;&#65039;</h2>
                    <br/>
                    <div className="d-inline-block mx-5">
                        <h4>&#128077; Responsiveness</h4>
                        <img id="webpage-img" className="items-center col-7 m-4" src={require("../assets/redesign/bgc-resp.gif")} alt="bagel gourmet café responsiveness gif"/>
                        <ul>
                            <li>When the screen shrinks, the page simply gets cut off horizontally, so you have to manually scroll to the end. On smaller devices, the page display simply shrinks, making the lettering too small to read</li>
                        </ul>
                        <br/>
                        <h4 className="mt-3">&#129504; Conceptual vs Mental Model</h4>
                        <br/>
                        <ul>
                            <li>Some style choices like underlining make certain texts seem like links while they aren’t</li>
                            <li>Navigation buttons change location based on the page a user is on. The user's mental model will likely expect it to stay in one location.</li>
                            <li>Clicking on the logo does not take the user back to home page, which is now a part of most mental models of modern websites</li>

                        </ul>
                        <br/>
                        <h4 className="mt-3">&#127912; Visual Design & Usability</h4>
                        <br/>
                        <ul>
                            <li>Bottom buttons blend in with the background, and so does the link randomly placed at the top left corner</li>
                            <li>Layout of prices are offset with varying styles––some bolded, some not &#10145;&#65039; very hard to read or compare prices</li>
                            <li>Hard to tell which options belong to what menu item, since the only distinctions are underlined vs. non-underlined (sometimes italics and/or bolded) 😵‍💫</li>
                            <li>The difference in font styles––sometimes serif, other times sans serif––of the same information type (i.e. availanble flavors/toppings) may leave the user confused what the difference could be</li>
                            <li>Despite all the available space on the right, all contents are shifted to the left with very tight columns and small text. The margins are also missing in some text displays.</li>
                            <li>The color scheme in some places offers little contrast, making elements like the links at the bottom very difficult to read</li>
                        </ul>
                        <br/>
                        <h4 className="mt-3">&#128155; Accessibility</h4>
                        <br/>
                        <ul>
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
                        <p>I thought these accessibility alerts and findings were accurate. In total, I found there to be 6 Errors, 13 Contrast Errors,
                            149 Alerts, 52 null/empty alternative text, and 0 ARIA. Overall, this website was not nearly accessible as we would like it to be.</p>
                    </div>
                    <h4 className="blurb mt-5">...so, how could I make this better?</h4>
                </div>

                <hr className="w-full"/>

                <div className="container p-5">
=                    <h2 className="section-title">Lo-Fi Prototypes &#128221;</h2>
                    <br/>
                    <h4 className="blurb">first, I created three wireframes. <br/> below are my lo-fi for laptop, iPad, and iPhone, created using Balsamiq.</h4>
                    <br/>
                    <div className="d-inline-block text-start mx-5 mb-5">
                        <p >Here, I focused mainly on these key issues:</p>
                        <ul>
                            <li>poor readability due to confusing fonts, font styles, and small text size</li>
                            <li>poor usability due to its menu layout &#10145;&#65039;
                                <ul>
                                    <li>difficult to distinguish between menu categories</li>
                                    <li>need to scroll through the entire page to find a menu category</li>
                                    <li>difficult to read or compare prices</li>
                                </ul>  
                            </li>
                            <li>lack of responsiveness, especially when resizing a window</li>
                            <li>accessibility issues––in particular the lack of alt tags & hierarchy, small text, etc.</li>
                        </ul>
                    </div>
                    <img className="items-center col-12" src={require("../assets/redesign/lofi-laptop.png")} alt="laptop lofi prototype"/>
                    <img className="items-center col-12" src={require("../assets/redesign/lofi-ipad.png")} alt="ipad lofi prototype"/>
                    <img className="items-center col-11" src={require("../assets/redesign/lofi-iphone.png")} alt="iphone lofi prototype"/>
                </div>

                <hr className="w-full"/>

                <div className="container p-5">
                    <h2 className="section-title">Hi-Fi Prototypes &#10024;</h2>
                    <br/>
                    <h4 className="blurb">next, I moved onto my hi-fi prototypes! <br/> below are my UI style guide and my hi-fi for laptop, iPad, and iPhone.</h4>
                    <img className="items-center w-1/2 my-5" src={require("../assets/redesign/style-guide.png")} alt="ui style guide"/>
                    <img className="items-center col-10" src={require("../assets/redesign/hifi-laptop.png")} alt="laptop hifi prototype"/>
                    <img className="items-center col-12" src={require("../assets/redesign/hifi-ipad.png")} alt="ipad hifi prototype"/>
                    <img className="items-center col-12" src={require("../assets/redesign/hifi-iphone.png")} alt="iphone hifi prototype"/>
                </div>

                <hr className="w-full"/>

                <div className="container p-5 justify-center">
                    <h2 className="section-title">Final Product &#128173;</h2>
                    <br/>
                    <h4 className="blurb">...and here is what I ended up with!</h4>
                    <div>
                        <img className="mb-5 col-7 mx-4" src={require("../assets/redesign/final-product.gif")} alt="final redesigned website gif"/>
                    </div>
                    <a className="btn btn-primary" href="https://happyquokka123.github.io/bagel-gourmet-redesign/" target="_blank" role="button">Take Me to the New & Improved Page! &#10145;&#65039;</a>
                </div>
            </div>
        </main>
    )
}

export default Redesign;