import { motion } from "framer-motion";

const TextAnimation = () => {
    const text = "Christy Park";

    return (
        <motion.div className="animated-text">
            { text.split("").map((letter, index) => (
                <motion.span
                    key={ index }
                    initial={ { opacity: 0  } }
                    animate={ { opacity: 1 } }
                    transition={ { duration: 0.1, delay: index * 0.2 } }
                >
                    { letter }
                </motion.span>
            )) }
        </motion.div>
    );
}
export default TextAnimation;