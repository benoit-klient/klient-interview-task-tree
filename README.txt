GETTING STARTED

- run "npm install" to install the module dependencies
- run "npm run dev" to start the web server

TODO

1. Implement the application state
- Install redux using npm, and use it as the centralized state
- Save the application state in the browser's local storage so it's persisted between browser refreshes

2. Implement the missing Tree control UI functionalities:
- Implement the missing UI functions to toggle expanding and selecting tasks in the tree (search for TODO in the code)
- Clicking on the chevron (>) in the tree nodes should expand/collapse the nodes
- Clicking on the items should toggle their selected state

3. Implement the Selected Task counter and the Show Only Selected Task toggle
- The "Selected Tasks" indicator should display the actual number of selected tasks in the toolbar
- Checking "Show Only Selected Tasks" should hide any non-selected tasks from the tree.
- Unchecking it should display them back.

4. Add a new option with sort + filter
- Add a new checkbox titles "Show Top 5 Tasks"
- When checked, each project branch should only display the 5 tasks of that project with the highest progress value
- The tasks should be sorted from the highest progress value to the lowest
- Unchecking the option should display all tasks again, in their original order.