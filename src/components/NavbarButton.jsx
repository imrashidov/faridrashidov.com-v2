import PropTypes from "prop-types";
import { motion } from "framer-motion";
const NavbarButton = ({ isOpen }) => {
  return (
    <>
      <motion.svg width="40" height="40" viewBox="0 0 23 23">
        <motion.line
          x1="0"
          y1="3"
          x2="23"
          y2="3"
          stroke="#7c3aed"
          strokeWidth="2"
          animate={isOpen ? "open" : "closed"}
          transition={{ ease: "easeOut", duration: 0.2 }}
          variants={{
            open: {
              rotate: "45deg",
              translateY: "10px",
            },
          }}
        />
        <motion.line
          x1="0"
          y1="10"
          x2="23"
          y2="10"
          stroke="#7c3aed"
          strokeWidth="2"
          animate={isOpen ? "open" : "closed"}
          transition={{ ease: "easeOut", duration: 0.2 }}
          variants={{
            open: {
              scale: 0,
            },
          }}
        />
        <motion.line
          x1="0"
          y1="17"
          x2="23"
          y2="17"
          stroke="#7c3aed"
          strokeWidth="2"
          animate={isOpen ? "open" : "closed"}
          transition={{ ease: "easeOut", duration: 0.2 }}
          variants={{
            open: {
              rotate: "-45deg",
              translateY: "-6px",
            },
          }}
        />
      </motion.svg>
    </>
  );
};

export default NavbarButton;

NavbarButton.propTypes = {
  isOpen: PropTypes.bool,
};
