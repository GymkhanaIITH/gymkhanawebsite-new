// const updates = [
//   {
//     imgUrl: 'images/updates section/diesta-open.jpg',
//     //altText = '',D:\gymkhana2023website\public\images\updates section\diesta-open.jpg
//     //desc = '',
//     title: 'DJ and Icecream Night Party',
//     organiser: 'Diesta',
//     //topic = '',
//     //speaker = '',
//     dateTime: '25th March 2023 - 8 pm',
//     venue: 'Near Mess Lawns',
//     //preRequisite = '',
//   },
// ];

let updates = [];

let PROJECT_ID = '5hnrc2nv';
let DATASET = 'production';
let QUERY = encodeURIComponent('*[_type == "update"]');

// Compose the URL for your project's endpoint and add the query
export let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;

//fetch content

fetch(URL)
  .then((res) => res.json())
  .then(({ result }) => {
    // if (result.length > 0) {
    //   result.forEach((update) => {
    //     console.log(update.title);
    //     updates.push({
    //       title: update.title,
    //       venue: update.venue,
    //       organiser: update.organiser,
    //       desc: update.desc,
    //       dateTime: update.dateTime,
    //       topic: update.topic,
    //       speaker: update.speaker,
    //     });
    //   });
    // }
    updates = result;
  });
console.log(updates);

export default updates;
