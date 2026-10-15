import Header from './components/Header.jsx'
import Navbar from './components/Navbar.jsx'
import TeamDetails from './components/TeamDetails.jsx'
import Introduction from './components/Introduction.jsx'
import Storyboard from './components/Storyboard.jsx'
import Significance from './components/Significance.jsx'
import Conclusion from './components/Conclusion.jsx'

export default function App() {
  return (
    <>
      <div className="band" />
      <Header />
      <Navbar />
      <main>
        <TeamDetails />
        <Introduction />
        <Storyboard />
        <Significance />
        <Conclusion />
      </main>
      <div className="band" />
      <footer className="border-t-4 border-double border-gold py-6 text-center text-sm text-bark/70">
        Ajanta Cave Paintings: A Visual Story &mdash; academic project
      </footer>
    </>
  )
}
