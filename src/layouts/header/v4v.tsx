
//import { FaCarrot } from "react-icons/fa";
import classNames from "classnames";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import { RiExchangeFundsFill } from "react-icons/ri";

export const V4V_LOCAL_STORAGE_KEY = 'bs.v4v';

export default function V4V() {

    function getV4VState() {
        const v4vState = localStorage.getItem(V4V_LOCAL_STORAGE_KEY);
        if (v4vState) {
            return JSON.parse(v4vState);
        } else {
            return true;
        }
    }

    const show4v4 = getV4VState();
    const [showV4V, changeVisibility] = useState(show4v4);

    function closeNotification() {
        localStorage.setItem(V4V_LOCAL_STORAGE_KEY, JSON.stringify(false));
        changeVisibility(false)
    }

    function renderNotification() {
        return (
            <>
                <div id="alby-v4v"><img src="/img/favicon/alby.svg"/></div>
                <div id="value-message">
                    <RiExchangeFundsFill/><span>If you think your time was worth using it here, show your support</span>
                </div>
                <div id="close-v4v" onClick={closeNotification}><MdClose/></div>
            </>
        )
    }

    const className = classNames("v4v", { "hidden": !showV4V} );

    return (
        <div className={className}>
            { showV4V && renderNotification() }
        </div>
    )
}