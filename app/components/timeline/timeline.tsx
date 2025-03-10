'use client';

import { ProjectsTimeline } from "@/app/components/timeline/projects"
import { WorkTimeline } from "./work"
import { ProgrammingTimeline } from "./programming"
import { useState, MouseEvent } from "react"

export const Timeline: React.FC = () => {

    const [selected, setSelected] = useState(1);

    function selectItem(e: any) {
        setSelected(e.target.id);
        e.target.parentElement.childNodes.forEach((child: any) => {
            child.classList.remove('btn-active');
        });
        e.target.classList.add('btn-active');
    }

    return (
        <div className="flex justify-center items-center flex-col gap-4">
            <div className="join">
                <button id="1" 
                    className="join-item btn btn-active" 
                    onClick={(e) => selectItem(e)}>Projects</button>

                <button id="2" 
                    className="join-item btn" 
                    onClick={(e) => selectItem(e)}>Work Experience</button>

                <button id="3" 
                    className="join-item btn" 
                    onClick={(e) => selectItem(e)}>Programming</button>

            </div>

            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                {selected == 1 && <ProjectsTimeline />}
                {selected == 2 && <WorkTimeline />}
                {selected == 3 && <ProgrammingTimeline />}
            </ul>
        </div>    
    )
}