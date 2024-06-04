import { useEffect, useState } from 'react'

const useWindowScroll = ({ start = 0, end = 0 } = {}) => {
    const [flag, setFlag] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const { pageYOffset } = window;
            if (pageYOffset > start && !flag) {
                setFlag(true);
            }
            if (pageYOffset <= end && flag) {
                setFlag(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [end, flag, start]);

    return flag;
}

export default useWindowScroll