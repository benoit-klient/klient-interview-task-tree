import projects from '../data/projects.json'
import initialData from '../data/data.json'

import { Tree } from "@salesforce/design-system-react";
import { Project, Task, TreeNode } from "../@types";

// Render the label for the task nodes
const TaskNodeLabel = ({ task } : { task: Task }) => (
    <div style={{ width: '100%', display: "flex"}}>
    <div style={{ width: 300 }}>
        <span>{task.name}</span>
    </div>
        <span>{task.progress} %</span>
    </div>
)

/**
 * A Salesforce-themed tree control displaying our tasks, allowing to select them
 * 
 * Component API documentation :
 * 
 * https://react.lightningdesignsystem.com/components/tree 
 */
export function TasksTree() {
    const tasks = initialData;

    const projectNodes = projects.map((project) => ({
        id: project.id,
        label: project.name, // Can be a node or a string            
        type: 'branch',
        expanded: false
    }))

    function getNodes(parentNode: TreeNode) {
        if (!parentNode.id) {
            // root - return the top project nodes
            return projectNodes
        }

        const childTasks = tasks.filter((task) => task.parent === parentNode.id);
        return childTasks.map((task) => ({
            label: <TaskNodeLabel task={task} />, // Can be a React Node or a string
            id: task.id,
            type: 'item',
            selected: false,
        }));
    }

    function expandOrCollapseTask(task: Task, expand: boolean) {
        // TODO - modify the task to expand/collapse it 
    }

    function selectTask(task: Task, select: boolean) {
        // TODO - modify the task to select/unselect it
    }

    return <div>
	<Tree
            id="tasks_tree"
            getNodes={getNodes}
            onExpandClick={(event: any,  { expand, node }: any): void => {
                expandOrCollapseTask(node, expand);
            }}
            onClick={(event: any,  { select, node }: any): void => {
                selectTask(node, select);
            }}
        />
    </div>
}