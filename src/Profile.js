import { Avatar, Box, Flex, keyframes } from '@chakra-ui/react';

export default function Profile() {
  const size = '96px';
  const color = 'teal';

  const pulseRing = keyframes`
	0% {
    transform: scale(0.33);
  }
  40%,
  50% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
	`;

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      h="216px"
      w="full"
      overflow="hidden">
      {/* Ideally, only the box should be used. The <Flex /> is used to style the preview. */}
      <Box
        as="div"
        position="relative"
        w={size}
        h={size}
        _before={{
          content: "''",
          position: 'relative',
          display: 'block',
          width: '300%',
          height: '300%',
          boxSizing: 'border-box',
          marginLeft: '-100%',
          marginTop: '-100%',
          borderRadius: '50%',
          bgColor: color,
          animation: `2.25s ${pulseRing} cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite`,
        }}>
        <Avatar
          src="https://scontent-lax3-2.xx.fbcdn.net/v/t1.15752-9/281354924_996970160954592_3957231374639651999_n.png?_nc_cat=100&ccb=1-7&_nc_sid=ae9488&_nc_ohc=qFPbAkOgWncAX_HaZo1&tn=6jsJUdONq_9vkfMx&_nc_ht=scontent-lax3-2.xx&oh=03_AVLi6SwuWgesqeJX6em_RTDpDR80fgpg5purIMzFPF9djg&oe=62F200BE"
          size="full"
          position="absolute"
          top={0}
        />
      </Box>
    </Flex>
  );
}