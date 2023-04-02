import logo from './logo.svg';

import { Box, Icon, IconButton, Image, Input, InputGroup, InputLeftAddon, InputRightElement, Heading } from "@chakra-ui/react";
import { Search2Icon, ChevronLeftIcon } from '@chakra-ui/icons'
//import preview from "./gregor_teaching_actual_gif_1.gif"
import { Link } from 'react-router-dom';
import styles from "./App.module.css"
import footerPic from "./footer.png"



function CatchUp() {

    return (
        <>
            <Box className={styles.container}>
                <Box padding="20px" paddingBottom="0px">
                    <Icon as={ChevronLeftIcon} boxSize="30px" />
                </Box>
                <Box height="130px"
                    padding="30px"
                    paddingTop="10px"
                    display="flex"
                    justifyContent="space-between"
                    flexDir="column">
                    <Heading>Quickly catch up</Heading>
                    <InputGroup>
                        <Input bg="white" placeholder="Search" />
                        <InputRightElement bg="#FFCC00"
                            borderRadius="0px 7px 7px 0" pointerEvents="none">
                            <Icon as={Search2Icon} />
                        </InputRightElement>
                    </InputGroup>
                </Box>
                <Box display="flex"
                    flexDir="column"
                    padding="30px"
                    paddingTop="10px"
                    justifyContent="space-between">
                    <Heading size="md"
                        paddingBottom="10px"> Lecture 1: Arbitrary Arity Trees</Heading>
                    <Link to="/feed">
                        <img className={styles.previewGif} src={`${process.env.PUBLIC_URL}/images/gregor_teaching_actual_gif_1.gif`}></img>
                    </Link>

                    <Heading size="md"
                        paddingTop="30px"
                        paddingBottom="20px"> Key Insights</Heading>
                    <Box height="25vh"
                        bg="white"
                        borderRadius={10}
                        padding="30px">
                        <ul>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                            <li>Curabitur augue est, aliquam sit amet efficitur nec, rutrum nec diam.</li>
                            <li>Suspendisse molestie sed magna et dapibus.</li>
                        </ul>

                    </Box>
                    <img class={styles.footer} src={footerPic} ></img>


                </Box>
            </Box>
        </>



    );
}

export default CatchUp;
