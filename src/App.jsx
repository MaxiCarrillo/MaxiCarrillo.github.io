import { HomeSection, Header, ExperienceSection, ProjectSection, ScrollToTop, ApplicationSection } from './components';

export const App = () => {
    return (
        <>
            <main>
                <HomeSection />
                <div className="spacer layer"></div>
                <ApplicationSection />
                <ExperienceSection />
                <ProjectSection />
            </main>
            <footer className="footer">
                <p>© 2024 Maxdev</p>
            </footer>
            <ScrollToTop />
        </>
    );
};
