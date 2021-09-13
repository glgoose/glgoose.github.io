import {
  Badge,
  Box,
  Flex,
  HStack,
  Icon,
  Image,
  keyframes,
  Link as ChakraLink,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import { FiGithub } from 'react-icons/fi'

const getMediaElement = media => {
  if (media === null) return

  if (media[0].type === 'img') {
    const slideDown = keyframes`
			from {transform: translateY(0%)}
			to {transform: translateY(-90%)}
		`
    return (
      <Image
        src={media[0].url}
        alt={media[0].name}
        w='100%'
        h={media[0].addAnimation ? undefined : '100%'}
        fit='cover'
        align='left top'
        animation={
          media[0].addAnimation
            ? `${slideDown} 30s linear 2s infinite normal none running`
            : undefined
        }
      />
    )
  }
}

export default function Card ({ project }) {
  return (
    <Box w='xs' bg={useColorModeValue('gray.300', 'gray.700')} rounded='lg'>
      <Box w='100%' h={48} roundedTop='lg' overflow='hidden'>
        {getMediaElement(project.media)}
      </Box>

      <Flex direction='column' h={44} px={3} py={4}>
        <HStack spacing={3} mt={1}>
          {project.tech.map(technology => (
            <Box
              as='span'
              key={technology}
              fontSize='xs'
              textTransform='uppercase'
              color={useColorModeValue('blue.600', 'blue.300')}
            >
              {technology}
            </Box>
          ))}
        </HStack>

        <Text fontSize='lg' fontWeight='bold' mt={3} mb={2}>
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
              <Badge key={tag}>{tag}</Badge>
            ))}
          </HStack>
        </HStack>
      </Flex>
    </Box>
  )
}
