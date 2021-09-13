import {
  Box,
  Center,
  Flex,
  Icon,
  Link as ChakraLink,
  Text,
  useColorMode
} from '@chakra-ui/react'
import { FiGithub } from 'react-icons/fi'

export default function Footer () {
  const { colorMode } = useColorMode()

  const borderColor = {
    light: 'gray.200',
    dark: 'gray.600'
  }

  return (
    <Box as='footer' py={6} w='100vw' mt='auto'>
      <Flex
        align={'center'}
        _before={{
          content: '""',
          borderBottom: '1px solid',
          borderColor: borderColor[colorMode],
          flexGrow: 1,
          mr: 8
        }}
        _after={{
          content: '""',
          borderBottom: '1px solid',
          borderColor: borderColor[colorMode],
          flexGrow: 1,
          ml: 8
        }}
      >
        <Text color='gray.500'>goose.sh</Text>
      </Flex>
      <Center pt={3}>
        <ChakraLink href='https://github.com/glgoose'>
          <Icon as={FiGithub} />
        </ChakraLink>
      </Center>
    </Box>
  )
}
