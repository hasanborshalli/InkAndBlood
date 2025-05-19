import { FacebookIcon, InstagramIcon } from "lucide-react";
import { TikTokIcon } from "./TiktokIcon";
import { WhatsAppIcon } from "./WhatsappIcon";
export const Footer = () => {
    const currentYear = new Date().getFullYear();
    const socialLinks = [
        {
            name: "فيسبوك",
            icon: <FacebookIcon size={20} />,
            href: "https://www.facebook.com/share/1G1CvXNVqn/",
        },
        {
            name: "انستغرام",
            icon: <InstagramIcon size={20} />,
            href: "https://www.instagram.com/journaliste_eliane_issrawi?igsh=MXN4N2kxdG9wcW9waw==",
        },

        {
            name: "تيكتوك",
            icon: <TikTokIcon />,
            href: "https://www.tiktok.com/@elianesalimissrawi?_t=ZS-8wLWGvzwut0&_r=1",
        },
        {
            name: "واتساب",
            icon: <WhatsAppIcon />,
            href: "https://wa.me/96171285222",
        },
    ];
    return (
        <footer
            className="w-full bg-[#323E48] text-[#F7F8F8] pt-12 pb-6"
            id="footer"
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div className="md:col-span-2">
                        <h3 className="text-xl font-bold mb-4">
                            على درب الحبر و الدم
                        </h3>
                        <p className="text-[#F7F8F8]/70 mb-6 max-w-md">
                            شكراً لزيارتكم موقعنا. نرحب بكم لاستكشاف أعمالنا
                            والتواصل معنا للتعاون والاستفسارات.
                        </p>
                        <div className="flex items-center space-x-reverse space-x-4 mb-6">
                            {socialLinks.map((link) => (
                                <a
                                    target="_blank"
                                    key={link.name}
                                    href={link.href}
                                    className="text-[#F7F8F8]/70 hover:text-[#F7F8F8] transition-colors"
                                    aria-label={link.name}
                                >
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">روابط سريعة</h4>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="#home"
                                    className="text-[#F7F8F8]/70 hover:text-[#F7F8F8] transition-colors"
                                >
                                    الرئيسية
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#whoarewe"
                                    className="text-[#F7F8F8]/70 hover:text-[#F7F8F8] transition-colors"
                                >
                                    من نحن؟
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#gallery"
                                    className="text-[#F7F8F8]/70 hover:text-[#F7F8F8] transition-colors"
                                >
                                    ألبوم الصور
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#archive"
                                    className="text-[#F7F8F8]/70 hover:text-[#F7F8F8] transition-colors"
                                >
                                    الأرشيف
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#achievements"
                                    className="text-[#F7F8F8]/70 hover:text-[#F7F8F8] transition-colors"
                                >
                                    شهادات حية
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#certificates"
                                    className="text-[#F7F8F8]/70 hover:text-[#F7F8F8] transition-colors"
                                >
                                    تحقيقات
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#articles"
                                    className="text-[#F7F8F8]/70 hover:text-[#F7F8F8] transition-colors"
                                >
                                    المقالات
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#interview"
                                    className="text-[#F7F8F8]/70 hover:text-[#F7F8F8] transition-colors"
                                >
                                    مقابلة صوتية مع الصحافي يزبك وهبه
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#memorial"
                                    className="text-[#F7F8F8]/70 hover:text-[#F7F8F8] transition-colors"
                                >
                                    إلى الاستثنائية المشرقة
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#private"
                                    className="text-[#F7F8F8]/70 hover:text-[#F7F8F8] transition-colors"
                                >
                                    خاص رئيسة التحرير
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">اتصل بنا</h4>
                        <div className="space-y-3">
                            <p className="text-[#F7F8F8]/70 mb-4">
                                لبنان, بيروت
                            </p>
                            <a
                                target="_blank"
                                href="https://wa.me/96171285222"
                                className="text-[#F7F8F8]/70"
                            >
                                ٧١٢٨٥٢٢٢
                            </a>
                        </div>
                    </div>
                </div>
                <div className="border-t border-[#F7F8F8]/20 pt-6 mt-6 text-center text-[#F7F8F8]/50 text-sm">
                    <p>
                        © {currentYear} على درب الحبر و الدم. جميع الحقوق
                        محفوظة.
                    </p>
                </div>
                <div className="text-center">
                    <p
                        style={{
                            direction: "ltr",
                            unicodeBidi: "isolate",
                        }}
                    >
                        Powered By{" "}
                        <a target="_blank" href="https://brndnglb.com">
                            <span
                                style={{
                                    fontFamily: "Archivo Black",
                                    color: "black",
                                }}
                                className="text-[1.5rem]"
                            >
                                Brndng
                            </span>
                            <span
                                className="text-[2.3rem]"
                                style={{
                                    fontFamily: "Archivo Black",
                                    color: "#FF914D",
                                }}
                            >
                                .
                            </span>
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
};
