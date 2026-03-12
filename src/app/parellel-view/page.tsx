import ParellelViewNav from "./components/parellel-nav";
import ParellelMain from "./components/parellel-main";
import ParellelFloatingNav from "./components/parellel-floating-nav";
import ParellelUtility from "./components/Parellel-utility";

export default function parellelView() {

  return (
    <div className="relative flex min-h-screen w-full flex-col">
      
      {/* Top Navigation Bar */}
      <ParellelViewNav />

      {/* Main Content Area */}
      <ParellelMain />

      {/* Floating Bottom Navigation */}
      <ParellelFloatingNav />
      
      {/* Utility Action Bar (Right Floating) */}
      <ParellelUtility />

    </div>
  )
}