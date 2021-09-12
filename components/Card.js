import {
  Box,
  HStack,
  Image,
  keyframes,
  Text,
  useColorModeValue
} from '@chakra-ui/react'

const getMediaElement = media => {
  if (media === null) return

  console.log(media)

  if (media[0].type === 'img') {
    const slideDown = keyframes`
			from {transform: translateY(0%)}
			to {transform: translateY(-90%)}
		`
    return (
      <Image
        src={media[0].url}
        alt={media[0].name}
        fit='cover'
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
    <Box
      w='xs'
      h='xs'
      bg={useColorModeValue('gray.300', 'gray.700')}
      rounded='lg'
    >
      <Box w='100%' h={48} roundedTop='lg' overflow='hidden'>
        {getMediaElement(project.media)}
      </Box>

      <Box px={3} py={4}>
        <HStack spacing={3} mb={2}>
          {project.tech.map(technology => (
            <Box
              as='span'
              key={technology.name}
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
