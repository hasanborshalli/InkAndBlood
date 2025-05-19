import { useEffect, useState } from "react";
import { MenuIcon, XIcon, PenSquareIcon } from "lucide-react";

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "الرئيسية", href: "#home" },
        { name: "من نحن؟", href: "#whoarewe" },
        { name: "ألبوم الصور", href: "#gallery" },
        { name: "الأرشيف", href: "#archive" },
        { name: "شهادات حية", href: "#achievements" },
        { name: "تحقيقات", href: "#certificates" },
        { name: "المقالات", href: "#articles" },
        { name: "مقابلة صوتية مع الصحافي يزبك وهبه", href: "#interview" },
        { name: "إلى الاستثنائية المشرقة", href: "#memorial" },
        { name: "خاص رئيسة التحرير", href: "#private" },
    ];

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${
                isScrolled
                    ? "bg-[#323E48] shadow-md py-2"
                    : "bg-transparent py-4"
            }`}
        >
            <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
                {/* Logo Section */}
                <div className="flex items-center space-x-reverse space-x-3">
                    <PenSquareIcon
                        size={32}
                        className={`${
                            isScrolled ? "text-[#F7F8F8]" : "text-[#323E48]"
                        }`}
                    />
                    <div className="flex flex-col">
                        <h1
                            className={`text-xl font-bold ${
                                isScrolled ? "text-[#F7F8F8]" : "text-[#323E48]"
                            }`}
                        >
                            على درب الحبر و الدم
                        </h1>
                        <span
                            className={`text-xs ${
                                isScrolled
                                    ? "text-[#F7F8F8]/80"
                                    : "text-[#323E48]/80"
                            }`}
                        >
                            مؤسسة إعلامية وثقافية
                        </span>
                    </div>
                </div>

                {/* Always show hamburger menu */}
                <button
                    className={`text-xl ${
                        isScrolled ? "text-[#F7F8F8]" : "text-[#323E48]"
                    }`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
                </button>
            </div>

            {/* Dropdown Menu when open */}
            {isMenuOpen && (
                <div className="bg-[#323E48] shadow-lg">
                    <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-[#F7F8F8]/90 hover:text-[#F7F8F8] font-medium transition-colors block py-2"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
};
