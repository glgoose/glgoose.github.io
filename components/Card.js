import {
  Badge,
  Box,
  Flex,
  HStack,
  Icon,
  Link as ChakraLink,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import MediaElement from './MediaElement'
import { FiGithub } from 'react-icons/fi'

export default function Card ({ project }) {
  return (
    <Box w='xs' bg={useColorModeValue('gray.300', 'gray.600')} rounded='lg'>
      <MediaElement media={project.media} />

      <Flex direction='column' h={44} p={3}>
        <HStack spacing={3} mt={1}>
          {project.tech.map(technology => (
            <Badge
              key={technology}
              variant={useColorModeValue('outline', 'subtle')}
              colorScheme='blue'
            >
              {technology}
            </Badge>
          ))}
        </HStack>

        <Text fontSize='xl' fontWeight='bold' mt={3} mb={1}>
          <ChakraLink href={project.url} isExternal>
            {project.name}
          </ChakraLink>
        </Text>

        <Text fontSize='sm'>{project.summary}</Text>

        <HStack justify='space-between' mt='auto'>
          <ChakraLink href={project.repo} isExternal>
            <Icon as={FiGithub} />
          </ChakraLink>
          <HStack>
            {project.tags.map(tag => (
              <Box
                as='span'
                key={tag}
                fontSize='xs'
                textTransform='uppercase'
                color={useColorModeValue('blue.600', 'blue.300')}
              >
                {tag}
              </Box>
            ))}
          </HStack>
        </HStack>
      </Flex>
    </Box>
  )
}
