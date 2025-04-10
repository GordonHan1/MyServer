import { Container, Flex, Card, Text, Title, Button, Divider, Image, Group, Stack, useMantineTheme, MantineTheme, Box } from '@mantine/core';
import { Link } from 'react-router-dom';
import { IconBrandGithub, IconBrandLinkedin, IconMail } from '@tabler/icons-react';

const AboutMe = () => {
  const theme = useMantineTheme();

  return (
    <Box style={{ backgroundColor: '#1d1e30', minHeight: 'calc(100vh - 56px)' }}>
      <Container size="lg" pt="xl" pb="xl">
        <Flex
          gap="xl"
          justify="center"
          align="stretch"
          direction={{ base: 'column', md: 'row' }}
          style={{ maxWidth: 900, margin: 'auto' }}
        >
          <Card
  shadow="md"
  padding={0}
  radius="lg"
  withBorder
  style={(theme: MantineTheme) => ({
    backgroundColor: "#252642",
    borderColor: "rgba(255, 255, 255, 0.1)",
    color: theme.colors.dark[0],
    width: "100%",
    [`@media (min-width: ${theme.breakpoints.md})`]: {
      width: "40%",
    },
    marginBottom: theme.spacing.md,
    [`@media (min-width: ${theme.breakpoints.md})`]: {
      marginBottom: 0,
    },
    display: "flex",
    flexDirection: "column",
    minHeight: 400,
  })}
>
  <Box
    // Use flexGrow to fill the vertical space, allowing vertical centering
    style={{
      display: "flex",
      flexDirection: "column",
      flexGrow: 1,
      justifyContent: "center",  // center vertically
      alignItems: "center",      // center horizontally
      gap: "10px",               // small gap between elements
      padding: "1rem",
    }}
  >
    <Image
      radius="50%"
      h={160}
      w={160}
      fit="cover"
      src="/src/assets/profile.jpg"
      alt="Profile"
      style={{
        display: "block",
        border: "4px solid #4263eb",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
      }}
    />
    <Title order={2} ta="center" mt={0} fw={700} c="#fff">
      Gordon Han
    </Title>
    <Divider my={5} size="sm" color="#4263eb" style={{ width: 80 }} />
    <Text size="lg" c="rgba(255, 255, 255, 0.8)" ta="center" fw={500}>
      Web Developer
    </Text>
  </Box>

  <div
    style={{
      backgroundColor: "#0c0d21",
      borderRadius: "0 0 8px 8px",
      width: "100%",
      padding: "1.5rem 0",
      display: "flex",
      justifyContent: "center",
    }}
  >
              <Group style={{ gap: '1.5rem' }}>
                <a href="https://github.com/GordonHan1" target="_blank" rel="noopener noreferrer">
                  <IconBrandGithub size={26} stroke={1.5} color="#fff" style={{ cursor: 'pointer' }} />
                </a>
                <a href="https://linkedin.com/in/gordon-han-008b67262/" target="_blank" rel="noopener noreferrer">
                  <IconBrandLinkedin size={26} stroke={1.5} color="#fff" style={{ cursor: 'pointer' }} />
                </a>
                <a href="mailto:gordonhanyongzhe@gmail.com">
                  <IconMail size={26} stroke={1.5} color="#fff" style={{ cursor: 'pointer' }} />
                </a>
              </Group>
            </div>
            
          </Card>

          <Stack
            justify="flex-start"
            gap="xl"
            style={(theme: MantineTheme) => ({
              width: '100%',
              [`@media (min-width: ${theme.breakpoints.md})`]: {
                width: '60%',
              },
              paddingLeft: 0,
              [`@media (min-width: ${theme.breakpoints.md})`]: {
                paddingLeft: theme.spacing.xl,
              },
              paddingTop: theme.spacing.md,
              [`@media (min-width: ${theme.breakpoints.md})`]: {
                paddingTop: 0,
              },
            })}
          >
            <Title order={2} fw={700} c="#fff">
              Gordon Han
            </Title>
            <Text size="lg" c="rgba(255, 255, 255, 0.7)" style={{marginTop: '-20px', fontFamily: "'Nunito Sans', sans-serif", fontWeight: 300, letterSpacing: '0.5px'}}>
              Web Developer & Designer
            </Text>
            <Button
              variant="outline"
              color="rgba(255, 255, 255, 0.8)"
              size="xs"
              radius="xl"
              px="xl"
              component={Link}
              to="/portfolio"
              style={{ 
                fontWeight: 400, 
                fontSize: '13px',
                height: '40px',
                borderWidth: '1px',
                marginTop: '-10px', 
                marginBottom: '-5px',
                fontFamily: "'Nunito Sans', sans-serif",
                letterSpacing: '0.5px',
                textTransform: 'uppercase',
                width: '140px',
                alignSelf: 'flex-start'
              }}
            >
              PORTFOLIO
            </Button>

            <Stack gap={4}>
              <Box>
                <Title order={4} fw={700} c="#fff">
                  Bio
                </Title>
                <Divider size="xs" color="rgba(255, 255, 255, 0.1)" mb="5px" />
                <Text c="rgba(255, 255, 255, 0.8)" mb="xs" style={{ fontFamily: "'Nunito Sans', sans-serif", fontWeight: 300, letterSpacing: '0.5px' }}>
                  I am a passionate and self-driven web developer who is always trying my best to push my limits
                  and learn new things everyday.
                </Text>
                <Text c="rgba(255, 255, 255, 0.8)" mb="xs" style={{ fontFamily: "'Nunito Sans', sans-serif", fontWeight: 300, letterSpacing: '0.5px' }}>
                  I have plenty of experience in a plethora of coding languages, such as React, Nodejs, flask,
                  python, c#, c++, c, aws, and sql.
                </Text>
                <Text c="rgba(255, 255, 255, 0.8)" style={{ fontFamily: "'Nunito Sans', sans-serif", fontWeight: 300, letterSpacing: '0.5px' }}>
                  Currently, I am a student pursuing a diploma in Information Technology in Nanyang Polytechnic,
                  in my second year.
                </Text>
              </Box>

              <Box mt="xs">
                <Title order={4} fw={700} c="#fff" mb="5px">
                  Hobbies
                </Title>
                <Divider size="xs" color="rgba(255, 255, 255, 0.1)" mb="5px" />
                <Text c="rgba(255, 255, 255, 0.8)" style={{ fontFamily: "'Nunito Sans', sans-serif", fontWeight: 300, letterSpacing: '0.5px' }}>
                  I like to travel and listen to chill music. Taking scenic photographs is my favourite hobby.
                </Text>
              </Box>
            </Stack>
          </Stack>
        </Flex>
      </Container>
    </Box>
  );
};

export default AboutMe;


