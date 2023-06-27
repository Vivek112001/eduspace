import React, { useState } from 'react'
import { useLocalContext } from '../../context/createclasscontext';
import { Typography, Button, Checkbox, Dialog, DialogActions, DialogContent, FormControlLabel } from '@mui/material';
import "./style.css";
import Form from './Form';

export default function CreateClass() {
  const { createClassDialog, setCreateClassDialog } = useLocalContext();
  const [acceptTnc, setAcceptTnc] = useState(false);
  const [Showform, setShowForm] = useState(false);
  return (
    <>
      <Dialog
        onClose={() => setCreateClassDialog(false)}
        aria-labelledby="customized-dialog-title"
        open={createClassDialog}
        maxWidth="xs"
      >
        {Showform ? (<Form />) : (
          <>
          <div className="class__title">
            Using Classroom at a college with students?
          </div>
          <DialogContent className="class__content">
            <p className="class__text">
              <p>If so, your college must sign up for a free</p>
              <a href="/help" className="class__link">
                G Suite for Education
              </a>
              account before you can use Classroom
              <a href="/learn" className="class__link2">
                Learn More.
              </a>
            </p>
            <p>
              G Suite for Education lets colleges decide which Google services
              their students can use, and provides additional
              <a href="/privacy" className="class__link2 class__link">
                privacy and security
              </a>
              protections that are important in a college setting. Students
              cannot use Google Classroom at a college with personal accounts.
            </p>

            <div className="class__checkboxWrapper">
                <FormControlLabel label={<Typography paragraph={true} variant="body2" color="textSecondary">
                  I've read and understand the above notice, and I'm not using
                  Classroom at a school with students</Typography>}
                  control={
                    <Checkbox checked={acceptTnc}
                      onChange={() => setAcceptTnc(!acceptTnc)}
                    />} />
            </div>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={() => setCreateClassDialog(false)}>
              Close
            </Button>
            <Button autoFocus color="primary" disabled={!acceptTnc} onClick={() => setShowForm(true)} >
              Continue
            </Button>
          </DialogActions>
        </>)}      
      </Dialog>
    </>
  )
}
