import { Box, Button, Container, Typography, styled, Card, CardContent, Grid, Divider } from '@mui/material';

const ProfileImage = styled('img')({
  width: 150,
  height: 150,
  borderRadius: '50%',
  objectFit: 'cover',
  display: 'block',
  margin: 'auto',
});

const Section = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const AboutMe = () => {
  return (
    <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'center', /* alignItems: 'center', */ minHeight: 'calc(100vh - 64px)', pt: 2, pb: 4 }}>
      <Card sx={{ display: 'flex', width: '100%', maxWidth: 900, boxShadow: 3 }}>
        <Grid container>
          <Grid item xs={12} md={4} sx={{ backgroundColor: '#f7f5f2', p: 3, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <ProfileImage
              src="/src/assets/profile.jpg"
              alt="Profile"
            />
            <Typography variant="h5" component="h2" sx={{ mt: 2, fontWeight: 'bold' }}>
              Gordon Han
            </Typography>
            <Divider sx={{ width: '50px', my: 1, borderColor: 'primary.main', borderBottomWidth: 2 }} />
            <Typography variant="body1" color="textSecondary">
              Web Developer
            </Typography>
          </Grid>

          <Grid item xs={12} md={8}>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
                Gordon Han
              </Typography>
              <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                web developer
              </Typography>
              <Button
                variant="outlined"
                size="medium"
                sx={{ my: 1.5, borderRadius: '20px', px: 3 }}
                href="/portfolio"
              >
                PORTFOLIO
              </Button>

              <Section sx={{ mt: 2 }}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                  Bio
                </Typography>
                <Typography variant="body1" paragraph>
                  I am a passionate and self-driven web developer who is always trying my best to push my limits
                  and learn new things everyday.
                </Typography>
                <Typography variant="body1" paragraph>
                  I have plenty of experience in a plethora of coding languages, such as React, Nodejs, flask,
                  python, c#, c++, c, aws, and sql.
                </Typography>
                <Typography variant="body1">
                  Currently, I am a student pursuing a diploma in Information Technology in Nanyang Polytechnic,
                  in my second year.
                </Typography>
              </Section>

              <Section>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                  Hobbies
                </Typography>
                <Typography variant="body1">
                  I like to travel and listen to chill music. Taking scenic photographs is my favourite hobby.
                </Typography>
              </Section>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
};

export default AboutMe;
