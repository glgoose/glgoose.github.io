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
      <Stack spacing={16} justify='center' align='center' height='100%'>
        <Heading
          fontSize='10vw'
          bgGradient='linear(to-l, #7928CA, #FF0080)'
          bgClip='text'
          mt='1em'
        >
          glenn goossens
        </Heading>

        <Stack spacing={8} align='center'>
          <Text fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}>
            web dev
            <Box as='span' px={2}>
              &bull;
            </Box>
            🇧🇪 Belgium
          </Text>
          <NextLink href='/projects' passHref>
            <ChakraLink fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}>
              projects 👀
            </ChakraLink>
          </NextLink>
        </Stack>
      </Stack>
    </Layout>
  )
}

export default Index
