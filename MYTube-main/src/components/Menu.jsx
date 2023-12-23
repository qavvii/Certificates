import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BiAlignLeft } from 'react-icons/bi';

const Menu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // isOpen for true/false

  return (
    <>
      <Button
        zIndex={'overlay'}
        pos={'fixed'}
        top={'4'}
        left={'4'}
        colorScheme="purple"
        p={'0'}
        w={'13'}
        h={'14'}
        borderRadius={'full'}
        onClick={onOpen}>
        <BiAlignLeft size={'30'} />
      </Button>


      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        
        <DrawerOverlay />

        <DrawerContent>
          <DrawerCloseButton />

          <DrawerHeader> MYTube</DrawerHeader>

          <DrawerBody>
            <VStack alignItems={'flex-start'}>
              <Button
                onClick={onClose}
                variant={'ghost'}
                colorScheme={'purple'}
              >
                <Link to={'/'}>Home</Link>
              </Button>

              <Button
                onClick={onClose}
                variant={'ghost'}
                colorScheme={'purple'}
              >
                <Link to={'/videos'}>Videos</Link>
              </Button>

              

              <Button
                onClick={onClose}
                variant={'ghost'}
                colorScheme={'purple'}
              >
                <Link to={'/upload'}>Upload Video</Link>
              </Button>
            </VStack>

            <HStack 
              pos={'absolute'}
              bottom={'10'}
              left={'0'}
              w={'full'}
              justifyContent={'space-evenly'}>
              
              <Button onClick={onClose} colorScheme={'purple'}>
                <Link to={'/login'}>Log In</Link>
              </Button>

              <Button onClick={onClose} colorScheme={'purple'} variant={'outline'}>
                <Link to={'/signup'}>Sign Up</Link>
              </Button>

            </HStack>


          </DrawerBody>
        </DrawerContent>
      </Drawer>


    </>
  );
};

export default Menu;
