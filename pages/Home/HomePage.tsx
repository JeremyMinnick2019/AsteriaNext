import { useEffect, useState } from 'react'
import Container from '@mui/material/Container';
import { APOD } from '../../types/AsteriaTypes';
import { Card, CardContent, CardMedia, Skeleton, Typography } from '@mui/material';
import HomeCss from '../../styles/Home.module.css'

export default function Login() {
    const [apodInfo, setApodInfo] = useState<APOD>()
    const [isLoading, setIsLoading] = useState<Boolean>(true)

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(
                    `https://localhost:7282/Home`
                );
                const data = await res.json();
                setApodInfo(data as APOD);
                return;
            } catch (err) {
                console.log(err);
            }
        })()
    }, []);

    useEffect(() => {
        if (apodInfo !== undefined) {
            setIsLoading(false);
        }
    }, [setApodInfo, apodInfo]);

    const pageLoaded: JSX.Element =
        <Container component="main" maxWidth="md" disableGutters={true} className={HomeCss.cardPadding}>
            <Card sx={{ maxWidth: 800 }}>
                <CardMedia
                    component="img"
                    height={500}
                    image={apodInfo?.url}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {apodInfo?.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {apodInfo?.explanation}
                    </Typography>
                </CardContent>
            </Card>
        </Container>;

    const pageLoading: JSX.Element =
        <Container component="main" maxWidth="md" disableGutters={true} className={HomeCss.cardPadding}>
            <Card sx={{ maxWidth: 800 }}>
                <Skeleton variant="rectangular" height={500} width={800} />
                <CardContent>
                    <Skeleton variant="rectangular" height={160} width={768} />
                </CardContent>
            </Card>
        </Container>;

    return (isLoading ? pageLoading : pageLoaded);
}