import { ExternalLinkIcon } from "lucide-react";

export const Achievements = () => {
    const achievements = [
        {
            id: 1,
            title: "شهادات حية",
            description: "المقابلة مع الصحافي الميداني علي الزين",
            url: "/pdf/شهادات حياة.docx",
        },
    ];
    return (
        <section id="achievements" className="w-full py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#323E48] mb-4">
                        شهادات حية
                    </h2>
                </div>
                <div className="max-w-4xl mx-auto">
                    {achievements.map((achievement) => (
                        <div
                            key={achievement.id}
                            className="bg-white rounded-xl p-6 mb-6 shadow-md hover:shadow-lg transition-shadow flex items-center justify-between "
                        >
                            <div>
                                <div className="flex flex-col md:flex-row md:items-center mb-2">
                                    <h3 className="text-xl font-bold text-[#323E48] ml-3">
                                        {achievement.title}
                                    </h3>
                                </div>
                                <p className="text-gray-600">
                                    {achievement.description}
                                </p>
                            </div>
                            <a download href={achievement.url}>
                                <ExternalLinkIcon size={25} className="mr-1" />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
