//import preview from "./ezgif.com-resize.gif"
import React from "react"
import { Card, CardHeader, CardBody, CardFooter, Image, Box } from '@chakra-ui/react'
import styles from "./App.module.css"
import InfiniteScroll from "react-infinite-scroll-component"

const gifs = ["ezgif.com-resize.gif", "ezgif.com-resize2.gif", "ezgif.com-resize3.gif"];

// const cards = gifs.map((e, index) =>

//     <div className={styles.cardContainer}>
//         <Card key={index} bg="black">
//             <CardBody>
//                 <Image className={styles.cardImage} src={`${process.env.PUBLIC_URL}/images/${e}`} />
//             </CardBody>
//         </Card>
//         <Image src={`${process.env.PUBLIC_URL}/images/sidebar.png`} />
//     </div>

// );

class Feed extends React.Component {
    state = {
        items: gifs
    }

    fetchMoreData = () => {
        setTimeout(() => {
            this.setState({
                items: this.state.items.concat(gifs)
            });
        }, 500);
    };
    render() {
        return (
            <InfiniteScroll
                dataLength={this.state.items.length}
                next={this.fetchMoreData}
                hasMore={true}
                loader={<h2 className={styles.loading}>Loading more videos...</h2>}>
                <div className={styles.snapSection}>
                    {this.state.items.map((e, index) => (
                        <div className={styles.cardContainer}>
                            <Card key={index} bg="black">
                                <CardBody>
                                    <Image className={styles.cardImage} src={`${process.env.PUBLIC_URL}/images/${e}`} />
                                </CardBody>
                            </Card>
                            <Image src={`${process.env.PUBLIC_URL}/images/sidebar.png`} />
                        </div>
                    ))}
                </div>
            </InfiniteScroll>

        )

    }



}

export default Feed