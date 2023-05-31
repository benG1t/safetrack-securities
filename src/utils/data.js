import React from 'react'
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
  FaTruck,
  FaPeopleCarry,
  FaLocationArrow,
} from 'react-icons/fa'
import { GiPadlock, GiSteeringWheel } from 'react-icons/gi'
import { MdEmail } from 'react-icons/md'
import { BsFillTelephoneFill } from 'react-icons/bs'
// images Portfolio
import pepper from '../images/pepper.JPG'
import watchnight from '../images/watchnight.jpeg'
import camerawatch from '../images/camerawatch.JPG'
import cctvscreen from '../images/cctvscreen.JPG'
import camera from '../images/camera.JPG'
import walkietalkie from '../images/walkietalkie.jpeg'
import bodyscanner from '../images/bodyscanner.jpeg'
import spybutton from '../images/spybutton.JPG'
import glasscamera from '../images/glasscamera.JPG'
import solar from '../images/solar.jpg'
import battery from '../images/battery.JPG'
import handcuf from '../images/handcuf.JPG'
// images Slides
import one from '../images-testimonials/one.jpg'
import two from '../images-testimonials/two.jpg'
import three from '../images-testimonials/three.jpg'
import four from '../images-testimonials/four.jpg'

export const links = [
  {
    id: 1,
    url: '/about',
    text: 'about',
  },
  {
    id: 2,
    url: '/portfolio',
    text: 'portfolio',
  },
  {
    id: 3,
    url: '/testimonial',
    text: 'testimonial',
  },
  {
    id: 4,
    url: '/contact',
    text: 'contact',
  },
]

export const social = [
  {
    id: 1,
    url: 'https://instagram.com/',
    icon: <FaInstagram />,
  },
  {
    id: 2,
    url: 'https://www.FaFacebook.com',
    icon: <FaFacebook />,
  },
  {
    id: 3,
    url: 'https://www.linkedin.com/in/benjamin-okundaye-15b048197/',
    icon: <FaTwitter />,
  },
  {
    id: 4,
    url: 'https://api.whatsapp.com/send?phone=2348037829276',
    icon: <FaWhatsapp />,
  },
]

export const about = [
  {
    id: 1,
    icon: <GiPadlock />,
    service: 'security',
    description:
      'Safetrack Security/logistic’s mission is to continually strive to deliver quality security services by maintaining the latest registered industry standards and employing highly trained and motivated Installers and registered personnel.',
  },
  {
    id: 2,
    icon: <FaTruck />,
    service: 'installation',
    description:
      'We engage in a Rapid Nationwide delivery/installation and state residence response which is concerned with our company’s ability to satisfy customer service requirements in a timely manner. Information technology has increased the capability to postpone logistical operations to the latest possible time and then accomplish rapid delivery of required inventory.',
  },
  {
    id: 3,
    icon: <GiSteeringWheel />,
    service: 'procurement',
    description:
      'we are more concerned and engage in sales of spy/security indoor and outdoor gadgets like spy watch,spy pens,spy glasses,Peppersprays and other security and non lethal human friendly gadgets for individuals,home use and offices.',
  },
  {
    id: 4,
    icon: <FaPeopleCarry />,
    service: 'training',
    description:
      'Our trainings are specially for individuals who Intend to Field in cctv/surveillance installations and proper coverage and monitoring of various types of controls rooms and events organizational control.',
  },
]

export const portfoliopics = [
  {
    id: 1,
    image: pepper,
    name: 'pepper spray',
  },
  {
    id: 2,
    image: watchnight,
    name: 'camera watch',
  },
  {
    id: 3,
    image: camerawatch,
    name: 'camera wrist watch',
  },
  {
    id: 4,
    image: cctvscreen,
    name: 'cctv screen',
  },
  {
    id: 5,
    image: camera,
    name: 'camera',
  },
  {
    id: 6,
    image: walkietalkie,
    name: 'walkie talkie',
  },
  {
    id: 7,
    image: bodyscanner,
    name: 'scanner',
  },
  {
    id: 8,
    image: spybutton,
    name: 'spy button camera',
  },
  {
    id: 9,
    image: glasscamera,
    name: 'glasscamera',
  },
  {
    id: 10,
    image: solar,
    name: 'solar panels',
  },
  {
    id: 11,
    image: battery,
    name: 'battery',
  },
  {
    id: 12,
    image: handcuf,
    name: 'handcuffs',
  },
]

// TESTIMONIALS
export const datapeople = [
  {
    id: 1,
    image: one,
    name: 'shola bakare',
    quote: 'Safe track delivered within a timely manner.',
  },
  {
    id: 2,
    image: two,
    name: 'cynthia onu',
    quote:
      'I have been using the inverter,solar panels,charge controller and batteries for years now with no issue.',
  },
  {
    id: 3,
    image: three,
    name: 'emeka eze',
    quote:
      'I love that my company can get all the security gadgets we need in one place.',
  },
  {
    id: 4,
    image: four,
    name: 'bright nneji',
    quote: 'Safe track is the best.',
  },
]

// CONTACT
export const contactinfo = [
  {
    id: 1,
    icon: <FaLocationArrow />,
    title: 'address',
    contactone: '10 Ijieola Street,',
    contacttwo: 'Ikeja Lagos,Nigeria',
  },
  {
    id: 2,
    icon: <MdEmail />,
    title: 'email',
    contactone: 'safetrack_secure@outlook.com,',
    contacttwo: 'augustineapekhume@gmail.com',
  },
  {
    id: 3,
    icon: <BsFillTelephoneFill />,
    title: 'address',
    contactone: '(234) 8055-041-602,',
    contacttwo: '(234) 8037-829-276',
  },
]
