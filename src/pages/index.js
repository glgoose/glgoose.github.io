import {
  Box,
  Center,
  Flex,
  Heading,
  Link as ChakraLink,
  Stack,
  Text,
  useColorModeValue,
  Container
} from '@chakra-ui/react'
import NextLink from 'next/link'
import Layout from '../components/Layout'

const Index = () => {
  return (
    <Layout>
      <Center height='100%'>
        <Stack spacing={16}>
          <Heading
            fontSize='10vw'
            bgGradient='linear(to-l, #7928CA, #FF0080)'
            bgClip='text'
            mt='1em'
          >
            glenn goossens
          </Heading>
          <Center>
            <Stack spacing={8}>
              <Text fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}>
                web dev
                <Box as='span' px={2}>
                  &bull;
                </Box>
                🇧🇪 Belgium
              </Text>
              <Center>
                <NextLink href='/projects' passHref>
                  <ChakraLink fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}>
                    projects 👀
                  </ChakraLink>
                </NextLink>
              </Center>
            </Stack>
          </Center>
        </Stack>
      </Center>
    </Layout>
  )
}

export default Index
