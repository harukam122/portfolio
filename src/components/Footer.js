
export default function Footer() {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <footer className="flex justify-center text-base mt-24 mb-16">
            <button onClick={scrollToTop}>back to the top &#128070;</button>
        </footer>
    )
}