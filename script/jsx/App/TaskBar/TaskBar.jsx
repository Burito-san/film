import React from "react";
import Filters from "./Filters";
import SwitchPages from "./Pagination";
export default function TaskBar() {
    return (
        <div className="taskbar">
            <div className="heading">Ф И Л Ь Т Р Ы:</div>
            <Filters/>
            <SwitchPages/>
        </div>
    );
}
