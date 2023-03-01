import React from "react";
import viewportContext from "./viewportContext";

const ViewportProvider = (props) => {
    const [width, setWidth] = React.useState(window.innerWidth);
    const [offset, setOffset] = React.useState();

    const handleWindowResize = () => {
        setWidth(window.innerWidth);
    };
    
    React.useEffect(() => {
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    React.useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <viewportContext.Provider value={{ width, offset }}>
            {props.children}
        </viewportContext.Provider>
    );
};
export default ViewportProvider;
