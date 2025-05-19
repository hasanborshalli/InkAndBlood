import { useState } from "react";
import { XIcon } from "lucide-react";
export const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const galleryItems = [
        {
            id: 1,
            image: "/img/1.jpeg",
        },
        {
            id: 2,
            image: "/img/2.jpeg",
        },
        {
            id: 3,
            image: "/img/3.jpeg",
        },
        {
            id: 4,
            image: "/img/4.jpeg",
        },
        {
            id: 5,
            image: "/img/5.jpeg",
        },
        {
            id: 6,
            image: "/img/6.jpeg",
        },
        {
            id: 7,
            image: "/img/7.jpeg",
        },
        {
            id: 8,
            image: "/img/8.jpeg",
        },
        {
            id: 9,
            image: "/img/9.jpeg",
        },
        {
            id: 10,
            image: "/img/10.jpeg",
        },
        {
            id: 11,
            image: "/img/11.jpeg",
        },
        {
            id: 12,
            image: "/img/12.jpeg",
        },
        {
            id: 13,
            image: "/img/13.jpeg",
        },
        {
            id: 14,
            image: "/img/14.jpeg",
        },
    ];
    const openModal = (image: string) => {
        setSelectedImage(image);
        document.body.style.overflow = "hidden";
    };
    const closeModal = () => {
        setSelectedImage(null);
        document.body.style.overflow = "auto";
    };
    return (
        <section id="gallery" className="w-full py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#323E48] mb-4">
                        ألبوم الصور
                    </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {galleryItems.map((item) => (
                        <div
                            key={item.id}
                            className="group relative cursor-pointer overflow-hidden rounded-xl shadow-md"
                            onClick={() => openModal(item.image)}
                        >
                            <div className="h-64 md:h-72 overflow-hidden">
                                <img
                                    src={item.image}
                                    alt="gallery image"
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* Image Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
                    onClick={closeModal}
                >
                    <div className="relative max-w-4xl w-full">
                        <button
                            className="absolute -top-12 right-0 text-white hover:text-gray-300 focus:outline-none"
                            onClick={(e) => {
                                e.stopPropagation();
                                closeModal();
                            }}
                        >
                            <XIcon size={24} />
                        </button>
                        <img
                            src={selectedImage}
                            alt="Enlarged view"
                            className="w-full h-auto max-h-[80vh] object-contain"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </div>
                </div>
            )}
        </section>
    );
};
