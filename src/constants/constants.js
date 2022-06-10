import icons from './icons';
import image from './Images'
const constants = {
  dishNameList: [
    {
      id: 1,
      title: 'Salmon',
      imageUrl: icons.salmon,
    },
    {
      id: 2,
      title: 'Cavier',
      imageUrl: icons.cavier,
    },
    {
      id: 3,
      title: 'Rice',
      imageUrl: icons.rice,
    },
    {
      id: 4,
      title: 'Octopus',
      imageUrl: icons.octopus,
    },
    {
      id: 5,
      title: 'Shrimp',
      imageUrl: icons.shrimp,
    },
  ],
  itemArray:[
    {
      id: 1,
      title: 'Sushi Octopus',
      description: 'Rice + Octopus',
      imageUrl: image.Sushipng,
      money: '6'
    },
    {
      id: 2,
      title: 'Sushi Salmon',
      description: 'Rice + Salmon',
      imageUrl: image.Sushipng,
      money: '8',
    },
    {
      id: 3,
      title: 'Sushi Shrimp',
      description: 'Rice + Shrimp',
      imageUrl: image.Sushipng,
      money: '10',
    },
  ],
  selectItem:[
    {
      id: 1,
      title: 'Salmon',
      imageUrl: icons.salmon,
    },
    {
      id: 2,
      title: 'Cavier',
      imageUrl: icons.cavier,
    },
    {
      id: 3,
      title: 'Rice',
      imageUrl: icons.rice,
    },
  ],
  starIcon:[
    { 
      id: '1',
      imgUrl: icons.star,
    },
    { 
      id: '2',
      imgUrl: icons.star,
    },
    { 
      id: '3',
      imgUrl: icons.star,
    },
    { 
      id: '4',
      imgUrl: icons.star,
    },
    { 
      id: '5',
      imgUrl: icons.star,
    },
  ],
  units: [
   {
    units: '6units',
    selected: true,
   },
   {
     units:'12units',
     selected: false, 
   },
   {
     units: '24units',
     selected: false,
   }
  ],
};

export default constants;
