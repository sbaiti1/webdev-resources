import tw from "twin.macro"
import Navbar from "./components/Navbar"
import Card from './components/Card'
import Section from "./components/Section"
// data
import inspo from "./data/inspo"
import icons from "./data/icons"
import images from "./data/images"
import colors from "./data/colors"
import tailwindcss from "./data/tailwindcss"
import design from "./data/design"
import extensions from "./data/extensions"



function App() {
  return (
    <div className="text-darkdirty">
      {/* navbar */}
      <div className="bg-darksilvery fixed overflow-auto h-screen border-r-4">
      <Navbar />
      </div>
      {/* sections */}
      <div className="py-5 md:pl-60 bg-beigy">
        <Section id="colors" data={colors} header="colors"/>
        <Section id="images" data={images} header="images"/>
        <Section id="icons" data={icons} header="icons"/>
        <Section id="tailwind" data={tailwindcss} header="tailwindCss"/>
        <Section id="inspiration" data={inspo} header="inspiration"/>
        <Section id="UI/UX" data={design} header="UI/UX design"/>
        <Section id="extensions" data={extensions} header="extensions"/>


      </div>
      {/* footer */}
      <div className="md:pl-72 pb-10 border-t-2 pt-5 bg-beigy ">
         ©2023 WebDev design by soumiya59 
      </div>
    </div>
  )
}
export default App
