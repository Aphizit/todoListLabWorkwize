import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import List from './List'

const styles = {
        root: {
                padding: '2px 4px',
                display: 'flex',
                alignItems: 'center',
                marginBottom: '5px'
        },
        input: {
                marginLeft: 8,
                flex: 1,
                marginTop: '0px'
        },
        iconButton: {
                padding: 10,
        },
        divider: {
                marginBottom: '10px'
        },
};

const CompletedSection = ({ list, onToggleCompletedList, onDeleteTask, onToggleListItem, onEditTask, classes }) => {

        const [hide, setHide] = useState(onToggleCompletedList);

        const handleHide = (e) => {
                setHide(e.target.checked)
        }
        return (
                <div>
                        <Grid container alignItems="center">
                                <Grid item xs>
                                        {list().filter(data => data.isCompleted && !data.isDeleted).length} Completed
                                </Grid>
                                <Grid item>
                                        <Switch value={false} onClick={onToggleCompletedList} onChange={handleHide}/>
                                </Grid>
                        </Grid>
                        <Divider className={classes.divider}/>
                        {
                                !hide && <List list={list} isCompleted onDeleteTask={onDeleteTask} onToggleListItem={onToggleListItem} onEditTask={onEditTask}/>
                        }
                        
                </div>
        );
}

export default withStyles(styles)(CompletedSection) 