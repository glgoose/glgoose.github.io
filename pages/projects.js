import {
  Box,
  Center,
  Container,
  Flex,
  Heading,
  Link as ChakraLink,
  VStack
} from '@chakra-ui/react'
import Layout from '../components/Layout'
import NextLink from 'next/link'
import fs from 'fs'
import yaml, { JSON_SCHEMA } from 'js-yaml'
import Cards from '../components/Cards'

export default function Projects ({ projects }) {
  return (
    <Layout>
      <Container maxW={['', '2xl', '3xl', '5xl', '6xl']} mt={12}>
        <Flex direction='column' justify='center' align='center'>
          <Center as='nav' mb={[3, 6]} me='1em'>
            <NextLink href='/' passHref>
              <ChakraLink>&#60; back</ChakraLink>
            </NextLink>
          </Center>
          <Heading as='h1' size='2xl' mb={[8, 16]}>
            Projects
          </Heading>

          <Cards projects={projects} />
        </Flex>
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
