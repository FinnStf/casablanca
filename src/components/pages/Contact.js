import backgroundImage from '../../assets/backgroundOne.jpg'
import LoadingButton from '@mui/lab/LoadingButton';
import { Alert, TextField, Grid } from '@mui/material';
import style from './Contact.module.css'
import { useState } from 'react';

export default function Contact() {
    const [isLoading, setIsLoading] = useState(false)
    const [response, setResponse] = useState()

    async function handleSubmit(event) {
        const formData = new FormData(event.currentTarget);
        event.preventDefault();
        setIsLoading(true)
        fetch("https://getform.io/f/8862e005-bdb5-45be-b1aa-4fa97454a84c", {
            method: "POST",
            body: formData,
            headers: {
                "Accept": "application/json",
            },
        })
            .then(response => {
                if (response.ok) {
                    setResponse({
                        type: 'success',
                        msg: 'Wir haben Ihre Nachricht erhalten werden uns frühstmöglich bei Ihnen melden.'
                    })
                }
            })
            .catch(error => setResponse({
                type: 'error',
                msg: error
            }))
        setIsLoading(false)
        document.getElementById("contact_form").reset();
    }

    return (
        <div className={style['content-wrapper']}>
            <div className={style['image-wrapper']}>
                <img src={backgroundImage} />
            </div>
            <div className={style['form-wrapper']}>
                <form id='contact_form' onSubmit={handleSubmit} method='POST'>
                    <h2 className={style.header}>Kontakt</h2>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <TextField
                                sx={{ width: '100%' }}
                                required
                                label="Vorname"
                                name="surname"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                sx={{ width: '100%' }}
                                required
                                name="lastname"
                                label="Nachname"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                label="Email Adresse"
                                name="email"
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="message"
                                label="Nachricht"
                                type="text"
                                multiline
                                rows={4}
                            />
                        </Grid>
                    </Grid>
                    <LoadingButton
                        loading={isLoading}
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Senden
                    </LoadingButton>
                    {response && <Alert severity={response.type}>
                        {response.msg}
                    </Alert>
                    }
                </form>
            </div>
        </div>
    );
}
