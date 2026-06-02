import { Flex, Button, ButtonGroup, Box, Center } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

export default function Nav() {
  const navigate = useNavigate()
  return (
    <Box backgroundColor='gray.200'>
      <Center>
        <Flex shadow='xl' borderRadius='2xl'>
          <ButtonGroup
            marginRight={0}
            my={1}
            variant='surface'
            padding={2}
            display='flex'
            flexWrap='wrap'
            justifyContent='center'
          >
            <Button
              size={{ base: 'xs', md: 'md' }}
              variant='ghost'
              onClick={() => {
                navigate('/')
              }}
            >
              Home
            </Button>
            <Button
              size={{ base: 'xs', md: 'md' }}
              variant='ghost'
              onClick={() => {
                navigate('/about')
              }}
            >
              About
            </Button>
            <Button
              size={{ base: 'xs', md: 'md' }}
              variant='ghost'
              onClick={() => navigate('/projects')}
            >
              Projects
            </Button>
            {/* <Button variant='ghost' onClick={() => navigate('/contact')}>
              Contact
            </Button> */}
            <Button
              size={{ base: 'xs', md: 'md' }}
              variant='ghost'
              as='a'
              target='_blank'
              href='https://github.com/Ibrahimkamagate472'
            >
              Github
            </Button>
            <Button
              size={{ base: 'xs', md: 'md' }}
              variant='ghost'
              as='a'
              target='_blank'
              href='https://linkedin.com/in/ibrahim-k-b36422264'
            >
              Linked In
            </Button>

            <Button
              size={{ base: 'xs', md: 'md' }}
              variant='ghost'
              as='a'
              target='_blank'
              href='https://ibrahimkamagate472.github.io/ibrahim-resume/'
            >
              Resume
            </Button>
          </ButtonGroup>
        </Flex>
      </Center>
    </Box>
  )
}
