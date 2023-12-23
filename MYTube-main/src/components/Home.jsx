import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import l1 from '../assets/l1.jpg';
import img5 from '../assets/5.png';
import f1 from '../assets/f1.jpg'

const Home = () => {
  return (
    <Box>
      <MyCarousel />



{ /* //Services */ }

      <Container maxW={'container.xl'} minH={'100vh'} p="16">
        <Heading
          textTransform={'uppercase'}
          py="2"
          w={'fit-content'}
          borderBottom={'2px solid'}
          m="auto"
        > Services
        </Heading>

        <Stack
          h="full"
          p={'4'}
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Image src={img5} h={['70', '400']} filter={'hue-rotate(-120deg)'} />

          <Text
            letterSpacing={'widest'}
            lineHeight={'190%'}
            p={['4', '16']}
            textAlign={'center'}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nemo
            tempora deleniti quod, est eos veniam autem asperiores rem, nam
            laudantium ut, similique ducimus amet sequi et voluptas iusto rerum
            at aliquid numquam corporis ipsa reprehenderit? Porro iusto magnam,
            sit vero deleniti, non nemo rem accusamus neque, quibusdam ab.
            Libero, reprehenderit recusandae labore eaque, aspernatur aliquid
            modi soluta ullam voluptatum unde repellat in molestias quod?
            Doloribus ratione illum quisquam earum consequuntur nam voluptatem,
            velit culpa maiores. Inventore esse illum excepturi dolores est
            natus aliquid maiores sunt omnis deserunt accusantium amet enim eos
            adipisci minima hic, nam provident quo aperiam quasi vel?
            Dignissimos accusantium aliquid aut vel explicabo voluptatum
            molestias fugit harum reprehenderit incidunt. Quis cumque explicabo
            omnis officiis autem dolorum!
          </Text>
        </Stack>
      </Container>


 {/* Instructions */}

      <Container
        maxW={'container.xxl'}
        minH={'100vh'}
        bg="purple.600"
        centerContent
      >
        <Heading
          textTransform={'uppercase'}
          py="1"
          w={'fit-content'}
          borderBottom={'2px solid white'}
          m="auto"
        >
          Instructions
        </Heading>
        <Box padding="5" bg="purple.600" color="black" maxW="xl">
          <Text
            letterSpacing={'widest'}
            lineHeight={'190%'}
            p={['4', '16']}
            textAlign={'center'}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing e lit. Ad
            nemotempora deleniti quod, est eos veniam autem asperiores rem, nam
            laudantium ut, similique ducimus amet sequi et voluptas iusto rerum
            at aliquid numquam corporis ipsa reprehenderit? Porro iusto magnam,
            sit vero deleniti, non nemo rem accusamus neque, quibusdam ab.
            Libero, reprehenderit recusandae labore eaque, aspernatur aliquid
            modi soluta ullam voluptatum unde repellat in molestias quod?
            Doloribus ratione illum quisquam earum consequuntur nam voluptatem,
            velit culpa maiores Lorem ipsum dolor sit amet consectetur
            adipisicing elit. At, nesciunt est expedita dolorum illum inventore
            laborum officiis quas quae exercitationem distinctio quo earum
            minima hic, nam provident quo aperiam quasi vel? Dignissimos
            accusantium aliquid aut vel explicabo voluptatum molestias fugit
            harum reprehenderit incidunt. Quis cumque explicabo omnis officiis
            autem dolorum!
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%,-50%)',
  textTransform: 'uppercase',
  padding: '4',
  size: '4xl',
};


// // carousel

const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={1200}
    showStatus={false}
    showIndicators={true}
  >
    <Box w="full" h={'100vh'}>
      <Image src={f1} h="full" w={'full'} objectFit={'cover'} />
      <Heading bgColor={'blackAlpha.500'} color={'white'} {...headingOptions}>
        The Future
      </Heading>
    </Box>

    <Box w="full" h={'100vh'}>
      <Image src={img2} h="full" w={'full'} objectFit={'cover'} />
      <Heading bgColor={'whiteAlpha.900'} color={'black'} {...headingOptions}>
        Sci -fi Gaming
      </Heading>
    </Box>

    <Box w="full" h={'100vh'}>
      <Image src={img3} h="full" w={'full'} objectFit={'cover'} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        Gaming on Console
      </Heading>
    </Box>

    <Box w="full" h={'100vh'}>
      <Image src={l1} h="full" w={'full'} objectFit={'cover'} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        Sunny day
      </Heading>
    </Box>
  </Carousel>
);

export default Home;
