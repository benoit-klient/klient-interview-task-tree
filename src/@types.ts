
// Type derived from the tree node types
// https://react.lightningdesignsystem.com/components/tree/
export type TreeNode = { 
    id: string, 
    parent?: string,
    expanded?: boolean, 
    selected?: boolean,
    label: string, 
    type: string
}

export type Project = {
    name: string,
    id: string
}

export type Task = {
    id: string,
    name: string,
    progress: number,
    parent: string
}