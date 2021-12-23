import iron883Img from '../images/bikes/cruisers/iron-883.png';
import iron1200Img from '../images/bikes/cruisers/iron-1200.png';
import fortyEightImg from '../images/bikes/cruisers/forty-eight.png';
import freewheelerImg from '../images/bikes/trikes/freewheeler.png';
import triglideultraImg from '../images/bikes/trikes/tri-glide-ultra.png';
import cvotriglideImg from '../images/bikes/trikes/cvo-tri-glide.png';
import roadkingImg from '../images/bikes/grand-american-touring/road-king.png';
import roadkingspecialImg from '../images/bikes/grand-american-touring/road-king-special.png';
import roadglidespecialImg from '../images/bikes/grand-american-touring/road-glide-special.png';
import trikeCoverImg from '../images/bikes/trikes/trike-cover.jpg';
import cruiserCoverImg from '../images/bikes/cruisers/cruiser-cover.jpg';
import gatCoverImg from '../images/bikes/grand-american-touring/gat-cover.jpg';

const bikeData = (() => {
  const trike = [
    {
      type: 'Trike',
      name: 'Freewheeler®',
      price: '27,999',
      description:
        'A stripped-down hot rod cruiser with raw attitude and the confidence of three wheels.',
      engine: 'Milwaukee-Eight® 114',
      'engine torque': '122 ft-lb',
      'fuel economy': '43 mpg',
      image: freewheelerImg,
    },
    {
      type: 'Trike',
      name: 'Tri Glide® Ultra',
      price: '34,999',
      description:
        'The paragon of comfort. Locked-and-loaded with premium tour features and chrome accessories.',
      engine: 'Twin-Cooled™ Milwaukee-Eight® 114',
      'engine torque': '121 ft-lb',
      'fuel economy': '42 mpg',
      image: triglideultraImg,
    },
    {
      type: 'Trike',
      name: 'CVO™ Tri Glide',
      price: '48,999',
      description:
        'The paragon of comfort. Locked-and-loaded with premium tour features and chrome accessories.',
      engine: 'Twin-Cooled™ Milwaukee-Eight® 117',
      'engine torque': '125 ft-lb',
      'fuel economy': '40 mpg',
      image: cvotriglideImg,
    },
  ];

  const cruisers = [
    {
      type: 'Cruiser',
      name: 'Iron 883™',
      price: '9,749',
      description: 'Blacked-out and stripped-down with a legendary profile.',
      engine: 'Air-cooled, Evolution®',
      'engine torque': '53.8 ft-lb',
      'fuel economy': '51 mpg',
      image: iron883Img,
    },
    {
      type: 'Cruiser',
      name: 'Iron 1200™',
      price: '10,249',
      description:
        'Blacked-out chopper profile with the power to go beyond the city limits.',
      engine: 'Air-cooled, Evolution®',
      'engine torque': '73 ft-lb',
      'fuel economy': '48 mpg',
      image: iron1200Img,
    },
    {
      type: 'Cruiser',
      name: 'Forty-Eight™',
      price: '11,549',
      description:
        'Heavy-hitting fat tire style with an iconic peanut tank and bulldog stance.',
      engine: 'Air-cooled, Evolution®',
      'engine torque': '73 ft-lb',
      'fuel economy': '48 mpg',
      image: fortyEightImg,
    },
  ];

  const gat = [
    {
      type: 'Grand American Touring',
      name: 'Road King®',
      price: '19,499',
      description:
        'A stripped-down highway legend with classic chrome styling and modern touring performance.',
      engine: 'Milwaukee-Eight® 107',
      'engine torque': '111 ft-lb',
      'fuel economy': '45 mpg',
      image: roadkingImg,
    },
    {
      type: 'Grand American Touring',
      name: 'Road King® Special',
      price: '22,999',
      description:
        'A custom bagger with top-of-the-line power and a commanding presence.',
      engine: 'Milwaukee-Eight® 114',
      'engine torque': '118 ft-lb',
      'fuel economy': '45 mpg',
      image: roadkingspecialImg,
    },
    {
      type: 'Grand American Touring',
      name: 'Road Glide® Special',
      price: '26,699',
      description:
        'A blacked-out or bright chrome performance bagger, loaded with premium features.',
      engine: 'Milwaukee-Eight® 114',
      'engine torque': '118 ft-lb',
      'fuel economy': '45 mpg',
      image: roadglidespecialImg,
    },
  ];

  const data = [
    {
      type: 'Trike',
      description:
        'Roll with confidence, comfort, and head-turning custom style on three wheels.',
      image: trikeCoverImg,
    },
    {
      type: 'Cruiser',
      description:
        'Authentic heritage meets modern technology for power, style, and the unadulterated riding experience - around town or along country roads.',
      image: cruiserCoverImg,
    },
    {
      type: 'Grand American Touring',
      description:
        "The category we've created from the ground up. Go the distance, in style. Discover the wide open world and freedom for the soul on bikes only Harley-Davidson could build.",
      image: gatCoverImg,
    },
  ];

  return { trike, cruisers, gat, data };
})();

export default bikeData;
