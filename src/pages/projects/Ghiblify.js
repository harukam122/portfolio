import { useEffect } from 'react';

function Ghiblify() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <main className="flex flex-col body-text">
            <div className="w-screen sm:h-[60vh] h-[50vh] bg-gradient-to-r from-blue-200 to-pink-100 opacity-80">
                <img
                    alt="project-img"
                    className="p-7 inset-0 w-full h-full object-scale-down object-center"
                    src={require("../../assets/ghiblify/ghiblify.png")}
                    />
            </div>
            <div className="sm:max-w-[55%] max-w-[80%] flex flex-col justify-center items-center mx-auto mt-14 mb-10">
                <div className="container mb-16">
                    <h1 className="text-gray-600 text-2xl md:text-4xl font-semibold">Ghiblify</h1>
                </div>

                <div className="container">
                    <h2 className="section-title">About &#128269;</h2>
                    <p>
                        Ghiblify was my group final project for Deep Learning.
                        In this project, our objective was to update the artistic style of a given image to resemble that of Studio Ghibli animations. 
                        To achieve this, we worked off of a paper titled “Image Style Transfer Using Convolutional Neural Networks” by Gatys et al.(2016), 
                        which introduces a style/content extraction and recombination methods of natural images. 
                        The paper’s primary objective was to demonstrate how the algorithm can be used to transfer artistic style of famous works of art, 
                        such as Van Gogh’s paintings, onto arbitrary photographs. While this paper focuses on Van Gogh’s works, we aimed to fine-tune the model for Studio Ghibli images.
                        Scroll down &#11015;&#65039; to learn more!
                    </p>
                </div>

                <div className="flex justify-center">
                    <a className="btn mt-10" href="https://github.com/harukam122/ghiblifiy/blob/main/ghiblify-poster.pdf" target="_blank">See Results &#10145;&#65039;</a>
                </div>

                <hr className="hr"/>

                <div className="container">
                    <h2 className="section-title">Methodology &#128173;</h2>
                    We used a pre-trained Convolutional Neural Network (CNN) called VGG-19 for feature extraction. 
                    To define the content and style representations, we use the intermediate layers of this VGG-19 model, 
                    whose early layers capture basic features like edges, textures, and patterns, while the later layers 
                    capture more complex and abstract features like object parts. By accessing these intermediate layers, 
                    we can describe the content and style of input images.
                    <br/><br/>
                    We represent the style of an image using a gram matrix, which captures the distribution of features 
                    across different feature maps. This matrix allows us to extract the style information and apply it to 
                    a new image.
                    <br/><br/>
                    To create the new image, we use a feed-forward neural network. The network takes an input image and 
                    generates an output image that minimizes the mean square error between the features of the input image 
                    and the content target, and the gram matrices of the output image and the style target. 
                    We set the style and content target values, then run gradient descent to optimize the output image. 
                    The result is a new image that combines the content of the input image with the style of the reference image.
                </div>

                <div className="flex justify-center">
                    <a className="btn mt-10" href="https://github.com/harukam122/ghiblifiy/blob/main/ghiblify.ipynb" target="_blank">See Codebase &#10145;&#65039;</a>
                </div>
            </div>
        </main>
    )
}

export default Ghiblify;