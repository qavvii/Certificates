import {
  Box,
  Button,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineSend } from 'react-icons/ai';

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.800'} minH={'40'} p="16" color={'white'}>

      <Stack direction={['column', 'row']}>

        <VStack alignItems={'stretch'} w={'full'} px={'4'}>

          <Heading
            size="md"
            textTransform={'uppercase'}
            textAlign={['center', 'left']} >
            Subscribe this site for notification
          </Heading>

          <HStack borderBottom={'2px solid white'} py="2">
            <Input
              placeholder="Enter Email address"
              border={'none'}
              outline={'none'}
              focusBorderColor="none"
            />
            <Button
              p={'0'}
              colorScheme={'purple'}
              variant={'ghost'}
              borderRadius={'0 20px 20px 0'}
            >
              <AiOutlineSend size={15} />
            </Button>
          </HStack>
        </VStack>


        <VStack
          w={'full'}
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px solid white']}
        >
          <Heading textTransform={'uppercase'} textAlign={'center'}>
            mytube
          </Heading>
          <Text>all  copy right reserved </Text>
        </VStack>


        <VStack w={'full'}>

          <Heading size={'md'} textTransform={'uppercase'}>
            Social Media 
          </Heading>

          <Button variant={'link'} colorScheme={'white'}>
            <a target={'black'} href="https://youtube.com">@Youtube
            </a>
          </Button>

          <Button variant={'link'} colorScheme={'white'}>
            <a target={'black'} href="https://instagram.com"> @Instagram
            </a>
          </Button>

          <Button variant={'link'} colorScheme={'white'}>
            <a target={'black'} href="https://github.com/QaviAnsari">@ Github
            </a>
          </Button>
          
        </VStack>



      </Stack>
    </Box>
  );
};

export default Footer;
