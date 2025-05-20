import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Articles } from "./components/Articles";
import { Achievements } from "./components/Achievements";
import { Certificates } from "./components/Certificates";
import { Gallery } from "./components/Gallery";
import { Memorial } from "./components/Memorial";
import { Footer } from "./components/Footer";
import { WhoAreWe } from "./components/WhoAreWe";
import { Archive } from "./components/Archive";
import { Interview } from "./components/Interview";
import { Private } from "./components/Private";
import Words from "./components/Words";
const HomePage = () => (
    <>
        <Hero />
        <WhoAreWe />
        <Memorial />
        <Gallery />
        <Archive />
        <Achievements />
        <Certificates />
        <Articles />
        <Interview />
        <Private />
        <Words />
    </>
);
export function App() {
    return (
        <Router>
            <div className="min-h-screen bg-white" dir="rtl">
                <Navbar />
                <main className="w-full">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}
