import { HomeSection, Header, ExperienceSection, ProjectSection, ScrollToTop } from "./components"

export const App = () => {
  return (
    <>
      <main>
        <HomeSection />
        <div className="spacer layer"></div>
        <ExperienceSection />
        <ProjectSection />
      </main>
      <footer className="footer">
        <p>© 2024 Maxdev</p>
      </footer>
      <ScrollToTop />
    </>
  )
}
