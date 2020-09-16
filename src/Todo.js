import React from 'react'
import { List, ListItem, ListItemText } from '@material-ui/core'

function Todo(props) {
    return (
        <div>
           {/* <li key={props.key}>{props.todo}</li>   */}
           <List>
            <ListItem>
                <ListItemText  key={props.key} primary={props.todo} secondary="" />
            </ListItem>
            </List>
        </div>
    )
}

export default Todo
