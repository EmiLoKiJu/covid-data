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
    name: 'Afghanistan', path: '/Afghanistan', image: afganistansvg, alt: 'Afghanistan',
  },
  {
    name: 'Argentina', path: '/Argentina', image: argentinasvg, alt: 'Argentina',
  },
  {
    name: 'Bangladesh', path: '/Bangladesh', image: bangladeshsvg, alt: 'Bangladesh',
  },
  {
    name: 'Bolivia', path: '/Bolivia', image: boliviasvg, alt: 'Bolivia',
  },
  {
    name: 'Brazil', path: '/Brazil', image: brazilsvg, alt: 'Brazil',
  },
  {
    name: 'Canada', path: '/Canada', image: canadasvg, alt: 'Canada',
  },
  {
    name: 'Chile', path: '/Chile', image: chilesvg, alt: 'Chile',
  },
  {
    name: 'China', path: '/China', image: chinasvg, alt: 'China',
  },
  {
    name: 'Colombia', path: '/Colombia', image: colombiasvg, alt: 'Colombia',
  },
  {
    name: 'Costa Rica', path: '/CostaRica', image: costaricasvg, alt: 'Costa Rica',
  },
  {
    name: 'Cuba', path: '/Cuba', image: cubasvg, alt: 'Cuba',
  },
  {
    name: 'Denmark', path: '/Denmark', image: denmarksvg, alt: 'Denmark',
  },
  {
    name: 'Dominica', path: '/Dominica', image: dominicasvg, alt: 'Dominica',
  },
  {
    name: 'Ecuador', path: '/Ecuador', image: ecuadorsvg, alt: 'Ecuador',
  },
  {
    name: 'El Salvador', path: '/ElSalvador', image: elsalvadorsvg, alt: 'El Salvador',
  },
  {
    name: 'Guatemala', path: '/Guatemala', image: guatemalasvg, alt: 'Guatemala',
  },
  {
    name: 'Guyana', path: '/Guyana', image: guyanasvg, alt: 'Guyana',
  },
  {
    name: 'Haiti', path: '/Haiti', image: haitisvg, alt: 'Haiti',
  },
  {
    name: 'Honduras', path: '/Honduras', image: hondurassvg, alt: 'Honduras',
  },
  {
    name: 'Hungary', path: '/Hungary', image: hungarysvg, alt: 'Hungary',
  },
  {
    name: 'Italy', path: '/Italy', image: italisvg, alt: 'Italy',
  },
  {
    name: 'Jamaica', path: '/Jamaica', image: jamaicasvg, alt: 'Jamaica',
  },
  {
    name: 'Mexico', path: '/Mexico', image: mexicosvg, alt: 'Mexico',
  },
  {
    name: 'Japan', path: '/Japan', image: japansvg, alt: 'Japan',
  },
  {
    name: 'Netherlands', path: '/Netherlands', image: netherlandssvg, alt: 'Netherlands',
  },
  {
    name: 'Nicaragua', path: '/Nicaragua', image: nicaraguasvg, alt: 'Nicaragua',
  },
  {
    name: 'Paraguay', path: '/Paraguay', image: paraguaysvg, alt: 'Paraguay',
  },
  {
    name: 'Peru', path: '/Peru', image: perusvg, alt: 'Peru',
  },
  {
    name: 'Dominican Republic', path: '/DominicanRepublic', image: republicadominicanasvg, alt: 'Dominican Republic',
  },
  {
    name: 'Russia', path: '/Russia', image: russiasvg, alt: 'Russia',
  },
  {
    name: 'South Korea', path: '/SouthKorea', image: southcoreasvg, alt: 'South Korea',
  },
  {
    name: 'Spain', path: '/Spain', image: spainsvg, alt: 'Spain',
  },
  {
    name: 'Suriname', path: '/Suriname', image: surinamesvg, alt: 'Suriname',
  },
  {
    name: 'Thailand', path: '/Thailand', image: thailandsvg, alt: 'Thailand',
  },
  {
    name: 'Trinidad and Tobago', path: '/TrinidadAndTobago', image: trinidadytobagosvg, alt: 'Trinidad and Tobago',
  },
  {
    name: 'Ukraine', path: '/Ukraine', image: ukrainesvg, alt: 'Ukraine',
  },
  {
    name: 'United Kingdom', path: '/UnitedKingdom', image: unitedkindomsvg, alt: 'United Kingdom',
  },
  {
    name: 'United States', path: '/UnitedStates', image: unitedstatessvg, alt: 'United States',
  },
  {
    name: 'Uruguay', path: '/Uruguay', image: uruguaysvg, alt: 'Uruguay',
  },
  {
    name: 'Venezuela', path: '/Venezuela', image: venezuelasvg, alt: 'Venezuela',
  },
  {
    name: 'Vietnam', path: '/Vietnam', image: vietnamsvg, alt: 'Vietnam',
  },
];

export default countriesArray;
