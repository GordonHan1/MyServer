import { Container, Flex, Card, Text, Title, Button, Divider, Group, Stack, Box } from '@mantine/core';
// Removed unused Image import
import { Link } from 'react-router-dom';
import { IconBrandGithub, IconBrandLinkedin, IconMail } from '@tabler/icons-react';
import classes from './AboutMe.module.css';
import SwipeCards from '../components/SwipeCards/SwipeCards'; // Import the new component

const AboutMe = () => {
  return (
    <Box className={classes.container}>
      <Container size="lg" pt="xl" pb="xl">
        <Flex
          gap="xl"
          justify="center"
          align="stretch"
          direction={{ base: 'column', md: 'row' }}
          style={{ maxWidth: 900, margin: 'auto' }}
        >
          {/* Left Card */}
          <Card
            shadow="md"
            padding={0}
            radius="lg"
            withBorder
            className={classes.card}
          >
            <Box className={classes.profileSection}>
              {/* REPLACED IMAGE WITH SWIPE CARDS */}
              <SwipeCards />
              
              <Title order={2} ta="center" mt={0} fw={700} className={classes.nameTitle}>
                Gordon Han
              </Title>
              <Divider my={5} size="sm" className={classes.divider} style={{ width: 80 }} />
              <Text size="lg" ta="center" fw={500} className={classes.roleText}>
                Web Developer
              </Text>
            </Box>

            <div className={classes.socialFooter}>
              {/* ... existing footer code ... */}
              <Group style={{ gap: '1.5rem' }}>
                <a href="https://github.com/GordonHan1" target="_blank" rel="noopener noreferrer">
                  <IconBrandGithub size={26} stroke={1.5} className={classes.icon} style={{ cursor: 'pointer' }} />
                </a>
                <a href="https://linkedin.com/in/gordon-han-008b67262/" target="_blank" rel="noopener noreferrer">
                  <IconBrandLinkedin size={26} stroke={1.5} className={classes.icon} style={{ cursor: 'pointer' }} />
                </a>
                <a href="mailto:gordonhanyongzhe@gmail.com">
                  <IconMail size={26} stroke={1.5} className={classes.icon} style={{ cursor: 'pointer' }} />
                </a>
              </Group>
            </div>
          </Card>

          {/* Right Content (Unchanged) */}
          <Stack justify="flex-start" gap="xl" className={classes.contentStack}>
             {/* ... existing right content ... */}
             <Title order={2} fw={700} className={classes.nameTitle}>
              Gordon Han
            </Title>
            <Text size="lg" className={classes.roleText} style={{ marginTop: '-20px', fontWeight: 300, letterSpacing: '0.5px' }}>
              Web Developer & Designer
            </Text>
            
            <Button
              variant="outline"
              size="xs"
              radius="xl"
              px="xl"
              component={Link}
              to="/portfolio"
              className={classes.portfolioButton}
            >
              PORTFOLIO
            </Button>

            <Stack gap={4}>
              <Box>
                <Title order={4} fw={700} mb="5px" className={classes.sectionTitle}>
                  Bio
                </Title>
                <Divider size="xs" mb="5px" className={classes.divider} />
                <Text mb="xs" className={classes.sectionText}>
                  I am a passionate and self-driven web developer who is always trying my best to push my limits
                  and learn new things everyday.
                </Text>
                <Text mb="xs" className={classes.sectionText}>
                  I have plenty of experience in a plethora of coding languages, such as React, Nodejs, flask,
                  python, c#, c++, c, aws, and sql.
                </Text>
                <Text className={classes.sectionText}>
                  Currently, I am a student pursuing a diploma in Information Technology in Nanyang Polytechnic,
                  in my second year.
                </Text>
              </Box>

              <Box mt="xs">
                <Title order={4} fw={700} mb="5px" className={classes.sectionTitle}>
                  Hobbies
                </Title>
                <Divider size="xs" mb="5px" className={classes.divider} />
                <Text className={classes.sectionText}>
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
