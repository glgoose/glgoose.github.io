import {
  Badge,
  Box,
  Circle,
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

const MediaElement = ({ media }) => {
  if (media === null) return

  const [imgBoxHeight, setImgBoxHeight] = useState(null)
  const imgBoxEl = useRef(null)

  useEffect(() => setImgBoxHeight(imgBoxEl.current.offsetHeight), [imgBoxEl])

  const slideDown = keyframes`
			from {transform: translateY(0px)}
			to {transform: translateY(-${imgBoxHeight}px)}
		`

  if (media[0].type === 'img') {
    return (
      <Box
        h={52}
        ref={imgBoxEl}
        roundedTop='lg'
        overflow='hidden'
        _hover={{ overflowY: 'scroll' }}
      >
        <Image
          src={media[0].url}
          alt={media[0].name}
          w='100%'
          minHeight='100%'
          fit='cover'
          align='center top'
          _hover={
            media[0].addAnimation && {
              animation: slideDown + ' 10s linear 0s normal none running'
            }
          }
        />
      </Box>
    )
  }
}

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
