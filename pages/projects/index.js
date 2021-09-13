import {
  Center,
  Container,
  Heading,
  Link as ChakraLink,
  Stack
} from '@chakra-ui/react'
import Layout from '../../components/Layout'
import NextLink from 'next/link'
import fs from 'fs'
import yaml, { JSON_SCHEMA } from 'js-yaml'
import Cards from '../../components/Cards'

export default function Projects ({ projects }) {
  return (
    <Layout>
      <Container maxW='4xl' mt={12}>
        <Stack justify='center'>
          <Center as='nav'>
            <NextLink href='/' passHref>
              <ChakraLink mb={3} me='1em'>
                &#60; back
              </ChakraLink>
            </NextLink>
          </Center>
          <Center>
            <Heading size='2xl' mb={8}>
              Projects
            </Heading>
          </Center>

          <Cards projects={projects} />
        </Stack>
      </Container>
    </Layout>
  )
}

export const getStaticProps = async () => {
  try {
    const projects = yaml.load(fs.readFileSync('data/projects.yml', 'utf-8'), {
      schema: JSON_SCHEMA,
      json: true
    })

    return {
      props: { projects }
    }
  } catch (e) {
    console.log(e)
  }
}
