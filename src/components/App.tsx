import '@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system-offline.min.css'

import standardSprite from '@salesforce-ux/design-system/assets/icons/standard-sprite/svg/symbols.svg';
import utilitySprite from '@salesforce-ux/design-system/assets/icons/utility-sprite/svg/symbols.svg';

import './App.css'

import {
  IconSettings
} from '@salesforce/design-system-react'

import { AppHeader } from './AppHeader';
import { TasksTree } from './TasksTree';
import { Instructions } from './Instructions';

/**
 * A Tree control app displaying tasks with the option of only displaying the selected ones (considered complete)
 * 
 * This project uses the Lightning Design System for React
 * https://react.lightningdesignsystem.com/
 * 
 * @returns 
 */
function App() {
  return (
      <IconSettings 
        standardSprite={standardSprite}
        utilitySprite={utilitySprite}
      >

      <div className="slds-box">
        <AppHeader />
        <TasksTree />
      </div>

      <Instructions />
      
    </IconSettings>
  )
}

export default App
