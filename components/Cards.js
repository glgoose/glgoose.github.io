import { Wrap, WrapItem } from '@chakra-ui/react'
import Card from './Card'

export default function Cards ({ projects }) {
  return (
    <Wrap justify='center' spacing={[8, 10, 12]}>
      {projects.map(project => (
        <WrapItem key={project.name}>
          <Card project={project} />
        </WrapItem>
      ))}
    </Wrap>
  )
}
