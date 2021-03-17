export default {
  input: [{
    regions: [
      [[50, 50], [150, 150], [190, 50]],
      [[130, 50], [290, 150], [290, 50]]
    ],
    inverted: false
  },
  {
    regions: [
      [[110, 20], [110, 110], [20, 20]],
      [[130, 170], [130, 20], [260, 20], [260, 170]]
    ],
    inverted: false
  }], 
  
  output: {
    regions: [
      [[50, 50], [110, 50], [110, 110]],
      [[178, 80], [130, 50], [130, 130], [150, 150]],
      [[178, 80], [190, 50], [260, 50], [260, 131.25]]
    ],
    inverted: false
  }
};

