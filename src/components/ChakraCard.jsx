import React from 'react'
import { Card, CardHeader, CardBody, CardFooter ,Heading,Stack,StackDivider,Box,SimpleGrid,Button} from '@chakra-ui/react'
function ChakraCard() {
  return (
    <div className='mx-auto '>
    <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
    
  <Card className='items-center justify-center '> 
    <CardHeader>
      <Heading size='md'> Customer dashboard</Heading>
    </CardHeader>
    <CardHeader>
      <Heading size='md'> Customer dashboard</Heading>
    </CardHeader>
    <CardBody>
      <p>View a summary of all your customers over the last month.</p>
    </CardBody>
    <CardFooter>
      <Button>View here</Button>
    </CardFooter>
  </Card>
  <Card className='max-h-screen'>
    <CardHeader>
      <Heading size='md'> Customer dashboard</Heading>
    </CardHeader>
    <CardBody>
      <p>View a summary of all your customers over the last month.</p>
    </CardBody>
    <CardFooter>
      <Button>View here</Button>
    </CardFooter>
  </Card>
  <Card >
    <CardHeader>
      <Heading size='md'> Customer dashboard</Heading>
    </CardHeader>
    <CardBody>
      <p>View a summary of all your customers over the last month.</p>
    </CardBody>
    <CardFooter>
      <Button>View here</Button>
    </CardFooter>
  </Card>
  
</SimpleGrid>
</div>
  )
}

export default ChakraCard

