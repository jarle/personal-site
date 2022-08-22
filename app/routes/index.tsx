import { Center, Text, VStack } from "@chakra-ui/react";

type Link = {
  title: string,
  url: string
}

export default function Index() {
  const links: Link[] = [
    {
      title: "blog",
      url: "blog.mathiesen.dev"
    },
    {
      title: "twitter",
      url: "twitter.com/jarlemathiesen"
    },

  ]

  return (
    <Center width={'100vw'} height={'80vh'}>
      <VStack>
        {
          links.map(
            link => (
              <a key={link.title} href={`https://${link.url}`}>
                <Text>
                  {link.title}
                </Text>
              </a>
            )
          )
        }
      </VStack>
    </Center >
  );
}
