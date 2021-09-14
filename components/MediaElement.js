const { Box, keyframes, Image } = require('@chakra-ui/react')
const { useState, useRef, useEffect } = require('react')

export default function MediaElement ({ media }) {
  if (media === null) return

  const mediaBoxEl = useRef(null)
  const [mediaBoxHeight, setMediaBoxHeight] = useState(null)

  useEffect(() => {
    setMediaBoxHeight(mediaBoxEl.current.offsetHeight)
  }, [mediaBoxEl])

  const slideDown = keyframes`
			from {transform: translateY(0px)}
			to {transform: translateY(-${mediaBoxHeight}px)}
		`

  if (media[0].type === 'img') {
    return (
      <Box
        h={52}
        ref={mediaBoxEl}
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
