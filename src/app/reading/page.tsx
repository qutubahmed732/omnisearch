import Navbar from "./components/reading-nav"
import ReadingPane from "./components/reading-pan"
import ReadingAside from "./components/reading-aside"

export default function Reading() {

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">

      {/* Top Navigation */}
      <Navbar />

      {/* Main Reading Pane */}
      <ReadingPane />

      {/* Sidebar Right (Contextual - Hidden on small screens) */}
      <ReadingAside />
      
    </div>
  )
};