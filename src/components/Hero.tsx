export const Hero = () => {
    return (
        <section id="home" className="w-full bg-[#323E48] pt-24 pb-16">
            <div className="container mx-auto px-4 md:px-6 py-12 md:py-20 flex flex-col md:flex-row items-center justify-between">
                <div className="md:w-1/2 mb-8 md:mb-0">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F7F8F8] mb-4">
                        على درب الحبر و الدم
                    </h1>
                    <h2 className="text-xl md:text-2xl text-[#F7F8F8]/80 mb-6">
                        مؤسسة إعلامية وثقافية رائدة
                    </h2>
                    <p className="text-[#F7F8F8]/70 max-w-lg mb-8">
                        "على درب الحبر والدم" هو منصة إعلامية مستقلة تسير بخطى
                        ثابتة على درب الحقيقة، ملتزمة بقضايا الإنسان والحرية
                        والعدالة. نؤمن أن الكلمة الحرة مسؤولية، وأن الصحافة ليست
                        فقط رواية للحدث، بل فعل مقاومة وموقف أخلاقي. نغطي
                        القضايا السياسية، والاجتماعية، والحقوقية، برؤية نقدية
                        وضمير حي، منحازين دائماً للضحايا لا للجلادين، ولأصوات
                        الشعوب لا لصخب الأنظمة. نكتب بالحبر، ونستحضر الدم، لنرسم
                        معاً مسار الوعي والتغيير
                    </p>
                    <div className="flex space-x-reverse space-x-4">
                        <a
                            href="#footer"
                            className="bg-[#F7F8F8] hover:bg-[#F7F8F8]/90 text-[#323E48] px-6 py-3 rounded-lg font-medium transition-colors"
                        >
                            تواصل معنا
                        </a>
                        <a
                            href="#archive"
                            className="border border-[#F7F8F8] text-[#F7F8F8] hover:bg-[#F7F8F8]/10 px-6 py-3 rounded-lg font-medium transition-colors"
                        >
                            أرشيف الأعمال
                        </a>
                    </div>
                </div>
                <div className="md:w-1/2 flex justify-center">
                    <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#F7F8F8] shadow-lg">
                        <img
                            src="/img/logo.jpeg"
                            alt="على درب الحبر و الدم"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
