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
import { useEffect, useRef, useState } from 'react'
import { FiGithub } from 'react-icons/fi'

const getMediaElement = (media, imgBoxHeight) => {
  if (media === null) return

  const slideDown = keyframes`
			from {transform: translateY(0px)}
			to {transform: translateY(-${imgBoxHeight}px)}
		`

  if (media[0].type === 'img') {
    return (
      <Image
        src={media[0].url}
        alt={media[0].name}
        w='100%'
        fit='cover'
        align='center top'
        _hover={
          media[0].addAnimation && {
            animation: slideDown + ' 10s linear 0s normal none running'
          }
        }
      />
    )
  }
}

export default function Card ({ project }) {
  const [imgBoxHeight, setImgBoxHeight] = useState(null)
  const imgBoxEl = useRef(null)

  useEffect(() => setImgBoxHeight(imgBoxEl.current.offsetHeight), [imgBoxEl])

  return (
    <Box w='xs' bg={useColorModeValue('gray.300', 'gray.700')} rounded='lg'>
      <Box
        h={52}
        ref={imgBoxEl}
        roundedTop='lg'
        overflow='hidden'
        _hover={{ overflowY: 'scroll' }}
      >
        {getMediaElement(project.media, imgBoxHeight)}
      </Box>

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
