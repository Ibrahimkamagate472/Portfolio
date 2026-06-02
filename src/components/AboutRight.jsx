import {
  Box,
  Heading,
  Stack,
  Button,
  Link,
  Image,
  Center,
} from '@chakra-ui/react'
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'
import { SiHandshake } from 'react-icons/si'
import { MoveRight } from 'lucide-react'
const AboutRight = () => {
  return (
    <Box
      bg='gray.300'
      shadow='lg'
      borderWidth='2px'
      borderColor='blackAlpha.200'
    >
      <Box spaceY='4' spaceX={2} mt={8} mb={8}>
        <Center>
          <Image
            src='https://www.ledr.com/colours/black.jpg'
            boxSize='150px'
            borderRadius='full'
            alignItems='center'
            alt=''
          />
        </Center>
        <Heading textAlign='center'>Ibrahim Kamagate</Heading>
        <Link
          href='mailto:ibrahimk3114@gmail.com'
          display='block'
          wordBreak='break-word'
          _hover={{ color: 'gray.400' }}
        >
          ibrahimk3114@gmail.com
        </Link>
        <Link
          href='mailto:ibrahim.kamagate472@myhunter.cuny.edu'
          display='block'
          wordBreak='break-word'
          _hover={{ color: 'gray.400' }}
        >
          ibrahim.kamagate472@myhunter.cuny.edu
        </Link>
        <Center>
          <Stack direction='row'>
            <Link
              as='a'
              target='_blank'
              href='https://github.com/Ibrahimkamagate472'
              _hover={{ color: 'gray.400' }}
            >
              <FaGithubSquare size={30} />
            </Link>
            <Link
              as='a'
              target='_blank'
              href='https://linkedin.com/in/ibrahim-k-b36422264'
              _hover={{ color: 'gray.400' }}
            >
              <FaLinkedin size={30} />
            </Link>
            <Link
              as='a'
              target='_blank'
              href='https://app.joinhandshake.com/profiles/het24e'
              _hover={{ color: 'gray.400' }}
            >
              <SiHandshake size={27} />
            </Link>
            <Button
              as='a'
              target='_blank'
              href='https://ibrahimkamagate472.github.io/ibrahim-resume/'
              variant='ghost'
              w='100px'
              _hover={{ color: 'gray.400' }}
            >
              Resume
              <MoveRight />
            </Button>
          </Stack>
        </Center>
      </Box>
    </Box>
  )
}
export default AboutRight
