import afganistansvg from '../img/afganistansvg.svg';
import argentinasvg from '../img/argentinasvg.svg';
import bangladeshsvg from '../img/bangladeshsvg.svg';
import boliviasvg from '../img/boliviasvg.svg';
import brazilsvg from '../img/brazilsvg.svg';
import canadasvg from '../img/canadasvg.svg';
import chilesvg from '../img/chilesvg.svg';
import chinasvg from '../img/chinasvg.svg';
import colombiasvg from '../img/colombiasvg.svg';
import costaricasvg from '../img/costaricasvg.svg';
import cubasvg from '../img/cubasvg.svg';
import denmarksvg from '../img/denmarksvg.svg';
import dominicasvg from '../img/dominicasvg.svg';
import ecuadorsvg from '../img/ecuadorsvg.svg';
import egyptsvg from '../img/egyptsvg.svg';
import elsalvadorsvg from '../img/elsalvadorsvg.svg';
import guatemalasvg from '../img/guatemalasvg.svg';
import guyanasvg from '../img/guyanasvg.svg';
import haitisvg from '../img/haitisvg.svg';
import hondurassvg from '../img/hondurassvg.svg';
import hungarysvg from '../img/hungarysvg.svg';
import italisvg from '../img/italisvg.svg';
import jamaicasvg from '../img/jamaicasvg.svg';
import mexicosvg from '../img/mexicosvg.svg';
import japansvg from '../img/japansvg.svg';
import netherlandssvg from '../img/netherlandssvg.svg';
import nicaraguasvg from '../img/nicaraguasvg.svg';
import paraguaysvg from '../img/paraguaysvg.svg';
import perusvg from '../img/perusvg.svg';
import republicadominicanasvg from '../img/republicadominicanasvg.svg';
import russiasvg from '../img/russiasvg.svg';
import southcoreasvg from '../img/southcoreasvg.svg';
import spainsvg from '../img/spainsvg.svg';
import surinamesvg from '../img/surinamesvg.svg';
import thailandsvg from '../img/thailandsvg.svg';
import trinidadytobagosvg from '../img/trinidadytobagosvg.svg';
import ukrainesvg from '../img/ukrainesvg.svg';
import unitedkindomsvg from '../img/unitedkindomsvg.svg';
import unitedstatessvg from '../img/unitedstatessvg.svg';
import uruguaysvg from '../img/uruguaysvg.svg';
import venezuelasvg from '../img/venezuelasvg.svg';
import vietnamsvg from '../img/vietnamsvg.svg';

const countriesArray = [
  {
    name: 'Afghanistan',
    path: '/Afghanistan',
    image: afganistansvg,
    greeting: 'سلام، حال شما چطور است؟', // Pashto
  },
  {
    name: 'Argentina',
    path: '/Argentina',
    image: argentinasvg,
    greeting: 'Hola, ¿cómo estás?', // Spanish
  },
  {
    name: 'Bangladesh',
    path: '/Bangladesh',
    image: bangladeshsvg,
    greeting: 'হাই, কেমন আছেন?', // Bengali
  },
  {
    name: 'Bolivia',
    path: '/Bolivia',
    image: boliviasvg,
    greeting: 'Hola, ¿cómo estás?', // Spanish
  },
  {
    name: 'Brazil',
    path: '/Brazil',
    image: brazilsvg,
    greeting: 'Olá, como você está?', // Portuguese
  },
  {
    name: 'Canada',
    path: '/Canada',
    image: canadasvg,
    greeting: 'Hello, how are you?', // English
  },
  {
    name: 'Chile',
    path: '/Chile',
    image: chilesvg,
    greeting: 'Hola, ¿cómo estás?', // Spanish
  },
  {
    name: 'China',
    path: '/China',
    image: chinasvg,
    greeting: '你好，你好吗？', // Chinese (Simplified)
  },
  {
    name: 'Colombia',
    path: '/Colombia',
    image: colombiasvg,
    greeting: 'Hola, ¿cómo estás?', // Spanish
  },
  {
    name: 'Costa Rica',
    path: '/Costa%20Rica',
    image: costaricasvg,
    greeting: 'Hola, ¿cómo estás?', // Spanish
  },
  {
    name: 'Cuba',
    path: '/Cuba',
    image: cubasvg,
    greeting: 'Hola, ¿cómo estás?', // Spanish
  },
  {
    name: 'Denmark',
    path: '/Denmark',
    image: denmarksvg,
    greeting: 'Hej, hvordan har du det?', // Danish
  },
  {
    name: 'Dominica',
    path: '/Dominica',
    image: dominicasvg,
    greeting: 'Hi, how are you?', // English
  },
  {
    name: 'Ecuador',
    path: '/Ecuador',
    image: ecuadorsvg,
    greeting: 'Hola, ¿cómo estás?', // Spanish
  },
  {
    name: 'Egypt',
    path: '/Egypt',
    image: egyptsvg,
    greeting: 'مرحبًا، كيف حالك؟', // Arabic
  },
  {
    name: 'El Salvador',
    path: '/El%20Salvador',
    image: elsalvadorsvg,
    greeting: 'Hola, ¿cómo estás?', // Spanish
  },
  {
    name: 'Guatemala',
    path: '/Guatemala',
    image: guatemalasvg,
    greeting: 'Hola, ¿cómo estás?', // Spanish
  },
  {
    name: 'Guyana',
    path: '/Guyana',
    image: guyanasvg,
    greeting: 'Hi, how are you?', // English
  },
  {
    name: 'Haiti',
    path: '/Haiti',
    image: haitisvg,
    greeting: 'Bonjou, kijan ou ye?', // Haitian Creole
  },
  {
    name: 'Honduras',
    path: '/Honduras',
    image: hondurassvg,
    greeting: 'Hola, ¿cómo estás?', // Spanish
  },
  {
    name: 'Hungary',
    path: '/Hungary',
    image: hungarysvg,
    greeting: 'Szia, hogy vagy?', // Hungarian
  },
  {
    name: 'Italy',
    path: '/Italy',
    image: italisvg,
    greeting: 'Ciao, come stai?', // Italian
  },
  {
    name: 'Jamaica',
    path: '/Jamaica',
    image: jamaicasvg,
    greeting: 'Hi, how yuh doin?', // Jamaican Patois
  },
  {
    name: 'Mexico',
    path: '/Mexico',
    image: mexicosvg,
    greeting: 'Hola, ¿cómo estás?', // Spanish
  },
  {
    name: 'Japan',
    path: '/Japan',
    image: japansvg,
    greeting: 'こんにちは、元気ですか？', // Japanese
  },
  {
    name: 'Netherlands',
    path: '/Netherlands',
    image: netherlandssvg,
    greeting: 'Hallo, hoe gaat het met je?', // Dutch
  },
  {
    name: 'Nicaragua',
    path: '/Nicaragua',
    image: nicaraguasvg,
    greeting: 'Hola, ¿cómo estás?', // Spanish
  },
  {
    name: 'Paraguay',
    path: '/Paraguay',
    image: paraguaysvg,
    greeting: 'Hola, ¿cómo estás?', // Spanish
  },
  {
    name: 'Peru',
    path: '/Peru',
    image: perusvg,
    greeting: 'Hola, ¿cómo estás?', // Spanish
  },
  {
    name: 'Dominican Republic',
    path: '/Dominican%20Republic',
    image: republicadominicanasvg,
    greeting: 'Hola, ¿cómo estás?', // Spanish
  },
  {
    name: 'Russia',
    path: '/Russia',
    image: russiasvg,
    greeting: 'Привет, как дела?', // Russian
  },
  {
    name: 'South Korea',
    path: '/South%20Korea',
    image: southcoreasvg,
    greeting: '안녕하세요, 어떻게 지내세요?', // Korean
  },
  {
    name: 'Spain',
    path: '/Spain',
    image: spainsvg,
    greeting: 'Hola, ¿cómo estás?', // Spanish
  },
  {
    name: 'Suriname',
    path: '/Suriname',
    image: surinamesvg,
    greeting: 'Hi, fa waka?', // Sranan Tongo
  },
  {
    name: 'Thailand',
    path: '/Thailand',
    image: thailandsvg,
    greeting: 'สวัสดีครับ/ค่ะ สบายดีไหมครับ/ค่ะ?', // Thai
  },
  {
    name: 'Trinidad and Tobago',
    path: '/Trinidad%20And%20Tobago',
    image: trinidadytobagosvg,
    greeting: 'Hi, how yuh goin?', // Trinidadian English
  },
  {
    name: 'Ukraine',
    path: '/Ukraine',
    image: ukrainesvg,
    greeting: 'Привіт, як справи?', // Ukrainian
  },
  {
    name: 'United Kingdom',
    path: '/United%20Kingdom',
    image: unitedkindomsvg,
    greeting: 'Hello, how are you?', // English
  },
  {
    name: 'United States',
    path: '/United%20States',
    image: unitedstatessvg,
    greeting: 'Hi, how are you?', // English
  },
  {
    name: 'Uruguay',
    path: '/Uruguay',
    image: uruguaysvg,
    greeting: 'Hola, ¿cómo estás?', // Spanish
  },
  {
    name: 'Venezuela',
    path: '/Venezuela',
    image: venezuelasvg,
    greeting: 'Hola, ¿cómo estás?', // Spanish
  },
  {
    name: 'Vietnam',
    path: '/Vietnam',
    image: vietnamsvg,
    greeting: 'Xin chào, bạn khỏe không?', // Vietnamese
  },
];

export default countriesArray;
