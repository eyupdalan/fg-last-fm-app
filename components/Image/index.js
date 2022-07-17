import NextImage from "next/image";
import PropTypes from "prop-types";

export default function Image({src, alt, height, width, ...rest}) {
    const imageLoader = (params) => src;
    if (!src) {
        return <div>No Image</div>
    }

    return <NextImage loader={imageLoader} src={src} alt={alt} width={width} height={height} {...rest}/>
}

Image.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    height: PropTypes.number,
    width: PropTypes.number
}

Image.defaultProps = {
    height: null,
    width: null
}