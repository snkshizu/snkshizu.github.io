TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "viewerArea": "this.ViewerAreaLabeled_894F53D5_AC8B_3086_41E0_7B5ECFDEC136",
  "id": "ViewerAreaLabeled_894F53D5_AC8B_3086_41E0_7B5ECFDEC136VideoPlayer",
  "class": "VideoPlayer",
  "displayPlaybackBar": true,
  "buttonPause": {
   "pressedIconURL": "skin/IconButton_51591DCE_5F03_66DC_41D7_1E28B681CAE6_pressed.png",
   "toolTipBorderRadius": 3,
   "paddingLeft": 0,
   "toolTipBackgroundColor": "#F6F6F6",
   "toolTipShadowHorizontalLength": 0,
   "width": 60,
   "paddingRight": 0,
   "height": 60,
   "mode": "toggle",
   "maxHeight": 600,
   "toolTipTextShadowBlurRadius": 3,
   "iconURL": "skin/IconButton_51591DCE_5F03_66DC_41D7_1E28B681CAE6.png",
   "toolTip": "\u6bd4\u8f03\u6a21\u5f0f",
   "paddingBottom": 0,
   "toolTipBorderSize": 1,
   "minWidth": 50,
   "toolTipFontWeight": "normal",
   "toolTipFontStyle": "normal",
   "maxWidth": 600,
   "toolTipShadowBlurRadius": 3,
   "toolTipPaddingLeft": 6,
   "toolTipFontSize": 12,
   "shadow": false,
   "toolTipDisplayTime": 600,
   "toolTipShadowVerticalLength": 0,
   "toolTipOpacity": 1,
   "transparencyActive": true,
   "toolTipShadowOpacity": 1,
   "verticalAlign": "middle",
   "minHeight": 50,
   "class": "IconButton",
   "toolTipShadowColor": "#333333",
   "toolTipFontColor": "#606060",
   "propagateClick": false,
   "toolTipTextShadowColor": "#000000",
   "horizontalAlign": "center",
   "toolTipPaddingTop": 4,
   "id": "IconButton_51591DCE_5F03_66DC_41D7_1E28B681CAE6",
   "toolTipBorderColor": "#767676",
   "toolTipPaddingRight": 6,
   "data": {
    "name": "\u6bd4\u8f03\u6a21\u5f0f\u9215"
   },
   "cursor": "hand",
   "toolTipFontFamily": "微軟正黑體",
   "borderSize": 0,
   "borderRadius": 0,
   "toolTipPaddingBottom": 4,
   "backgroundOpacity": 0,
   "toolTipTextShadowOpacity": 0,
   "toolTipShadowSpread": 0,
   "paddingTop": 0
  },
  "buttonStop": [
   {
    "toolTipBorderRadius": 3,
    "paddingLeft": 0,
    "toolTipBackgroundColor": "#F6F6F6",
    "toolTipShadowHorizontalLength": 0,
    "width": 85,
    "paddingRight": 0,
    "height": 70,
    "mode": "push",
    "maxHeight": 70,
    "toolTipTextShadowBlurRadius": 3,
    "iconURL": "skin/IconButton_816A501A_AC9B_2F83_41E0_917AAEAA236F.png",
    "toolTip": "\u900f\u8996\u5716",
    "paddingBottom": 0,
    "toolTipBorderSize": 1,
    "minWidth": 1,
    "toolTipFontWeight": "normal",
    "toolTipFontStyle": "normal",
    "maxWidth": 85,
    "toolTipShadowBlurRadius": 3,
    "toolTipPaddingLeft": 6,
    "toolTipFontSize": 12,
    "shadow": false,
    "toolTipDisplayTime": 600,
    "toolTipShadowVerticalLength": 0,
    "toolTipOpacity": 1,
    "transparencyActive": true,
    "toolTipShadowOpacity": 1,
    "verticalAlign": "middle",
    "minHeight": 1,
    "class": "IconButton",
    "toolTipShadowColor": "#333333",
    "toolTipFontColor": "#606060",
    "propagateClick": false,
    "toolTipTextShadowColor": "#000000",
    "horizontalAlign": "center",
    "toolTipPaddingTop": 4,
    "id": "IconButton_816A501A_AC9B_2F83_41E0_917AAEAA236F",
    "toolTipBorderColor": "#767676",
    "toolTipPaddingRight": 6,
    "data": {
     "name": "\u900f\u8996\u5716\u9215"
    },
    "cursor": "hand",
    "click": "this.setComponentVisibility(this.ViewerAreaLabeled_80EE20A2_AC97_7082_41D6_1C46616F77BB, true, 0, null, null, false); this.setComponentVisibility(this.IconButton_8256B8E2_AC97_5083_41B6_95067DBD1015, true, 0, null, null, false); this.setComponentVisibility(this.IconButton_817538F2_AC95_5082_41DE_8B1FC0CAF018, true, 0, null, null, false); this.setComponentVisibility(this.IconButton_81B86D52_AC9D_5183_41E2_C290645F19F8, true, 0, null, null, false); this.playList_A96DB0AE_B0FA_5927_41E4_359DC3C8DA00.set('selectedIndex', 0)",
    "toolTipFontFamily": "微軟正黑體",
    "borderSize": 0,
    "borderRadius": 0,
    "toolTipPaddingBottom": 4,
    "backgroundOpacity": 0,
    "toolTipTextShadowOpacity": 0,
    "toolTipShadowSpread": 0,
    "paddingTop": 0
   },
   "this.IconButton_81B86D52_AC9D_5183_41E2_C290645F19F8"
  ]
 },
 {
  "viewerArea": "this.ViewerAreaLabeled_80EE20A2_AC97_7082_41D6_1C46616F77BB",
  "id": "ViewerAreaLabeled_80EE20A2_AC97_7082_41D6_1C46616F77BBPhotoAlbumPlayer",
  "buttonPrevious": "this.IconButton_817538F2_AC95_5082_41DE_8B1FC0CAF018",
  "class": "PhotoAlbumPlayer",
  "buttonNext": "this.IconButton_8256B8E2_AC97_5083_41B6_95067DBD1015",
  "buttonPause": "this.IconButton_51591DCE_5F03_66DC_41D7_1E28B681CAE6",
  "buttonStop": [
   "this.IconButton_816A501A_AC9B_2F83_41E0_917AAEAA236F",
   "this.IconButton_81B86D52_AC9D_5183_41E2_C290645F19F8"
  ]
 },
 {
  "hfov": 360,
  "id": "panorama_9B8037A9_97A9_75A9_41D0_A02580B6469F",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_9B8037A9_97A9_75A9_41D0_A02580B6469F_0_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_9B8037A9_97A9_75A9_41D0_A02580B6469F_0_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_9B8037A9_97A9_75A9_41D0_A02580B6469F_0.jpeg"
      }
     ]
    }
   },
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_9B8037A9_97A9_75A9_41D0_A02580B6469F_1_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_9B8037A9_97A9_75A9_41D0_A02580B6469F_1_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_9B8037A9_97A9_75A9_41D0_A02580B6469F_1.jpeg"
      }
     ]
    }
   }
  ],
  "class": "LivePanorama",
  "hfovMax": 130,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_9B8037A9_97A9_75A9_41D0_A02580B6469F_1_t.jpg",
  "frameDisplayTime": 5000,
  "frameTransitionTime": 5000,
  "mapLocations": [
   {
    "x": 644.99,
    "y": 1284.25,
    "class": "PanoramaMapLocation",
    "angle": 137.39,
    "map": {
     "maximumZoomFactor": 2,
     "class": "Map",
     "fieldOfViewOverlayOutsideOpacity": 0,
     "overlays": [
      {
       "rollOverDisplay": false,
       "data": {
        "label": "Pano_1"
       },
       "id": "overlay_8BAC45D0_97DB_15F7_41A4_C2A5955D6C55",
       "map": {
        "height": 300,
        "x": 496.08,
        "offsetY": 0,
        "width": 300,
        "y": 1135.38,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 45,
           "width": 45,
           "url": "media/map_8D4DC539_97D7_0AA9_41E0_BB067C563CCE_HS_0_map.gif"
          }
         ]
        }
       },
       "class": "AreaHotspotMapOverlay",
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 0)",
         "mapColor": "#FF0000"
        }
       ],
       "image": {
        "x": 494.99,
        "y": 1134.25,
        "class": "HotspotMapOverlayImage",
        "width": 300,
        "height": 300,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 90,
           "width": 90,
           "url": "media/map_8D4DC539_97D7_0AA9_41E0_BB067C563CCE_HS_0.png"
          }
         ]
        }
       },
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "data": {
        "label": "Pano_2"
       },
       "id": "overlay_8B77206F_97A9_0AA9_41B9_6BA8CD2C62F4",
       "map": {
        "height": 300,
        "x": 160.98,
        "offsetY": 0,
        "width": 300,
        "y": 4506.19,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 45,
           "width": 45,
           "url": "media/map_8D4DC539_97D7_0AA9_41E0_BB067C563CCE_HS_1_map.gif"
          }
         ]
        }
       },
       "class": "AreaHotspotMapOverlay",
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 1)",
         "mapColor": "#FF0000"
        }
       ],
       "image": {
        "x": 159.88,
        "y": 4505.07,
        "class": "HotspotMapOverlayImage",
        "width": 300,
        "height": 300,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 90,
           "width": 90,
           "url": "media/map_8D4DC539_97D7_0AA9_41E0_BB067C563CCE_HS_1.png"
          }
         ]
        }
       },
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "data": {
        "label": "Pano_3"
       },
       "id": "overlay_8BB0B1EB_97B7_0DA9_41C9_CB88C17A4B78",
       "map": {
        "height": 177.32,
        "x": 3166.54,
        "offsetY": 0,
        "width": 177.31,
        "y": 2327.34,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 26,
           "width": 26,
           "url": "media/map_8D4DC539_97D7_0AA9_41E0_BB067C563CCE_HS_2_map.gif"
          }
         ]
        }
       },
       "class": "AreaHotspotMapOverlay",
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 2)",
         "mapColor": "#FF0000"
        }
       ],
       "image": {
        "x": 3165.59,
        "y": 2326.42,
        "class": "HotspotMapOverlayImage",
        "width": 177.31,
        "height": 177.32,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 53,
           "width": 53,
           "url": "media/map_8D4DC539_97D7_0AA9_41E0_BB067C563CCE_HS_2.png"
          }
         ]
        }
       },
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "data": {
        "label": "Pano_4"
       },
       "id": "overlay_8B70F5D0_97BB_75F7_41B9_0D5DA9ED011B",
       "map": {
        "height": 187.56,
        "x": 1292.87,
        "offsetY": 0,
        "width": 187.55,
        "y": 580.19,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 28,
           "width": 28,
           "url": "media/map_8D4DC539_97D7_0AA9_41E0_BB067C563CCE_HS_3_map.gif"
          }
         ]
        }
       },
       "class": "AreaHotspotMapOverlay",
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 3)",
         "mapColor": "#FF0000"
        }
       ],
       "image": {
        "x": 1291.71,
        "y": 579.24,
        "class": "HotspotMapOverlayImage",
        "width": 187.55,
        "height": 187.56,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 56,
           "width": 56,
           "url": "media/map_8D4DC539_97D7_0AA9_41E0_BB067C563CCE_HS_3.png"
          }
         ]
        }
       },
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "data": {
        "label": "Pano_5"
       },
       "id": "overlay_8B198891_97B9_FA79_41DE_CF8734B9348C",
       "map": {
        "height": 187.56,
        "x": 1311.63,
        "offsetY": 0,
        "width": 187.55,
        "y": 4287.68,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 28,
           "width": 28,
           "url": "media/map_8D4DC539_97D7_0AA9_41E0_BB067C563CCE_HS_4_map.gif"
          }
         ]
        }
       },
       "class": "AreaHotspotMapOverlay",
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 4)",
         "mapColor": "#FF0000"
        }
       ],
       "image": {
        "x": 1310.62,
        "y": 4286.67,
        "class": "HotspotMapOverlayImage",
        "width": 187.55,
        "height": 187.56,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 56,
           "width": 56,
           "url": "media/map_8D4DC539_97D7_0AA9_41E0_BB067C563CCE_HS_4.png"
          }
         ]
        }
       },
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "data": {
        "label": "Pano_6"
       },
       "id": "overlay_8ACB00DC_97BB_0BEF_41DA_9EE0689F4BAC",
       "map": {
        "height": 177.32,
        "x": 1337.57,
        "offsetY": 0,
        "width": 177.31,
        "y": 1569.27,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 26,
           "width": 26,
           "url": "media/map_8D4DC539_97D7_0AA9_41E0_BB067C563CCE_HS_5_map.gif"
          }
         ]
        }
       },
       "class": "AreaHotspotMapOverlay",
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 5)",
         "mapColor": "#FF0000"
        }
       ],
       "image": {
        "x": 1336.63,
        "y": 1568.09,
        "class": "HotspotMapOverlayImage",
        "width": 177.31,
        "height": 177.32,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 53,
           "width": 53,
           "url": "media/map_8D4DC539_97D7_0AA9_41E0_BB067C563CCE_HS_5.png"
          }
         ]
        }
       },
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "data": {
        "label": "Pano_7"
       },
       "id": "overlay_8AC7B150_97A9_0AF7_41AF_20039BDBA7F1",
       "map": {
        "height": 177.32,
        "x": 1600.78,
        "offsetY": 0,
        "width": 177.31,
        "y": 3285.47,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 26,
           "width": 26,
           "url": "media/map_8D4DC539_97D7_0AA9_41E0_BB067C563CCE_HS_6_map.gif"
          }
         ]
        }
       },
       "class": "AreaHotspotMapOverlay",
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 6)",
         "mapColor": "#FF0000"
        }
       ],
       "image": {
        "x": 1599.64,
        "y": 3284.23,
        "class": "HotspotMapOverlayImage",
        "width": 177.31,
        "height": 177.32,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 53,
           "width": 53,
           "url": "media/map_8D4DC539_97D7_0AA9_41E0_BB067C563CCE_HS_6.png"
          }
         ]
        }
       },
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "data": {
        "label": "Pano_8"
       },
       "id": "overlay_8A77027C_97AB_0EAF_41D6_1B45F291CB8B",
       "map": {
        "height": 177.32,
        "x": 2198.14,
        "offsetY": 0,
        "width": 177.31,
        "y": 3179.5,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 26,
           "width": 26,
           "url": "media/map_8D4DC539_97D7_0AA9_41E0_BB067C563CCE_HS_7_map.gif"
          }
         ]
        }
       },
       "class": "AreaHotspotMapOverlay",
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 7)",
         "mapColor": "#FF0000"
        }
       ],
       "image": {
        "x": 2197.17,
        "y": 3178.73,
        "class": "HotspotMapOverlayImage",
        "width": 177.31,
        "height": 177.32,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 53,
           "width": 53,
           "url": "media/map_8D4DC539_97D7_0AA9_41E0_BB067C563CCE_HS_7.png"
          }
         ]
        }
       },
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "data": {
        "label": "Pano_9"
       },
       "id": "overlay_8A830AC3_97AF_3FD9_41D6_A11BBA116F0C",
       "map": {
        "height": 177.32,
        "x": 1802.4,
        "offsetY": 0,
        "width": 177.31,
        "y": 2582.74,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 26,
           "width": 26,
           "url": "media/map_8D4DC539_97D7_0AA9_41E0_BB067C563CCE_HS_8_map.gif"
          }
         ]
        }
       },
       "class": "AreaHotspotMapOverlay",
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 8)",
         "mapColor": "#FF0000"
        }
       ],
       "image": {
        "x": 1801.48,
        "y": 2582.05,
        "class": "HotspotMapOverlayImage",
        "width": 177.31,
        "height": 177.32,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 53,
           "width": 53,
           "url": "media/map_8D4DC539_97D7_0AA9_41E0_BB067C563CCE_HS_8.png"
          }
         ]
        }
       },
       "useHandCursor": true
      }
     ],
     "fieldOfViewOverlayOutsideColor": "#FF0000",
     "width": 4320,
     "id": "map_8D4DC539_97D7_0AA9_41E0_BB067C563CCE",
     "height": 5290,
     "fieldOfViewOverlayInsideOpacity": 0.25,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "class": "ImageResourceLevel",
        "height": 1600,
        "width": 1306,
        "url": "media/map_8D4DC539_97D7_0AA9_41E0_BB067C563CCE.jpeg"
       },
       {
        "class": "ImageResourceLevel",
        "height": 800,
        "grayscale": true,
        "width": 653,
        "url": "media/map_8D4DC539_97D7_0AA9_41E0_BB067C563CCE_lq.jpeg"
       }
      ]
     },
     "thumbnailUrl": "media/map_8D4DC539_97D7_0AA9_41E0_BB067C563CCE_t.jpg",
     "fieldOfViewOverlayRadiusScale": 0.25,
     "fieldOfViewOverlayInsideColor": "#FF0000",
     "minimumZoomFactor": 0.5,
     "label": "GR_Plan",
     "scaleMode": "fit_inside",
     "initialZoomFactor": 1
    }
   }
  ],
  "label": "Pano_1",
  "partial": false,
  "vfov": 180,
  "hfovMin": 60
 },
 {
  "viewerArea": "this.MainViewer",
  "touchControlMode": "drag_rotation",
  "displayPlaybackBar": true,
  "buttonZoomOut": {
   "pressedIconURL": "skin/IconButton_51591DCE_5F03_66DC_41C4_50743EFED275_pressed.png",
   "toolTipBorderRadius": 3,
   "paddingLeft": 0,
   "toolTipBackgroundColor": "#F6F6F6",
   "toolTipShadowHorizontalLength": 0,
   "width": 60,
   "paddingRight": 0,
   "height": 60,
   "mode": "push",
   "maxHeight": 600,
   "toolTipTextShadowBlurRadius": 3,
   "iconURL": "skin/IconButton_51591DCE_5F03_66DC_41C4_50743EFED275.png",
   "toolTip": "\u7e2e\u5c0f",
   "paddingBottom": 0,
   "toolTipBorderSize": 1,
   "minWidth": 50,
   "toolTipFontWeight": "normal",
   "toolTipFontStyle": "normal",
   "maxWidth": 600,
   "toolTipShadowBlurRadius": 3,
   "toolTipPaddingLeft": 6,
   "toolTipFontSize": 12,
   "shadow": false,
   "toolTipDisplayTime": 600,
   "toolTipShadowVerticalLength": 0,
   "toolTipOpacity": 1,
   "transparencyActive": true,
   "toolTipShadowOpacity": 1,
   "verticalAlign": "middle",
   "minHeight": 50,
   "class": "IconButton",
   "toolTipShadowColor": "#333333",
   "toolTipFontColor": "#606060",
   "propagateClick": false,
   "toolTipTextShadowColor": "#000000",
   "horizontalAlign": "center",
   "toolTipPaddingTop": 4,
   "id": "IconButton_51591DCE_5F03_66DC_41C4_50743EFED275",
   "toolTipBorderColor": "#767676",
   "toolTipPaddingRight": 6,
   "rollOverIconURL": "skin/IconButton_51591DCE_5F03_66DC_41C4_50743EFED275_rollover.png",
   "cursor": "hand",
   "toolTipFontFamily": "微軟正黑體",
   "data": {
    "name": "\u7e2e\u5c0f\u9215"
   },
   "borderSize": 0,
   "borderRadius": 0,
   "toolTipPaddingBottom": 4,
   "backgroundOpacity": 0,
   "toolTipTextShadowOpacity": 0,
   "toolTipShadowSpread": 0,
   "paddingTop": 0
  },
  "buttonMoveRight": {
   "pressedIconURL": "skin/IconButton_51591DCE_5F03_66DC_41A2_85C1F5F35509_pressed.png",
   "paddingLeft": 0,
   "width": 40,
   "paddingRight": 0,
   "height": 40,
   "mode": "push",
   "iconURL": "skin/IconButton_51591DCE_5F03_66DC_41A2_85C1F5F35509.png",
   "paddingBottom": 0,
   "minWidth": 0,
   "shadow": false,
   "transparencyActive": true,
   "verticalAlign": "middle",
   "minHeight": 0,
   "class": "IconButton",
   "visible": false,
   "propagateClick": false,
   "horizontalAlign": "center",
   "id": "IconButton_51591DCE_5F03_66DC_41A2_85C1F5F35509",
   "rollOverIconURL": "skin/IconButton_51591DCE_5F03_66DC_41A2_85C1F5F35509_rollover.png",
   "cursor": "hand",
   "data": {
    "name": "Button11546"
   },
   "borderSize": 0,
   "borderRadius": 0,
   "backgroundOpacity": 0,
   "paddingTop": 0
  },
  "class": "PanoramaPlayer",
  "buttonPlayLeft": {
   "pressedIconURL": "skin/IconButton_51591DCE_5F03_66DC_419C_7D6D6CC8D05C_pressed.png",
   "paddingLeft": 0,
   "width": 40,
   "paddingRight": 0,
   "height": 40,
   "mode": "push",
   "iconURL": "skin/IconButton_51591DCE_5F03_66DC_419C_7D6D6CC8D05C.png",
   "paddingBottom": 0,
   "minWidth": 0,
   "shadow": false,
   "transparencyActive": true,
   "verticalAlign": "middle",
   "minHeight": 0,
   "class": "IconButton",
   "visible": false,
   "propagateClick": false,
   "horizontalAlign": "center",
   "id": "IconButton_51591DCE_5F03_66DC_419C_7D6D6CC8D05C",
   "rollOverIconURL": "skin/IconButton_51591DCE_5F03_66DC_419C_7D6D6CC8D05C_rollover.png",
   "cursor": "hand",
   "data": {
    "name": "Button11540"
   },
   "borderSize": 0,
   "borderRadius": 0,
   "backgroundOpacity": 0,
   "paddingTop": 0
  },
  "gyroscopeEnabled": true,
  "buttonPause": "this.IconButton_51591DCE_5F03_66DC_41D7_1E28B681CAE6",
  "buttonStop": [
   "this.IconButton_816A501A_AC9B_2F83_41E0_917AAEAA236F",
   "this.IconButton_81B86D52_AC9D_5183_41E2_C290645F19F8"
  ],
  "mouseControlMode": "drag_acceleration",
  "id": "MainViewerPanoramaPlayer",
  "buttonToggleGyroscope": {
   "pressedIconURL": "skin/IconButton_90AE1C9C_9C9C_AAB4_41D0_D26EC6A1C695_pressed.png",
   "toolTipBorderRadius": 3,
   "paddingLeft": 0,
   "toolTipBackgroundColor": "#F6F6F6",
   "toolTipShadowHorizontalLength": 0,
   "width": 60,
   "paddingRight": 0,
   "height": 60,
   "mode": "toggle",
   "maxHeight": 600,
   "toolTipTextShadowBlurRadius": 3,
   "iconURL": "skin/IconButton_90AE1C9C_9C9C_AAB4_41D0_D26EC6A1C695.png",
   "toolTip": "\u9640\u87ba\u5100",
   "paddingBottom": 0,
   "toolTipBorderSize": 1,
   "minWidth": 50,
   "toolTipFontWeight": "normal",
   "toolTipFontStyle": "normal",
   "maxWidth": 600,
   "toolTipShadowBlurRadius": 3,
   "toolTipPaddingLeft": 6,
   "toolTipFontSize": 12,
   "shadow": false,
   "toolTipDisplayTime": 600,
   "toolTipShadowVerticalLength": 0,
   "toolTipOpacity": 1,
   "transparencyActive": true,
   "toolTipShadowOpacity": 1,
   "minHeight": 50,
   "class": "IconButton",
   "toolTipShadowColor": "#333333",
   "toolTipFontColor": "#606060",
   "propagateClick": false,
   "toolTipTextShadowColor": "#000000",
   "horizontalAlign": "center",
   "toolTipPaddingTop": 4,
   "id": "IconButton_90AE1C9C_9C9C_AAB4_41D0_D26EC6A1C695",
   "toolTipBorderColor": "#767676",
   "toolTipPaddingRight": 6,
   "data": {
    "name": "gyroscope\u9215"
   },
   "cursor": "hand",
   "verticalAlign": "middle",
   "toolTipFontFamily": "微軟正黑體",
   "borderSize": 0,
   "borderRadius": 0,
   "toolTipPaddingBottom": 4,
   "backgroundOpacity": 0,
   "toolTipTextShadowOpacity": 0,
   "toolTipShadowSpread": 0,
   "paddingTop": 0
  },
  "buttonZoomIn": {
   "pressedIconURL": "skin/IconButton_51591DCE_5F03_66DC_41D1_3D7BC0B88E03_pressed.png",
   "toolTipBorderRadius": 3,
   "paddingLeft": 0,
   "toolTipBackgroundColor": "#F6F6F6",
   "toolTipShadowHorizontalLength": 0,
   "width": 60,
   "paddingRight": 0,
   "height": 60,
   "mode": "push",
   "maxHeight": 600,
   "toolTipTextShadowBlurRadius": 3,
   "iconURL": "skin/IconButton_51591DCE_5F03_66DC_41D1_3D7BC0B88E03.png",
   "toolTip": "\u653e\u5927",
   "paddingBottom": 0,
   "toolTipBorderSize": 1,
   "minWidth": 50,
   "toolTipFontWeight": "normal",
   "toolTipFontStyle": "normal",
   "maxWidth": 600,
   "toolTipShadowBlurRadius": 3,
   "toolTipPaddingLeft": 6,
   "toolTipFontSize": 12,
   "shadow": false,
   "toolTipDisplayTime": 600,
   "toolTipShadowVerticalLength": 0,
   "toolTipOpacity": 1,
   "transparencyActive": true,
   "toolTipShadowOpacity": 1,
   "verticalAlign": "middle",
   "minHeight": 50,
   "class": "IconButton",
   "toolTipShadowColor": "#333333",
   "toolTipFontColor": "#606060",
   "propagateClick": false,
   "toolTipTextShadowColor": "#000000",
   "horizontalAlign": "center",
   "toolTipPaddingTop": 4,
   "id": "IconButton_51591DCE_5F03_66DC_41D1_3D7BC0B88E03",
   "toolTipBorderColor": "#767676",
   "toolTipPaddingRight": 6,
   "rollOverIconURL": "skin/IconButton_51591DCE_5F03_66DC_41D1_3D7BC0B88E03_rollover.png",
   "cursor": "hand",
   "toolTipFontFamily": "微軟正黑體",
   "data": {
    "name": "\u653e\u5927\u9215"
   },
   "borderSize": 0,
   "borderRadius": 0,
   "toolTipPaddingBottom": 4,
   "backgroundOpacity": 0,
   "toolTipTextShadowOpacity": 0,
   "toolTipShadowSpread": 0,
   "paddingTop": 0
  },
  "gyroscopeVerticalDraggingEnabled": true,
  "buttonMoveLeft": {
   "pressedIconURL": "skin/IconButton_51591DCE_5F03_66DC_41AA_3827647B13A5_pressed.png",
   "paddingLeft": 0,
   "width": 40,
   "paddingRight": 0,
   "height": 40,
   "mode": "push",
   "iconURL": "skin/IconButton_51591DCE_5F03_66DC_41AA_3827647B13A5.png",
   "paddingBottom": 0,
   "minWidth": 0,
   "shadow": false,
   "transparencyActive": true,
   "verticalAlign": "middle",
   "minHeight": 0,
   "class": "IconButton",
   "visible": false,
   "propagateClick": false,
   "horizontalAlign": "center",
   "id": "IconButton_51591DCE_5F03_66DC_41AA_3827647B13A5",
   "rollOverIconURL": "skin/IconButton_51591DCE_5F03_66DC_41AA_3827647B13A5_rollover.png",
   "cursor": "hand",
   "data": {
    "name": "Button11541"
   },
   "borderSize": 0,
   "borderRadius": 0,
   "backgroundOpacity": 0,
   "paddingTop": 0
  },
  "preloadEnabled": false,
  "buttonPlayRight": {
   "pressedIconURL": "skin/IconButton_51591DCE_5F03_66DC_41C7_93849E226521_pressed.png",
   "paddingLeft": 0,
   "width": 40,
   "paddingRight": 0,
   "height": 40,
   "mode": "push",
   "iconURL": "skin/IconButton_51591DCE_5F03_66DC_41C7_93849E226521.png",
   "paddingBottom": 0,
   "minWidth": 0,
   "shadow": false,
   "transparencyActive": true,
   "verticalAlign": "middle",
   "minHeight": 0,
   "class": "IconButton",
   "visible": false,
   "propagateClick": false,
   "horizontalAlign": "center",
   "id": "IconButton_51591DCE_5F03_66DC_41C7_93849E226521",
   "rollOverIconURL": "skin/IconButton_51591DCE_5F03_66DC_41C7_93849E226521_rollover.png",
   "cursor": "hand",
   "data": {
    "name": "Button11547"
   },
   "borderSize": 0,
   "borderRadius": 0,
   "backgroundOpacity": 0,
   "paddingTop": 0
  },
  "buttonMoveDown": {
   "pressedIconURL": "skin/IconButton_51591DCE_5F03_66DC_417A_1D999521FA63_pressed.png",
   "paddingLeft": 0,
   "width": 40,
   "paddingRight": 0,
   "height": 40,
   "mode": "push",
   "iconURL": "skin/IconButton_51591DCE_5F03_66DC_417A_1D999521FA63.png",
   "paddingBottom": 0,
   "minWidth": 0,
   "shadow": false,
   "transparencyActive": true,
   "verticalAlign": "middle",
   "minHeight": 0,
   "class": "IconButton",
   "visible": false,
   "propagateClick": false,
   "horizontalAlign": "center",
   "id": "IconButton_51591DCE_5F03_66DC_417A_1D999521FA63",
   "rollOverIconURL": "skin/IconButton_51591DCE_5F03_66DC_417A_1D999521FA63_rollover.png",
   "cursor": "hand",
   "data": {
    "name": "Button11545"
   },
   "borderSize": 0,
   "borderRadius": 0,
   "backgroundOpacity": 0,
   "paddingTop": 0
  }
 },
 {
  "viewerArea": {
   "right": "0%",
   "progressBackgroundOpacity": 1,
   "toolTipBackgroundColor": "#F6F6F6",
   "playbackBarHeadBackgroundColor": [
    "#111111",
    "#666666"
   ],
   "paddingRight": 0,
   "playbackBarBorderRadius": 4,
   "playbackBarOpacity": 1,
   "playbackBarBackgroundColor": [
    "#EEEEEE",
    "#CCCCCC"
   ],
   "toolTipTextShadowBlurRadius": 3,
   "progressBarOpacity": 1,
   "playbackBarHeadShadowHorizontalLength": 0,
   "playbackBarHeadShadowVerticalLength": 0,
   "progressBottom": 2,
   "playbackBarProgressBorderColor": "#000000",
   "minWidth": 50,
   "progressBarBackgroundColor": [
    "#222222",
    "#444444"
   ],
   "progressBorderRadius": 4,
   "toolTipShadowBlurRadius": 3,
   "progressBorderSize": 2,
   "progressHeight": 20,
   "playbackBarHeight": 20,
   "shadow": false,
   "playbackBarHeadWidth": 6,
   "playbackBarProgressBackgroundColorRatios": [
    0,
    1
   ],
   "toolTipOpacity": 1,
   "class": "ViewerArea",
   "toolTipShadowColor": "#333333",
   "playbackBarHeadBackgroundColorDirection": "vertical",
   "playbackBarBackgroundColorDirection": "vertical",
   "toolTipTextShadowColor": "#000000",
   "playbackBarProgressBackgroundColor": [
    "#222222",
    "#444444"
   ],
   "toolTipPaddingTop": 4,
   "toolTipShadowVerticalLength": 0,
   "toolTipBorderColor": "#767676",
   "progressLeft": 10,
   "playbackBarProgressOpacity": 1,
   "progressBackgroundColor": [
    "#EEEEEE",
    "#CCCCCC"
   ],
   "borderSize": 0,
   "progressBackgroundColorRatios": [
    0,
    1
   ],
   "playbackBarHeadShadowOpacity": 0.7,
   "playbackBarRight": 0,
   "progressBarBorderSize": 0,
   "playbackBarBorderSize": 2,
   "playbackBarHeadBackgroundColorRatios": [
    0,
    1
   ],
   "playbackBarBackgroundOpacity": 1,
   "transitionDuration": 500,
   "playbackBarProgressBorderRadius": 0,
   "playbackBarLeft": 0,
   "paddingTop": 0,
   "toolTipBorderRadius": 3,
   "playbackBarHeadShadowBlurRadius": 3,
   "toolTipShadowSpread": 0,
   "paddingLeft": 0,
   "playbackBarBorderColor": "#AAAAAA",
   "toolTipBorderSize": 1,
   "paddingBottom": 0,
   "playbackBarHeadHeight": 30,
   "toolTipFontWeight": "normal",
   "toolTipFontStyle": "normal",
   "toolTipPaddingLeft": 6,
   "toolTipFontSize": 12,
   "progressBackgroundColorDirection": "vertical",
   "minHeight": 50,
   "toolTipFontColor": "#606060",
   "playbackBarProgressBorderSize": 0,
   "playbackBarHeadBorderRadius": 0,
   "toolTipDisplayTime": 600,
   "progressBarBorderRadius": 4,
   "top": "4.62%",
   "propagateClick": true,
   "bottom": "0.14%",
   "progressBarBackgroundColorRatios": [
    0,
    1
   ],
   "toolTipShadowOpacity": 1,
   "toolTipPaddingRight": 6,
   "playbackBarBottom": 0,
   "progressOpacity": 1,
   "playbackBarHeadBorderColor": "#000000",
   "progressRight": 10,
   "progressBarBackgroundColorDirection": "vertical",
   "progressBarBorderColor": "#000000",
   "id": "MapViewer",
   "playbackBarHeadShadow": true,
   "playbackBarHeadShadowColor": "#000000",
   "left": "0%",
   "playbackBarHeadOpacity": 1,
   "transitionMode": "blending",
   "toolTipFontFamily": "微軟正黑體",
   "toolTipPaddingBottom": 4,
   "borderRadius": 0,
   "playbackBarProgressBackgroundColorDirection": "vertical",
   "toolTipTextShadowOpacity": 0,
   "progressBorderColor": "#AAAAAA",
   "playbackBarHeadBorderSize": 0,
   "toolTipShadowHorizontalLength": 0
  },
  "movementMode": "constrained",
  "id": "MapViewerMapPlayer",
  "buttonZoomOut": "this.IconButton_51591DCE_5F03_66DC_41C4_50743EFED275",
  "class": "MapPlayer",
  "buttonZoomIn": "this.IconButton_51591DCE_5F03_66DC_41D1_3D7BC0B88E03"
 },
 {
  "automaticZoomSpeed": 10,
  "id": "panorama_9B8037A9_97A9_75A9_41D0_A02580B6469F_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": -2.26,
   "pitch": -38.69
  }
 },
 {
  "hfov": 360,
  "id": "panorama_84988527_97E9_0A59_41CB_3B26BF93BF6F",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_84988527_97E9_0A59_41CB_3B26BF93BF6F_0_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_84988527_97E9_0A59_41CB_3B26BF93BF6F_0_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_84988527_97E9_0A59_41CB_3B26BF93BF6F_0.jpeg"
      }
     ]
    }
   },
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_84988527_97E9_0A59_41CB_3B26BF93BF6F_1_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_84988527_97E9_0A59_41CB_3B26BF93BF6F_1_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_84988527_97E9_0A59_41CB_3B26BF93BF6F_1.jpeg"
      }
     ]
    }
   }
  ],
  "class": "LivePanorama",
  "hfovMax": 130,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_84988527_97E9_0A59_41CB_3B26BF93BF6F_1_t.jpg",
  "frameDisplayTime": 5000,
  "frameTransitionTime": 5000,
  "mapLocations": [
   {
    "x": 309.88,
    "y": 4655.07,
    "class": "PanoramaMapLocation",
    "angle": 51.27,
    "map": "this.map_8D4DC539_97D7_0AA9_41E0_BB067C563CCE"
   }
  ],
  "label": "Pano_2",
  "partial": false,
  "vfov": 180,
  "hfovMin": 60
 },
 {
  "automaticZoomSpeed": 10,
  "id": "panorama_84988527_97E9_0A59_41CB_3B26BF93BF6F_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": 0.5,
   "pitch": -35.67
  }
 },
 {
  "hfov": 360,
  "class": "LivePanorama",
  "id": "panorama_854A1503_97E9_0A59_41C3_35E00D6B5E8A",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_854A1503_97E9_0A59_41C3_35E00D6B5E8A_0_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_854A1503_97E9_0A59_41C3_35E00D6B5E8A_0_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_854A1503_97E9_0A59_41C3_35E00D6B5E8A_0.jpeg"
      }
     ]
    }
   },
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_854A1503_97E9_0A59_41C3_35E00D6B5E8A_1_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_854A1503_97E9_0A59_41C3_35E00D6B5E8A_1_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_854A1503_97E9_0A59_41C3_35E00D6B5E8A_1.jpeg"
      }
     ]
    }
   }
  ],
  "hfovMax": 130,
  "thumbnailUrl": "media/panorama_854A1503_97E9_0A59_41C3_35E00D6B5E8A_1_t.jpg",
  "frameDisplayTime": 5000,
  "frameTransitionTime": 5000,
  "mapLocations": [
   {
    "x": 3254.24,
    "y": 2415.08,
    "class": "PanoramaMapLocation",
    "angle": 267.19,
    "map": "this.map_8D4DC539_97D7_0AA9_41E0_BB067C563CCE"
   }
  ],
  "pitch": 0,
  "label": "Pano_3",
  "partial": false,
  "vfov": 180,
  "hfovMin": 60
 },
 {
  "automaticZoomSpeed": 10,
  "id": "panorama_854A1503_97E9_0A59_41C3_35E00D6B5E8A_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 {
  "hfov": 360,
  "class": "LivePanorama",
  "id": "panorama_85B3358A_97EB_0A6B_41D5_80797C992818",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_85B3358A_97EB_0A6B_41D5_80797C992818_0_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_85B3358A_97EB_0A6B_41D5_80797C992818_0_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_85B3358A_97EB_0A6B_41D5_80797C992818_0.jpeg"
      }
     ]
    }
   },
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_85B3358A_97EB_0A6B_41D5_80797C992818_1_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_85B3358A_97EB_0A6B_41D5_80797C992818_1_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_85B3358A_97EB_0A6B_41D5_80797C992818_1.jpeg"
      }
     ]
    }
   }
  ],
  "hfovMax": 130,
  "thumbnailUrl": "media/panorama_85B3358A_97EB_0A6B_41D5_80797C992818_1_t.jpg",
  "frameDisplayTime": 5000,
  "frameTransitionTime": 5000,
  "mapLocations": [
   {
    "x": 1385.49,
    "y": 673.02,
    "class": "PanoramaMapLocation",
    "angle": 163.23,
    "map": "this.map_8D4DC539_97D7_0AA9_41E0_BB067C563CCE"
   }
  ],
  "pitch": 0,
  "label": "Pano_4",
  "partial": false,
  "vfov": 180,
  "hfovMin": 60
 },
 {
  "automaticZoomSpeed": 10,
  "id": "panorama_85B3358A_97EB_0A6B_41D5_80797C992818_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 {
  "hfov": 360,
  "class": "LivePanorama",
  "id": "panorama_85BDD557_97EB_0AF9_41D4_6B1C56C04CBC",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_85BDD557_97EB_0AF9_41D4_6B1C56C04CBC_0_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_85BDD557_97EB_0AF9_41D4_6B1C56C04CBC_0_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_85BDD557_97EB_0AF9_41D4_6B1C56C04CBC_0.jpeg"
      }
     ]
    }
   },
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_85BDD557_97EB_0AF9_41D4_6B1C56C04CBC_1_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_85BDD557_97EB_0AF9_41D4_6B1C56C04CBC_1_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_85BDD557_97EB_0AF9_41D4_6B1C56C04CBC_1.jpeg"
      }
     ]
    }
   }
  ],
  "hfovMax": 130,
  "thumbnailUrl": "media/panorama_85BDD557_97EB_0AF9_41D4_6B1C56C04CBC_1_t.jpg",
  "frameDisplayTime": 5000,
  "frameTransitionTime": 5000,
  "mapLocations": [
   {
    "x": 1404.4,
    "y": 4380.45,
    "class": "PanoramaMapLocation",
    "angle": 16.48,
    "map": "this.map_8D4DC539_97D7_0AA9_41E0_BB067C563CCE"
   }
  ],
  "pitch": 0,
  "label": "Pano_5",
  "partial": false,
  "vfov": 180,
  "hfovMin": 60
 },
 {
  "automaticZoomSpeed": 10,
  "id": "panorama_85BDD557_97EB_0AF9_41D4_6B1C56C04CBC_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 {
  "hfov": 360,
  "class": "LivePanorama",
  "id": "panorama_85B2AB4E_97EB_FEEB_41D9_2751CDEEF317",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_85B2AB4E_97EB_FEEB_41D9_2751CDEEF317_0_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_85B2AB4E_97EB_FEEB_41D9_2751CDEEF317_0_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_85B2AB4E_97EB_FEEB_41D9_2751CDEEF317_0.jpeg"
      }
     ]
    }
   },
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_85B2AB4E_97EB_FEEB_41D9_2751CDEEF317_1_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_85B2AB4E_97EB_FEEB_41D9_2751CDEEF317_1_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_85B2AB4E_97EB_FEEB_41D9_2751CDEEF317_1.jpeg"
      }
     ]
    }
   }
  ],
  "hfovMax": 130,
  "thumbnailUrl": "media/panorama_85B2AB4E_97EB_FEEB_41D9_2751CDEEF317_1_t.jpg",
  "frameDisplayTime": 5000,
  "frameTransitionTime": 5000,
  "mapLocations": [
   {
    "x": 1425.28,
    "y": 1656.75,
    "class": "PanoramaMapLocation",
    "angle": 140.39,
    "map": "this.map_8D4DC539_97D7_0AA9_41E0_BB067C563CCE"
   }
  ],
  "pitch": 0,
  "label": "Pano_6",
  "partial": false,
  "vfov": 180,
  "hfovMin": 60
 },
 {
  "automaticZoomSpeed": 10,
  "id": "panorama_85B2AB4E_97EB_FEEB_41D9_2751CDEEF317_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 {
  "hfov": 360,
  "class": "LivePanorama",
  "id": "panorama_85B519F1_97EB_1DB9_41E1_845C79B61A56",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_85B519F1_97EB_1DB9_41E1_845C79B61A56_0_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_85B519F1_97EB_1DB9_41E1_845C79B61A56_0_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_85B519F1_97EB_1DB9_41E1_845C79B61A56_0.jpeg"
      }
     ]
    }
   },
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_85B519F1_97EB_1DB9_41E1_845C79B61A56_1_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_85B519F1_97EB_1DB9_41E1_845C79B61A56_1_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_85B519F1_97EB_1DB9_41E1_845C79B61A56_1.jpeg"
      }
     ]
    }
   }
  ],
  "hfovMax": 130,
  "thumbnailUrl": "media/panorama_85B519F1_97EB_1DB9_41E1_845C79B61A56_1_t.jpg",
  "frameDisplayTime": 5000,
  "frameTransitionTime": 5000,
  "mapLocations": [
   {
    "x": 1688.29,
    "y": 3372.89,
    "class": "PanoramaMapLocation",
    "angle": 50.73,
    "map": "this.map_8D4DC539_97D7_0AA9_41E0_BB067C563CCE"
   }
  ],
  "pitch": 0,
  "label": "Pano_7",
  "partial": false,
  "vfov": 180,
  "hfovMin": 60
 },
 {
  "automaticZoomSpeed": 10,
  "id": "panorama_85B519F1_97EB_1DB9_41E1_845C79B61A56_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 {
  "hfov": 360,
  "class": "LivePanorama",
  "id": "panorama_85BC74BB_97EB_0BA9_41DB_535A967E9F92",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_85BC74BB_97EB_0BA9_41DB_535A967E9F92_0_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_85BC74BB_97EB_0BA9_41DB_535A967E9F92_0_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_85BC74BB_97EB_0BA9_41DB_535A967E9F92_0.jpeg"
      }
     ]
    }
   },
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_85BC74BB_97EB_0BA9_41DB_535A967E9F92_1_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_85BC74BB_97EB_0BA9_41DB_535A967E9F92_1_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_85BC74BB_97EB_0BA9_41DB_535A967E9F92_1.jpeg"
      }
     ]
    }
   }
  ],
  "hfovMax": 130,
  "thumbnailUrl": "media/panorama_85BC74BB_97EB_0BA9_41DB_535A967E9F92_1_t.jpg",
  "frameDisplayTime": 5000,
  "frameTransitionTime": 5000,
  "mapLocations": [
   {
    "x": 2285.83,
    "y": 3267.39,
    "class": "PanoramaMapLocation",
    "angle": -36.86,
    "map": "this.map_8D4DC539_97D7_0AA9_41E0_BB067C563CCE"
   }
  ],
  "pitch": 0,
  "label": "Pano_8",
  "partial": false,
  "vfov": 180,
  "hfovMin": 60
 },
 {
  "automaticZoomSpeed": 10,
  "id": "panorama_85BC74BB_97EB_0BA9_41DB_535A967E9F92_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 {
  "hfov": 360,
  "class": "LivePanorama",
  "id": "panorama_85A7DC12_97E8_FA7B_41E0_CE8DDF5110E8",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_85A7DC12_97E8_FA7B_41E0_CE8DDF5110E8_0_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_85A7DC12_97E8_FA7B_41E0_CE8DDF5110E8_0_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_85A7DC12_97E8_FA7B_41E0_CE8DDF5110E8_0.jpeg"
      }
     ]
    }
   },
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_85A7DC12_97E8_FA7B_41E0_CE8DDF5110E8_1_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_85A7DC12_97E8_FA7B_41E0_CE8DDF5110E8_1_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_85A7DC12_97E8_FA7B_41E0_CE8DDF5110E8_1.jpeg"
      }
     ]
    }
   }
  ],
  "hfovMax": 130,
  "thumbnailUrl": "media/panorama_85A7DC12_97E8_FA7B_41E0_CE8DDF5110E8_1_t.jpg",
  "frameDisplayTime": 5000,
  "frameTransitionTime": 5000,
  "mapLocations": [
   {
    "x": 1890.13,
    "y": 2670.71,
    "class": "PanoramaMapLocation",
    "angle": 151.34,
    "map": "this.map_8D4DC539_97D7_0AA9_41E0_BB067C563CCE"
   }
  ],
  "pitch": 0,
  "label": "Pano_9",
  "partial": false,
  "vfov": 180,
  "hfovMin": 60
 },
 {
  "automaticZoomSpeed": 10,
  "id": "panorama_85A7DC12_97E8_FA7B_41E0_CE8DDF5110E8_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 {
  "thumbnailUrl": "media/video_8FE72CBE_AC8D_3083_41E5_0D59D392DEB2_t.jpg",
  "class": "Video",
  "label": "E296_27F_640",
  "video": {
   "class": "VideoResource",
   "height": 480,
   "width": 640,
   "mp4Url": "media/video_8FE72CBE_AC8D_3083_41E5_0D59D392DEB2.mp4"
  },
  "width": 640,
  "id": "video_8FE72CBE_AC8D_3083_41E5_0D59D392DEB2",
  "loop": false,
  "height": 480,
  "scaleMode": "fit_inside"
 },
 {
  "viewerArea": "this.MainViewer",
  "id": "MainViewerVideoPlayer",
  "class": "VideoPlayer",
  "displayPlaybackBar": true,
  "buttonPause": "this.IconButton_51591DCE_5F03_66DC_41D7_1E28B681CAE6",
  "buttonStop": [
   "this.IconButton_816A501A_AC9B_2F83_41E0_917AAEAA236F",
   "this.IconButton_81B86D52_AC9D_5183_41E2_C290645F19F8"
  ]
 },
 {
  "thumbnailUrl": "media/album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7_t.png",
  "label": "Photo Album 0_1",
  "class": "PhotoAlbum",
  "id": "album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7",
  "playList": {
   "class": "PhotoPlayList",
   "id": "album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7_AlbumPlayList",
   "items": [
    {
     "class": "PhotoPlayListItem",
     "media": {
      "thumbnailUrl": "media/album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7_0_t.jpg",
      "class": "Photo",
      "label": "0_1",
      "width": 7680,
      "id": "album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7_0",
      "duration": 5000,
      "height": 4320,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7_0.jpg"
        }
       ]
      }
     },
     "camera": {
      "targetPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.52",
       "zoomFactor": 1.1,
       "y": "0.34"
      },
      "easing": "linear",
      "scaleMode": "fit_outside",
      "duration": 5000,
      "class": "MovementPhotoCamera",
      "initialPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.50",
       "zoomFactor": 1,
       "y": "0.50"
      }
     }
    },
    {
     "class": "PhotoPlayListItem",
     "media": {
      "thumbnailUrl": "media/album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7_1_t.jpg",
      "class": "Photo",
      "label": "0_2",
      "width": 7680,
      "id": "album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7_1",
      "duration": 5000,
      "height": 4320,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7_1.jpg"
        }
       ]
      }
     },
     "camera": {
      "targetPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.47",
       "zoomFactor": 1.1,
       "y": "0.46"
      },
      "easing": "linear",
      "scaleMode": "fit_outside",
      "duration": 5000,
      "class": "MovementPhotoCamera",
      "initialPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.50",
       "zoomFactor": 1,
       "y": "0.50"
      }
     }
    },
    {
     "class": "PhotoPlayListItem",
     "media": {
      "thumbnailUrl": "media/album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7_2_t.jpg",
      "class": "Photo",
      "label": "0_3",
      "width": 7680,
      "id": "album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7_2",
      "duration": 5000,
      "height": 4320,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7_2.jpg"
        }
       ]
      }
     },
     "camera": {
      "targetPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.67",
       "zoomFactor": 1.1,
       "y": "0.30"
      },
      "easing": "linear",
      "scaleMode": "fit_outside",
      "duration": 5000,
      "class": "MovementPhotoCamera",
      "initialPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.50",
       "zoomFactor": 1,
       "y": "0.50"
      }
     }
    },
    {
     "class": "PhotoPlayListItem",
     "media": {
      "thumbnailUrl": "media/album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7_3_t.jpg",
      "class": "Photo",
      "label": "0_4",
      "width": 7680,
      "id": "album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7_3",
      "duration": 5000,
      "height": 4320,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7_3.jpg"
        }
       ]
      }
     },
     "camera": {
      "targetPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.36",
       "zoomFactor": 1.1,
       "y": "0.62"
      },
      "easing": "linear",
      "scaleMode": "fit_outside",
      "duration": 5000,
      "class": "MovementPhotoCamera",
      "initialPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.50",
       "zoomFactor": 1,
       "y": "0.50"
      }
     }
    },
    {
     "class": "PhotoPlayListItem",
     "media": {
      "thumbnailUrl": "media/album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7_4_t.jpg",
      "class": "Photo",
      "label": "0_5",
      "width": 7680,
      "id": "album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7_4",
      "duration": 5000,
      "height": 4320,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7_4.jpg"
        }
       ]
      }
     },
     "camera": {
      "targetPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.57",
       "zoomFactor": 1.1,
       "y": "0.34"
      },
      "easing": "linear",
      "scaleMode": "fit_outside",
      "duration": 5000,
      "class": "MovementPhotoCamera",
      "initialPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.50",
       "zoomFactor": 1,
       "y": "0.50"
      }
     }
    },
    {
     "class": "PhotoPlayListItem",
     "media": {
      "thumbnailUrl": "media/album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7_5_t.jpg",
      "class": "Photo",
      "label": "0_6",
      "width": 7680,
      "id": "album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7_5",
      "duration": 5000,
      "height": 4320,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7_5.jpg"
        }
       ]
      }
     },
     "camera": {
      "targetPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.37",
       "zoomFactor": 1.1,
       "y": "0.29"
      },
      "easing": "linear",
      "scaleMode": "fit_outside",
      "duration": 5000,
      "class": "MovementPhotoCamera",
      "initialPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.50",
       "zoomFactor": 1,
       "y": "0.50"
      }
     }
    },
    {
     "class": "PhotoPlayListItem",
     "media": {
      "thumbnailUrl": "media/album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7_6_t.jpg",
      "class": "Photo",
      "label": "0_7",
      "width": 7680,
      "id": "album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7_6",
      "duration": 5000,
      "height": 4320,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7_6.jpg"
        }
       ]
      }
     },
     "camera": {
      "targetPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.68",
       "zoomFactor": 1.1,
       "y": "0.74"
      },
      "easing": "linear",
      "scaleMode": "fit_outside",
      "duration": 5000,
      "class": "MovementPhotoCamera",
      "initialPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.50",
       "zoomFactor": 1,
       "y": "0.50"
      }
     }
    },
    {
     "class": "PhotoPlayListItem",
     "media": {
      "thumbnailUrl": "media/album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7_7_t.jpg",
      "class": "Photo",
      "label": "0_8",
      "width": 7680,
      "id": "album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7_7",
      "duration": 5000,
      "height": 4320,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7_7.jpg"
        }
       ]
      }
     },
     "camera": {
      "targetPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.61",
       "zoomFactor": 1.1,
       "y": "0.27"
      },
      "easing": "linear",
      "scaleMode": "fit_outside",
      "duration": 5000,
      "class": "MovementPhotoCamera",
      "initialPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.50",
       "zoomFactor": 1,
       "y": "0.50"
      }
     }
    },
    {
     "class": "PhotoPlayListItem",
     "media": {
      "thumbnailUrl": "media/album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7_8_t.jpg",
      "class": "Photo",
      "label": "0_9",
      "width": 7680,
      "id": "album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7_8",
      "duration": 5000,
      "height": 4320,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7_8.jpg"
        }
       ]
      }
     },
     "camera": {
      "targetPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.34",
       "zoomFactor": 1.1,
       "y": "0.27"
      },
      "easing": "linear",
      "scaleMode": "fit_outside",
      "duration": 5000,
      "class": "MovementPhotoCamera",
      "initialPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.50",
       "zoomFactor": 1,
       "y": "0.50"
      }
     }
    },
    {
     "class": "PhotoPlayListItem",
     "media": {
      "thumbnailUrl": "media/album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7_9_t.jpg",
      "class": "Photo",
      "label": "0_10",
      "width": 3840,
      "id": "album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7_9",
      "duration": 5000,
      "height": 2160,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7_9.jpg"
        }
       ]
      }
     },
     "camera": {
      "targetPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.56",
       "zoomFactor": 1.1,
       "y": "0.37"
      },
      "easing": "linear",
      "scaleMode": "fit_outside",
      "duration": 5000,
      "class": "MovementPhotoCamera",
      "initialPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.50",
       "zoomFactor": 1,
       "y": "0.50"
      }
     }
    },
    {
     "class": "PhotoPlayListItem",
     "media": {
      "thumbnailUrl": "media/album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7_10_t.jpg",
      "class": "Photo",
      "label": "0_11",
      "width": 3840,
      "id": "album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7_10",
      "duration": 5000,
      "height": 2160,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7_10.jpg"
        }
       ]
      }
     },
     "camera": {
      "targetPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.31",
       "zoomFactor": 1.1,
       "y": "0.69"
      },
      "easing": "linear",
      "scaleMode": "fit_outside",
      "duration": 5000,
      "class": "MovementPhotoCamera",
      "initialPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.50",
       "zoomFactor": 1,
       "y": "0.50"
      }
     }
    },
    {
     "class": "PhotoPlayListItem",
     "media": {
      "thumbnailUrl": "media/album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7_11_t.jpg",
      "class": "Photo",
      "label": "0_12",
      "width": 3840,
      "id": "album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7_11",
      "duration": 5000,
      "height": 2160,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7_11.jpg"
        }
       ]
      }
     },
     "camera": {
      "targetPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.35",
       "zoomFactor": 1.1,
       "y": "0.74"
      },
      "easing": "linear",
      "scaleMode": "fit_outside",
      "duration": 5000,
      "class": "MovementPhotoCamera",
      "initialPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.50",
       "zoomFactor": 1,
       "y": "0.50"
      }
     }
    },
    {
     "class": "PhotoPlayListItem",
     "media": {
      "thumbnailUrl": "media/album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7_12_t.jpg",
      "class": "Photo",
      "label": "0_13",
      "width": 3840,
      "id": "album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7_12",
      "duration": 5000,
      "height": 2160,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7_12.jpg"
        }
       ]
      }
     },
     "camera": {
      "targetPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.40",
       "zoomFactor": 1.1,
       "y": "0.44"
      },
      "easing": "linear",
      "scaleMode": "fit_outside",
      "duration": 5000,
      "class": "MovementPhotoCamera",
      "initialPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.50",
       "zoomFactor": 1,
       "y": "0.50"
      }
     }
    },
    {
     "class": "PhotoPlayListItem",
     "media": {
      "thumbnailUrl": "media/album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7_13_t.jpg",
      "class": "Photo",
      "label": "0_14",
      "width": 3840,
      "id": "album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7_13",
      "duration": 5000,
      "height": 2160,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7_13.jpg"
        }
       ]
      }
     },
     "camera": {
      "targetPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.74",
       "zoomFactor": 1.1,
       "y": "0.27"
      },
      "easing": "linear",
      "scaleMode": "fit_outside",
      "duration": 5000,
      "class": "MovementPhotoCamera",
      "initialPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.50",
       "zoomFactor": 1,
       "y": "0.50"
      }
     }
    },
    {
     "class": "PhotoPlayListItem",
     "media": {
      "thumbnailUrl": "media/album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7_14_t.jpg",
      "class": "Photo",
      "label": "0_15",
      "width": 3840,
      "id": "album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7_14",
      "duration": 5000,
      "height": 2160,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7_14.jpg"
        }
       ]
      }
     },
     "camera": {
      "targetPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.43",
       "zoomFactor": 1.1,
       "y": "0.32"
      },
      "easing": "linear",
      "scaleMode": "fit_outside",
      "duration": 5000,
      "class": "MovementPhotoCamera",
      "initialPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.50",
       "zoomFactor": 1,
       "y": "0.50"
      }
     }
    },
    {
     "class": "PhotoPlayListItem",
     "media": {
      "thumbnailUrl": "media/album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7_15_t.jpg",
      "class": "Photo",
      "label": "0_16",
      "width": 3840,
      "id": "album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7_15",
      "duration": 5000,
      "height": 2160,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7_15.jpg"
        }
       ]
      }
     },
     "camera": {
      "targetPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.43",
       "zoomFactor": 1.1,
       "y": "0.32"
      },
      "easing": "linear",
      "scaleMode": "fit_outside",
      "duration": 5000,
      "class": "MovementPhotoCamera",
      "initialPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.50",
       "zoomFactor": 1,
       "y": "0.50"
      }
     }
    },
    {
     "class": "PhotoPlayListItem",
     "media": {
      "thumbnailUrl": "media/album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7_16_t.jpg",
      "class": "Photo",
      "label": "0_17",
      "width": 3840,
      "id": "album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7_16",
      "duration": 5000,
      "height": 2160,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7_16.jpg"
        }
       ]
      }
     },
     "camera": {
      "targetPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.42",
       "zoomFactor": 1.1,
       "y": "0.49"
      },
      "easing": "linear",
      "scaleMode": "fit_outside",
      "duration": 5000,
      "class": "MovementPhotoCamera",
      "initialPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.50",
       "zoomFactor": 1,
       "y": "0.50"
      }
     }
    }
   ]
  }
 },
 {
  "viewerArea": "this.MainViewer",
  "id": "MainViewerPhotoAlbumPlayer",
  "buttonPrevious": "this.IconButton_817538F2_AC95_5082_41DE_8B1FC0CAF018",
  "class": "PhotoAlbumPlayer",
  "buttonNext": "this.IconButton_8256B8E2_AC97_5083_41B6_95067DBD1015",
  "buttonPause": "this.IconButton_51591DCE_5F03_66DC_41D7_1E28B681CAE6",
  "buttonStop": [
   "this.IconButton_816A501A_AC9B_2F83_41E0_917AAEAA236F",
   "this.IconButton_81B86D52_AC9D_5183_41E2_C290645F19F8"
  ]
 },
 "this.album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7_0",
 "this.album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7_1",
 "this.album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7_2",
 "this.album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7_3",
 "this.album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7_4",
 "this.album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7_5",
 "this.album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7_6",
 "this.album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7_7",
 "this.album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7_8",
 "this.album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7_9",
 "this.album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7_10",
 "this.album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7_11",
 "this.album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7_12",
 "this.album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7_13",
 "this.album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7_14",
 "this.album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7_15",
 "this.album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7_16",
 {
  "class": "PlayList",
  "id": "mainPlayList",
  "items": [
   {
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', true)",
    "id": "PanoramaPlayListItem_A966A0AE_B0FA_5927_41E0_7A9E7CCFB3F6",
    "media": "this.panorama_9B8037A9_97A9_75A9_41D0_A02580B6469F",
    "camera": "this.panorama_9B8037A9_97A9_75A9_41D0_A02580B6469F_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_A966A0AE_B0FA_5927_41E0_7A9E7CCFB3F6, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 0, 1)"
   },
   {
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', true)",
    "id": "PanoramaPlayListItem_A966C0AE_B0FA_5927_41B4_49B25B953ED6",
    "media": "this.panorama_84988527_97E9_0A59_41CB_3B26BF93BF6F",
    "camera": "this.panorama_84988527_97E9_0A59_41CB_3B26BF93BF6F_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_A966C0AE_B0FA_5927_41B4_49B25B953ED6, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 1, 2)"
   },
   {
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', true)",
    "id": "PanoramaPlayListItem_A96670AE_B0FA_5927_41E3_B01932C3649E",
    "media": "this.panorama_854A1503_97E9_0A59_41C3_35E00D6B5E8A",
    "camera": "this.panorama_854A1503_97E9_0A59_41C3_35E00D6B5E8A_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_A96670AE_B0FA_5927_41E3_B01932C3649E, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 2, 3)"
   },
   {
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', true)",
    "id": "PanoramaPlayListItem_A96780AE_B0FA_5927_41BC_4E12D1983E13",
    "media": "this.panorama_85B3358A_97EB_0A6B_41D5_80797C992818",
    "camera": "this.panorama_85B3358A_97EB_0A6B_41D5_80797C992818_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_A96780AE_B0FA_5927_41BC_4E12D1983E13, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 3, 4)"
   },
   {
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', true)",
    "id": "PanoramaPlayListItem_A96730AE_B0FA_5927_41A4_F5C4E14D8BDF",
    "media": "this.panorama_85BDD557_97EB_0AF9_41D4_6B1C56C04CBC",
    "camera": "this.panorama_85BDD557_97EB_0AF9_41D4_6B1C56C04CBC_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_A96730AE_B0FA_5927_41A4_F5C4E14D8BDF, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 4, 5)"
   },
   {
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', true)",
    "id": "PanoramaPlayListItem_A96760AE_B0FA_5927_41DA_521C8D2F07E1",
    "media": "this.panorama_85B2AB4E_97EB_FEEB_41D9_2751CDEEF317",
    "camera": "this.panorama_85B2AB4E_97EB_FEEB_41D9_2751CDEEF317_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_A96760AE_B0FA_5927_41DA_521C8D2F07E1, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 5, 6)"
   },
   {
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', true)",
    "id": "PanoramaPlayListItem_A95890AE_B0FA_5927_41E1_0CEEF8372D90",
    "media": "this.panorama_85B519F1_97EB_1DB9_41E1_845C79B61A56",
    "camera": "this.panorama_85B519F1_97EB_1DB9_41E1_845C79B61A56_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_A95890AE_B0FA_5927_41E1_0CEEF8372D90, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 6, 7)"
   },
   {
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', true)",
    "id": "PanoramaPlayListItem_A958D0AE_B0FA_5927_419F_B78945641B92",
    "media": "this.panorama_85BC74BB_97EB_0BA9_41DB_535A967E9F92",
    "camera": "this.panorama_85BC74BB_97EB_0BA9_41DB_535A967E9F92_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_A958D0AE_B0FA_5927_419F_B78945641B92, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 7, 8)"
   },
   {
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', true)",
    "id": "PanoramaPlayListItem_A95800AE_B0FA_5927_41D7_44D9AEB52FE3",
    "media": "this.panorama_85A7DC12_97E8_FA7B_41E0_CE8DDF5110E8",
    "camera": "this.panorama_85A7DC12_97E8_FA7B_41E0_CE8DDF5110E8_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_A95800AE_B0FA_5927_41D7_44D9AEB52FE3, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 8, 9)"
   },
   {
    "player": "this.MainViewerVideoPlayer",
    "media": "this.video_8FE72CBE_AC8D_3083_41E5_0D59D392DEB2",
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 9, 10)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 9, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 9, this.video_8FE72CBE_AC8D_3083_41E5_0D59D392DEB2)"
   },
   {
    "player": "this.MainViewerPhotoAlbumPlayer",
    "media": "this.album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7",
    "class": "PhotoAlbumPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 0)",
    "end": "this.trigger('tourEnded')"
   }
  ]
 },
 "this.map_8D4DC539_97D7_0AA9_41E0_BB067C563CCE",
 {
  "thumbnailUrl": "media/map_B094434B_AC75_3181_41DF_133E8FD50847_t.jpg",
  "fieldOfViewOverlayRadiusScale": 0.3,
  "maximumZoomFactor": 2,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "height": 1600,
     "width": 1373,
     "url": "media/map_B094434B_AC75_3181_41DF_133E8FD50847.jpeg"
    },
    {
     "class": "ImageResourceLevel",
     "height": 800,
     "grayscale": true,
     "width": 686,
     "url": "media/map_B094434B_AC75_3181_41DF_133E8FD50847_lq.jpeg"
    }
   ]
  },
  "minimumZoomFactor": 0.5,
  "class": "Map",
  "label": "01Plan",
  "fieldOfViewOverlayOutsideOpacity": 0,
  "fieldOfViewOverlayInsideOpacity": 0.4,
  "fieldOfViewOverlayOutsideColor": "#000000",
  "width": 1733,
  "id": "map_B094434B_AC75_3181_41DF_133E8FD50847",
  "height": 2019,
  "initialZoomFactor": 1,
  "scaleMode": "fit_inside",
  "fieldOfViewOverlayInsideColor": "#FFFFFF"
 },
 {
  "thumbnailUrl": "media/map_B0EA3514_AC75_3187_41E2_2FA5C690C203_t.jpg",
  "fieldOfViewOverlayRadiusScale": 0.3,
  "maximumZoomFactor": 1.2,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "height": 1366,
     "width": 1163,
     "url": "media/map_B0EA3514_AC75_3187_41E2_2FA5C690C203.jpeg"
    },
    {
     "class": "ImageResourceLevel",
     "height": 683,
     "grayscale": true,
     "width": 581,
     "url": "media/map_B0EA3514_AC75_3187_41E2_2FA5C690C203_lq.jpeg"
    }
   ]
  },
  "minimumZoomFactor": 0.5,
  "class": "Map",
  "label": "02Plan",
  "fieldOfViewOverlayOutsideOpacity": 0,
  "fieldOfViewOverlayInsideOpacity": 0.4,
  "fieldOfViewOverlayOutsideColor": "#000000",
  "width": 1163,
  "id": "map_B0EA3514_AC75_3187_41E2_2FA5C690C203",
  "height": 1366,
  "initialZoomFactor": 1,
  "scaleMode": "fit_inside",
  "fieldOfViewOverlayInsideColor": "#FFFFFF"
 },
 {
  "thumbnailUrl": "media/map_B00AF666_AC75_3383_41D6_74D2B2AEBA60_t.jpg",
  "fieldOfViewOverlayRadiusScale": 0.3,
  "maximumZoomFactor": 1.2,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "height": 1366,
     "width": 1107,
     "url": "media/map_B00AF666_AC75_3383_41D6_74D2B2AEBA60.jpeg"
    },
    {
     "class": "ImageResourceLevel",
     "height": 683,
     "grayscale": true,
     "width": 553,
     "url": "media/map_B00AF666_AC75_3383_41D6_74D2B2AEBA60_lq.jpeg"
    }
   ]
  },
  "minimumZoomFactor": 0.5,
  "class": "Map",
  "label": "03Plan",
  "fieldOfViewOverlayOutsideOpacity": 0,
  "fieldOfViewOverlayInsideOpacity": 0.4,
  "fieldOfViewOverlayOutsideColor": "#000000",
  "width": 1107,
  "id": "map_B00AF666_AC75_3383_41D6_74D2B2AEBA60",
  "height": 1366,
  "initialZoomFactor": 1,
  "scaleMode": "fit_inside",
  "fieldOfViewOverlayInsideColor": "#FFFFFF"
 },
 {
  "thumbnailUrl": "media/map_B00A37B1_AC75_3081_41DD_0F7D2284A135_t.jpg",
  "fieldOfViewOverlayRadiusScale": 0.3,
  "maximumZoomFactor": 1.2,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "height": 1366,
     "width": 1098,
     "url": "media/map_B00A37B1_AC75_3081_41DD_0F7D2284A135.jpeg"
    },
    {
     "class": "ImageResourceLevel",
     "height": 683,
     "grayscale": true,
     "width": 549,
     "url": "media/map_B00A37B1_AC75_3081_41DD_0F7D2284A135_lq.jpeg"
    }
   ]
  },
  "minimumZoomFactor": 0.5,
  "class": "Map",
  "label": "04Plan",
  "fieldOfViewOverlayOutsideOpacity": 0,
  "fieldOfViewOverlayInsideOpacity": 0.4,
  "fieldOfViewOverlayOutsideColor": "#000000",
  "width": 1098,
  "id": "map_B00A37B1_AC75_3081_41DD_0F7D2284A135",
  "height": 1366,
  "initialZoomFactor": 1,
  "scaleMode": "fit_inside",
  "fieldOfViewOverlayInsideColor": "#FFFFFF"
 },
 {
  "thumbnailUrl": "media/map_B00988ED_AC75_3081_41D0_525039084B8C_t.jpg",
  "fieldOfViewOverlayRadiusScale": 0.3,
  "maximumZoomFactor": 1.2,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "height": 1329,
     "width": 1155,
     "url": "media/map_B00988ED_AC75_3081_41D0_525039084B8C.jpeg"
    },
    {
     "class": "ImageResourceLevel",
     "height": 664,
     "grayscale": true,
     "width": 577,
     "url": "media/map_B00988ED_AC75_3081_41D0_525039084B8C_lq.jpeg"
    }
   ]
  },
  "minimumZoomFactor": 0.5,
  "class": "Map",
  "label": "05Plan",
  "fieldOfViewOverlayOutsideOpacity": 0,
  "fieldOfViewOverlayInsideOpacity": 0.4,
  "fieldOfViewOverlayOutsideColor": "#000000",
  "width": 1155,
  "id": "map_B00988ED_AC75_3081_41D0_525039084B8C",
  "height": 1329,
  "initialZoomFactor": 1,
  "scaleMode": "fit_inside",
  "fieldOfViewOverlayInsideColor": "#FFFFFF"
 },
 {
  "thumbnailUrl": "media/map_B00AFA28_AC75_338F_419D_F8A3F85F7DA8_t.jpg",
  "fieldOfViewOverlayRadiusScale": 0.3,
  "maximumZoomFactor": 1.2,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "height": 1329,
     "width": 1163,
     "url": "media/map_B00AFA28_AC75_338F_419D_F8A3F85F7DA8.jpeg"
    },
    {
     "class": "ImageResourceLevel",
     "height": 664,
     "grayscale": true,
     "width": 581,
     "url": "media/map_B00AFA28_AC75_338F_419D_F8A3F85F7DA8_lq.jpeg"
    }
   ]
  },
  "minimumZoomFactor": 0.5,
  "class": "Map",
  "label": "06Plan",
  "fieldOfViewOverlayOutsideOpacity": 0,
  "fieldOfViewOverlayInsideOpacity": 0.4,
  "fieldOfViewOverlayOutsideColor": "#000000",
  "width": 1163,
  "id": "map_B00AFA28_AC75_338F_419D_F8A3F85F7DA8",
  "height": 1329,
  "initialZoomFactor": 1,
  "scaleMode": "fit_inside",
  "fieldOfViewOverlayInsideColor": "#FFFFFF"
 },
 {
  "thumbnailUrl": "media/map_B00A6B67_AC75_3181_41E0_0251B49DDA19_t.jpg",
  "fieldOfViewOverlayRadiusScale": 0.3,
  "maximumZoomFactor": 1.2,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "height": 1329,
     "width": 1107,
     "url": "media/map_B00A6B67_AC75_3181_41E0_0251B49DDA19.jpeg"
    },
    {
     "class": "ImageResourceLevel",
     "height": 664,
     "grayscale": true,
     "width": 553,
     "url": "media/map_B00A6B67_AC75_3181_41E0_0251B49DDA19_lq.jpeg"
    }
   ]
  },
  "minimumZoomFactor": 0.5,
  "class": "Map",
  "label": "07Plan",
  "fieldOfViewOverlayOutsideOpacity": 0,
  "fieldOfViewOverlayInsideOpacity": 0.4,
  "fieldOfViewOverlayOutsideColor": "#000000",
  "width": 1107,
  "id": "map_B00A6B67_AC75_3181_41E0_0251B49DDA19",
  "height": 1329,
  "initialZoomFactor": 1,
  "scaleMode": "fit_inside",
  "fieldOfViewOverlayInsideColor": "#FFFFFF"
 },
 {
  "thumbnailUrl": "media/map_B00AECA3_AC75_3081_41D3_69B56C45B77E_t.jpg",
  "fieldOfViewOverlayRadiusScale": 0.3,
  "maximumZoomFactor": 1.2,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "height": 1329,
     "width": 1098,
     "url": "media/map_B00AECA3_AC75_3081_41D3_69B56C45B77E.jpeg"
    },
    {
     "class": "ImageResourceLevel",
     "height": 664,
     "grayscale": true,
     "width": 549,
     "url": "media/map_B00AECA3_AC75_3081_41D3_69B56C45B77E_lq.jpeg"
    }
   ]
  },
  "minimumZoomFactor": 0.5,
  "class": "Map",
  "label": "RPlan",
  "fieldOfViewOverlayOutsideOpacity": 0,
  "fieldOfViewOverlayInsideOpacity": 0.4,
  "fieldOfViewOverlayOutsideColor": "#000000",
  "width": 1098,
  "id": "map_B00AECA3_AC75_3081_41D3_69B56C45B77E",
  "height": 1329,
  "initialZoomFactor": 1,
  "scaleMode": "fit_inside",
  "fieldOfViewOverlayInsideColor": "#FFFFFF"
 },
 {
  "class": "PlayList",
  "id": "DropDown_B1F9D3D1_AB96_C50A_41C5_5EDAEE6D826F_playlist",
  "items": [
   {
    "class": "MapPlayListItem",
    "player": "this.MapViewerMapPlayer",
    "media": "this.map_8D4DC539_97D7_0AA9_41E0_BB067C563CCE",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')"
   },
   {
    "class": "MapPlayListItem",
    "player": "this.MapViewerMapPlayer",
    "media": "this.map_B094434B_AC75_3181_41DF_133E8FD50847",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')"
   },
   {
    "class": "MapPlayListItem",
    "player": "this.MapViewerMapPlayer",
    "media": "this.map_B0EA3514_AC75_3187_41E2_2FA5C690C203",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')"
   },
   {
    "class": "MapPlayListItem",
    "player": "this.MapViewerMapPlayer",
    "media": "this.map_B00AF666_AC75_3383_41D6_74D2B2AEBA60",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')"
   },
   {
    "class": "MapPlayListItem",
    "player": "this.MapViewerMapPlayer",
    "media": "this.map_B00A37B1_AC75_3081_41DD_0F7D2284A135",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')"
   },
   {
    "class": "MapPlayListItem",
    "player": "this.MapViewerMapPlayer",
    "media": "this.map_B00988ED_AC75_3081_41D0_525039084B8C",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')"
   },
   {
    "class": "MapPlayListItem",
    "player": "this.MapViewerMapPlayer",
    "media": "this.map_B00AFA28_AC75_338F_419D_F8A3F85F7DA8",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')"
   },
   {
    "class": "MapPlayListItem",
    "player": "this.MapViewerMapPlayer",
    "media": "this.map_B00A6B67_AC75_3181_41E0_0251B49DDA19",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')"
   },
   {
    "class": "MapPlayListItem",
    "player": "this.MapViewerMapPlayer",
    "media": "this.map_B00AECA3_AC75_3081_41D3_69B56C45B77E",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "playList_A96C70AE_B0FA_5927_41E2_1D44A5ACD3B1",
  "items": [
   {
    "begin": "this.fixTogglePlayPauseButton(this.ViewerAreaLabeled_894F53D5_AC8B_3086_41E0_7B5ECFDEC136VideoPlayer)",
    "media": "this.video_8FE72CBE_AC8D_3083_41E5_0D59D392DEB2",
    "class": "VideoPlayListItem",
    "player": "this.ViewerAreaLabeled_894F53D5_AC8B_3086_41E0_7B5ECFDEC136VideoPlayer",
    "start": "this.ViewerAreaLabeled_894F53D5_AC8B_3086_41E0_7B5ECFDEC136VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_A96C70AE_B0FA_5927_41E2_1D44A5ACD3B1, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_A96C70AE_B0FA_5927_41E2_1D44A5ACD3B1, 0, this.video_8FE72CBE_AC8D_3083_41E5_0D59D392DEB2)"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "playList_A96DB0AE_B0FA_5927_41E4_359DC3C8DA00",
  "items": [
   {
    "class": "PhotoAlbumPlayListItem",
    "player": "this.ViewerAreaLabeled_80EE20A2_AC97_7082_41D6_1C46616F77BBPhotoAlbumPlayer",
    "media": "this.album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7",
    "begin": "this.loopAlbum(this.playList_A96DB0AE_B0FA_5927_41E4_359DC3C8DA00, 0)"
   }
  ]
 },
 {
  "class": "FadeInEffect",
  "easing": "linear",
  "id": "effect_B1EE7A0C_AC8A_D387_41C1_D728F3F78BAC",
  "duration": 0
 },
 {
  "class": "FadeOutEffect",
  "easing": "linear",
  "id": "effect_B1EE6A0C_AC8A_D387_41D3_4EA194FFB729",
  "duration": 0
 },
 {
  "class": "FadeInEffect",
  "easing": "linear",
  "id": "effect_A10AFB90_AC8A_4F41_41E1_A258A5EA614D",
  "duration": 0
 },
 {
  "class": "FadeOutEffect",
  "easing": "linear",
  "id": "effect_A1050B90_AC8A_4F41_41AA_AE82A2FC6BBB",
  "duration": 0
 },
 {
  "class": "FadeInEffect",
  "easing": "linear",
  "id": "effect_A596FCAC_AB9A_C31A_41D7_D3E4E1C55FA6",
  "duration": 500
 },
 {
  "class": "FadeOutEffect",
  "easing": "linear",
  "id": "effect_A596ECAC_AB9A_C31A_41B7_42452E22B111",
  "duration": 500
 },
 {
  "class": "FadeInEffect",
  "easing": "linear",
  "id": "effect_A62C13A5_AB9B_4515_41CB_9BD51CE98209",
  "duration": 500
 },
 {
  "class": "FadeOutEffect",
  "easing": "linear",
  "id": "effect_A62C33A5_AB9B_4515_4181_994D8F6FBA7F",
  "duration": 500
 }
], "children": [
 {
  "progressBackgroundOpacity": 1,
  "toolTipBackgroundColor": "#F6F6F6",
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "paddingRight": 0,
  "playbackBarBorderRadius": 4,
  "playbackBarOpacity": 1,
  "playbackBarBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "toolTipTextShadowBlurRadius": 3,
  "progressBarOpacity": 1,
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarHeadShadowVerticalLength": 0,
  "progressBottom": 1,
  "playbackBarProgressBorderColor": "#000000",
  "minWidth": 100,
  "progressBarBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "progressBorderRadius": 4,
  "toolTipShadowBlurRadius": 3,
  "progressBorderSize": 2,
  "progressHeight": 20,
  "playbackBarHeight": 20,
  "shadow": false,
  "playbackBarHeadWidth": 6,
  "playbackBarProgressBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipOpacity": 1,
  "class": "ViewerArea",
  "toolTipShadowColor": "#333333",
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "playbackBarBackgroundColorDirection": "vertical",
  "toolTipTextShadowColor": "#000000",
  "playbackBarProgressBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "toolTipPaddingTop": 4,
  "toolTipShadowVerticalLength": 0,
  "toolTipBorderColor": "#767676",
  "progressLeft": 10,
  "playbackBarProgressOpacity": 1,
  "progressBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "borderSize": 0,
  "progressBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarRight": 0,
  "progressBarBorderSize": 0,
  "playbackBarBorderSize": 2,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarBackgroundOpacity": 1,
  "transitionDuration": 500,
  "playbackBarProgressBorderRadius": 0,
  "playbackBarLeft": 0,
  "paddingTop": 0,
  "toolTipBorderRadius": 3,
  "playbackBarHeadShadowBlurRadius": 3,
  "toolTipShadowSpread": 0,
  "paddingLeft": 0,
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
  "minHeight": 50,
  "toolTipFontColor": "#606060",
  "playbackBarProgressBorderSize": 0,
  "playbackBarHeadBorderRadius": 0,
  "toolTipDisplayTime": 600,
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
  "progressBarBorderColor": "#000000",
  "id": "MainViewer",
  "playbackBarHeadShadow": true,
  "playbackBarHeadShadowColor": "#000000",
  "left": 0,
  "playbackBarHeadOpacity": 1,
  "transitionMode": "blending",
  "toolTipFontFamily": "微軟正黑體",
  "toolTipPaddingBottom": 4,
  "borderRadius": 0,
  "toolTipTextShadowOpacity": 0,
  "progressBorderColor": "#AAAAAA",
  "playbackBarHeadBorderSize": 0,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "toolTipShadowHorizontalLength": 0
 },
 {
  "layout": "horizontal",
  "gap": 10,
  "paddingLeft": 0,
  "scrollBarVisible": "rollOver",
  "width": "100%",
  "paddingRight": 0,
  "height": 142,
  "overflow": "scroll",
  "paddingBottom": 0,
  "minWidth": 1,
  "scrollBarWidth": 10,
  "shadow": false,
  "verticalAlign": "middle",
  "minHeight": 1,
  "class": "Container",
  "visible": false,
  "scrollBarMargin": 2,
  "propagateClick": false,
  "scrollBarOpacity": 0.5,
  "bottom": "0%",
  "data": {
   "name": "Container44746"
  },
  "horizontalAlign": "center",
  "scrollBarColor": "#000000",
  "borderSize": 0,
  "contentOpaque": false,
  "borderRadius": 0,
  "left": "0%",
  "backgroundOpacity": 0,
  "creationPolicy": "delayed",
  "paddingTop": 0
 },
 {
  "layout": "horizontal",
  "backgroundColorDirection": "vertical",
  "gap": 10,
  "backgroundColor": [
   "#000000"
  ],
  "paddingLeft": 0,
  "scrollBarVisible": "rollOver",
  "width": 647,
  "paddingRight": 0,
  "overflow": "hidden",
  "children": [
   {
    "pressedIconURL": "skin/IconButton_8E6F7C20_9C18_BEDD_41D2_DA2104159E1D_pressed.png",
    "toolTipBorderRadius": 3,
    "paddingLeft": 0,
    "toolTipBackgroundColor": "#F6F6F6",
    "toolTipShadowHorizontalLength": 0,
    "width": 60,
    "paddingRight": 0,
    "height": 60,
    "mode": "toggle",
    "maxHeight": 600,
    "toolTipTextShadowBlurRadius": 3,
    "iconURL": "skin/IconButton_8E6F7C20_9C18_BEDD_41D2_DA2104159E1D.png",
    "toolTip": "\u5e73\u9762\u5716",
    "paddingBottom": 0,
    "toolTipBorderSize": 1,
    "minWidth": 50,
    "toolTipFontWeight": "normal",
    "toolTipFontStyle": "normal",
    "maxWidth": 600,
    "toolTipShadowBlurRadius": 3,
    "toolTipPaddingLeft": 6,
    "toolTipFontSize": 12,
    "shadow": false,
    "toolTipDisplayTime": 600,
    "toolTipShadowVerticalLength": 0,
    "toolTipOpacity": 1,
    "transparencyActive": true,
    "toolTipShadowOpacity": 1,
    "minHeight": 50,
    "class": "IconButton",
    "toolTipShadowColor": "#333333",
    "toolTipFontColor": "#606060",
    "propagateClick": false,
    "toolTipTextShadowColor": "#000000",
    "horizontalAlign": "center",
    "toolTipPaddingTop": 4,
    "id": "IconButton_8E6F7C20_9C18_BEDD_41D2_DA2104159E1D",
    "toolTipBorderColor": "#767676",
    "toolTipPaddingRight": 6,
    "data": {
     "name": "\u5e73\u9762\u5716\u9215"
    },
    "cursor": "hand",
    "verticalAlign": "middle",
    "toolTipFontFamily": "微軟正黑體",
    "borderSize": 0,
    "click": "if(!this.Container_B130BACE_AC8D_5083_4192_57EF5F0E1101.get('visible')){ this.setComponentVisibility(this.Container_B130BACE_AC8D_5083_4192_57EF5F0E1101, true, 0, this.effect_B1EE7A0C_AC8A_D387_41C1_D728F3F78BAC, 'showEffect', false) } else if(this.Container_B130BACE_AC8D_5083_4192_57EF5F0E1101.get('visible')){ this.setComponentVisibility(this.Container_B130BACE_AC8D_5083_4192_57EF5F0E1101, false, 0, this.effect_B1EE6A0C_AC8A_D387_41D3_4EA194FFB729, 'hideEffect', false) }",
    "borderRadius": 0,
    "toolTipPaddingBottom": 4,
    "backgroundOpacity": 0,
    "toolTipTextShadowOpacity": 0,
    "toolTipShadowSpread": 0,
    "paddingTop": 0
   },
   "this.IconButton_51591DCE_5F03_66DC_41D7_1E28B681CAE6",
   "this.IconButton_51591DCE_5F03_66DC_41D1_3D7BC0B88E03",
   "this.IconButton_51591DCE_5F03_66DC_41C4_50743EFED275",
   {
    "pressedIconURL": "skin/IconButton_B874E796_9CDF_D0FD_41E1_36901A73150C_pressed.png",
    "toolTipBorderRadius": 3,
    "paddingLeft": 0,
    "toolTipBackgroundColor": "#F6F6F6",
    "toolTipShadowHorizontalLength": 0,
    "width": 60,
    "paddingRight": 0,
    "height": 60,
    "mode": "toggle",
    "maxHeight": 600,
    "toolTipTextShadowBlurRadius": 3,
    "iconURL": "skin/IconButton_B874E796_9CDF_D0FD_41E1_36901A73150C.png",
    "toolTip": "\u5168\u87a2\u5e55",
    "paddingBottom": 0,
    "toolTipBorderSize": 1,
    "minWidth": 50,
    "toolTipFontWeight": "normal",
    "toolTipFontStyle": "normal",
    "maxWidth": 600,
    "toolTipShadowBlurRadius": 3,
    "toolTipPaddingLeft": 6,
    "toolTipFontSize": 12,
    "shadow": false,
    "toolTipDisplayTime": 600,
    "toolTipShadowVerticalLength": 0,
    "toolTipOpacity": 1,
    "transparencyActive": true,
    "toolTipShadowOpacity": 1,
    "minHeight": 50,
    "class": "IconButton",
    "toolTipShadowColor": "#333333",
    "toolTipFontColor": "#606060",
    "propagateClick": false,
    "toolTipTextShadowColor": "#000000",
    "horizontalAlign": "center",
    "toolTipPaddingTop": 4,
    "id": "IconButton_B874E796_9CDF_D0FD_41E1_36901A73150C",
    "toolTipBorderColor": "#767676",
    "toolTipPaddingRight": 6,
    "data": {
     "name": "\u5168\u87a2\u5e55\u9215"
    },
    "cursor": "hand",
    "verticalAlign": "middle",
    "toolTipFontFamily": "微軟正黑體",
    "borderSize": 0,
    "borderRadius": 0,
    "toolTipPaddingBottom": 4,
    "backgroundOpacity": 0,
    "toolTipTextShadowOpacity": 0,
    "toolTipShadowSpread": 0,
    "paddingTop": 0
   },
   {
    "toolTipBorderRadius": 3,
    "paddingLeft": 0,
    "toolTipBackgroundColor": "#F6F6F6",
    "toolTipShadowHorizontalLength": 0,
    "width": 58,
    "paddingRight": 0,
    "height": 61,
    "mode": "toggle",
    "maxHeight": 600,
    "toolTipTextShadowBlurRadius": 3,
    "iconURL": "skin/IconButton_896B4537_AC8D_7181_41D0_F9650283A309.png",
    "toolTip": "\u52d5\u756b",
    "paddingBottom": 0,
    "toolTipBorderSize": 1,
    "minWidth": 50,
    "toolTipFontWeight": "normal",
    "toolTipFontStyle": "normal",
    "maxWidth": 600,
    "toolTipShadowBlurRadius": 3,
    "toolTipPaddingLeft": 6,
    "toolTipFontSize": 12,
    "shadow": false,
    "toolTipDisplayTime": 600,
    "toolTipShadowVerticalLength": 0,
    "toolTipOpacity": 1,
    "transparencyActive": true,
    "toolTipShadowOpacity": 1,
    "minHeight": 50,
    "class": "IconButton",
    "toolTipShadowColor": "#333333",
    "toolTipFontColor": "#606060",
    "propagateClick": false,
    "toolTipTextShadowColor": "#000000",
    "horizontalAlign": "center",
    "toolTipPaddingTop": 4,
    "id": "IconButton_896B4537_AC8D_7181_41D0_F9650283A309",
    "toolTipBorderColor": "#767676",
    "toolTipPaddingRight": 6,
    "data": {
     "name": "\u52d5\u756b\u9215"
    },
    "cursor": "hand",
    "verticalAlign": "middle",
    "toolTipFontFamily": "微軟正黑體",
    "borderSize": 0,
    "click": "if(!this.ViewerAreaLabeled_894F53D5_AC8B_3086_41E0_7B5ECFDEC136.get('visible')){ this.setComponentVisibility(this.ViewerAreaLabeled_894F53D5_AC8B_3086_41E0_7B5ECFDEC136, true, 0, this.effect_A10AFB90_AC8A_4F41_41E1_A258A5EA614D, 'showEffect', false) } else if(this.ViewerAreaLabeled_894F53D5_AC8B_3086_41E0_7B5ECFDEC136.get('visible')){ this.setComponentVisibility(this.ViewerAreaLabeled_894F53D5_AC8B_3086_41E0_7B5ECFDEC136, false, 0, this.effect_A1050B90_AC8A_4F41_41AA_AE82A2FC6BBB, 'hideEffect', false) }; if(this.ViewerAreaLabeled_894F53D5_AC8B_3086_41E0_7B5ECFDEC136VideoPlayer.get('state') == 'playing' && this.playList_A96C70AE_B0FA_5927_41E2_1D44A5ACD3B1.get('selectedIndex') == 0) { this.ViewerAreaLabeled_894F53D5_AC8B_3086_41E0_7B5ECFDEC136VideoPlayer.pause(); } else { this.playList_A96C70AE_B0FA_5927_41E2_1D44A5ACD3B1.set('selectedIndex', 0);this.ViewerAreaLabeled_894F53D5_AC8B_3086_41E0_7B5ECFDEC136VideoPlayer.play(); }",
    "borderRadius": 0,
    "toolTipPaddingBottom": 4,
    "backgroundOpacity": 0,
    "toolTipTextShadowOpacity": 0,
    "toolTipShadowSpread": 0,
    "paddingTop": 0
   },
   "this.IconButton_816A501A_AC9B_2F83_41E0_917AAEAA236F",
   {
    "toolTipBorderRadius": 3,
    "paddingLeft": 0,
    "toolTipBackgroundColor": "#F6F6F6",
    "toolTipShadowHorizontalLength": 0,
    "width": 58,
    "paddingRight": 0,
    "height": 61,
    "mode": "toggle",
    "maxHeight": 600,
    "toolTipTextShadowBlurRadius": 3,
    "iconURL": "skin/IconButton_A052581B_AB8D_433D_41C7_171ACF653548.png",
    "toolTip": "\u96b1\u85cf\u5de5\u5177\u5217",
    "paddingBottom": 0,
    "toolTipBorderSize": 1,
    "minWidth": 50,
    "toolTipFontWeight": "normal",
    "toolTipFontStyle": "normal",
    "maxWidth": 600,
    "toolTipShadowBlurRadius": 3,
    "toolTipPaddingLeft": 6,
    "toolTipFontSize": 12,
    "shadow": false,
    "toolTipDisplayTime": 600,
    "toolTipShadowVerticalLength": 0,
    "toolTipOpacity": 1,
    "transparencyActive": true,
    "toolTipShadowOpacity": 1,
    "minHeight": 47,
    "class": "IconButton",
    "toolTipShadowColor": "#333333",
    "toolTipFontColor": "#606060",
    "propagateClick": false,
    "toolTipTextShadowColor": "#000000",
    "horizontalAlign": "center",
    "toolTipPaddingTop": 4,
    "id": "IconButton_A052581B_AB8D_433D_41C7_171ACF653548",
    "toolTipBorderColor": "#767676",
    "toolTipPaddingRight": 6,
    "data": {
     "name": "\u96b1\u85cf\u5de5\u5177\u5217"
    },
    "cursor": "hand",
    "verticalAlign": "middle",
    "toolTipFontFamily": "微軟正黑體",
    "borderSize": 0,
    "click": "if(!this.Container_51591DCE_5F03_66DC_41D4_A095ADE9DE4F.get('visible')){ this.setComponentVisibility(this.Container_51591DCE_5F03_66DC_41D4_A095ADE9DE4F, true, 0, this.effect_A596FCAC_AB9A_C31A_41D7_D3E4E1C55FA6, 'showEffect', false) } else if(this.Container_51591DCE_5F03_66DC_41D4_A095ADE9DE4F.get('visible')){ this.setComponentVisibility(this.Container_51591DCE_5F03_66DC_41D4_A095ADE9DE4F, false, 0, this.effect_A596ECAC_AB9A_C31A_41B7_42452E22B111, 'hideEffect', false) }; if(!this.Label_80B6558E_9C07_C9E4_41D7_648CA91CE610.get('visible')){ this.setComponentVisibility(this.Label_80B6558E_9C07_C9E4_41D7_648CA91CE610, true, 0, this.effect_A596FCAC_AB9A_C31A_41D7_D3E4E1C55FA6, 'showEffect', false) } else if(this.Label_80B6558E_9C07_C9E4_41D7_648CA91CE610.get('visible')){ this.setComponentVisibility(this.Label_80B6558E_9C07_C9E4_41D7_648CA91CE610, false, 0, this.effect_A596ECAC_AB9A_C31A_41B7_42452E22B111, 'hideEffect', false) }; if(!this.IconButton_A73A0A10_AB8B_470A_41D8_37AD32AD4C44.get('visible')){ this.setComponentVisibility(this.IconButton_A73A0A10_AB8B_470A_41D8_37AD32AD4C44, true, 0, this.effect_A596FCAC_AB9A_C31A_41D7_D3E4E1C55FA6, 'showEffect', false) } else if(this.IconButton_A73A0A10_AB8B_470A_41D8_37AD32AD4C44.get('visible')){ this.setComponentVisibility(this.IconButton_A73A0A10_AB8B_470A_41D8_37AD32AD4C44, false, 0, this.effect_A596ECAC_AB9A_C31A_41B7_42452E22B111, 'hideEffect', false) }",
    "borderRadius": 0,
    "toolTipPaddingBottom": 4,
    "backgroundOpacity": 0,
    "toolTipTextShadowOpacity": 0,
    "toolTipShadowSpread": 0,
    "paddingTop": 0
   },
   "this.IconButton_90AE1C9C_9C9C_AAB4_41D0_D26EC6A1C695",
   "this.IconButton_51591DCE_5F03_66DC_419C_7D6D6CC8D05C",
   "this.IconButton_51591DCE_5F03_66DC_41AA_3827647B13A5",
   "this.IconButton_51591DCE_5F03_66DC_41A2_85C1F5F35509",
   "this.IconButton_51591DCE_5F03_66DC_41C7_93849E226521",
   "this.IconButton_51591DCE_5F03_66DC_417A_1D999521FA63"
  ],
  "backgroundColorRatios": [
   0.61
  ],
  "paddingBottom": 0,
  "minWidth": 431,
  "scrollBarWidth": 10,
  "shadow": false,
  "minHeight": 20,
  "top": "80%",
  "class": "Container",
  "propagateClick": false,
  "scrollBarOpacity": 0.5,
  "bottom": "10%",
  "id": "Container_51591DCE_5F03_66DC_41D4_A095ADE9DE4F",
  "scrollBarMargin": 2,
  "data": {
   "name": "\u6309\u9215\u5217"
  },
  "horizontalAlign": "center",
  "scrollBarColor": "#000000",
  "borderSize": 0,
  "contentOpaque": false,
  "verticalAlign": "middle",
  "borderRadius": 7,
  "backgroundOpacity": 0.42,
  "creationPolicy": "delayed",
  "right": "5%",
  "paddingTop": 0
 },
 {
  "textShadowBlurRadius": 3,
  "paddingLeft": 0,
  "fontSize": 16,
  "width": 408,
  "paddingRight": 0,
  "textDecoration": "none",
  "fontFamily": "微軟正黑體 Light",
  "text": "YTS Arch - 富邦產險大樓危老重建專案管理",
  "fontStyle": "normal",
  "paddingBottom": 0,
  "minWidth": 408,
  "shadow": false,
  "fontWeight": "normal",
  "verticalAlign": "middle",
  "minHeight": 20,
  "class": "Label",
  "fontColor": "#FFFFFF",
  "propagateClick": false,
  "textShadowOpacity": 0.7,
  "bottom": "20%",
  "id": "Label_80B6558E_9C07_C9E4_41D7_648CA91CE610",
  "data": {
   "name": "\u6848\u540d"
  },
  "horizontalAlign": "left",
  "textShadowVerticalLength": 1,
  "textShadowHorizontalLength": 1,
  "borderSize": 0,
  "textShadowColor": "#000000",
  "borderRadius": 0,
  "height": "3.261%",
  "backgroundOpacity": 0,
  "right": "6%",
  "paddingTop": 0
 },
 {
  "toolTipBorderRadius": 3,
  "paddingLeft": 0,
  "toolTipBackgroundColor": "#F6F6F6",
  "toolTipShadowHorizontalLength": 0,
  "width": 58,
  "paddingRight": 0,
  "height": 61,
  "mode": "toggle",
  "maxHeight": 600,
  "toolTipTextShadowBlurRadius": 3,
  "iconURL": "skin/IconButton_A73A0A10_AB8B_470A_41D8_37AD32AD4C44.png",
  "toolTip": "\u986f\u793a\u5de5\u5177\u5217",
  "paddingBottom": 0,
  "toolTipBorderSize": 1,
  "minWidth": 50,
  "toolTipFontWeight": "normal",
  "toolTipFontStyle": "normal",
  "maxWidth": 600,
  "toolTipShadowBlurRadius": 3,
  "toolTipPaddingLeft": 6,
  "toolTipFontSize": 12,
  "shadow": false,
  "toolTipDisplayTime": 600,
  "toolTipShadowVerticalLength": 0,
  "toolTipOpacity": 1,
  "transparencyActive": true,
  "toolTipShadowOpacity": 1,
  "minHeight": 47,
  "class": "IconButton",
  "visible": false,
  "toolTipShadowColor": "#333333",
  "toolTipFontColor": "#606060",
  "propagateClick": false,
  "toolTipTextShadowColor": "#000000",
  "bottom": "5%",
  "toolTipPaddingTop": 4,
  "id": "IconButton_A73A0A10_AB8B_470A_41D8_37AD32AD4C44",
  "toolTipBorderColor": "#767676",
  "toolTipPaddingRight": 6,
  "data": {
   "name": "\u986f\u793a\u5de5\u5177\u5217"
  },
  "cursor": "hand",
  "verticalAlign": "middle",
  "toolTipFontFamily": "微軟正黑體",
  "borderSize": 0,
  "click": "if(!this.Container_51591DCE_5F03_66DC_41D4_A095ADE9DE4F.get('visible')){ this.setComponentVisibility(this.Container_51591DCE_5F03_66DC_41D4_A095ADE9DE4F, true, 0, this.effect_A62C13A5_AB9B_4515_41CB_9BD51CE98209, 'showEffect', false) } else if(this.Container_51591DCE_5F03_66DC_41D4_A095ADE9DE4F.get('visible')){ this.setComponentVisibility(this.Container_51591DCE_5F03_66DC_41D4_A095ADE9DE4F, false, 0, this.effect_A62C33A5_AB9B_4515_4181_994D8F6FBA7F, 'hideEffect', false) }; if(!this.Label_80B6558E_9C07_C9E4_41D7_648CA91CE610.get('visible')){ this.setComponentVisibility(this.Label_80B6558E_9C07_C9E4_41D7_648CA91CE610, true, 0, this.effect_A62C13A5_AB9B_4515_41CB_9BD51CE98209, 'showEffect', false) } else if(this.Label_80B6558E_9C07_C9E4_41D7_648CA91CE610.get('visible')){ this.setComponentVisibility(this.Label_80B6558E_9C07_C9E4_41D7_648CA91CE610, false, 0, this.effect_A62C33A5_AB9B_4515_4181_994D8F6FBA7F, 'hideEffect', false) }; if(!this.IconButton_A73A0A10_AB8B_470A_41D8_37AD32AD4C44.get('visible')){ this.setComponentVisibility(this.IconButton_A73A0A10_AB8B_470A_41D8_37AD32AD4C44, true, 0, this.effect_A62C13A5_AB9B_4515_41CB_9BD51CE98209, 'showEffect', false) } else if(this.IconButton_A73A0A10_AB8B_470A_41D8_37AD32AD4C44.get('visible')){ this.setComponentVisibility(this.IconButton_A73A0A10_AB8B_470A_41D8_37AD32AD4C44, false, 0, this.effect_A62C33A5_AB9B_4515_4181_994D8F6FBA7F, 'hideEffect', false) }",
  "borderRadius": 0,
  "horizontalAlign": "center",
  "toolTipPaddingBottom": 4,
  "backgroundOpacity": 0,
  "toolTipTextShadowOpacity": 0,
  "toolTipShadowSpread": 0,
  "right": "18%",
  "paddingTop": 0
 },
 {
  "layout": "absolute",
  "backgroundColorDirection": "vertical",
  "gap": 10,
  "backgroundColor": [
   "#FFFFFF",
   "#FFFFFF"
  ],
  "paddingLeft": 0,
  "scrollBarVisible": "rollOver",
  "width": "30%",
  "paddingRight": 0,
  "height": "60%",
  "overflow": "scroll",
  "children": [
   "this.MapViewer",
   {
    "backgroundColorDirection": "vertical",
    "gap": 0,
    "height": "4.714%",
    "popUpBorderRadius": 0,
    "popUpFontColor": "#000000",
    "backgroundColor": [
     "#666666"
    ],
    "paddingLeft": 10,
    "fontSize": 14,
    "paddingRight": 10,
    "textDecoration": "none",
    "popUpShadowColor": "#000000",
    "arrowBeforeLabel": false,
    "popUpShadowOpacity": 0,
    "fontFamily": "Arial",
    "fontStyle": "normal",
    "backgroundColorRatios": [
     0
    ],
    "paddingBottom": 0,
    "minWidth": 200,
    "shadow": false,
    "fontWeight": "normal",
    "minHeight": 20,
    "popUpBackgroundOpacity": 0.9,
    "top": "0%",
    "class": "DropDown",
    "fontColor": "#FFFFFF",
    "propagateClick": false,
    "arrowColor": "#FFFFFF",
    "popUpShadowBlurRadius": 6,
    "id": "DropDown_B1F9D3D1_AB96_C50A_41C5_5EDAEE6D826F",
    "selectedPopUpFontColor": "#FFFFFF",
    "prompt": "Floor Plan",
    "data": {
     "name": "\u6a13\u5c64\u6e05\u55ae"
    },
    "playList": "this.DropDown_B1F9D3D1_AB96_C50A_41C5_5EDAEE6D826F_playlist",
    "borderSize": 0,
    "popUpBackgroundColor": "#FFFFFF",
    "popUpShadowSpread": 1,
    "popUpShadow": false,
    "left": "0%",
    "rollOverPopUpBackgroundColor": "#FFFFFF",
    "borderRadius": 4,
    "backgroundOpacity": 0.9,
    "selectedPopUpBackgroundColor": "#333333",
    "right": "0%",
    "paddingTop": 0
   }
  ],
  "backgroundColorRatios": [
   0,
   1
  ],
  "paddingBottom": 0,
  "minWidth": 30,
  "scrollBarWidth": 10,
  "shadow": false,
  "minHeight": 60,
  "top": "1%",
  "verticalAlign": "top",
  "class": "Container",
  "visible": false,
  "propagateClick": false,
  "scrollBarOpacity": 0.5,
  "horizontalAlign": "left",
  "id": "Container_B130BACE_AC8D_5083_4192_57EF5F0E1101",
  "scrollBarMargin": 2,
  "data": {
   "name": "\u5e73\u9762\u5716\u5340\u57df"
  },
  "scrollBarColor": "#000000",
  "borderSize": 0,
  "contentOpaque": false,
  "left": "1%",
  "borderRadius": 0,
  "backgroundOpacity": 1,
  "creationPolicy": "delayed",
  "paddingTop": 0
 },
 {
  "progressBackgroundOpacity": 1,
  "toolTipBackgroundColor": "#F6F6F6",
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "paddingRight": 0,
  "playbackBarBorderRadius": 4,
  "playbackBarOpacity": 1,
  "playbackBarBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "toolTipTextShadowBlurRadius": 3,
  "progressBarOpacity": 1,
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarHeadShadowVerticalLength": 0,
  "progressBottom": 2,
  "playbackBarProgressBorderColor": "#000000",
  "minWidth": 50,
  "progressBarBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "progressBorderRadius": 4,
  "toolTipShadowBlurRadius": 3,
  "progressBorderSize": 2,
  "progressHeight": 20,
  "playbackBarHeight": 20,
  "shadow": false,
  "playbackBarHeadWidth": 6,
  "playbackBarProgressBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipOpacity": 1,
  "class": "ViewerArea",
  "toolTipShadowColor": "#333333",
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "playbackBarBackgroundColorDirection": "vertical",
  "toolTipTextShadowColor": "#000000",
  "playbackBarProgressBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "toolTipPaddingTop": 4,
  "toolTipShadowVerticalLength": 0,
  "toolTipBorderColor": "#767676",
  "progressLeft": 10,
  "playbackBarProgressOpacity": 1,
  "progressBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "borderSize": 0,
  "progressBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarRight": 0,
  "progressBarBorderSize": 0,
  "playbackBarBorderSize": 2,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarBackgroundOpacity": 1,
  "transitionDuration": 500,
  "playbackBarProgressBorderRadius": 0,
  "playbackBarLeft": 0,
  "paddingTop": 0,
  "toolTipBorderRadius": 3,
  "playbackBarHeadShadowBlurRadius": 3,
  "toolTipShadowSpread": 0,
  "paddingLeft": 0,
  "playbackBarBorderColor": "#AAAAAA",
  "width": "50%",
  "height": "50%",
  "toolTipBorderSize": 1,
  "paddingBottom": 0,
  "playbackBarHeadHeight": 30,
  "toolTipFontWeight": "normal",
  "toolTipFontStyle": "normal",
  "toolTipPaddingLeft": 6,
  "toolTipFontSize": 12,
  "progressBackgroundColorDirection": "vertical",
  "minHeight": 50,
  "toolTipFontColor": "#606060",
  "playbackBarProgressBorderSize": 0,
  "playbackBarHeadBorderRadius": 0,
  "toolTipDisplayTime": 600,
  "progressBarBorderRadius": 4,
  "visible": false,
  "top": "10%",
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
  "progressBarBorderColor": "#000000",
  "id": "ViewerAreaLabeled_894F53D5_AC8B_3086_41E0_7B5ECFDEC136",
  "playbackBarHeadShadow": true,
  "playbackBarHeadShadowColor": "#000000",
  "left": "25%",
  "playbackBarHeadOpacity": 1,
  "transitionMode": "blending",
  "toolTipFontFamily": "微軟正黑體",
  "toolTipPaddingBottom": 4,
  "borderRadius": 0,
  "toolTipTextShadowOpacity": 0,
  "progressBorderColor": "#AAAAAA",
  "playbackBarHeadBorderSize": 0,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "toolTipShadowHorizontalLength": 0
 },
 {
  "right": "0%",
  "progressBackgroundOpacity": 1,
  "toolTipBackgroundColor": "#F6F6F6",
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "paddingRight": 0,
  "playbackBarBorderRadius": 4,
  "playbackBarOpacity": 1,
  "playbackBarBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "toolTipTextShadowBlurRadius": 3,
  "progressBarOpacity": 1,
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarHeadShadowVerticalLength": 0,
  "progressBottom": 2,
  "playbackBarProgressBorderColor": "#000000",
  "minWidth": 1,
  "progressBarBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "progressBorderRadius": 4,
  "toolTipShadowBlurRadius": 3,
  "progressBorderSize": 2,
  "progressHeight": 20,
  "playbackBarHeight": 20,
  "shadow": false,
  "playbackBarHeadWidth": 6,
  "playbackBarProgressBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipOpacity": 1,
  "class": "ViewerArea",
  "toolTipShadowColor": "#333333",
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "playbackBarBackgroundColorDirection": "vertical",
  "toolTipTextShadowColor": "#000000",
  "playbackBarProgressBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "toolTipPaddingTop": 4,
  "toolTipShadowVerticalLength": 0,
  "toolTipBorderColor": "#767676",
  "progressLeft": 10,
  "playbackBarProgressOpacity": 1,
  "progressBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "borderSize": 0,
  "progressBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarRight": 0,
  "progressBarBorderSize": 0,
  "playbackBarBorderSize": 2,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarBackgroundOpacity": 1,
  "transitionDuration": 500,
  "playbackBarProgressBorderRadius": 0,
  "playbackBarLeft": 0,
  "paddingTop": 0,
  "toolTipBorderRadius": 3,
  "playbackBarHeadShadowBlurRadius": 3,
  "toolTipShadowSpread": 0,
  "paddingLeft": 0,
  "playbackBarBorderColor": "#AAAAAA",
  "toolTipBorderSize": 1,
  "paddingBottom": 0,
  "playbackBarHeadHeight": 30,
  "toolTipFontWeight": "normal",
  "toolTipFontStyle": "normal",
  "toolTipPaddingLeft": 6,
  "toolTipFontSize": 12,
  "progressBackgroundColorDirection": "vertical",
  "minHeight": 1,
  "toolTipFontColor": "#606060",
  "playbackBarProgressBorderSize": 0,
  "playbackBarHeadBorderRadius": 0,
  "toolTipDisplayTime": 600,
  "progressBarBorderRadius": 4,
  "visible": false,
  "top": "0%",
  "propagateClick": true,
  "bottom": "0%",
  "progressBarBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipShadowOpacity": 1,
  "toolTipPaddingRight": 6,
  "playbackBarBottom": 0,
  "progressOpacity": 1,
  "playbackBarHeadBorderColor": "#000000",
  "progressRight": 10,
  "progressBarBackgroundColorDirection": "vertical",
  "progressBarBorderColor": "#000000",
  "id": "ViewerAreaLabeled_80EE20A2_AC97_7082_41D6_1C46616F77BB",
  "playbackBarHeadShadow": true,
  "playbackBarHeadShadowColor": "#000000",
  "left": "0%",
  "playbackBarHeadOpacity": 1,
  "transitionMode": "blending",
  "toolTipFontFamily": "微軟正黑體",
  "toolTipPaddingBottom": 4,
  "borderRadius": 0,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "toolTipTextShadowOpacity": 0,
  "progressBorderColor": "#AAAAAA",
  "playbackBarHeadBorderSize": 0,
  "toolTipShadowHorizontalLength": 0
 },
 {
  "toolTipBorderRadius": 3,
  "paddingLeft": 0,
  "toolTipBackgroundColor": "#F6F6F6",
  "toolTipShadowHorizontalLength": 0,
  "width": 150,
  "paddingRight": 0,
  "height": 150,
  "mode": "push",
  "maxHeight": 100,
  "toolTipTextShadowBlurRadius": 3,
  "iconURL": "skin/IconButton_8256B8E2_AC97_5083_41B6_95067DBD1015.png",
  "toolTip": "\u4e0b\u4e00\u5f35",
  "paddingBottom": 0,
  "toolTipBorderSize": 1,
  "minWidth": 1,
  "toolTipFontWeight": "normal",
  "toolTipFontStyle": "normal",
  "maxWidth": 100,
  "toolTipShadowBlurRadius": 3,
  "toolTipPaddingLeft": 6,
  "toolTipFontSize": 12,
  "shadow": false,
  "toolTipDisplayTime": 600,
  "toolTipShadowVerticalLength": 0,
  "toolTipOpacity": 1,
  "transparencyActive": false,
  "top": "40%",
  "verticalAlign": "middle",
  "minHeight": 1,
  "class": "IconButton",
  "visible": false,
  "toolTipShadowColor": "#333333",
  "toolTipFontColor": "#606060",
  "toolTipShadowOpacity": 1,
  "propagateClick": false,
  "toolTipTextShadowColor": "#000000",
  "horizontalAlign": "center",
  "toolTipPaddingTop": 4,
  "id": "IconButton_8256B8E2_AC97_5083_41B6_95067DBD1015",
  "toolTipBorderColor": "#767676",
  "toolTipPaddingRight": 6,
  "data": {
   "name": "\u4e0b\u4e00\u5f35"
  },
  "cursor": "hand",
  "toolTipFontFamily": "微軟正黑體",
  "borderSize": 0,
  "borderRadius": 0,
  "toolTipPaddingBottom": 4,
  "backgroundOpacity": 0,
  "toolTipTextShadowOpacity": 0,
  "toolTipShadowSpread": 0,
  "right": "1%",
  "paddingTop": 0
 },
 {
  "toolTipBorderRadius": 3,
  "paddingLeft": 0,
  "toolTipBackgroundColor": "#F6F6F6",
  "toolTipShadowHorizontalLength": 0,
  "width": 150,
  "paddingRight": 0,
  "height": 150,
  "mode": "push",
  "maxHeight": 100,
  "toolTipTextShadowBlurRadius": 3,
  "iconURL": "skin/IconButton_817538F2_AC95_5082_41DE_8B1FC0CAF018.png",
  "toolTip": "\u4e0a\u4e00\u5f35",
  "paddingBottom": 0,
  "toolTipBorderSize": 1,
  "minWidth": 1,
  "toolTipFontWeight": "normal",
  "toolTipFontStyle": "normal",
  "maxWidth": 100,
  "toolTipShadowBlurRadius": 3,
  "toolTipPaddingLeft": 6,
  "toolTipFontSize": 12,
  "shadow": false,
  "toolTipDisplayTime": 600,
  "toolTipShadowVerticalLength": 0,
  "toolTipOpacity": 1,
  "transparencyActive": false,
  "top": "40%",
  "verticalAlign": "middle",
  "minHeight": 1,
  "class": "IconButton",
  "visible": false,
  "toolTipShadowColor": "#333333",
  "toolTipFontColor": "#606060",
  "toolTipShadowOpacity": 1,
  "propagateClick": false,
  "toolTipTextShadowColor": "#000000",
  "horizontalAlign": "center",
  "toolTipPaddingTop": 4,
  "id": "IconButton_817538F2_AC95_5082_41DE_8B1FC0CAF018",
  "toolTipBorderColor": "#767676",
  "toolTipPaddingRight": 6,
  "data": {
   "name": "\u4e0a\u4e00\u5f35"
  },
  "cursor": "hand",
  "toolTipFontFamily": "微軟正黑體",
  "borderSize": 0,
  "left": "1%",
  "toolTipPaddingBottom": 4,
  "borderRadius": 0,
  "backgroundOpacity": 0,
  "toolTipTextShadowOpacity": 0,
  "toolTipShadowSpread": 0,
  "paddingTop": 0
 },
 {
  "toolTipBorderRadius": 3,
  "paddingLeft": 0,
  "toolTipBackgroundColor": "#F6F6F6",
  "toolTipShadowHorizontalLength": 0,
  "width": 84,
  "paddingRight": 0,
  "height": 84,
  "mode": "push",
  "maxHeight": 84,
  "toolTipTextShadowBlurRadius": 3,
  "iconURL": "skin/IconButton_81B86D52_AC9D_5183_41E2_C290645F19F8.png",
  "toolTip": "\u95dc\u9589",
  "paddingBottom": 0,
  "toolTipBorderSize": 1,
  "minWidth": 1,
  "toolTipFontWeight": "normal",
  "toolTipFontStyle": "normal",
  "maxWidth": 84,
  "toolTipShadowBlurRadius": 3,
  "toolTipPaddingLeft": 6,
  "toolTipFontSize": 12,
  "shadow": false,
  "toolTipDisplayTime": 600,
  "toolTipShadowVerticalLength": 0,
  "toolTipOpacity": 1,
  "transparencyActive": false,
  "top": "0%",
  "verticalAlign": "middle",
  "minHeight": 1,
  "class": "IconButton",
  "visible": false,
  "toolTipShadowColor": "#333333",
  "toolTipFontColor": "#606060",
  "toolTipShadowOpacity": 1,
  "propagateClick": false,
  "toolTipTextShadowColor": "#000000",
  "horizontalAlign": "center",
  "toolTipPaddingTop": 4,
  "id": "IconButton_81B86D52_AC9D_5183_41E2_C290645F19F8",
  "toolTipBorderColor": "#767676",
  "toolTipPaddingRight": 6,
  "data": {
   "name": "\u900f\u8996\u5716\u95dc\u9589\u9215"
  },
  "cursor": "hand",
  "click": "this.setComponentVisibility(this.ViewerAreaLabeled_80EE20A2_AC97_7082_41D6_1C46616F77BB, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_8256B8E2_AC97_5083_41B6_95067DBD1015, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_817538F2_AC95_5082_41DE_8B1FC0CAF018, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_81B86D52_AC9D_5183_41E2_C290645F19F8, false, 0, null, null, false)",
  "toolTipFontFamily": "微軟正黑體",
  "borderSize": 0,
  "borderRadius": 0,
  "toolTipPaddingBottom": 4,
  "backgroundOpacity": 0,
  "toolTipTextShadowOpacity": 0,
  "toolTipShadowSpread": 0,
  "right": "0%",
  "paddingTop": 0
 }
], 
 "start": "this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_90AE1C9C_9C9C_AAB4_41D0_D26EC6A1C695], 'gyroscopeAvailable'); this.syncPlaylists([this.DropDown_B1F9D3D1_AB96_C50A_41C5_5EDAEE6D826F_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); this.DropDown_B1F9D3D1_AB96_C50A_41C5_5EDAEE6D826F_playlist.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_B874E796_9CDF_D0FD_41E1_36901A73150C].forEach(function(component) { component.set('visible', false); }) }",
 "layout": "absolute",
 "gap": 10,
 "creationPolicy": "delayed",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "paddingRight": 0,
 "height": "100%",
 "overflow": "visible",
 "buttonToggleFullscreen": "this.IconButton_B874E796_9CDF_D0FD_41E1_36901A73150C",
 "paddingBottom": 0,
 "minWidth": 20,
 "scrollBarWidth": 10,
 "shadow": false,
 "desktopMipmappingEnabled": true,
 "verticalAlign": "top",
 "minHeight": 20,
 "class": "Player",
 "scrollBarMargin": 2,
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "horizontalAlign": "left",
 "id": "rootPlayer",
 "data": {
  "name": "Player43899"
 },
 "vrPolyfillScale": 0.5,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "contentOpaque": false,
 "borderRadius": 0,
 "mobileMipmappingEnabled": false,
 "backgroundPreloadEnabled": true,
 "mouseWheelEnabled": true,
 "scripts": {
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "autotriggerAtStart": function(playListItem, callback, once){  var onPlaylistBegin = function(event){ callback(); if(once == true) playListItem.unbind('begin', onPlaylistBegin, this); }; playListItem.bind('begin', onPlaylistBegin, this); },
  "registerKey": function(key, value){  window[key] = value; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "getKey": function(key){  return window[key]; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller, exclude){  var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "existsKey": function(key){  return key in window; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "unregisterKey": function(key){  delete window[key]; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined) return; var objs = window.pauseGlobalAudiosState[caller]; if (objs == undefined) return; delete window.pauseGlobalAudiosState[caller]; if (Object.keys(window.pauseGlobalAudiosState).length > 0) { if (window.restoreGlobalAudiosState == undefined) window.restoreGlobalAudiosState = {}; if (!(caller in window.restoreGlobalAudiosState)) window.restoreGlobalAudiosState[caller] = objs; } else { var restoreFunc = function(objs) { for (var i = 0, count = objs.length; i < count; ++i) { var a = objs[i]; if (a.get('state') == 'paused') a.play(); } }; restoreFunc(objs); if (window.restoreGlobalAudiosState != undefined) { while (window.restoreGlobalAudiosState.length > 0) { restoreFunc(window.restoreGlobalAudiosState.pop()); } window.restoreGlobalAudiosState = undefined; } } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "pauseGlobalAudios": function(caller, exclude){  var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if(window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); if(window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; var objs = window.pauseGlobalAudiosState[caller]; if(objs == undefined){ objs = []; window.pauseGlobalAudiosState[caller] = objs; } for (var i = 0, count = audios.length; i<count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); objs.push(a); } } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); }
 },
 "paddingTop": 0
})