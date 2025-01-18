import { Anchor, Text, Title } from '@mantine/core';
import classes from './NewWelcome.module.css';
export function NewWelcome() {
  return (
    <>
      <Title className={classes.title} ta="center" mt={100}>
        Welcome to{' '}
        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
          My Server
        </Text>
      </Title>
    </>
  );
}