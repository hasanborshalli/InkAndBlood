import { useState } from "react";
import { XIcon } from "lucide-react";

export const Archive = () => {
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

    const videoItems = [
        {
            id: 1,
            embedUrl:
                "https://www.youtube.com/embed/-q4994URoJE?si=BkHhc8aRM5n7FGVy",
        },
        {
            id: 2,
            embedUrl:
                "https://www.youtube.com/embed/V-KUe-cAjPA?si=0I1ZM3yUF5kO-cpE",
        },
        {
            id: 3,
            embedUrl:
                "https://www.youtube.com/embed/b7HlTUCg3NQ?si=NL83Drrh0Op1exsH",
        },
        {
            id: 4,
            embedUrl:
                "https://www.youtube.com/embed/6by3fyegAKQ?si=_xecKxQFJ73uB9bx",
        },
    ];

    const openModal = (videoUrl: string) => {
        setSelectedVideo(videoUrl);
        document.body.style.overflow = "hidden";
    };

    const closeModal = () => {
        setSelectedVideo(null);
        document.body.style.overflow = "auto";
    };

    return (
        <section id="archive" className="w-full py-16 md:py-24 bg-[#F7F8F8]">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#323E48] mb-4">
                        الأرشيف
                    </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {videoItems.map((item) => (
                        <div
                            key={item.id}
                            className="relative group cursor-pointer overflow-hidden rounded-xl shadow-md"
                            onClick={() => openModal(item.embedUrl)}
                        >
                            <div className="aspect-video bg-black">
                                <iframe
                                    src={item.embedUrl}
                                    title={`YouTube video ${item.id}`}
                                    className="w-full h-full pointer-events-none"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Video Modal */}
            {selectedVideo && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
                    onClick={closeModal}
                >
                    <div className="relative w-full max-w-4xl aspect-video">
                        <button
                            className="absolute -top-12 right-0 text-white hover:text-gray-300 focus:outline-none"
                            onClick={(e) => {
                                e.stopPropagation();
                                closeModal();
                            }}
                        >
                            <XIcon size={24} />
                        </button>
                        <iframe
                            src={selectedVideo}
                            title="Video Player"
                            className="w-full h-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            onClick={(e) => e.stopPropagation()}
                        ></iframe>
                    </div>
                </div>
            )}
        </section>
    );
};
