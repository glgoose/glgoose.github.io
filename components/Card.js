import { useColorModeValue } from '@chakra-ui/color-mode'
import { Box, Text } from '@chakra-ui/layout'
import { HStack } from '@chakra-ui/react'

export default function Card ({ project }) {
  return (
    <Box>
      <Box
        bg={useColorModeValue('gray.200', 'gray.700')}
        w='xs'
        px={3}
        py={4}
        rounded='lg'
        shadow='lg'
      >
        <HStack spacing={3} mb={2}>
          {project.tech.map(technology => (
            <Box
              as='span'
              fontSize='xs'
              textTransform='uppercase'
              color={useColorModeValue('blue.600', 'blue.300')}
            >
              {technology}
            </Box>
          ))}
        </HStack>
        <Text fontSize='lg' fontWeight='bold' mb={1}>
          {project.name}
        </Text>
        <Text fontSize='sm'>{project.summary}</Text>
      </Box>
    </Box>
  )
}
