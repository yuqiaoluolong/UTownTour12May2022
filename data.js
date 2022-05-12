var APP_DATA = {
  "scenes": [
    {
      "id": "0-erc_level-1_starbucks",
      "name": "ERC_Level 1_Starbucks",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.13319274500925715,
        "pitch": 0.13283192867700322,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.553148737472231,
          "pitch": 0.003560561153907571,
          "rotation": 4.71238898038469,
          "target": "1-erc_level-1_nearescalator_photo_1512"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -3.059955780417365,
          "pitch": 0.04472623300407719,
          "title": "Starbucks",
          "text": "Here to buy some drinks"
        }
      ]
    },
    {
      "id": "1-erc_level-1_nearescalator_photo_1512",
      "name": "ERC_Level 1_NearEscalator_PHOTO_1512",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -2.0201077596770745,
        "pitch": 0.13627086533595723,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.706018284095446,
          "pitch": -0.008183328648884824,
          "rotation": 1.5707963267948966,
          "target": "0-erc_level-1_starbucks"
        },
        {
          "yaw": -2.548155095356625,
          "pitch": 0.03468838303614774,
          "rotation": 5.497787143782138,
          "target": "2-erc_level-1_tembusu-tree"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 3.0377590177799574,
          "pitch": 0.025093174463131973,
          "title": "Welcome!",
          "text": "to University Town!"
        }
      ]
    },
    {
      "id": "2-erc_level-1_tembusu-tree",
      "name": "ERC_Level 1_Tembusu Tree",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 3.0763719686763427,
        "pitch": -0.03677217355789253,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.7123460058660527,
          "pitch": 0.13920582991735309,
          "rotation": 0.7853981633974483,
          "target": "1-erc_level-1_nearescalator_photo_1512"
        },
        {
          "yaw": 2.4867741019393534,
          "pitch": 0.09544974216109203,
          "rotation": 5.497787143782138,
          "target": "0-erc_level-1_starbucks"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.1382633812807601,
          "pitch": 0.0029803902708618324,
          "title": "Trees",
          "text": "and some bush"
        }
      ]
    }
  ],
  "name": "UTown - ERC L1",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
