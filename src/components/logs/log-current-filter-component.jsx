import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { projectSelected, taskSelected, projectNameSelected, taskNameSelected } from '../../data/levels-slice'

export const LogCurrentFilterComponent = () => {
    const dispatch = useDispatch();
    const currentProject = useSelector((state) => state.levels.selectedProject);
    const currentTask = useSelector((state) => state.levels.selectedTask);
    const currentProjectName = useSelector((state) => state.levels.selectedProjectName);
    const currentTaskName = useSelector((state) => state.levels.selectedTaskName);

    const cleanCurrentProject = () => {
        dispatch(projectSelected(0));
        dispatch(projectNameSelected(""));
        dispatch(taskSelected(0));
        dispatch(taskNameSelected(""));
    }

    const cleanCurrentTask = () => {
        dispatch(taskSelected(0));
        dispatch(taskNameSelected(""));
    }

    return (
        <div className={`flex flex-col items-center mb-8 pt-5`}>
            <div className="flex justify-center text-center content-center">
                <div className={`bg-color-3 rounded-md py-1 px-2 relative grow-0 ${currentProject != 0 ? "block" : "hidden"} text-center content-center`}>
                    <p className="font-medium">{currentProjectName}</p>
                    <button className='absolute -top-2 -right-3 rounded-[50%] bg-color-2' onClick={() => cleanCurrentProject()}>
                        <img src="white-cancel.png" className="w-5 h-5 p-1" />
                    </button>
                </div>
                <div className={`bg-color-4 rounded-md py-1 px-2 relative grow-0 ml-4 ${currentTask != 0 ? "block" : "hidden"} text-center content-center`}>
                    <p className="font-medium">{currentTaskName}</p>
                    <button className='absolute -top-2 -right-3 rounded-[50%] bg-color-2' onClick={() => cleanCurrentTask()}>
                        <img src="white-cancel.png" className="w-5 h-5 p-1" />
                    </button>
                </div>
            </div>
        </div>
    )
    
}