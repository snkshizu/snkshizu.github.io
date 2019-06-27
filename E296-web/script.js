TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "hfov": 360,
  "id": "panorama_9B8037A9_97A9_75A9_41D0_A02580B6469F",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_9B8037A9_97A9_75A9_41D0_A02580B6469F_0_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_9B8037A9_97A9_75A9_41D0_A02580B6469F_0_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_9B8037A9_97A9_75A9_41D0_A02580B6469F_0.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   },
   {
    "thumbnailUrl": "media/panorama_9B8037A9_97A9_75A9_41D0_A02580B6469F_1_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_9B8037A9_97A9_75A9_41D0_A02580B6469F_1_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_9B8037A9_97A9_75A9_41D0_A02580B6469F_1.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMin": 60,
  "frameDisplayTime": 5000,
  "thumbnailUrl": "media/panorama_9B8037A9_97A9_75A9_41D0_A02580B6469F_1_t.jpg",
  "mapLocations": [
   {
    "x": 646.08,
    "map": {
     "initialZoomFactor": 1,
     "maximumZoomFactor": 1.2,
     "fieldOfViewOverlayOutsideOpacity": 0,
     "overlays": [
      {
       "rollOverDisplay": false,
       "id": "overlay_8BAC45D0_97DB_15F7_41A4_C2A5955D6C55",
       "class": "AreaHotspotMapOverlay",
       "data": {
        "label": "Pano_1"
       },
       "areas": [
        {
         "click": "this.mainPlayList.set('selectedIndex', 0)",
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000"
        }
       ],
       "image": {
        "x": 496.08,
        "y": 1135.38,
        "width": 300,
        "class": "HotspotMapOverlayImage",
        "height": 300,
        "image": {
         "levels": [
          {
           "height": 90,
           "width": 90,
           "url": "media/map_8D4DC539_97D7_0AA9_41E0_BB067C563CCE_HS_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        }
       },
       "map": {
        "offsetY": 0,
        "x": 496.08,
        "width": 300,
        "class": "HotspotMapOverlayMap",
        "height": 300,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 45,
           "width": 45,
           "url": "media/map_8D4DC539_97D7_0AA9_41E0_BB067C563CCE_HS_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "y": 1135.38
       },
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "id": "overlay_8B77206F_97A9_0AA9_41B9_6BA8CD2C62F4",
       "class": "AreaHotspotMapOverlay",
       "data": {
        "label": "Pano_2"
       },
       "areas": [
        {
         "click": "this.mainPlayList.set('selectedIndex', 1)",
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000"
        }
       ],
       "image": {
        "x": 160.98,
        "y": 4506.19,
        "width": 300,
        "class": "HotspotMapOverlayImage",
        "height": 300,
        "image": {
         "levels": [
          {
           "height": 90,
           "width": 90,
           "url": "media/map_8D4DC539_97D7_0AA9_41E0_BB067C563CCE_HS_1.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        }
       },
       "map": {
        "offsetY": 0,
        "x": 160.98,
        "width": 300,
        "class": "HotspotMapOverlayMap",
        "height": 300,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 45,
           "width": 45,
           "url": "media/map_8D4DC539_97D7_0AA9_41E0_BB067C563CCE_HS_1_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "y": 4506.19
       },
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "id": "overlay_8BB0B1EB_97B7_0DA9_41C9_CB88C17A4B78",
       "class": "AreaHotspotMapOverlay",
       "data": {
        "label": "Pano_3"
       },
       "areas": [
        {
         "click": "this.mainPlayList.set('selectedIndex', 2)",
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000"
        }
       ],
       "image": {
        "x": 3166.54,
        "y": 2327.34,
        "width": 177.31,
        "class": "HotspotMapOverlayImage",
        "height": 177.32,
        "image": {
         "levels": [
          {
           "height": 53,
           "width": 53,
           "url": "media/map_8D4DC539_97D7_0AA9_41E0_BB067C563CCE_HS_2.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        }
       },
       "map": {
        "offsetY": 0,
        "x": 3166.54,
        "width": 177.31,
        "class": "HotspotMapOverlayMap",
        "height": 177.32,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 26,
           "width": 26,
           "url": "media/map_8D4DC539_97D7_0AA9_41E0_BB067C563CCE_HS_2_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "y": 2327.34
       },
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "id": "overlay_8B70F5D0_97BB_75F7_41B9_0D5DA9ED011B",
       "class": "AreaHotspotMapOverlay",
       "data": {
        "label": "Pano_4"
       },
       "areas": [
        {
         "click": "this.mainPlayList.set('selectedIndex', 3)",
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000"
        }
       ],
       "image": {
        "x": 1292.87,
        "y": 580.19,
        "width": 187.55,
        "class": "HotspotMapOverlayImage",
        "height": 187.56,
        "image": {
         "levels": [
          {
           "height": 56,
           "width": 56,
           "url": "media/map_8D4DC539_97D7_0AA9_41E0_BB067C563CCE_HS_3.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        }
       },
       "map": {
        "offsetY": 0,
        "x": 1292.87,
        "width": 187.55,
        "class": "HotspotMapOverlayMap",
        "height": 187.56,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 28,
           "width": 28,
           "url": "media/map_8D4DC539_97D7_0AA9_41E0_BB067C563CCE_HS_3_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "y": 580.19
       },
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "id": "overlay_8B198891_97B9_FA79_41DE_CF8734B9348C",
       "class": "AreaHotspotMapOverlay",
       "data": {
        "label": "Pano_5"
       },
       "areas": [
        {
         "click": "this.mainPlayList.set('selectedIndex', 4)",
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000"
        }
       ],
       "image": {
        "x": 1311.63,
        "y": 4287.68,
        "width": 187.55,
        "class": "HotspotMapOverlayImage",
        "height": 187.56,
        "image": {
         "levels": [
          {
           "height": 56,
           "width": 56,
           "url": "media/map_8D4DC539_97D7_0AA9_41E0_BB067C563CCE_HS_4.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        }
       },
       "map": {
        "offsetY": 0,
        "x": 1311.63,
        "width": 187.55,
        "class": "HotspotMapOverlayMap",
        "height": 187.56,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 28,
           "width": 28,
           "url": "media/map_8D4DC539_97D7_0AA9_41E0_BB067C563CCE_HS_4_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "y": 4287.68
       },
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "id": "overlay_8ACB00DC_97BB_0BEF_41DA_9EE0689F4BAC",
       "class": "AreaHotspotMapOverlay",
       "data": {
        "label": "Pano_6"
       },
       "areas": [
        {
         "click": "this.mainPlayList.set('selectedIndex', 5)",
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000"
        }
       ],
       "image": {
        "x": 1337.57,
        "y": 1569.27,
        "width": 177.31,
        "class": "HotspotMapOverlayImage",
        "height": 177.32,
        "image": {
         "levels": [
          {
           "height": 53,
           "width": 53,
           "url": "media/map_8D4DC539_97D7_0AA9_41E0_BB067C563CCE_HS_5.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        }
       },
       "map": {
        "offsetY": 0,
        "x": 1337.57,
        "width": 177.31,
        "class": "HotspotMapOverlayMap",
        "height": 177.32,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 26,
           "width": 26,
           "url": "media/map_8D4DC539_97D7_0AA9_41E0_BB067C563CCE_HS_5_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "y": 1569.27
       },
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "id": "overlay_8AC7B150_97A9_0AF7_41AF_20039BDBA7F1",
       "class": "AreaHotspotMapOverlay",
       "data": {
        "label": "Pano_7"
       },
       "areas": [
        {
         "click": "this.mainPlayList.set('selectedIndex', 6)",
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000"
        }
       ],
       "image": {
        "x": 1600.78,
        "y": 3285.47,
        "width": 177.31,
        "class": "HotspotMapOverlayImage",
        "height": 177.32,
        "image": {
         "levels": [
          {
           "height": 53,
           "width": 53,
           "url": "media/map_8D4DC539_97D7_0AA9_41E0_BB067C563CCE_HS_6.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        }
       },
       "map": {
        "offsetY": 0,
        "x": 1600.78,
        "width": 177.31,
        "class": "HotspotMapOverlayMap",
        "height": 177.32,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 26,
           "width": 26,
           "url": "media/map_8D4DC539_97D7_0AA9_41E0_BB067C563CCE_HS_6_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "y": 3285.47
       },
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "id": "overlay_8A77027C_97AB_0EAF_41D6_1B45F291CB8B",
       "class": "AreaHotspotMapOverlay",
       "data": {
        "label": "Pano_8"
       },
       "areas": [
        {
         "click": "this.mainPlayList.set('selectedIndex', 7)",
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000"
        }
       ],
       "image": {
        "x": 2198.14,
        "y": 3179.5,
        "width": 177.31,
        "class": "HotspotMapOverlayImage",
        "height": 177.32,
        "image": {
         "levels": [
          {
           "height": 53,
           "width": 53,
           "url": "media/map_8D4DC539_97D7_0AA9_41E0_BB067C563CCE_HS_7.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        }
       },
       "map": {
        "offsetY": 0,
        "x": 2198.14,
        "width": 177.31,
        "class": "HotspotMapOverlayMap",
        "height": 177.32,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 26,
           "width": 26,
           "url": "media/map_8D4DC539_97D7_0AA9_41E0_BB067C563CCE_HS_7_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "y": 3179.5
       },
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "id": "overlay_8A830AC3_97AF_3FD9_41D6_A11BBA116F0C",
       "class": "AreaHotspotMapOverlay",
       "data": {
        "label": "Pano_9"
       },
       "areas": [
        {
         "click": "this.mainPlayList.set('selectedIndex', 8)",
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000"
        }
       ],
       "image": {
        "x": 1802.4,
        "y": 2582.74,
        "width": 177.31,
        "class": "HotspotMapOverlayImage",
        "height": 177.32,
        "image": {
         "levels": [
          {
           "height": 53,
           "width": 53,
           "url": "media/map_8D4DC539_97D7_0AA9_41E0_BB067C563CCE_HS_8.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        }
       },
       "map": {
        "offsetY": 0,
        "x": 1802.4,
        "width": 177.31,
        "class": "HotspotMapOverlayMap",
        "height": 177.32,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 26,
           "width": 26,
           "url": "media/map_8D4DC539_97D7_0AA9_41E0_BB067C563CCE_HS_8_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "y": 2582.74
       },
       "useHandCursor": true
      }
     ],
     "fieldOfViewOverlayOutsideColor": "#000000",
     "width": 4320,
     "id": "map_8D4DC539_97D7_0AA9_41E0_BB067C563CCE",
     "height": 5290,
     "fieldOfViewOverlayInsideOpacity": 0.25,
     "image": {
      "levels": [
       {
        "height": 1600,
        "width": 1306,
        "url": "media/map_8D4DC539_97D7_0AA9_41E0_BB067C563CCE.jpeg",
        "class": "ImageResourceLevel"
       },
       {
        "height": 800,
        "grayscale": true,
        "width": 653,
        "url": "media/map_8D4DC539_97D7_0AA9_41E0_BB067C563CCE_lq.jpeg",
        "class": "ImageResourceLevel"
       }
      ],
      "class": "ImageResource"
     },
     "fieldOfViewOverlayRadiusScale": 0.25,
     "fieldOfViewOverlayInsideColor": "#FFCC00",
     "thumbnailUrl": "media/map_8D4DC539_97D7_0AA9_41E0_BB067C563CCE_t.jpg",
     "minimumZoomFactor": 0.5,
     "label": "Plan",
     "scaleMode": "fit_inside",
     "class": "Map"
    },
    "y": 1285.38,
    "angle": 137.39,
    "class": "PanoramaMapLocation"
   }
  ],
  "frameTransitionTime": 5000,
  "pitch": 0,
  "label": "Pano_1",
  "partial": false,
  "class": "LivePanorama",
  "vfov": 180,
  "hfovMax": 130
 },
 {
  "viewerArea": "this.MainViewer",
  "touchControlMode": "drag_rotation",
  "buttonRestart": {
   "pressedIconURL": "skin/IconButton_51591DCE_5F03_66DC_41BA_EA0B3C243BDB_pressed.png",
   "iconURL": "skin/IconButton_51591DCE_5F03_66DC_41BA_EA0B3C243BDB.png",
   "width": 40,
   "paddingLeft": 0,
   "height": 40,
   "mode": "push",
   "paddingRight": 0,
   "paddingBottom": 0,
   "verticalAlign": "middle",
   "class": "IconButton",
   "minHeight": 0,
   "transparencyActive": true,
   "rollOverIconURL": "skin/IconButton_51591DCE_5F03_66DC_41BA_EA0B3C243BDB_rollover.png",
   "propagateClick": false,
   "cursor": "hand",
   "horizontalAlign": "center",
   "id": "IconButton_51591DCE_5F03_66DC_41BA_EA0B3C243BDB",
   "data": {
    "name": "Button11539"
   },
   "borderSize": 0,
   "borderRadius": 0,
   "minWidth": 0,
   "backgroundOpacity": 0,
   "shadow": false,
   "paddingTop": 0
  },
  "buttonZoomOut": {
   "pressedIconURL": "skin/IconButton_51591DCE_5F03_66DC_41C4_50743EFED275_pressed.png",
   "iconURL": "skin/IconButton_51591DCE_5F03_66DC_41C4_50743EFED275.png",
   "width": 40,
   "paddingLeft": 0,
   "height": 40,
   "mode": "push",
   "paddingRight": 0,
   "paddingBottom": 0,
   "verticalAlign": "middle",
   "class": "IconButton",
   "minHeight": 0,
   "transparencyActive": true,
   "rollOverIconURL": "skin/IconButton_51591DCE_5F03_66DC_41C4_50743EFED275_rollover.png",
   "propagateClick": false,
   "cursor": "hand",
   "horizontalAlign": "center",
   "id": "IconButton_51591DCE_5F03_66DC_41C4_50743EFED275",
   "data": {
    "name": "Button11538"
   },
   "borderSize": 0,
   "borderRadius": 0,
   "minWidth": 0,
   "backgroundOpacity": 0,
   "shadow": false,
   "paddingTop": 0
  },
  "buttonMoveUp": {
   "pressedIconURL": "skin/IconButton_51591DCE_5F03_66DC_41BF_A58F28B56244_pressed.png",
   "iconURL": "skin/IconButton_51591DCE_5F03_66DC_41BF_A58F28B56244.png",
   "width": 40,
   "paddingLeft": 0,
   "height": 40,
   "mode": "push",
   "paddingRight": 0,
   "paddingBottom": 0,
   "verticalAlign": "middle",
   "class": "IconButton",
   "minHeight": 0,
   "transparencyActive": true,
   "rollOverIconURL": "skin/IconButton_51591DCE_5F03_66DC_41BF_A58F28B56244_rollover.png",
   "propagateClick": false,
   "cursor": "hand",
   "horizontalAlign": "center",
   "id": "IconButton_51591DCE_5F03_66DC_41BF_A58F28B56244",
   "data": {
    "name": "Button11543"
   },
   "borderSize": 0,
   "borderRadius": 0,
   "minWidth": 0,
   "backgroundOpacity": 0,
   "shadow": false,
   "paddingTop": 0
  },
  "buttonMoveRight": {
   "pressedIconURL": "skin/IconButton_51591DCE_5F03_66DC_41A2_85C1F5F35509_pressed.png",
   "iconURL": "skin/IconButton_51591DCE_5F03_66DC_41A2_85C1F5F35509.png",
   "width": 40,
   "paddingLeft": 0,
   "height": 40,
   "mode": "push",
   "paddingRight": 0,
   "paddingBottom": 0,
   "verticalAlign": "middle",
   "class": "IconButton",
   "minHeight": 0,
   "transparencyActive": true,
   "rollOverIconURL": "skin/IconButton_51591DCE_5F03_66DC_41A2_85C1F5F35509_rollover.png",
   "propagateClick": false,
   "cursor": "hand",
   "horizontalAlign": "center",
   "id": "IconButton_51591DCE_5F03_66DC_41A2_85C1F5F35509",
   "data": {
    "name": "Button11546"
   },
   "borderSize": 0,
   "borderRadius": 0,
   "minWidth": 0,
   "backgroundOpacity": 0,
   "shadow": false,
   "paddingTop": 0
  },
  "mouseControlMode": "drag_acceleration",
  "buttonPlayLeft": {
   "pressedIconURL": "skin/IconButton_51591DCE_5F03_66DC_419C_7D6D6CC8D05C_pressed.png",
   "iconURL": "skin/IconButton_51591DCE_5F03_66DC_419C_7D6D6CC8D05C.png",
   "width": 40,
   "paddingLeft": 0,
   "height": 40,
   "mode": "push",
   "paddingRight": 0,
   "paddingBottom": 0,
   "verticalAlign": "middle",
   "class": "IconButton",
   "minHeight": 0,
   "transparencyActive": true,
   "rollOverIconURL": "skin/IconButton_51591DCE_5F03_66DC_419C_7D6D6CC8D05C_rollover.png",
   "propagateClick": false,
   "cursor": "hand",
   "horizontalAlign": "center",
   "id": "IconButton_51591DCE_5F03_66DC_419C_7D6D6CC8D05C",
   "data": {
    "name": "Button11540"
   },
   "borderSize": 0,
   "borderRadius": 0,
   "minWidth": 0,
   "backgroundOpacity": 0,
   "shadow": false,
   "paddingTop": 0
  },
  "buttonPause": {
   "pressedIconURL": "skin/IconButton_51591DCE_5F03_66DC_41D7_1E28B681CAE6_pressed.png",
   "iconURL": "skin/IconButton_51591DCE_5F03_66DC_41D7_1E28B681CAE6.png",
   "width": 40,
   "paddingLeft": 0,
   "height": 40,
   "mode": "toggle",
   "paddingRight": 0,
   "paddingBottom": 0,
   "verticalAlign": "middle",
   "class": "IconButton",
   "minHeight": 0,
   "transparencyActive": true,
   "propagateClick": false,
   "cursor": "hand",
   "horizontalAlign": "center",
   "id": "IconButton_51591DCE_5F03_66DC_41D7_1E28B681CAE6",
   "data": {
    "name": "Button11544"
   },
   "borderSize": 0,
   "borderRadius": 0,
   "minWidth": 0,
   "backgroundOpacity": 0,
   "shadow": false,
   "paddingTop": 0
  },
  "buttonZoomIn": {
   "pressedIconURL": "skin/IconButton_51591DCE_5F03_66DC_41D1_3D7BC0B88E03_pressed.png",
   "iconURL": "skin/IconButton_51591DCE_5F03_66DC_41D1_3D7BC0B88E03.png",
   "width": 40,
   "paddingLeft": 0,
   "height": 40,
   "mode": "push",
   "paddingRight": 0,
   "paddingBottom": 0,
   "verticalAlign": "middle",
   "class": "IconButton",
   "minHeight": 0,
   "transparencyActive": true,
   "rollOverIconURL": "skin/IconButton_51591DCE_5F03_66DC_41D1_3D7BC0B88E03_rollover.png",
   "propagateClick": false,
   "cursor": "hand",
   "horizontalAlign": "center",
   "id": "IconButton_51591DCE_5F03_66DC_41D1_3D7BC0B88E03",
   "data": {
    "name": "Button11549"
   },
   "borderSize": 0,
   "borderRadius": 0,
   "minWidth": 0,
   "backgroundOpacity": 0,
   "shadow": false,
   "paddingTop": 0
  },
  "id": "MainViewerPanoramaPlayer",
  "displayPlaybackBar": true,
  "class": "PanoramaPlayer",
  "gyroscopeVerticalDraggingEnabled": true,
  "buttonMoveLeft": {
   "pressedIconURL": "skin/IconButton_51591DCE_5F03_66DC_41AA_3827647B13A5_pressed.png",
   "iconURL": "skin/IconButton_51591DCE_5F03_66DC_41AA_3827647B13A5.png",
   "width": 40,
   "paddingLeft": 0,
   "height": 40,
   "mode": "push",
   "paddingRight": 0,
   "paddingBottom": 0,
   "verticalAlign": "middle",
   "class": "IconButton",
   "minHeight": 0,
   "transparencyActive": true,
   "rollOverIconURL": "skin/IconButton_51591DCE_5F03_66DC_41AA_3827647B13A5_rollover.png",
   "propagateClick": false,
   "cursor": "hand",
   "horizontalAlign": "center",
   "id": "IconButton_51591DCE_5F03_66DC_41AA_3827647B13A5",
   "data": {
    "name": "Button11541"
   },
   "borderSize": 0,
   "borderRadius": 0,
   "minWidth": 0,
   "backgroundOpacity": 0,
   "shadow": false,
   "paddingTop": 0
  },
  "preloadEnabled": false,
  "buttonPlayRight": {
   "pressedIconURL": "skin/IconButton_51591DCE_5F03_66DC_41C7_93849E226521_pressed.png",
   "iconURL": "skin/IconButton_51591DCE_5F03_66DC_41C7_93849E226521.png",
   "width": 40,
   "paddingLeft": 0,
   "height": 40,
   "mode": "push",
   "paddingRight": 0,
   "paddingBottom": 0,
   "verticalAlign": "middle",
   "class": "IconButton",
   "minHeight": 0,
   "transparencyActive": true,
   "rollOverIconURL": "skin/IconButton_51591DCE_5F03_66DC_41C7_93849E226521_rollover.png",
   "propagateClick": false,
   "cursor": "hand",
   "horizontalAlign": "center",
   "id": "IconButton_51591DCE_5F03_66DC_41C7_93849E226521",
   "data": {
    "name": "Button11547"
   },
   "borderSize": 0,
   "borderRadius": 0,
   "minWidth": 0,
   "backgroundOpacity": 0,
   "shadow": false,
   "paddingTop": 0
  },
  "buttonMoveDown": {
   "pressedIconURL": "skin/IconButton_51591DCE_5F03_66DC_417A_1D999521FA63_pressed.png",
   "iconURL": "skin/IconButton_51591DCE_5F03_66DC_417A_1D999521FA63.png",
   "width": 40,
   "paddingLeft": 0,
   "height": 40,
   "mode": "push",
   "paddingRight": 0,
   "paddingBottom": 0,
   "verticalAlign": "middle",
   "class": "IconButton",
   "minHeight": 0,
   "transparencyActive": true,
   "rollOverIconURL": "skin/IconButton_51591DCE_5F03_66DC_417A_1D999521FA63_rollover.png",
   "propagateClick": false,
   "cursor": "hand",
   "horizontalAlign": "center",
   "id": "IconButton_51591DCE_5F03_66DC_417A_1D999521FA63",
   "data": {
    "name": "Button11545"
   },
   "borderSize": 0,
   "borderRadius": 0,
   "minWidth": 0,
   "backgroundOpacity": 0,
   "shadow": false,
   "paddingTop": 0
  }
 },
 {
  "viewerArea": "this.MapViewer",
  "movementMode": "constrained",
  "id": "MapViewerMapPlayer",
  "buttonZoomOut": "this.IconButton_51591DCE_5F03_66DC_41C4_50743EFED275",
  "class": "MapPlayer",
  "buttonZoomIn": "this.IconButton_51591DCE_5F03_66DC_41D1_3D7BC0B88E03"
 },
 {
  "id": "panorama_9B8037A9_97A9_75A9_41D0_A02580B6469F_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "hfov": 360,
  "id": "panorama_84988527_97E9_0A59_41CB_3B26BF93BF6F",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_84988527_97E9_0A59_41CB_3B26BF93BF6F_0_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_84988527_97E9_0A59_41CB_3B26BF93BF6F_0_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_84988527_97E9_0A59_41CB_3B26BF93BF6F_0.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   },
   {
    "thumbnailUrl": "media/panorama_84988527_97E9_0A59_41CB_3B26BF93BF6F_1_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_84988527_97E9_0A59_41CB_3B26BF93BF6F_1_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_84988527_97E9_0A59_41CB_3B26BF93BF6F_1.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMin": 60,
  "frameDisplayTime": 5000,
  "thumbnailUrl": "media/panorama_84988527_97E9_0A59_41CB_3B26BF93BF6F_1_t.jpg",
  "mapLocations": [
   {
    "x": 310.98,
    "map": "this.map_8D4DC539_97D7_0AA9_41E0_BB067C563CCE",
    "y": 4656.19,
    "angle": 51.27,
    "class": "PanoramaMapLocation"
   }
  ],
  "frameTransitionTime": 5000,
  "pitch": 0,
  "label": "Pano_2",
  "partial": false,
  "class": "LivePanorama",
  "vfov": 180,
  "hfovMax": 130
 },
 {
  "id": "panorama_84988527_97E9_0A59_41CB_3B26BF93BF6F_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "hfov": 360,
  "id": "panorama_854A1503_97E9_0A59_41C3_35E00D6B5E8A",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_854A1503_97E9_0A59_41C3_35E00D6B5E8A_0_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_854A1503_97E9_0A59_41C3_35E00D6B5E8A_0_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_854A1503_97E9_0A59_41C3_35E00D6B5E8A_0.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   },
   {
    "thumbnailUrl": "media/panorama_854A1503_97E9_0A59_41C3_35E00D6B5E8A_1_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_854A1503_97E9_0A59_41C3_35E00D6B5E8A_1_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_854A1503_97E9_0A59_41C3_35E00D6B5E8A_1.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMin": 60,
  "frameDisplayTime": 5000,
  "thumbnailUrl": "media/panorama_854A1503_97E9_0A59_41C3_35E00D6B5E8A_1_t.jpg",
  "mapLocations": [
   {
    "x": 3255.2,
    "map": "this.map_8D4DC539_97D7_0AA9_41E0_BB067C563CCE",
    "y": 2416,
    "angle": 267.19,
    "class": "PanoramaMapLocation"
   }
  ],
  "frameTransitionTime": 5000,
  "pitch": 0,
  "label": "Pano_3",
  "partial": false,
  "class": "LivePanorama",
  "vfov": 180,
  "hfovMax": 130
 },
 {
  "id": "panorama_854A1503_97E9_0A59_41C3_35E00D6B5E8A_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "hfov": 360,
  "id": "panorama_85B3358A_97EB_0A6B_41D5_80797C992818",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_85B3358A_97EB_0A6B_41D5_80797C992818_0_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_85B3358A_97EB_0A6B_41D5_80797C992818_0_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_85B3358A_97EB_0A6B_41D5_80797C992818_0.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   },
   {
    "thumbnailUrl": "media/panorama_85B3358A_97EB_0A6B_41D5_80797C992818_1_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_85B3358A_97EB_0A6B_41D5_80797C992818_1_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_85B3358A_97EB_0A6B_41D5_80797C992818_1.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMin": 60,
  "frameDisplayTime": 5000,
  "thumbnailUrl": "media/panorama_85B3358A_97EB_0A6B_41D5_80797C992818_1_t.jpg",
  "mapLocations": [
   {
    "x": 1386.65,
    "map": "this.map_8D4DC539_97D7_0AA9_41E0_BB067C563CCE",
    "y": 673.97,
    "angle": 163.23,
    "class": "PanoramaMapLocation"
   }
  ],
  "frameTransitionTime": 5000,
  "pitch": 0,
  "label": "Pano_4",
  "partial": false,
  "class": "LivePanorama",
  "vfov": 180,
  "hfovMax": 130
 },
 {
  "id": "panorama_85B3358A_97EB_0A6B_41D5_80797C992818_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "hfov": 360,
  "id": "panorama_85BDD557_97EB_0AF9_41D4_6B1C56C04CBC",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_85BDD557_97EB_0AF9_41D4_6B1C56C04CBC_0_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_85BDD557_97EB_0AF9_41D4_6B1C56C04CBC_0_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_85BDD557_97EB_0AF9_41D4_6B1C56C04CBC_0.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   },
   {
    "thumbnailUrl": "media/panorama_85BDD557_97EB_0AF9_41D4_6B1C56C04CBC_1_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_85BDD557_97EB_0AF9_41D4_6B1C56C04CBC_1_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_85BDD557_97EB_0AF9_41D4_6B1C56C04CBC_1.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMin": 60,
  "frameDisplayTime": 5000,
  "thumbnailUrl": "media/panorama_85BDD557_97EB_0AF9_41D4_6B1C56C04CBC_1_t.jpg",
  "mapLocations": [
   {
    "x": 1405.41,
    "map": "this.map_8D4DC539_97D7_0AA9_41E0_BB067C563CCE",
    "y": 4381.46,
    "angle": 16.48,
    "class": "PanoramaMapLocation"
   }
  ],
  "frameTransitionTime": 5000,
  "pitch": 0,
  "label": "Pano_5",
  "partial": false,
  "class": "LivePanorama",
  "vfov": 180,
  "hfovMax": 130
 },
 {
  "id": "panorama_85BDD557_97EB_0AF9_41D4_6B1C56C04CBC_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "hfov": 360,
  "id": "panorama_85B2AB4E_97EB_FEEB_41D9_2751CDEEF317",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_85B2AB4E_97EB_FEEB_41D9_2751CDEEF317_0_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_85B2AB4E_97EB_FEEB_41D9_2751CDEEF317_0_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_85B2AB4E_97EB_FEEB_41D9_2751CDEEF317_0.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   },
   {
    "thumbnailUrl": "media/panorama_85B2AB4E_97EB_FEEB_41D9_2751CDEEF317_1_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_85B2AB4E_97EB_FEEB_41D9_2751CDEEF317_1_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_85B2AB4E_97EB_FEEB_41D9_2751CDEEF317_1.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMin": 60,
  "frameDisplayTime": 5000,
  "thumbnailUrl": "media/panorama_85B2AB4E_97EB_FEEB_41D9_2751CDEEF317_1_t.jpg",
  "mapLocations": [
   {
    "x": 1426.23,
    "map": "this.map_8D4DC539_97D7_0AA9_41E0_BB067C563CCE",
    "y": 1657.93,
    "angle": 140.39,
    "class": "PanoramaMapLocation"
   }
  ],
  "frameTransitionTime": 5000,
  "pitch": 0,
  "label": "Pano_6",
  "partial": false,
  "class": "LivePanorama",
  "vfov": 180,
  "hfovMax": 130
 },
 {
  "id": "panorama_85B2AB4E_97EB_FEEB_41D9_2751CDEEF317_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "hfov": 360,
  "id": "panorama_85B519F1_97EB_1DB9_41E1_845C79B61A56",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_85B519F1_97EB_1DB9_41E1_845C79B61A56_0_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_85B519F1_97EB_1DB9_41E1_845C79B61A56_0_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_85B519F1_97EB_1DB9_41E1_845C79B61A56_0.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   },
   {
    "thumbnailUrl": "media/panorama_85B519F1_97EB_1DB9_41E1_845C79B61A56_1_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_85B519F1_97EB_1DB9_41E1_845C79B61A56_1_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_85B519F1_97EB_1DB9_41E1_845C79B61A56_1.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMin": 60,
  "frameDisplayTime": 5000,
  "thumbnailUrl": "media/panorama_85B519F1_97EB_1DB9_41E1_845C79B61A56_1_t.jpg",
  "mapLocations": [
   {
    "x": 1689.43,
    "map": "this.map_8D4DC539_97D7_0AA9_41E0_BB067C563CCE",
    "y": 3374.13,
    "angle": 50.73,
    "class": "PanoramaMapLocation"
   }
  ],
  "frameTransitionTime": 5000,
  "pitch": 0,
  "label": "Pano_7",
  "partial": false,
  "class": "LivePanorama",
  "vfov": 180,
  "hfovMax": 130
 },
 {
  "id": "panorama_85B519F1_97EB_1DB9_41E1_845C79B61A56_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "hfov": 360,
  "id": "panorama_85BC74BB_97EB_0BA9_41DB_535A967E9F92",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_85BC74BB_97EB_0BA9_41DB_535A967E9F92_0_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_85BC74BB_97EB_0BA9_41DB_535A967E9F92_0_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_85BC74BB_97EB_0BA9_41DB_535A967E9F92_0.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   },
   {
    "thumbnailUrl": "media/panorama_85BC74BB_97EB_0BA9_41DB_535A967E9F92_1_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_85BC74BB_97EB_0BA9_41DB_535A967E9F92_1_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_85BC74BB_97EB_0BA9_41DB_535A967E9F92_1.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMin": 60,
  "frameDisplayTime": 5000,
  "thumbnailUrl": "media/panorama_85BC74BB_97EB_0BA9_41DB_535A967E9F92_1_t.jpg",
  "mapLocations": [
   {
    "x": 2286.79,
    "map": "this.map_8D4DC539_97D7_0AA9_41E0_BB067C563CCE",
    "y": 3268.16,
    "angle": -36.86,
    "class": "PanoramaMapLocation"
   }
  ],
  "frameTransitionTime": 5000,
  "pitch": 0,
  "label": "Pano_8",
  "partial": false,
  "class": "LivePanorama",
  "vfov": 180,
  "hfovMax": 130
 },
 {
  "id": "panorama_85BC74BB_97EB_0BA9_41DB_535A967E9F92_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "hfov": 360,
  "id": "panorama_85A7DC12_97E8_FA7B_41E0_CE8DDF5110E8",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_85A7DC12_97E8_FA7B_41E0_CE8DDF5110E8_0_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_85A7DC12_97E8_FA7B_41E0_CE8DDF5110E8_0_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_85A7DC12_97E8_FA7B_41E0_CE8DDF5110E8_0.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   },
   {
    "thumbnailUrl": "media/panorama_85A7DC12_97E8_FA7B_41E0_CE8DDF5110E8_1_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_85A7DC12_97E8_FA7B_41E0_CE8DDF5110E8_1_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_85A7DC12_97E8_FA7B_41E0_CE8DDF5110E8_1.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMin": 60,
  "frameDisplayTime": 5000,
  "thumbnailUrl": "media/panorama_85A7DC12_97E8_FA7B_41E0_CE8DDF5110E8_1_t.jpg",
  "mapLocations": [
   {
    "x": 1891.05,
    "map": "this.map_8D4DC539_97D7_0AA9_41E0_BB067C563CCE",
    "y": 2671.39,
    "angle": 151.34,
    "class": "PanoramaMapLocation"
   }
  ],
  "frameTransitionTime": 5000,
  "pitch": 0,
  "label": "Pano_9",
  "partial": false,
  "class": "LivePanorama",
  "vfov": 180,
  "hfovMax": 130
 },
 {
  "id": "panorama_85A7DC12_97E8_FA7B_41E0_CE8DDF5110E8_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "mainPlayList",
  "class": "PlayList",
  "items": [
   {
    "id": "PanoramaPlayListItem_B7AFA190_97A9_0A77_41E1_8E2A23E42617",
    "media": "this.panorama_9B8037A9_97A9_75A9_41D0_A02580B6469F",
    "camera": "this.panorama_9B8037A9_97A9_75A9_41D0_A02580B6469F_camera",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', true)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_B7AFA190_97A9_0A77_41E1_8E2A23E42617, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 0, 1)"
   },
   {
    "id": "PanoramaPlayListItem_B7AF0190_97A9_0A77_41D0_2913004341ED",
    "media": "this.panorama_84988527_97E9_0A59_41CB_3B26BF93BF6F",
    "camera": "this.panorama_84988527_97E9_0A59_41CB_3B26BF93BF6F_camera",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', true)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_B7AF0190_97A9_0A77_41D0_2913004341ED, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 1, 2)"
   },
   {
    "id": "PanoramaPlayListItem_B7AEE190_97A9_0A77_41E1_01A5AB82C30A",
    "media": "this.panorama_854A1503_97E9_0A59_41C3_35E00D6B5E8A",
    "camera": "this.panorama_854A1503_97E9_0A59_41C3_35E00D6B5E8A_camera",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', true)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_B7AEE190_97A9_0A77_41E1_01A5AB82C30A, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 2, 3)"
   },
   {
    "id": "PanoramaPlayListItem_B7AEB190_97A9_0A77_41DE_8F6C5F081DED",
    "media": "this.panorama_85B3358A_97EB_0A6B_41D5_80797C992818",
    "camera": "this.panorama_85B3358A_97EB_0A6B_41D5_80797C992818_camera",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', true)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_B7AEB190_97A9_0A77_41DE_8F6C5F081DED, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 3, 4)"
   },
   {
    "id": "PanoramaPlayListItem_B7AE0190_97A9_0A77_41CC_A37648BA0DAE",
    "media": "this.panorama_85BDD557_97EB_0AF9_41D4_6B1C56C04CBC",
    "camera": "this.panorama_85BDD557_97EB_0AF9_41D4_6B1C56C04CBC_camera",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', true)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_B7AE0190_97A9_0A77_41CC_A37648BA0DAE, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 4, 5)"
   },
   {
    "id": "PanoramaPlayListItem_B7ADD190_97A9_0A77_41D1_50F9B15AB8BA",
    "media": "this.panorama_85B2AB4E_97EB_FEEB_41D9_2751CDEEF317",
    "camera": "this.panorama_85B2AB4E_97EB_FEEB_41D9_2751CDEEF317_camera",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', true)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_B7ADD190_97A9_0A77_41D1_50F9B15AB8BA, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 5, 6)"
   },
   {
    "id": "PanoramaPlayListItem_B7ADB190_97A9_0A77_41E2_80513911B97A",
    "media": "this.panorama_85B519F1_97EB_1DB9_41E1_845C79B61A56",
    "camera": "this.panorama_85B519F1_97EB_1DB9_41E1_845C79B61A56_camera",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', true)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_B7ADB190_97A9_0A77_41E2_80513911B97A, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 6, 7)"
   },
   {
    "id": "PanoramaPlayListItem_B7AD7190_97A9_0A77_41E1_D92A7F0D1C69",
    "media": "this.panorama_85BC74BB_97EB_0BA9_41DB_535A967E9F92",
    "camera": "this.panorama_85BC74BB_97EB_0BA9_41DB_535A967E9F92_camera",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', true)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_B7AD7190_97A9_0A77_41E1_D92A7F0D1C69, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 7, 8)"
   },
   {
    "id": "PanoramaPlayListItem_B7ACC190_97A9_0A77_41C0_2968E133FB0C",
    "media": "this.panorama_85A7DC12_97E8_FA7B_41E0_CE8DDF5110E8",
    "camera": "this.panorama_85A7DC12_97E8_FA7B_41E0_CE8DDF5110E8_camera",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', true)",
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_B7ACC190_97A9_0A77_41C0_2968E133FB0C, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 8, 0)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "end": "this.trigger('tourEnded')"
   }
  ]
 },
 "this.map_8D4DC539_97D7_0AA9_41E0_BB067C563CCE",
 {
  "id": "playList_B7B07190_97A9_0A77_41E0_00474F19457A",
  "class": "PlayList",
  "items": [
   {
    "player": "this.MapViewerMapPlayer",
    "media": "this.map_8D4DC539_97D7_0AA9_41E0_BB067C563CCE",
    "class": "MapPlayListItem",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')"
   }
  ]
 },
 {
  "id": "playList_B7B00190_97A9_0A77_41D8_2E755D305761",
  "class": "PlayList",
  "items": [
   {
    "player": "this.MapViewerMapPlayer",
    "media": "this.map_8D4DC539_97D7_0AA9_41E0_BB067C563CCE",
    "class": "MapPlayListItem",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')"
   }
  ]
 }
], "children": [
 {
  "shadow": false,
  "progressBackgroundOpacity": 1,
  "toolTipBackgroundColor": "#F6F6F6",
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "paddingLeft": 0,
  "playbackBarBorderRadius": 4,
  "playbackBarOpacity": 1,
  "playbackBarBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "paddingRight": 0,
  "progressBarOpacity": 1,
  "toolTipTextShadowBlurRadius": 3,
  "progressBottom": 1,
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarHeight": 20,
  "progressBarBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "progressBorderRadius": 4,
  "toolTipShadowBlurRadius": 3,
  "progressBorderSize": 2,
  "progressHeight": 20,
  "playbackBarHeadWidth": 6,
  "playbackBarProgressBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipOpacity": 1,
  "playbackBarHeadShadowVerticalLength": 0,
  "toolTipTextShadowColor": "#000000",
  "minHeight": 50,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "progressLeft": 10,
  "playbackBarProgressBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "toolTipPaddingTop": 4,
  "toolTipShadowColor": "#333333",
  "playbackBarBackgroundColorDirection": "vertical",
  "toolTipBorderColor": "#767676",
  "playbackBarProgressOpacity": 1,
  "progressBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "toolTipShadowVerticalLength": 0,
  "borderSize": 0,
  "progressBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarLeft": 0,
  "playbackBarRight": 0,
  "minWidth": 100,
  "progressBarBorderSize": 0,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarBackgroundOpacity": 1,
  "transitionDuration": 500,
  "playbackBarProgressBorderRadius": 0,
  "playbackBarBorderSize": 2,
  "paddingTop": 0,
  "toolTipBorderRadius": 3,
  "playbackBarHeadShadowBlurRadius": 3,
  "toolTipShadowSpread": 0,
  "playbackBarBorderColor": "#AAAAAA",
  "width": "100%",
  "height": "100%",
  "toolTipBorderSize": 1,
  "paddingBottom": 0,
  "playbackBarHeadHeight": 30,
  "toolTipFontWeight": "normal",
  "toolTipFontStyle": "normal",
  "toolTipPaddingLeft": 6,
  "toolTipFontSize": 12,
  "progressBackgroundColorDirection": "vertical",
  "class": "ViewerArea",
  "toolTipDisplayTime": 600,
  "toolTipFontColor": "#606060",
  "playbackBarProgressBorderSize": 0,
  "progressBarBorderColor": "#000000",
  "playbackBarHeadShadowHorizontalLength": 0,
  "progressBarBorderRadius": 4,
  "top": 0,
  "propagateClick": false,
  "playbackBarHeadBorderColor": "#000000",
  "progressBarBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipShadowOpacity": 1,
  "toolTipPaddingRight": 6,
  "playbackBarBottom": 10,
  "progressOpacity": 1,
  "progressRight": 10,
  "progressBarBackgroundColorDirection": "vertical",
  "playbackBarHeadBorderRadius": 0,
  "playbackBarHeadShadow": true,
  "playbackBarHeadShadowColor": "#000000",
  "left": 0,
  "playbackBarHeadOpacity": 1,
  "transitionMode": "blending",
  "id": "MainViewer",
  "toolTipPaddingBottom": 4,
  "borderRadius": 0,
  "toolTipTextShadowOpacity": 0,
  "progressBorderColor": "#AAAAAA",
  "toolTipFontFamily": "Arial",
  "playbackBarHeadBorderSize": 0,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "toolTipShadowHorizontalLength": 0
 },
 {
  "gap": 10,
  "scrollBarVisible": "rollOver",
  "width": "100%",
  "paddingLeft": 0,
  "height": 142,
  "overflow": "scroll",
  "paddingRight": 0,
  "scrollBarWidth": 10,
  "paddingBottom": 0,
  "verticalAlign": "middle",
  "class": "Container",
  "minHeight": 1,
  "layout": "horizontal",
  "propagateClick": false,
  "scrollBarOpacity": 0.5,
  "bottom": "0%",
  "scrollBarMargin": 2,
  "data": {
   "name": "Container44746"
  },
  "creationPolicy": "delayed",
  "horizontalAlign": "center",
  "borderSize": 0,
  "contentOpaque": false,
  "scrollBarColor": "#000000",
  "left": "0%",
  "borderRadius": 0,
  "minWidth": 1,
  "backgroundOpacity": 0,
  "shadow": false,
  "paddingTop": 0
 },
 {
  "backgroundColorDirection": "vertical",
  "gap": 4,
  "backgroundColor": [
   "#000000"
  ],
  "scrollBarVisible": "rollOver",
  "width": 541.35,
  "paddingLeft": 0,
  "overflow": "hidden",
  "paddingRight": 0,
  "children": [
   {
    "iconURL": "skin/IconButton_8C3C0AD6_97DF_FFFB_41E2_7CD89BD63E40.png",
    "width": 38,
    "paddingLeft": 0,
    "height": 46,
    "mode": "push",
    "maxWidth": 64,
    "paddingRight": 0,
    "paddingBottom": 0,
    "verticalAlign": "middle",
    "class": "IconButton",
    "minHeight": 1,
    "transparencyActive": false,
    "click": "this.setComponentVisibility(this.MapViewer, true, 0, null, null, false)",
    "propagateClick": false,
    "cursor": "hand",
    "horizontalAlign": "center",
    "id": "IconButton_8C3C0AD6_97DF_FFFB_41E2_7CD89BD63E40",
    "data": {
     "name": "IconButton18363"
    },
    "maxHeight": 64,
    "borderSize": 0,
    "borderRadius": 0,
    "minWidth": 1,
    "backgroundOpacity": 0,
    "shadow": false,
    "paddingTop": 0
   },
   {
    "pressedIconURL": "skin/IconButton_51591DCE_5F03_66DC_41D1_463245584CF7_pressed.png",
    "iconURL": "skin/IconButton_51591DCE_5F03_66DC_41D1_463245584CF7.png",
    "width": 40,
    "paddingLeft": 0,
    "height": 40,
    "mode": "toggle",
    "paddingRight": 0,
    "paddingBottom": 0,
    "verticalAlign": "middle",
    "class": "IconButton",
    "minHeight": 0,
    "transparencyActive": true,
    "propagateClick": false,
    "cursor": "hand",
    "horizontalAlign": "center",
    "id": "IconButton_51591DCE_5F03_66DC_41D1_463245584CF7",
    "data": {
     "name": "Button11548"
    },
    "borderSize": 0,
    "borderRadius": 0,
    "minWidth": 0,
    "backgroundOpacity": 0,
    "shadow": false,
    "paddingTop": 0
   },
   "this.IconButton_51591DCE_5F03_66DC_41D7_1E28B681CAE6",
   "this.IconButton_51591DCE_5F03_66DC_41D1_3D7BC0B88E03",
   "this.IconButton_51591DCE_5F03_66DC_41C4_50743EFED275",
   "this.IconButton_51591DCE_5F03_66DC_41BA_EA0B3C243BDB",
   "this.IconButton_51591DCE_5F03_66DC_419C_7D6D6CC8D05C",
   "this.IconButton_51591DCE_5F03_66DC_41AA_3827647B13A5",
   {
    "children": [
     "this.IconButton_51591DCE_5F03_66DC_41BF_A58F28B56244"
    ],
    "gap": 4,
    "scrollBarVisible": "rollOver",
    "width": 40,
    "paddingLeft": 0,
    "height": "100%",
    "overflow": "hidden",
    "paddingRight": 0,
    "scrollBarWidth": 10,
    "paddingBottom": 0,
    "verticalAlign": "middle",
    "class": "Container",
    "minHeight": 20,
    "layout": "vertical",
    "scrollBarMargin": 2,
    "propagateClick": false,
    "scrollBarOpacity": 0.5,
    "horizontalAlign": "center",
    "data": {
     "name": "Container11542"
    },
    "creationPolicy": "delayed",
    "id": "Container_51591DCE_5F03_66DC_41B6_F31ADEE62661",
    "borderSize": 0,
    "contentOpaque": false,
    "scrollBarColor": "#000000",
    "borderRadius": 0,
    "minWidth": 20,
    "backgroundOpacity": 0,
    "shadow": false,
    "paddingTop": 0
   },
   "this.IconButton_51591DCE_5F03_66DC_41A2_85C1F5F35509",
   "this.IconButton_51591DCE_5F03_66DC_41C7_93849E226521",
   "this.IconButton_51591DCE_5F03_66DC_417A_1D999521FA63"
  ],
  "backgroundColorRatios": [
   0.61
  ],
  "paddingBottom": 0,
  "class": "Container",
  "scrollBarWidth": 10,
  "top": "88.36%",
  "verticalAlign": "middle",
  "minHeight": 20,
  "propagateClick": false,
  "scrollBarOpacity": 0.5,
  "bottom": "4.46%",
  "id": "Container_51591DCE_5F03_66DC_41D4_A095ADE9DE4F",
  "scrollBarMargin": 2,
  "data": {
   "name": "Container11537"
  },
  "layout": "horizontal",
  "horizontalAlign": "center",
  "creationPolicy": "delayed",
  "borderSize": 0,
  "contentOpaque": false,
  "scrollBarColor": "#000000",
  "borderRadius": 7,
  "minWidth": 392,
  "right": "33.66%",
  "shadow": false,
  "backgroundOpacity": 0.42,
  "paddingTop": 0
 },
 {
  "shadow": false,
  "progressBackgroundOpacity": 1,
  "toolTipBackgroundColor": "#F6F6F6",
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "paddingLeft": 0,
  "playbackBarBorderRadius": 4,
  "playbackBarOpacity": 1,
  "playbackBarBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "paddingRight": 0,
  "progressBarOpacity": 1,
  "toolTipTextShadowBlurRadius": 3,
  "progressBottom": 2,
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarHeight": 20,
  "progressBarBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "progressBorderRadius": 4,
  "toolTipShadowBlurRadius": 3,
  "progressBorderSize": 2,
  "progressHeight": 20,
  "playbackBarHeadWidth": 6,
  "playbackBarProgressBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipOpacity": 1,
  "playbackBarHeadShadowVerticalLength": 0,
  "toolTipTextShadowColor": "#000000",
  "minHeight": 1,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "progressLeft": 10,
  "playbackBarProgressBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "toolTipPaddingTop": 4,
  "toolTipShadowColor": "#333333",
  "playbackBarBackgroundColorDirection": "vertical",
  "toolTipBorderColor": "#767676",
  "playbackBarProgressOpacity": 1,
  "progressBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "toolTipShadowVerticalLength": 0,
  "borderSize": 0,
  "progressBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarLeft": 0,
  "playbackBarRight": 0,
  "minWidth": 1,
  "progressBarBorderSize": 0,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarBackgroundOpacity": 1,
  "transitionDuration": 500,
  "playbackBarProgressBorderRadius": 0,
  "playbackBarBorderSize": 2,
  "paddingTop": 0,
  "toolTipBorderRadius": 3,
  "playbackBarHeadShadowBlurRadius": 3,
  "toolTipShadowSpread": 0,
  "playbackBarBorderColor": "#AAAAAA",
  "width": "36.49%",
  "height": "84.674%",
  "toolTipBorderSize": 1,
  "paddingBottom": 0,
  "playbackBarHeadHeight": 30,
  "toolTipFontWeight": "normal",
  "toolTipFontStyle": "normal",
  "toolTipPaddingLeft": 6,
  "toolTipFontSize": 12,
  "progressBackgroundColorDirection": "vertical",
  "class": "ViewerArea",
  "toolTipDisplayTime": 600,
  "toolTipFontColor": "#606060",
  "playbackBarProgressBorderSize": 0,
  "progressBarBorderColor": "#000000",
  "playbackBarHeadShadowHorizontalLength": 0,
  "progressBarBorderRadius": 4,
  "visible": false,
  "top": "0%",
  "propagateClick": false,
  "playbackBarHeadBorderColor": "#000000",
  "progressBarBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipShadowOpacity": 1,
  "toolTipPaddingRight": 6,
  "playbackBarBottom": 0,
  "progressOpacity": 1,
  "progressRight": 10,
  "progressBarBackgroundColorDirection": "vertical",
  "playbackBarHeadBorderRadius": 0,
  "playbackBarHeadShadow": true,
  "playbackBarHeadShadowColor": "#000000",
  "left": "0%",
  "playbackBarHeadOpacity": 1,
  "transitionMode": "blending",
  "id": "MapViewer",
  "toolTipPaddingBottom": 4,
  "borderRadius": 0,
  "toolTipTextShadowOpacity": 0,
  "progressBorderColor": "#AAAAAA",
  "toolTipFontFamily": "Arial",
  "playbackBarHeadBorderSize": 0,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "toolTipShadowHorizontalLength": 0
 }
], 
 "start": "this.mainPlayList.set('selectedIndex', 0); this.playList_B7B00190_97A9_0A77_41D8_2E755D305761.set('selectedIndex', 0)",
 "gap": 10,
 "mouseWheelEnabled": true,
 "buttonToggleMute": "this.IconButton_51591DCE_5F03_66DC_41D1_463245584CF7",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "paddingLeft": 0,
 "height": "100%",
 "overflow": "visible",
 "paddingRight": 0,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "class": "Player",
 "layout": "absolute",
 "minHeight": 20,
 "propagateClick": false,
 "vrPolyfillScale": 0.5,
 "scrollBarOpacity": 0.5,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "data": {
  "name": "Player43899"
 },
 "creationPolicy": "delayed",
 "id": "rootPlayer",
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "mobileMipmappingEnabled": false,
 "minWidth": 20,
 "backgroundPreloadEnabled": true,
 "shadow": false,
 "scripts": {
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "getKey": function(key){  return window[key]; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "pauseGlobalAudios": function(caller, exclude){  var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if(window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); if(window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; var objs = window.pauseGlobalAudiosState[caller]; if(objs == undefined){ objs = []; window.pauseGlobalAudiosState[caller] = objs; } for (var i = 0, count = audios.length; i<count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); objs.push(a); } } },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller, exclude){  var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "autotriggerAtStart": function(playListItem, callback, once){  var onPlaylistBegin = function(event){ callback(); if(once == true) playListItem.unbind('begin', onPlaylistBegin, this); }; playListItem.bind('begin', onPlaylistBegin, this); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "existsKey": function(key){  return key in window; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "unregisterKey": function(key){  delete window[key]; },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "registerKey": function(key, value){  window[key] = value; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined) return; var objs = window.pauseGlobalAudiosState[caller]; if (objs == undefined) return; delete window.pauseGlobalAudiosState[caller]; if (Object.keys(window.pauseGlobalAudiosState).length > 0) { if (window.restoreGlobalAudiosState == undefined) window.restoreGlobalAudiosState = {}; if (!(caller in window.restoreGlobalAudiosState)) window.restoreGlobalAudiosState[caller] = objs; } else { var restoreFunc = function(objs) { for (var i = 0, count = objs.length; i < count; ++i) { var a = objs[i]; if (a.get('state') == 'paused') a.play(); } }; restoreFunc(objs); if (window.restoreGlobalAudiosState != undefined) { while (window.restoreGlobalAudiosState.length > 0) { restoreFunc(window.restoreGlobalAudiosState.pop()); } window.restoreGlobalAudiosState = undefined; } } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); }
 },
 "paddingTop": 0
})