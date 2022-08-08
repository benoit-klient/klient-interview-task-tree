export function Instructions() {
    return (
        <div>
        <div className="slds-box">
            <strong>Challenge instructions</strong>
        </div>
        <div className="slds-box">
            <h2>1. Implement the application state</h2>
            <ul className="slds-list_dotted slds-has-dividers_around-space">
            <li>Install redux using npm, and use it as the centralized state</li>
            <li>Save the application state in the browser's local storage so it's persisted between browser refreshes</li>                
            </ul>
        </div>
        <div className="slds-box">
            <h2>2. Implement the missing Tree control UI functionalities:</h2>
            <ul className="slds-list_dotted slds-has-dividers_around-space">
            <li>Implement the missing UI functions to toggle expanding and selecting tasks in the tree (search for TODO in the code)</li>
            <li>Clicking on the chevron (&gt;) in the tree nodes should expand/collapse the nodes</li>
            <li>Clicking on the items should toggle their selected state</li>
            </ul>
        </div>
        <div className="slds-box">
            <h2>3. Implement the Selected Task counter and the Show Only Selected Task toggle</h2>
            <ul className="slds-list_dotted slds-has-dividers_around-space">
            <li>The "Selected Tasks" indicator should display the actual number of selected tasks in the toolbar</li>
            <li>Checking "Show Only Selected Tasks" should hide any non-selected tasks from the tree. </li>
            <li>Unchecking it should display them back. </li>
            </ul>
        </div>
        <div className="slds-box">
            <h2>4. Add a new option with sort + filter</h2>
            <ul className="slds-list_dotted slds-has-dividers_around-space">
            <li>Add a new checkbox titles "Show Top 5 Tasks"</li>
            <li>When checked, each project branch should only display the 5 tasks of that project with the highest progress value</li>
            <li>The tasks should be sorted from the highest progress value to the lowest</li>
            <li>Unchecking the option should display all tasks again, in their original order. </li>
            </ul>
        </div>
  </div>
  )    
}