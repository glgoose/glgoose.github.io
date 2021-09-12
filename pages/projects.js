import {
  Center,
  Container,
  Heading,
  Link as ChakraLink,
  Stack
} from '@chakra-ui/react'
import Layout from '../components/Layout'
import NextLink from 'next/link'

export default function Projects () {
  return (
    <Layout>
      <Container maxW='2xl' mt={10}>
        <Stack justify='center'>
          <Center as='nav'>
            <NextLink href='/' passHref>
              <ChakraLink mb={4} me='1em'>
                &#60; back
              </ChakraLink>
            </NextLink>
          </Center>
          <Heading size='2xl'>Projects</Heading>
        </Stack>
      </Container>
    </Layout>
  )
}
