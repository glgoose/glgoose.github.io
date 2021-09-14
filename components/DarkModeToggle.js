import { Button, Icon, useColorMode } from '@chakra-ui/react'
import { FiMoon, FiSun } from 'react-icons/fi'

export const DarkModeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'

  const iconColor = {
    light: 'gray.600',
    dark: 'gray.400'
  }

  return (
    <Button
      variant='ghost'
      position='absolute'
      top='1rem'
      right='1rem'
      color={iconColor[colorMode]}
      onClick={toggleColorMode}
    >
      {isDark ? (
        <Icon as={FiSun} fontSize='lg' />
      ) : (
        <Icon as={FiMoon} fontSize='lg' />
      )}
    </Button>
  )
}
