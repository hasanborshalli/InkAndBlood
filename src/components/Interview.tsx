export const Interview = () => {
    return (
        <section
            id="interview"
            className="w-full bg-[#323E48] text-[#F7F8F8] py-20 md:py-28"
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        مقابلة صوتية مع الصحافي يزبك وهبه
                    </h2>
                </div>
                <div className="max-w-4xl mx-auto">
                    <div className="rounded-xl overflow-hidden shadow-2xl w-full h-[200px] md:h-[600px]">
                        <iframe
                            src="https://www.youtube.com/embed/RuYUr5i14cg?si=szB9SktIZx_LNPe8"
                            title="فيديو تذكاري"
                            className="w-full h-full"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};
