import { BuilderHeaderToolbar, ButtonGroup, Checkbox } from "@salesforce/design-system-react";

export function AppHeader() {

    // TODO: Replace this with a redux toolkit state variable
    const showCompletedTasks = false;

    return <BuilderHeaderToolbar style={{ height: 80 }}>
      <ButtonGroup>
        <div style={{ marginTop: 4 }} aria-label="Project Name" className="slds-builder-toolbar__item-group slds-p-around_xx-small">
          <div className=" slds-button-group slds-has-flexi-truncate slds-p-around_xx-small text-uppercase background-grey">
            <strong className="slds-p-around_xx-small" id="filterTag" title="">


            {/*
            // TODO Make this label dynamic - display the actual number of Selected tasks LIVE 
            */}
              Selected Tasks: 9999

            </strong>
          </div>
        </div>
      </ButtonGroup>

      <ButtonGroup label="Project Filter" className="slds-p-around_xx-small">

      <Checkbox
            labels={{
            label: 'Show Only Selected Tasks',
            toggleEnabled: '',
            toggleDisabled: ''
            }}
            checked={showCompletedTasks}
            onChange={(event: Event, { checked } : { checked: boolean } ) => {
                // TODO handle checking/unchecking "Show Only Selected Tasks" here
            }}
            
            variant="toggle"
        />
      </ButtonGroup>

    </BuilderHeaderToolbar>
}