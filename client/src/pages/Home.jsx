import { motion, AnimatePresence, isValidMotionProp } from 'framer-motion';
import { useSnapshot } from 'valtio';

import state from '../store';

import {
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation,
    slideAnimation
} from '../config/motion';

const Home = () => {
    const snap = useSnapshot(state);
    return (
    <AnimatePresence>
        {snap.intro && (
        <motion.section className="home" {...slideAnimation('left')}>
            <motion.header {...slideAnimation("down")}>
            <img
                src='./threejs.png'
                alt="logo"
                className="w-8 h-8 object-contain"
            />
            </motion.header>    
            <motion.div>
                <h1 className="head-text">
                    LET'S <br className="xl:block hidden" /> DI IT.
                </h1>
            </motion.div>
            <motion.dv>
                <p>
                    Create your unique and exclusive shirt with our brand new 3D customization tool. <strong>Unleash your imagination</strong> {""}
                </p>
            </motion.dv>
        </motion.section>
        )}
    </AnimatePresence>
    )
}

export default Home