import PropTypes from "prop-types";
import { Typewriter } from "react-simple-typewriter";

const TypeWriter = ({
  staticText,
  staticTextColorTailwind,
  textArray,
  textArrayColor,
  cursor,
}) => {
  return (
    <div>
      <h1
        className={`
        max-sm:text-2xl text-left h-[100px] sm:text-3xl sm:mb-4 max-sm:mb-3 max-sm:leading-7 tracking-tight  font-medium md:text-4xl lg:text-5xl

        ${staticTextColorTailwind}`}
      >
        {staticText}
        <span style={{ color: textArrayColor, fontWeight: "bold" }}>
          <Typewriter
            words={[...textArray]}
            loop={0}
            cursor
            cursorStyle={`${cursor}`}
            typeSpeed={90}
            deleteSpeed={30}
            delaySpeed={3000}
          />
        </span>
      </h1>
    </div>
  );
};

TypeWriter.propTypes = {
  staticText: PropTypes.string,
  staticTextColorTailwind: PropTypes.string,
  textArray: PropTypes.array,
  textArrayColor: PropTypes.string,
  cursor: PropTypes.string,
};

export default TypeWriter;
