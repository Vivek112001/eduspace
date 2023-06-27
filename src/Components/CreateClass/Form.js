import { Button, DialogActions, TextField, Stack, Box } from '@mui/material'
import React, { useState } from 'react'
import { useLocalContext } from '../../context/createclasscontext';
import { v4 as uuidv4 } from 'uuid';
import db from '../../Lib/Firebase'

export default function Form() {
    const [className, setClassName] = useState("");
    const [Section, setSection] = useState("");
    const [Room, setRoom] = useState("");
    const [Subject, setSubject] = useState("");
    const { loggedInMail, setCreateClassDialog } = useLocalContext();
    const addClass = (e) => {
        e.preventDefault();
        const id = uuidv4();

        db.collection("CreatedClasses")
            .doc(loggedInMail)
            .collection("classes")
            .doc(id)
            .set({
                owner: loggedInMail,
                className: className,
                section: Section,
                room: Room,
                id: id,
            })
            .then(() => {
                setCreateClassDialog(false);
            });
    }
    return (
        <>
            <div className="form">
                <p className="class__title">Create Class</p>
                <Box sx={{
                    height: 250,
                    width: {
                        xs: 100,
                        sm: 250,
                        md: 350,
                        lg: 450,
                        xl: 750,
                    }
                }}>
                    <Stack spacing={2}>
                        <Stack direction='column' spacing={2} width={'100%'}>
                            <TextField
                                id="filled-basic"
                                label="Class Name (required)"
                                variant='filled'
                                multiline={!!true}
                                value={className}
                                onChange={(e) => setClassName(e.target.value)} />
                            <TextField
                                id="filled-basic"
                                label="Section"
                                variant='filled'
                                multiline={!!true}
                                value={Section}
                                onChange={(e) => setSection(e.target.value)} />
                            <TextField
                                id="filled-basic"
                                label="Subject"
                                variant='filled'
                                multiline={!!true}
                                value={Subject}
                                onChange={(e) => setSubject(e.target.value)} />
                            <TextField
                                id="filled-basic"
                                label="Room"
                                variant='filled'
                                multiline={!!true}
                                value={Room}
                                onChange={(e) => setRoom(e.target.value)} />
                        </Stack>
                    </Stack>
                </Box>
                <DialogActions>
                    <Button onClick={addClass}
                        color="primary"
                    style={{marginTop:'15px'}}>
                        Create
                    </Button>
                </DialogActions>
            </div>
        </>
    )
}
