import HomeMainComponent from "../components/HomeMainComponent"
import {motion} from 'framer-motion'

function Homepage() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        
       className=" py-10  pt-24 bg-gradient-to-br from-pink-950 to-purple-950 h-screen w-screen px-16">

        <HomeMainComponent />
      </motion.div>
    </>
  )
}

export default Homepage