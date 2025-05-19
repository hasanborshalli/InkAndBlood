import { ExternalLinkIcon } from "lucide-react";
export const Private = () => {
    const newsItems = [
        {
            id: 1,
            title: "اسمحيلي يا هدى",
            url: "/pdf/اسمحيلي يا هدى.docx",
        },
        {
            id: 2,
            title: "الساعة 6 مساءً رتبة",
            url: "/pdf/الساعة 6 مساءً رتبة.docx",
        },
        {
            id: 3,
            title: "إلى الهاوية در",
            url: "/pdf/إلى الهاوية در.docx",
        },
        {
            id: 4,
            title: "الى ايليو",
            url: "/pdf/الى ايليو.docx",
        },
        {
            id: 5,
            title: "بلدي لبنان",
            url: "/pdf/بلدي لبنان.docx",
        },
        {
            id: 6,
            title: "بيروت",
            url: "/pdf/بيروت.docx",
        },
        {
            id: 7,
            title: "دمعة وطن",
            url: "/pdf/دمعة وطن.docx",
        },
        {
            id: 9,
            title: "مسيرتي",
            url: "/pdf/مسيرتي_052755.docx",
        },
    ];
    return (
        <section id="private" className="w-full bg-white py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#323E48] mb-4">
                        خاص رئيسة التحرير
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {newsItems.map((news) => (
                        <div
                            key={news.id}
                            className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition-shadow border border-gray-100"
                        >
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-[#323E48] mb-2">
                                    {news.title}
                                </h3>

                                <a
                                    download
                                    href={news.url}
                                    className="flex items-center gap-5 text-[#323E48] font-medium hover:text-[#323E48]/80"
                                >
                                    <ExternalLinkIcon
                                        size={16}
                                        className="mr-1"
                                    />{" "}
                                    تحميل الملف
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
