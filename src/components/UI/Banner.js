/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { Button, Carousel } from "@material-tailwind/react";
import img1 from '../../assets/banner/img-1.png';
import img2 from '../../assets/banner/img-2.png';
import img3 from '../../assets/banner/img-3.png';
import img4 from '../../assets/banner/img-4.png';
import sideImg from '../../assets/banner/sideImg.png';
import Image from "next/image";
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
} from "@material-tailwind/react";
import Link from "next/link";


 
export default function Banner() {
    return (
        <div className="2xl:flex my-2">
            <Carousel
                autoplay={true}
                loop={true}
                className="h-[490px]"
                navigation={({ setActiveIndex, activeIndex, length }) => (
                    <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                        {new Array(length).fill("").map((_, i) => (
                            <span
                                key={i}
                                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                                    }`}
                                onClick={() => setActiveIndex(i)}
                            />
                        ))}
                    </div>
                )}
            >
                <Image
                    src={img1}
                    alt="image 1"
                    className="h-full w-full object-cover"
                />
                <Image
                    src={img2}
                    alt="image 2"
                    className="h-full w-full object-cover"
                />
                <Image
                    src={img3}
                    alt="image 3"
                    className="h-full w-full object-cover"
                />
                <Image
                    src={img4}
                    alt="image 4"
                    className="h-full w-full object-cover"
                />
            </Carousel>
            <Card
                shadow={false}
                className="relative grid w-full 2xl:max-w-[28rem] rounded-none items-end justify-center overflow-hidden text-center max-h-[490px] "
            >
                <CardHeader
                    floated={false}
                    shadow={false}
                    color="transparent"
                    className={`absolute inset-0 m-0 h-full w-full rounded-none sideBanner`}
                >
                    <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
                </CardHeader>
                <CardBody className="relative py-14 px-6 md:px-12">
                    <Typography
                        variant="h4"
                        color="white"
                        className="my-8 font-medium leading-[1.5]"
                    >
                       <span className="text-orange-600 font-extrabold text-lg"> What are you waiting for ?</span>
                       <br />
                       Let's make your dream come true!
                    </Typography>
                    <Link href='/builder'>
                        <Button>Build Now</Button>
                    </Link>
                    <Typography
                        color="white"
                        className="my-6 font-extrabold leading-[1.5] text-3xl text-yellow-600"
                    >
                        A flat 10% discout 
                    </Typography>
                </CardBody>
            </Card>
        </div>
    );
}


