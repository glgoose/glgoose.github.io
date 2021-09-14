import { Flex, useColorMode, VStack } from '@chakra-ui/react'
import Footer from './Footer'
import { DarkModeToggle } from './DarkModeToggle'
import Meta from './Meta'

export default function Layout ({ children }) {
  const { colorMode } = useColorMode()

  const bgColor = { light: 'gray.50', dark: 'gray.700' }
  const color = { light: 'gray.600', dark: 'gray.300' }

  return (
    <VStack bg={bgColor[colorMode]} color={color[colorMode]} minH='100vh'>
      <Meta />
      <Flex as='main' flex='1'>
        {children}
      </Flex>
      <DarkModeToggle />
      <Footer />
    </VStack>
  )
}
