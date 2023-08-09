import React from "react";
import ListBox from "./List/ListBox";
import TaskBar from "./TaskBar/TaskBar";

export function Index() {
    return (
        <div className="app">
            <TaskBar />
            <ListBox />
        </div>
    );
}
