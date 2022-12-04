import {useState} from "react";

export const useLocation = () => {
    const [position, setPosition] = useState({});
    const [positionError, setPositionError] = useState({});
    if (typeof window !== 'undefined' && typeof window.navigator !== 'undefined') {

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                setPosition(position)
            },
            (positionError) => {
                setPositionError(positionError)
            })
    }
    return {positionError, position}
}
