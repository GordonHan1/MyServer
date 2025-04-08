import { Anchor, Text, Title } from '@mantine/core';
export function BlogHomePageWelcome() {
  return (
    <>
    <Title order={1} ta="center"
        mt="sm"
        mb="md">
        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
          This is my blog page
        </Text>
        </Title>
    </>
  );
}