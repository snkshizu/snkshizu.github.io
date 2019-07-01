TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "viewerArea": "this.ViewerAreaLabeled_894F53D5_AC8B_3086_41E0_7B5ECFDEC136",
  "class": "VideoPlayer",
  "id": "ViewerAreaLabeled_894F53D5_AC8B_3086_41E0_7B5ECFDEC136VideoPlayer",
  "displayPlaybackBar": true,
  "buttonPause": {
   "pressedIconURL": "skin/IconButton_51591DCE_5F03_66DC_41D7_1E28B681CAE6_pressed.png",
   "toolTipBorderRadius": 3,
   "paddingLeft": 0,
   "toolTipBackgroundColor": "#F6F6F6",
   "toolTipShadowHorizontalLength": 0,
   "toolTip": "\u6bd4\u8f03\u6a21\u5f0f",
   "paddingRight": 0,
   "height": 60,
   "mode": "toggle",
   "width": 60,
   "maxHeight": 600,
   "iconURL": "skin/IconButton_51591DCE_5F03_66DC_41D7_1E28B681CAE6.png",
   "minWidth": 50,
   "toolTipTextShadowBlurRadius": 3,
   "maxWidth": 600,
   "paddingBottom": 0,
   "toolTipBorderSize": 1,
   "minHeight": 50,
   "toolTipFontStyle": "normal",
   "shadow": false,
   "toolTipShadowBlurRadius": 3,
   "toolTipPaddingLeft": 6,
   "toolTipFontSize": 12,
   "toolTipFontWeight": "normal",
   "toolTipDisplayTime": 600,
   "toolTipShadowVerticalLength": 0,
   "toolTipOpacity": 1,
   "transparencyActive": true,
   "toolTipShadowOpacity": 1,
   "verticalAlign": "middle",
   "toolTipTextShadowColor": "#000000",
   "toolTipShadowColor": "#333333",
   "toolTipFontColor": "#606060",
   "propagateClick": false,
   "cursor": "hand",
   "class": "IconButton",
   "toolTipPaddingTop": 4,
   "id": "IconButton_51591DCE_5F03_66DC_41D7_1E28B681CAE6",
   "toolTipBorderColor": "#767676",
   "toolTipPaddingRight": 6,
   "data": {
    "name": "\u6bd4\u8f03\u6a21\u5f0f"
   },
   "horizontalAlign": "center",
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
    "toolTip": "\u900f\u8996\u5716",
    "paddingRight": 0,
    "height": 70,
    "mode": "push",
    "width": 85,
    "maxHeight": 70,
    "iconURL": "skin/IconButton_816A501A_AC9B_2F83_41E0_917AAEAA236F.png",
    "minWidth": 1,
    "toolTipTextShadowBlurRadius": 3,
    "maxWidth": 85,
    "paddingBottom": 0,
    "toolTipBorderSize": 1,
    "minHeight": 1,
    "toolTipFontStyle": "normal",
    "shadow": false,
    "toolTipShadowBlurRadius": 3,
    "toolTipPaddingLeft": 6,
    "toolTipFontSize": 12,
    "toolTipFontWeight": "normal",
    "toolTipDisplayTime": 600,
    "toolTipShadowVerticalLength": 0,
    "toolTipOpacity": 1,
    "transparencyActive": false,
    "toolTipShadowOpacity": 1,
    "verticalAlign": "middle",
    "toolTipTextShadowColor": "#000000",
    "toolTipShadowColor": "#333333",
    "toolTipFontColor": "#606060",
    "propagateClick": false,
    "cursor": "hand",
    "class": "IconButton",
    "toolTipPaddingTop": 4,
    "id": "IconButton_816A501A_AC9B_2F83_41E0_917AAEAA236F",
    "toolTipBorderColor": "#767676",
    "toolTipPaddingRight": 6,
    "data": {
     "name": "\u900f\u8996\u5716"
    },
    "horizontalAlign": "center",
    "toolTipFontFamily": "微軟正黑體",
    "borderSize": 0,
    "click": "this.setComponentVisibility(this.ViewerAreaLabeled_80EE20A2_AC97_7082_41D6_1C46616F77BB, true, 0, null, null, false); this.setComponentVisibility(this.IconButton_8256B8E2_AC97_5083_41B6_95067DBD1015, true, 0, null, null, false); this.setComponentVisibility(this.IconButton_817538F2_AC95_5082_41DE_8B1FC0CAF018, true, 0, null, null, false); this.setComponentVisibility(this.IconButton_81B86D52_AC9D_5183_41E2_C290645F19F8, true, 0, null, null, false); this.playList_9FFC1C8F_ACBD_D081_41D4_EA5055213C39.set('selectedIndex', 0)",
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
  "class": "PhotoAlbumPlayer",
  "id": "ViewerAreaLabeled_80EE20A2_AC97_7082_41D6_1C46616F77BBPhotoAlbumPlayer",
  "buttonPrevious": "this.IconButton_817538F2_AC95_5082_41DE_8B1FC0CAF018",
  "buttonNext": "this.IconButton_8256B8E2_AC97_5083_41B6_95067DBD1015",
  "buttonPause": "this.IconButton_51591DCE_5F03_66DC_41D7_1E28B681CAE6",
  "buttonStop": [
   "this.IconButton_816A501A_AC9B_2F83_41E0_917AAEAA236F",
   "this.IconButton_81B86D52_AC9D_5183_41E2_C290645F19F8"
  ]
 },
 {
  "hfov": 360,
  "vfov": 180,
  "class": "LivePanorama",
  "id": "panorama_9B8037A9_97A9_75A9_41D0_A02580B6469F",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_9B8037A9_97A9_75A9_41D0_A02580B6469F_0_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "class": "ImageResourceLevel",
       "width": 6434,
       "url": "media/panorama_9B8037A9_97A9_75A9_41D0_A02580B6469F_0_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_9B8037A9_97A9_75A9_41D0_A02580B6469F_0.jpeg"
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
       "class": "ImageResourceLevel",
       "width": 6434,
       "url": "media/panorama_9B8037A9_97A9_75A9_41D0_A02580B6469F_1_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_9B8037A9_97A9_75A9_41D0_A02580B6469F_1.jpeg"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMax": 130,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_9B8037A9_97A9_75A9_41D0_A02580B6469F_1_t.jpg",
  "frameDisplayTime": 5000,
  "mapLocations": [
   {
    "x": 644.99,
    "class": "PanoramaMapLocation",
    "y": 1284.25,
    "angle": 137.39,
    "map": {
     "initialZoomFactor": 1,
     "maximumZoomFactor": 2,
     "fieldOfViewOverlayOutsideOpacity": 0,
     "overlays": [
      {
       "rollOverDisplay": false,
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_8BAC45D0_97DB_15F7_41A4_C2A5955D6C55",
       "map": {
        "offsetY": 0,
        "x": 496.08,
        "class": "HotspotMapOverlayMap",
        "width": 300,
        "y": 1135.38,
        "height": 300,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 45,
           "class": "ImageResourceLevel",
           "width": 45,
           "url": "media/map_8D4DC539_97D7_0AA9_41E0_BB067C563CCE_HS_0_map.gif"
          }
         ],
         "class": "ImageResource"
        }
       },
       "data": {
        "label": "Pano_1"
       },
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
         "levels": [
          {
           "height": 90,
           "class": "ImageResourceLevel",
           "width": 90,
           "url": "media/map_8D4DC539_97D7_0AA9_41E0_BB067C563CCE_HS_0.png"
          }
         ],
         "class": "ImageResource"
        }
       },
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_8B77206F_97A9_0AA9_41B9_6BA8CD2C62F4",
       "map": {
        "offsetY": 0,
        "x": 160.98,
        "class": "HotspotMapOverlayMap",
        "width": 300,
        "y": 4506.19,
        "height": 300,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 45,
           "class": "ImageResourceLevel",
           "width": 45,
           "url": "media/map_8D4DC539_97D7_0AA9_41E0_BB067C563CCE_HS_1_map.gif"
          }
         ],
         "class": "ImageResource"
        }
       },
       "data": {
        "label": "Pano_2"
       },
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
         "levels": [
          {
           "height": 90,
           "class": "ImageResourceLevel",
           "width": 90,
           "url": "media/map_8D4DC539_97D7_0AA9_41E0_BB067C563CCE_HS_1.png"
          }
         ],
         "class": "ImageResource"
        }
       },
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_8BB0B1EB_97B7_0DA9_41C9_CB88C17A4B78",
       "map": {
        "offsetY": 0,
        "x": 3166.54,
        "class": "HotspotMapOverlayMap",
        "width": 177.31,
        "y": 2327.34,
        "height": 177.32,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 26,
           "class": "ImageResourceLevel",
           "width": 26,
           "url": "media/map_8D4DC539_97D7_0AA9_41E0_BB067C563CCE_HS_2_map.gif"
          }
         ],
         "class": "ImageResource"
        }
       },
       "data": {
        "label": "Pano_3"
       },
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
         "levels": [
          {
           "height": 53,
           "class": "ImageResourceLevel",
           "width": 53,
           "url": "media/map_8D4DC539_97D7_0AA9_41E0_BB067C563CCE_HS_2.png"
          }
         ],
         "class": "ImageResource"
        }
       },
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_8B70F5D0_97BB_75F7_41B9_0D5DA9ED011B",
       "map": {
        "offsetY": 0,
        "x": 1292.87,
        "class": "HotspotMapOverlayMap",
        "width": 187.55,
        "y": 580.19,
        "height": 187.56,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 28,
           "class": "ImageResourceLevel",
           "width": 28,
           "url": "media/map_8D4DC539_97D7_0AA9_41E0_BB067C563CCE_HS_3_map.gif"
          }
         ],
         "class": "ImageResource"
        }
       },
       "data": {
        "label": "Pano_4"
       },
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
         "levels": [
          {
           "height": 56,
           "class": "ImageResourceLevel",
           "width": 56,
           "url": "media/map_8D4DC539_97D7_0AA9_41E0_BB067C563CCE_HS_3.png"
          }
         ],
         "class": "ImageResource"
        }
       },
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_8B198891_97B9_FA79_41DE_CF8734B9348C",
       "map": {
        "offsetY": 0,
        "x": 1311.63,
        "class": "HotspotMapOverlayMap",
        "width": 187.55,
        "y": 4287.68,
        "height": 187.56,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 28,
           "class": "ImageResourceLevel",
           "width": 28,
           "url": "media/map_8D4DC539_97D7_0AA9_41E0_BB067C563CCE_HS_4_map.gif"
          }
         ],
         "class": "ImageResource"
        }
       },
       "data": {
        "label": "Pano_5"
       },
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
         "levels": [
          {
           "height": 56,
           "class": "ImageResourceLevel",
           "width": 56,
           "url": "media/map_8D4DC539_97D7_0AA9_41E0_BB067C563CCE_HS_4.png"
          }
         ],
         "class": "ImageResource"
        }
       },
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_8ACB00DC_97BB_0BEF_41DA_9EE0689F4BAC",
       "map": {
        "offsetY": 0,
        "x": 1337.57,
        "class": "HotspotMapOverlayMap",
        "width": 177.31,
        "y": 1569.27,
        "height": 177.32,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 26,
           "class": "ImageResourceLevel",
           "width": 26,
           "url": "media/map_8D4DC539_97D7_0AA9_41E0_BB067C563CCE_HS_5_map.gif"
          }
         ],
         "class": "ImageResource"
        }
       },
       "data": {
        "label": "Pano_6"
       },
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
         "levels": [
          {
           "height": 53,
           "class": "ImageResourceLevel",
           "width": 53,
           "url": "media/map_8D4DC539_97D7_0AA9_41E0_BB067C563CCE_HS_5.png"
          }
         ],
         "class": "ImageResource"
        }
       },
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_8AC7B150_97A9_0AF7_41AF_20039BDBA7F1",
       "map": {
        "offsetY": 0,
        "x": 1600.78,
        "class": "HotspotMapOverlayMap",
        "width": 177.31,
        "y": 3285.47,
        "height": 177.32,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 26,
           "class": "ImageResourceLevel",
           "width": 26,
           "url": "media/map_8D4DC539_97D7_0AA9_41E0_BB067C563CCE_HS_6_map.gif"
          }
         ],
         "class": "ImageResource"
        }
       },
       "data": {
        "label": "Pano_7"
       },
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
         "levels": [
          {
           "height": 53,
           "class": "ImageResourceLevel",
           "width": 53,
           "url": "media/map_8D4DC539_97D7_0AA9_41E0_BB067C563CCE_HS_6.png"
          }
         ],
         "class": "ImageResource"
        }
       },
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_8A77027C_97AB_0EAF_41D6_1B45F291CB8B",
       "map": {
        "offsetY": 0,
        "x": 2198.14,
        "class": "HotspotMapOverlayMap",
        "width": 177.31,
        "y": 3179.5,
        "height": 177.32,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 26,
           "class": "ImageResourceLevel",
           "width": 26,
           "url": "media/map_8D4DC539_97D7_0AA9_41E0_BB067C563CCE_HS_7_map.gif"
          }
         ],
         "class": "ImageResource"
        }
       },
       "data": {
        "label": "Pano_8"
       },
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
         "levels": [
          {
           "height": 53,
           "class": "ImageResourceLevel",
           "width": 53,
           "url": "media/map_8D4DC539_97D7_0AA9_41E0_BB067C563CCE_HS_7.png"
          }
         ],
         "class": "ImageResource"
        }
       },
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_8A830AC3_97AF_3FD9_41D6_A11BBA116F0C",
       "map": {
        "offsetY": 0,
        "x": 1802.4,
        "class": "HotspotMapOverlayMap",
        "width": 177.31,
        "y": 2582.74,
        "height": 177.32,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 26,
           "class": "ImageResourceLevel",
           "width": 26,
           "url": "media/map_8D4DC539_97D7_0AA9_41E0_BB067C563CCE_HS_8_map.gif"
          }
         ],
         "class": "ImageResource"
        }
       },
       "data": {
        "label": "Pano_9"
       },
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
         "levels": [
          {
           "height": 53,
           "class": "ImageResourceLevel",
           "width": 53,
           "url": "media/map_8D4DC539_97D7_0AA9_41E0_BB067C563CCE_HS_8.png"
          }
         ],
         "class": "ImageResource"
        }
       },
       "useHandCursor": true
      }
     ],
     "class": "Map",
     "width": 4320,
     "id": "map_8D4DC539_97D7_0AA9_41E0_BB067C563CCE",
     "height": 5290,
     "fieldOfViewOverlayInsideOpacity": 0.25,
     "fieldOfViewOverlayOutsideColor": "#FF0000",
     "image": {
      "levels": [
       {
        "height": 1600,
        "class": "ImageResourceLevel",
        "width": 1306,
        "url": "media/map_8D4DC539_97D7_0AA9_41E0_BB067C563CCE.jpeg"
       },
       {
        "height": 800,
        "grayscale": true,
        "class": "ImageResourceLevel",
        "width": 653,
        "url": "media/map_8D4DC539_97D7_0AA9_41E0_BB067C563CCE_lq.jpeg"
       }
      ],
      "class": "ImageResource"
     },
     "thumbnailUrl": "media/map_8D4DC539_97D7_0AA9_41E0_BB067C563CCE_t.jpg",
     "fieldOfViewOverlayRadiusScale": 0.25,
     "fieldOfViewOverlayInsideColor": "#FF0000",
     "minimumZoomFactor": 0.5,
     "label": "GR_Plan",
     "scaleMode": "fit_inside"
    }
   }
  ],
  "frameTransitionTime": 5000,
  "label": "Pano_1",
  "partial": false,
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
   "toolTip": "\u7e2e\u5c0f",
   "paddingRight": 0,
   "height": 60,
   "mode": "push",
   "width": 60,
   "maxHeight": 600,
   "iconURL": "skin/IconButton_51591DCE_5F03_66DC_41C4_50743EFED275.png",
   "minWidth": 50,
   "toolTipTextShadowBlurRadius": 3,
   "maxWidth": 600,
   "paddingBottom": 0,
   "toolTipBorderSize": 1,
   "minHeight": 50,
   "toolTipFontStyle": "normal",
   "shadow": false,
   "toolTipShadowBlurRadius": 3,
   "toolTipPaddingLeft": 6,
   "toolTipFontSize": 12,
   "toolTipFontWeight": "normal",
   "toolTipDisplayTime": 600,
   "toolTipShadowVerticalLength": 0,
   "toolTipOpacity": 1,
   "transparencyActive": true,
   "toolTipShadowOpacity": 1,
   "verticalAlign": "middle",
   "rollOverIconURL": "skin/IconButton_51591DCE_5F03_66DC_41C4_50743EFED275_rollover.png",
   "toolTipTextShadowColor": "#000000",
   "toolTipShadowColor": "#333333",
   "toolTipFontColor": "#606060",
   "propagateClick": false,
   "cursor": "hand",
   "class": "IconButton",
   "toolTipPaddingTop": 4,
   "id": "IconButton_51591DCE_5F03_66DC_41C4_50743EFED275",
   "toolTipBorderColor": "#767676",
   "toolTipPaddingRight": 6,
   "data": {
    "name": "\u7e2e\u5c0f"
   },
   "horizontalAlign": "center",
   "toolTipFontFamily": "微軟正黑體",
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
   "minWidth": 0,
   "paddingBottom": 0,
   "minHeight": 0,
   "shadow": false,
   "transparencyActive": true,
   "verticalAlign": "middle",
   "rollOverIconURL": "skin/IconButton_51591DCE_5F03_66DC_41A2_85C1F5F35509_rollover.png",
   "visible": false,
   "propagateClick": false,
   "cursor": "hand",
   "class": "IconButton",
   "id": "IconButton_51591DCE_5F03_66DC_41A2_85C1F5F35509",
   "data": {
    "name": "Button11546"
   },
   "horizontalAlign": "center",
   "borderSize": 0,
   "borderRadius": 0,
   "backgroundOpacity": 0,
   "paddingTop": 0
  },
  "mouseControlMode": "drag_acceleration",
  "buttonPlayLeft": {
   "pressedIconURL": "skin/IconButton_51591DCE_5F03_66DC_419C_7D6D6CC8D05C_pressed.png",
   "paddingLeft": 0,
   "width": 40,
   "paddingRight": 0,
   "height": 40,
   "mode": "push",
   "iconURL": "skin/IconButton_51591DCE_5F03_66DC_419C_7D6D6CC8D05C.png",
   "minWidth": 0,
   "paddingBottom": 0,
   "minHeight": 0,
   "shadow": false,
   "transparencyActive": true,
   "verticalAlign": "middle",
   "rollOverIconURL": "skin/IconButton_51591DCE_5F03_66DC_419C_7D6D6CC8D05C_rollover.png",
   "visible": false,
   "propagateClick": false,
   "cursor": "hand",
   "class": "IconButton",
   "id": "IconButton_51591DCE_5F03_66DC_419C_7D6D6CC8D05C",
   "data": {
    "name": "Button11540"
   },
   "horizontalAlign": "center",
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
  "class": "PanoramaPlayer",
  "id": "MainViewerPanoramaPlayer",
  "buttonToggleGyroscope": {
   "pressedIconURL": "skin/IconButton_90AE1C9C_9C9C_AAB4_41D0_D26EC6A1C695_pressed.png",
   "toolTipBorderRadius": 3,
   "paddingLeft": 0,
   "toolTipBackgroundColor": "#F6F6F6",
   "toolTipShadowHorizontalLength": 0,
   "toolTip": "\u9640\u87ba\u5100",
   "paddingRight": 0,
   "height": 60,
   "mode": "toggle",
   "width": 60,
   "maxHeight": 600,
   "iconURL": "skin/IconButton_90AE1C9C_9C9C_AAB4_41D0_D26EC6A1C695.png",
   "minWidth": 50,
   "toolTipTextShadowBlurRadius": 3,
   "maxWidth": 600,
   "paddingBottom": 0,
   "toolTipBorderSize": 1,
   "minHeight": 50,
   "toolTipFontStyle": "normal",
   "shadow": false,
   "toolTipShadowBlurRadius": 3,
   "toolTipPaddingLeft": 6,
   "toolTipFontSize": 12,
   "toolTipFontWeight": "normal",
   "toolTipDisplayTime": 600,
   "toolTipShadowVerticalLength": 0,
   "toolTipOpacity": 1,
   "transparencyActive": true,
   "toolTipShadowOpacity": 1,
   "toolTipTextShadowColor": "#000000",
   "toolTipShadowColor": "#333333",
   "toolTipFontColor": "#606060",
   "propagateClick": false,
   "cursor": "hand",
   "class": "IconButton",
   "toolTipPaddingTop": 4,
   "id": "IconButton_90AE1C9C_9C9C_AAB4_41D0_D26EC6A1C695",
   "toolTipBorderColor": "#767676",
   "toolTipPaddingRight": 6,
   "data": {
    "name": "gyroscope"
   },
   "verticalAlign": "middle",
   "toolTipFontFamily": "微軟正黑體",
   "borderSize": 0,
   "borderRadius": 0,
   "horizontalAlign": "center",
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
   "toolTip": "\u653e\u5927",
   "paddingRight": 0,
   "height": 60,
   "mode": "push",
   "width": 60,
   "maxHeight": 600,
   "iconURL": "skin/IconButton_51591DCE_5F03_66DC_41D1_3D7BC0B88E03.png",
   "minWidth": 50,
   "toolTipTextShadowBlurRadius": 3,
   "maxWidth": 600,
   "paddingBottom": 0,
   "toolTipBorderSize": 1,
   "minHeight": 50,
   "toolTipFontStyle": "normal",
   "shadow": false,
   "toolTipShadowBlurRadius": 3,
   "toolTipPaddingLeft": 6,
   "toolTipFontSize": 12,
   "toolTipFontWeight": "normal",
   "toolTipDisplayTime": 600,
   "toolTipShadowVerticalLength": 0,
   "toolTipOpacity": 1,
   "transparencyActive": true,
   "toolTipShadowOpacity": 1,
   "verticalAlign": "middle",
   "rollOverIconURL": "skin/IconButton_51591DCE_5F03_66DC_41D1_3D7BC0B88E03_rollover.png",
   "toolTipTextShadowColor": "#000000",
   "toolTipShadowColor": "#333333",
   "toolTipFontColor": "#606060",
   "propagateClick": false,
   "cursor": "hand",
   "class": "IconButton",
   "toolTipPaddingTop": 4,
   "id": "IconButton_51591DCE_5F03_66DC_41D1_3D7BC0B88E03",
   "toolTipBorderColor": "#767676",
   "toolTipPaddingRight": 6,
   "data": {
    "name": "\u653e\u5927"
   },
   "horizontalAlign": "center",
   "toolTipFontFamily": "微軟正黑體",
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
   "minWidth": 0,
   "paddingBottom": 0,
   "minHeight": 0,
   "shadow": false,
   "transparencyActive": true,
   "verticalAlign": "middle",
   "rollOverIconURL": "skin/IconButton_51591DCE_5F03_66DC_41AA_3827647B13A5_rollover.png",
   "visible": false,
   "propagateClick": false,
   "cursor": "hand",
   "class": "IconButton",
   "id": "IconButton_51591DCE_5F03_66DC_41AA_3827647B13A5",
   "data": {
    "name": "Button11541"
   },
   "horizontalAlign": "center",
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
   "minWidth": 0,
   "paddingBottom": 0,
   "minHeight": 0,
   "shadow": false,
   "transparencyActive": true,
   "verticalAlign": "middle",
   "rollOverIconURL": "skin/IconButton_51591DCE_5F03_66DC_41C7_93849E226521_rollover.png",
   "visible": false,
   "propagateClick": false,
   "cursor": "hand",
   "class": "IconButton",
   "id": "IconButton_51591DCE_5F03_66DC_41C7_93849E226521",
   "data": {
    "name": "Button11547"
   },
   "horizontalAlign": "center",
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
   "minWidth": 0,
   "paddingBottom": 0,
   "minHeight": 0,
   "shadow": false,
   "transparencyActive": true,
   "verticalAlign": "middle",
   "rollOverIconURL": "skin/IconButton_51591DCE_5F03_66DC_417A_1D999521FA63_rollover.png",
   "visible": false,
   "propagateClick": false,
   "cursor": "hand",
   "class": "IconButton",
   "id": "IconButton_51591DCE_5F03_66DC_417A_1D999521FA63",
   "data": {
    "name": "Button11545"
   },
   "horizontalAlign": "center",
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
   "minWidth": 200,
   "playbackBarHeadShadowVerticalLength": 0,
   "progressBottom": 2,
   "playbackBarProgressBorderColor": "#000000",
   "playbackBarHeight": 20,
   "progressBarBackgroundColor": [
    "#222222",
    "#444444"
   ],
   "shadow": false,
   "toolTipShadowBlurRadius": 3,
   "progressBorderSize": 2,
   "progressHeight": 20,
   "playbackBarHeadWidth": 6,
   "progressBorderRadius": 4,
   "playbackBarProgressBackgroundColorRatios": [
    0,
    1
   ],
   "toolTipOpacity": 1,
   "toolTipTextShadowColor": "#000000",
   "toolTipShadowColor": "#333333",
   "playbackBarHeadBackgroundColorDirection": "vertical",
   "playbackBarBackgroundColorDirection": "vertical",
   "progressLeft": 10,
   "playbackBarProgressBackgroundColor": [
    "#222222",
    "#444444"
   ],
   "class": "ViewerArea",
   "toolTipPaddingTop": 4,
   "toolTipShadowVerticalLength": 0,
   "toolTipBorderColor": "#767676",
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
   "playbackBarHeadShadowHorizontalLength": 0,
   "toolTipBorderSize": 1,
   "paddingBottom": 0,
   "playbackBarHeadHeight": 30,
   "minHeight": 200,
   "toolTipFontStyle": "normal",
   "toolTipPaddingLeft": 6,
   "toolTipFontSize": 12,
   "toolTipFontWeight": "normal",
   "toolTipDisplayTime": 600,
   "toolTipFontColor": "#606060",
   "playbackBarProgressBorderSize": 0,
   "playbackBarHeadBorderRadius": 0,
   "progressBackgroundColorDirection": "vertical",
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
  "class": "MapPlayer",
  "id": "MapViewerMapPlayer",
  "buttonZoomOut": "this.IconButton_51591DCE_5F03_66DC_41C4_50743EFED275",
  "movementMode": "constrained",
  "buttonZoomIn": "this.IconButton_51591DCE_5F03_66DC_41D1_3D7BC0B88E03"
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_9B8037A9_97A9_75A9_41D0_A02580B6469F_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": -2.26,
   "pitch": -38.69
  }
 },
 {
  "hfov": 360,
  "vfov": 180,
  "class": "LivePanorama",
  "id": "panorama_84988527_97E9_0A59_41CB_3B26BF93BF6F",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_84988527_97E9_0A59_41CB_3B26BF93BF6F_0_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "class": "ImageResourceLevel",
       "width": 6434,
       "url": "media/panorama_84988527_97E9_0A59_41CB_3B26BF93BF6F_0_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_84988527_97E9_0A59_41CB_3B26BF93BF6F_0.jpeg"
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
       "class": "ImageResourceLevel",
       "width": 6434,
       "url": "media/panorama_84988527_97E9_0A59_41CB_3B26BF93BF6F_1_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_84988527_97E9_0A59_41CB_3B26BF93BF6F_1.jpeg"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMax": 130,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_84988527_97E9_0A59_41CB_3B26BF93BF6F_1_t.jpg",
  "frameDisplayTime": 5000,
  "mapLocations": [
   {
    "x": 309.88,
    "class": "PanoramaMapLocation",
    "y": 4655.07,
    "angle": 51.27,
    "map": "this.map_8D4DC539_97D7_0AA9_41E0_BB067C563CCE"
   }
  ],
  "frameTransitionTime": 5000,
  "label": "Pano_2",
  "partial": false,
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_84988527_97E9_0A59_41CB_3B26BF93BF6F_camera",
  "automaticZoomSpeed": 10,
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
    "thumbnailUrl": "media/panorama_854A1503_97E9_0A59_41C3_35E00D6B5E8A_0_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "class": "ImageResourceLevel",
       "width": 6434,
       "url": "media/panorama_854A1503_97E9_0A59_41C3_35E00D6B5E8A_0_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_854A1503_97E9_0A59_41C3_35E00D6B5E8A_0.jpeg"
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
       "class": "ImageResourceLevel",
       "width": 6434,
       "url": "media/panorama_854A1503_97E9_0A59_41C3_35E00D6B5E8A_1_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_854A1503_97E9_0A59_41C3_35E00D6B5E8A_1.jpeg"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMax": 130,
  "thumbnailUrl": "media/panorama_854A1503_97E9_0A59_41C3_35E00D6B5E8A_1_t.jpg",
  "frameDisplayTime": 5000,
  "mapLocations": [
   {
    "x": 3254.24,
    "class": "PanoramaMapLocation",
    "y": 2415.08,
    "angle": 267.19,
    "map": "this.map_8D4DC539_97D7_0AA9_41E0_BB067C563CCE"
   }
  ],
  "frameTransitionTime": 5000,
  "pitch": 0,
  "label": "Pano_3",
  "partial": false,
  "vfov": 180,
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_854A1503_97E9_0A59_41C3_35E00D6B5E8A_camera",
  "automaticZoomSpeed": 10,
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
    "thumbnailUrl": "media/panorama_85B3358A_97EB_0A6B_41D5_80797C992818_0_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "class": "ImageResourceLevel",
       "width": 6434,
       "url": "media/panorama_85B3358A_97EB_0A6B_41D5_80797C992818_0_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_85B3358A_97EB_0A6B_41D5_80797C992818_0.jpeg"
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
       "class": "ImageResourceLevel",
       "width": 6434,
       "url": "media/panorama_85B3358A_97EB_0A6B_41D5_80797C992818_1_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_85B3358A_97EB_0A6B_41D5_80797C992818_1.jpeg"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMax": 130,
  "thumbnailUrl": "media/panorama_85B3358A_97EB_0A6B_41D5_80797C992818_1_t.jpg",
  "frameDisplayTime": 5000,
  "mapLocations": [
   {
    "x": 1385.49,
    "class": "PanoramaMapLocation",
    "y": 673.02,
    "angle": 163.23,
    "map": "this.map_8D4DC539_97D7_0AA9_41E0_BB067C563CCE"
   }
  ],
  "frameTransitionTime": 5000,
  "pitch": 0,
  "label": "Pano_4",
  "partial": false,
  "vfov": 180,
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_85B3358A_97EB_0A6B_41D5_80797C992818_camera",
  "automaticZoomSpeed": 10,
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
    "thumbnailUrl": "media/panorama_85BDD557_97EB_0AF9_41D4_6B1C56C04CBC_0_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "class": "ImageResourceLevel",
       "width": 6434,
       "url": "media/panorama_85BDD557_97EB_0AF9_41D4_6B1C56C04CBC_0_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_85BDD557_97EB_0AF9_41D4_6B1C56C04CBC_0.jpeg"
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
       "class": "ImageResourceLevel",
       "width": 6434,
       "url": "media/panorama_85BDD557_97EB_0AF9_41D4_6B1C56C04CBC_1_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_85BDD557_97EB_0AF9_41D4_6B1C56C04CBC_1.jpeg"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMax": 130,
  "thumbnailUrl": "media/panorama_85BDD557_97EB_0AF9_41D4_6B1C56C04CBC_1_t.jpg",
  "frameDisplayTime": 5000,
  "mapLocations": [
   {
    "x": 1404.4,
    "class": "PanoramaMapLocation",
    "y": 4380.45,
    "angle": 16.48,
    "map": "this.map_8D4DC539_97D7_0AA9_41E0_BB067C563CCE"
   }
  ],
  "frameTransitionTime": 5000,
  "pitch": 0,
  "label": "Pano_5",
  "partial": false,
  "vfov": 180,
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_85BDD557_97EB_0AF9_41D4_6B1C56C04CBC_camera",
  "automaticZoomSpeed": 10,
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
    "thumbnailUrl": "media/panorama_85B2AB4E_97EB_FEEB_41D9_2751CDEEF317_0_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "class": "ImageResourceLevel",
       "width": 6434,
       "url": "media/panorama_85B2AB4E_97EB_FEEB_41D9_2751CDEEF317_0_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_85B2AB4E_97EB_FEEB_41D9_2751CDEEF317_0.jpeg"
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
       "class": "ImageResourceLevel",
       "width": 6434,
       "url": "media/panorama_85B2AB4E_97EB_FEEB_41D9_2751CDEEF317_1_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_85B2AB4E_97EB_FEEB_41D9_2751CDEEF317_1.jpeg"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMax": 130,
  "thumbnailUrl": "media/panorama_85B2AB4E_97EB_FEEB_41D9_2751CDEEF317_1_t.jpg",
  "frameDisplayTime": 5000,
  "mapLocations": [
   {
    "x": 1425.28,
    "class": "PanoramaMapLocation",
    "y": 1656.75,
    "angle": 140.39,
    "map": "this.map_8D4DC539_97D7_0AA9_41E0_BB067C563CCE"
   }
  ],
  "frameTransitionTime": 5000,
  "pitch": 0,
  "label": "Pano_6",
  "partial": false,
  "vfov": 180,
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_85B2AB4E_97EB_FEEB_41D9_2751CDEEF317_camera",
  "automaticZoomSpeed": 10,
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
    "thumbnailUrl": "media/panorama_85B519F1_97EB_1DB9_41E1_845C79B61A56_0_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "class": "ImageResourceLevel",
       "width": 6434,
       "url": "media/panorama_85B519F1_97EB_1DB9_41E1_845C79B61A56_0_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_85B519F1_97EB_1DB9_41E1_845C79B61A56_0.jpeg"
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
       "class": "ImageResourceLevel",
       "width": 6434,
       "url": "media/panorama_85B519F1_97EB_1DB9_41E1_845C79B61A56_1_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_85B519F1_97EB_1DB9_41E1_845C79B61A56_1.jpeg"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMax": 130,
  "thumbnailUrl": "media/panorama_85B519F1_97EB_1DB9_41E1_845C79B61A56_1_t.jpg",
  "frameDisplayTime": 5000,
  "mapLocations": [
   {
    "x": 1688.29,
    "class": "PanoramaMapLocation",
    "y": 3372.89,
    "angle": 50.73,
    "map": "this.map_8D4DC539_97D7_0AA9_41E0_BB067C563CCE"
   }
  ],
  "frameTransitionTime": 5000,
  "pitch": 0,
  "label": "Pano_7",
  "partial": false,
  "vfov": 180,
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_85B519F1_97EB_1DB9_41E1_845C79B61A56_camera",
  "automaticZoomSpeed": 10,
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
    "thumbnailUrl": "media/panorama_85BC74BB_97EB_0BA9_41DB_535A967E9F92_0_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "class": "ImageResourceLevel",
       "width": 6434,
       "url": "media/panorama_85BC74BB_97EB_0BA9_41DB_535A967E9F92_0_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_85BC74BB_97EB_0BA9_41DB_535A967E9F92_0.jpeg"
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
       "class": "ImageResourceLevel",
       "width": 6434,
       "url": "media/panorama_85BC74BB_97EB_0BA9_41DB_535A967E9F92_1_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_85BC74BB_97EB_0BA9_41DB_535A967E9F92_1.jpeg"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMax": 130,
  "thumbnailUrl": "media/panorama_85BC74BB_97EB_0BA9_41DB_535A967E9F92_1_t.jpg",
  "frameDisplayTime": 5000,
  "mapLocations": [
   {
    "x": 2285.83,
    "class": "PanoramaMapLocation",
    "y": 3267.39,
    "angle": -36.86,
    "map": "this.map_8D4DC539_97D7_0AA9_41E0_BB067C563CCE"
   }
  ],
  "frameTransitionTime": 5000,
  "pitch": 0,
  "label": "Pano_8",
  "partial": false,
  "vfov": 180,
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_85BC74BB_97EB_0BA9_41DB_535A967E9F92_camera",
  "automaticZoomSpeed": 10,
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
    "thumbnailUrl": "media/panorama_85A7DC12_97E8_FA7B_41E0_CE8DDF5110E8_0_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "class": "ImageResourceLevel",
       "width": 6434,
       "url": "media/panorama_85A7DC12_97E8_FA7B_41E0_CE8DDF5110E8_0_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_85A7DC12_97E8_FA7B_41E0_CE8DDF5110E8_0.jpeg"
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
       "class": "ImageResourceLevel",
       "width": 6434,
       "url": "media/panorama_85A7DC12_97E8_FA7B_41E0_CE8DDF5110E8_1_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_85A7DC12_97E8_FA7B_41E0_CE8DDF5110E8_1.jpeg"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMax": 130,
  "thumbnailUrl": "media/panorama_85A7DC12_97E8_FA7B_41E0_CE8DDF5110E8_1_t.jpg",
  "frameDisplayTime": 5000,
  "mapLocations": [
   {
    "x": 1890.13,
    "class": "PanoramaMapLocation",
    "y": 2670.71,
    "angle": 151.34,
    "map": "this.map_8D4DC539_97D7_0AA9_41E0_BB067C563CCE"
   }
  ],
  "frameTransitionTime": 5000,
  "pitch": 0,
  "label": "Pano_9",
  "partial": false,
  "vfov": 180,
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_85A7DC12_97E8_FA7B_41E0_CE8DDF5110E8_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 {
  "thumbnailUrl": "media/video_8FE72CBE_AC8D_3083_41E5_0D59D392DEB2_t.jpg",
  "label": "E296_27F_640",
  "video": {
   "height": 480,
   "class": "VideoResource",
   "width": 640,
   "mp4Url": "media/video_8FE72CBE_AC8D_3083_41E5_0D59D392DEB2.mp4"
  },
  "class": "Video",
  "width": 640,
  "id": "video_8FE72CBE_AC8D_3083_41E5_0D59D392DEB2",
  "loop": false,
  "height": 480,
  "scaleMode": "fit_inside"
 },
 {
  "viewerArea": "this.MainViewer",
  "class": "VideoPlayer",
  "id": "MainViewerVideoPlayer",
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
     "camera": {
      "easing": "linear",
      "class": "MovementPhotoCamera",
      "scaleMode": "fit_outside",
      "duration": 5000,
      "targetPosition": {
       "zoomFactor": 1.1,
       "x": "0.52",
       "class": "PhotoCameraPosition",
       "y": "0.34"
      },
      "initialPosition": {
       "zoomFactor": 1,
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "y": "0.50"
      }
     },
     "class": "PhotoPlayListItem",
     "media": {
      "thumbnailUrl": "media/album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7_0_t.jpg",
      "label": "0_1",
      "class": "Photo",
      "width": 7680,
      "id": "album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7_0",
      "duration": 5000,
      "height": 4320,
      "image": {
       "levels": [
        {
         "url": "media/album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7_0.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      }
     }
    },
    {
     "camera": {
      "easing": "linear",
      "class": "MovementPhotoCamera",
      "scaleMode": "fit_outside",
      "duration": 5000,
      "targetPosition": {
       "zoomFactor": 1.1,
       "x": "0.47",
       "class": "PhotoCameraPosition",
       "y": "0.46"
      },
      "initialPosition": {
       "zoomFactor": 1,
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "y": "0.50"
      }
     },
     "class": "PhotoPlayListItem",
     "media": {
      "thumbnailUrl": "media/album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7_1_t.jpg",
      "label": "0_2",
      "class": "Photo",
      "width": 7680,
      "id": "album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7_1",
      "duration": 5000,
      "height": 4320,
      "image": {
       "levels": [
        {
         "url": "media/album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7_1.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      }
     }
    },
    {
     "camera": {
      "easing": "linear",
      "class": "MovementPhotoCamera",
      "scaleMode": "fit_outside",
      "duration": 5000,
      "targetPosition": {
       "zoomFactor": 1.1,
       "x": "0.67",
       "class": "PhotoCameraPosition",
       "y": "0.30"
      },
      "initialPosition": {
       "zoomFactor": 1,
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "y": "0.50"
      }
     },
     "class": "PhotoPlayListItem",
     "media": {
      "thumbnailUrl": "media/album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7_2_t.jpg",
      "label": "0_3",
      "class": "Photo",
      "width": 7680,
      "id": "album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7_2",
      "duration": 5000,
      "height": 4320,
      "image": {
       "levels": [
        {
         "url": "media/album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7_2.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      }
     }
    },
    {
     "camera": {
      "easing": "linear",
      "class": "MovementPhotoCamera",
      "scaleMode": "fit_outside",
      "duration": 5000,
      "targetPosition": {
       "zoomFactor": 1.1,
       "x": "0.36",
       "class": "PhotoCameraPosition",
       "y": "0.62"
      },
      "initialPosition": {
       "zoomFactor": 1,
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "y": "0.50"
      }
     },
     "class": "PhotoPlayListItem",
     "media": {
      "thumbnailUrl": "media/album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7_3_t.jpg",
      "label": "0_4",
      "class": "Photo",
      "width": 7680,
      "id": "album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7_3",
      "duration": 5000,
      "height": 4320,
      "image": {
       "levels": [
        {
         "url": "media/album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7_3.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      }
     }
    },
    {
     "camera": {
      "easing": "linear",
      "class": "MovementPhotoCamera",
      "scaleMode": "fit_outside",
      "duration": 5000,
      "targetPosition": {
       "zoomFactor": 1.1,
       "x": "0.57",
       "class": "PhotoCameraPosition",
       "y": "0.34"
      },
      "initialPosition": {
       "zoomFactor": 1,
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "y": "0.50"
      }
     },
     "class": "PhotoPlayListItem",
     "media": {
      "thumbnailUrl": "media/album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7_4_t.jpg",
      "label": "0_5",
      "class": "Photo",
      "width": 7680,
      "id": "album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7_4",
      "duration": 5000,
      "height": 4320,
      "image": {
       "levels": [
        {
         "url": "media/album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7_4.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      }
     }
    },
    {
     "camera": {
      "easing": "linear",
      "class": "MovementPhotoCamera",
      "scaleMode": "fit_outside",
      "duration": 5000,
      "targetPosition": {
       "zoomFactor": 1.1,
       "x": "0.37",
       "class": "PhotoCameraPosition",
       "y": "0.29"
      },
      "initialPosition": {
       "zoomFactor": 1,
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "y": "0.50"
      }
     },
     "class": "PhotoPlayListItem",
     "media": {
      "thumbnailUrl": "media/album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7_5_t.jpg",
      "label": "0_6",
      "class": "Photo",
      "width": 7680,
      "id": "album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7_5",
      "duration": 5000,
      "height": 4320,
      "image": {
       "levels": [
        {
         "url": "media/album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7_5.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      }
     }
    },
    {
     "camera": {
      "easing": "linear",
      "class": "MovementPhotoCamera",
      "scaleMode": "fit_outside",
      "duration": 5000,
      "targetPosition": {
       "zoomFactor": 1.1,
       "x": "0.68",
       "class": "PhotoCameraPosition",
       "y": "0.74"
      },
      "initialPosition": {
       "zoomFactor": 1,
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "y": "0.50"
      }
     },
     "class": "PhotoPlayListItem",
     "media": {
      "thumbnailUrl": "media/album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7_6_t.jpg",
      "label": "0_7",
      "class": "Photo",
      "width": 7680,
      "id": "album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7_6",
      "duration": 5000,
      "height": 4320,
      "image": {
       "levels": [
        {
         "url": "media/album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7_6.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      }
     }
    },
    {
     "camera": {
      "easing": "linear",
      "class": "MovementPhotoCamera",
      "scaleMode": "fit_outside",
      "duration": 5000,
      "targetPosition": {
       "zoomFactor": 1.1,
       "x": "0.61",
       "class": "PhotoCameraPosition",
       "y": "0.27"
      },
      "initialPosition": {
       "zoomFactor": 1,
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "y": "0.50"
      }
     },
     "class": "PhotoPlayListItem",
     "media": {
      "thumbnailUrl": "media/album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7_7_t.jpg",
      "label": "0_8",
      "class": "Photo",
      "width": 7680,
      "id": "album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7_7",
      "duration": 5000,
      "height": 4320,
      "image": {
       "levels": [
        {
         "url": "media/album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7_7.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      }
     }
    },
    {
     "camera": {
      "easing": "linear",
      "class": "MovementPhotoCamera",
      "scaleMode": "fit_outside",
      "duration": 5000,
      "targetPosition": {
       "zoomFactor": 1.1,
       "x": "0.34",
       "class": "PhotoCameraPosition",
       "y": "0.27"
      },
      "initialPosition": {
       "zoomFactor": 1,
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "y": "0.50"
      }
     },
     "class": "PhotoPlayListItem",
     "media": {
      "thumbnailUrl": "media/album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7_8_t.jpg",
      "label": "0_9",
      "class": "Photo",
      "width": 7680,
      "id": "album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7_8",
      "duration": 5000,
      "height": 4320,
      "image": {
       "levels": [
        {
         "url": "media/album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7_8.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      }
     }
    },
    {
     "camera": {
      "easing": "linear",
      "class": "MovementPhotoCamera",
      "scaleMode": "fit_outside",
      "duration": 5000,
      "targetPosition": {
       "zoomFactor": 1.1,
       "x": "0.56",
       "class": "PhotoCameraPosition",
       "y": "0.37"
      },
      "initialPosition": {
       "zoomFactor": 1,
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "y": "0.50"
      }
     },
     "class": "PhotoPlayListItem",
     "media": {
      "thumbnailUrl": "media/album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7_9_t.jpg",
      "label": "0_10",
      "class": "Photo",
      "width": 3840,
      "id": "album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7_9",
      "duration": 5000,
      "height": 2160,
      "image": {
       "levels": [
        {
         "url": "media/album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7_9.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      }
     }
    },
    {
     "camera": {
      "easing": "linear",
      "class": "MovementPhotoCamera",
      "scaleMode": "fit_outside",
      "duration": 5000,
      "targetPosition": {
       "zoomFactor": 1.1,
       "x": "0.31",
       "class": "PhotoCameraPosition",
       "y": "0.69"
      },
      "initialPosition": {
       "zoomFactor": 1,
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "y": "0.50"
      }
     },
     "class": "PhotoPlayListItem",
     "media": {
      "thumbnailUrl": "media/album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7_10_t.jpg",
      "label": "0_11",
      "class": "Photo",
      "width": 3840,
      "id": "album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7_10",
      "duration": 5000,
      "height": 2160,
      "image": {
       "levels": [
        {
         "url": "media/album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7_10.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      }
     }
    },
    {
     "camera": {
      "easing": "linear",
      "class": "MovementPhotoCamera",
      "scaleMode": "fit_outside",
      "duration": 5000,
      "targetPosition": {
       "zoomFactor": 1.1,
       "x": "0.35",
       "class": "PhotoCameraPosition",
       "y": "0.74"
      },
      "initialPosition": {
       "zoomFactor": 1,
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "y": "0.50"
      }
     },
     "class": "PhotoPlayListItem",
     "media": {
      "thumbnailUrl": "media/album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7_11_t.jpg",
      "label": "0_12",
      "class": "Photo",
      "width": 3840,
      "id": "album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7_11",
      "duration": 5000,
      "height": 2160,
      "image": {
       "levels": [
        {
         "url": "media/album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7_11.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      }
     }
    },
    {
     "camera": {
      "easing": "linear",
      "class": "MovementPhotoCamera",
      "scaleMode": "fit_outside",
      "duration": 5000,
      "targetPosition": {
       "zoomFactor": 1.1,
       "x": "0.40",
       "class": "PhotoCameraPosition",
       "y": "0.44"
      },
      "initialPosition": {
       "zoomFactor": 1,
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "y": "0.50"
      }
     },
     "class": "PhotoPlayListItem",
     "media": {
      "thumbnailUrl": "media/album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7_12_t.jpg",
      "label": "0_13",
      "class": "Photo",
      "width": 3840,
      "id": "album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7_12",
      "duration": 5000,
      "height": 2160,
      "image": {
       "levels": [
        {
         "url": "media/album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7_12.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      }
     }
    },
    {
     "camera": {
      "easing": "linear",
      "class": "MovementPhotoCamera",
      "scaleMode": "fit_outside",
      "duration": 5000,
      "targetPosition": {
       "zoomFactor": 1.1,
       "x": "0.74",
       "class": "PhotoCameraPosition",
       "y": "0.27"
      },
      "initialPosition": {
       "zoomFactor": 1,
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "y": "0.50"
      }
     },
     "class": "PhotoPlayListItem",
     "media": {
      "thumbnailUrl": "media/album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7_13_t.jpg",
      "label": "0_14",
      "class": "Photo",
      "width": 3840,
      "id": "album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7_13",
      "duration": 5000,
      "height": 2160,
      "image": {
       "levels": [
        {
         "url": "media/album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7_13.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      }
     }
    },
    {
     "camera": {
      "easing": "linear",
      "class": "MovementPhotoCamera",
      "scaleMode": "fit_outside",
      "duration": 5000,
      "targetPosition": {
       "zoomFactor": 1.1,
       "x": "0.43",
       "class": "PhotoCameraPosition",
       "y": "0.32"
      },
      "initialPosition": {
       "zoomFactor": 1,
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "y": "0.50"
      }
     },
     "class": "PhotoPlayListItem",
     "media": {
      "thumbnailUrl": "media/album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7_14_t.jpg",
      "label": "0_15",
      "class": "Photo",
      "width": 3840,
      "id": "album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7_14",
      "duration": 5000,
      "height": 2160,
      "image": {
       "levels": [
        {
         "url": "media/album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7_14.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      }
     }
    },
    {
     "camera": {
      "easing": "linear",
      "class": "MovementPhotoCamera",
      "scaleMode": "fit_outside",
      "duration": 5000,
      "targetPosition": {
       "zoomFactor": 1.1,
       "x": "0.43",
       "class": "PhotoCameraPosition",
       "y": "0.32"
      },
      "initialPosition": {
       "zoomFactor": 1,
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "y": "0.50"
      }
     },
     "class": "PhotoPlayListItem",
     "media": {
      "thumbnailUrl": "media/album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7_15_t.jpg",
      "label": "0_16",
      "class": "Photo",
      "width": 3840,
      "id": "album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7_15",
      "duration": 5000,
      "height": 2160,
      "image": {
       "levels": [
        {
         "url": "media/album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7_15.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      }
     }
    },
    {
     "camera": {
      "easing": "linear",
      "class": "MovementPhotoCamera",
      "scaleMode": "fit_outside",
      "duration": 5000,
      "targetPosition": {
       "zoomFactor": 1.1,
       "x": "0.42",
       "class": "PhotoCameraPosition",
       "y": "0.49"
      },
      "initialPosition": {
       "zoomFactor": 1,
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "y": "0.50"
      }
     },
     "class": "PhotoPlayListItem",
     "media": {
      "thumbnailUrl": "media/album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7_16_t.jpg",
      "label": "0_17",
      "class": "Photo",
      "width": 3840,
      "id": "album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7_16",
      "duration": 5000,
      "height": 2160,
      "image": {
       "levels": [
        {
         "url": "media/album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7_16.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      }
     }
    }
   ]
  }
 },
 {
  "viewerArea": "this.MainViewer",
  "class": "PhotoAlbumPlayer",
  "id": "MainViewerPhotoAlbumPlayer",
  "buttonPrevious": "this.IconButton_817538F2_AC95_5082_41DE_8B1FC0CAF018",
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
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_9FFA4C8F_ACBD_D081_41DF_EC7BB81C7862",
    "media": "this.panorama_9B8037A9_97A9_75A9_41D0_A02580B6469F",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', true)",
    "camera": "this.panorama_9B8037A9_97A9_75A9_41D0_A02580B6469F_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_9FFA4C8F_ACBD_D081_41DF_EC7BB81C7862, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 0, 1)"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_9FFACC8F_ACBD_D081_41DA_20F75DD263EF",
    "media": "this.panorama_84988527_97E9_0A59_41CB_3B26BF93BF6F",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', true)",
    "camera": "this.panorama_84988527_97E9_0A59_41CB_3B26BF93BF6F_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_9FFACC8F_ACBD_D081_41DA_20F75DD263EF, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 1, 2)"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_9FFB4C8F_ACBD_D081_41AB_A6A21E7E5B75",
    "media": "this.panorama_854A1503_97E9_0A59_41C3_35E00D6B5E8A",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', true)",
    "camera": "this.panorama_854A1503_97E9_0A59_41C3_35E00D6B5E8A_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_9FFB4C8F_ACBD_D081_41AB_A6A21E7E5B75, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 2, 3)"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_9FFBDC8F_ACBD_D081_41E3_704CB35693B0",
    "media": "this.panorama_85B3358A_97EB_0A6B_41D5_80797C992818",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', true)",
    "camera": "this.panorama_85B3358A_97EB_0A6B_41D5_80797C992818_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_9FFBDC8F_ACBD_D081_41E3_704CB35693B0, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 3, 4)"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_9FFBAC8F_ACBD_D081_41DD_8686C737B9F8",
    "media": "this.panorama_85BDD557_97EB_0AF9_41D4_6B1C56C04CBC",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', true)",
    "camera": "this.panorama_85BDD557_97EB_0AF9_41D4_6B1C56C04CBC_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_9FFBAC8F_ACBD_D081_41DD_8686C737B9F8, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 4, 5)"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_9FC4DC8F_ACBD_D081_41C7_0CE0A271C9FC",
    "media": "this.panorama_85B2AB4E_97EB_FEEB_41D9_2751CDEEF317",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', true)",
    "camera": "this.panorama_85B2AB4E_97EB_FEEB_41D9_2751CDEEF317_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_9FC4DC8F_ACBD_D081_41C7_0CE0A271C9FC, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 5, 6)"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_9FC4BC8F_ACBD_D081_41D2_5A2BD61DD0D7",
    "media": "this.panorama_85B519F1_97EB_1DB9_41E1_845C79B61A56",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', true)",
    "camera": "this.panorama_85B519F1_97EB_1DB9_41E1_845C79B61A56_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_9FC4BC8F_ACBD_D081_41D2_5A2BD61DD0D7, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 6, 7)"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_9FC53C8F_ACBD_D081_41BD_3434318F6739",
    "media": "this.panorama_85BC74BB_97EB_0BA9_41DB_535A967E9F92",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', true)",
    "camera": "this.panorama_85BC74BB_97EB_0BA9_41DB_535A967E9F92_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_9FC53C8F_ACBD_D081_41BD_3434318F6739, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 7, 8)"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_9FC59C94_ACBD_D087_41A2_8EB3DD90FD8B",
    "media": "this.panorama_85A7DC12_97E8_FA7B_41E0_CE8DDF5110E8",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', true)",
    "camera": "this.panorama_85A7DC12_97E8_FA7B_41E0_CE8DDF5110E8_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_9FC59C94_ACBD_D087_41A2_8EB3DD90FD8B, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 8, 9)"
   },
   {
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer",
    "media": "this.video_8FE72CBE_AC8D_3083_41E5_0D59D392DEB2",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 9, 10)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 9, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 9, this.video_8FE72CBE_AC8D_3083_41E5_0D59D392DEB2)"
   },
   {
    "class": "PhotoAlbumPlayListItem",
    "player": "this.MainViewerPhotoAlbumPlayer",
    "media": "this.album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7",
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
   "levels": [
    {
     "height": 1600,
     "class": "ImageResourceLevel",
     "width": 1373,
     "url": "media/map_B094434B_AC75_3181_41DF_133E8FD50847.jpeg"
    },
    {
     "height": 800,
     "grayscale": true,
     "class": "ImageResourceLevel",
     "width": 686,
     "url": "media/map_B094434B_AC75_3181_41DF_133E8FD50847_lq.jpeg"
    }
   ],
   "class": "ImageResource"
  },
  "minimumZoomFactor": 0.5,
  "label": "01Plan",
  "fieldOfViewOverlayOutsideOpacity": 0,
  "fieldOfViewOverlayInsideOpacity": 0.4,
  "class": "Map",
  "width": 1733,
  "id": "map_B094434B_AC75_3181_41DF_133E8FD50847",
  "height": 2019,
  "initialZoomFactor": 1,
  "fieldOfViewOverlayOutsideColor": "#000000",
  "scaleMode": "fit_inside",
  "fieldOfViewOverlayInsideColor": "#FFFFFF"
 },
 {
  "thumbnailUrl": "media/map_B0EA3514_AC75_3187_41E2_2FA5C690C203_t.jpg",
  "fieldOfViewOverlayRadiusScale": 0.3,
  "maximumZoomFactor": 1.2,
  "image": {
   "levels": [
    {
     "height": 1366,
     "class": "ImageResourceLevel",
     "width": 1163,
     "url": "media/map_B0EA3514_AC75_3187_41E2_2FA5C690C203.jpeg"
    },
    {
     "height": 683,
     "grayscale": true,
     "class": "ImageResourceLevel",
     "width": 581,
     "url": "media/map_B0EA3514_AC75_3187_41E2_2FA5C690C203_lq.jpeg"
    }
   ],
   "class": "ImageResource"
  },
  "minimumZoomFactor": 0.5,
  "label": "02Plan",
  "fieldOfViewOverlayOutsideOpacity": 0,
  "fieldOfViewOverlayInsideOpacity": 0.4,
  "class": "Map",
  "width": 1163,
  "id": "map_B0EA3514_AC75_3187_41E2_2FA5C690C203",
  "height": 1366,
  "initialZoomFactor": 1,
  "fieldOfViewOverlayOutsideColor": "#000000",
  "scaleMode": "fit_inside",
  "fieldOfViewOverlayInsideColor": "#FFFFFF"
 },
 {
  "thumbnailUrl": "media/map_B00AF666_AC75_3383_41D6_74D2B2AEBA60_t.jpg",
  "fieldOfViewOverlayRadiusScale": 0.3,
  "maximumZoomFactor": 1.2,
  "image": {
   "levels": [
    {
     "height": 1366,
     "class": "ImageResourceLevel",
     "width": 1107,
     "url": "media/map_B00AF666_AC75_3383_41D6_74D2B2AEBA60.jpeg"
    },
    {
     "height": 683,
     "grayscale": true,
     "class": "ImageResourceLevel",
     "width": 553,
     "url": "media/map_B00AF666_AC75_3383_41D6_74D2B2AEBA60_lq.jpeg"
    }
   ],
   "class": "ImageResource"
  },
  "minimumZoomFactor": 0.5,
  "label": "03Plan",
  "fieldOfViewOverlayOutsideOpacity": 0,
  "fieldOfViewOverlayInsideOpacity": 0.4,
  "class": "Map",
  "width": 1107,
  "id": "map_B00AF666_AC75_3383_41D6_74D2B2AEBA60",
  "height": 1366,
  "initialZoomFactor": 1,
  "fieldOfViewOverlayOutsideColor": "#000000",
  "scaleMode": "fit_inside",
  "fieldOfViewOverlayInsideColor": "#FFFFFF"
 },
 {
  "thumbnailUrl": "media/map_B00A37B1_AC75_3081_41DD_0F7D2284A135_t.jpg",
  "fieldOfViewOverlayRadiusScale": 0.3,
  "maximumZoomFactor": 1.2,
  "image": {
   "levels": [
    {
     "height": 1366,
     "class": "ImageResourceLevel",
     "width": 1098,
     "url": "media/map_B00A37B1_AC75_3081_41DD_0F7D2284A135.jpeg"
    },
    {
     "height": 683,
     "grayscale": true,
     "class": "ImageResourceLevel",
     "width": 549,
     "url": "media/map_B00A37B1_AC75_3081_41DD_0F7D2284A135_lq.jpeg"
    }
   ],
   "class": "ImageResource"
  },
  "minimumZoomFactor": 0.5,
  "label": "04Plan",
  "fieldOfViewOverlayOutsideOpacity": 0,
  "fieldOfViewOverlayInsideOpacity": 0.4,
  "class": "Map",
  "width": 1098,
  "id": "map_B00A37B1_AC75_3081_41DD_0F7D2284A135",
  "height": 1366,
  "initialZoomFactor": 1,
  "fieldOfViewOverlayOutsideColor": "#000000",
  "scaleMode": "fit_inside",
  "fieldOfViewOverlayInsideColor": "#FFFFFF"
 },
 {
  "thumbnailUrl": "media/map_B00988ED_AC75_3081_41D0_525039084B8C_t.jpg",
  "fieldOfViewOverlayRadiusScale": 0.3,
  "maximumZoomFactor": 1.2,
  "image": {
   "levels": [
    {
     "height": 1329,
     "class": "ImageResourceLevel",
     "width": 1155,
     "url": "media/map_B00988ED_AC75_3081_41D0_525039084B8C.jpeg"
    },
    {
     "height": 664,
     "grayscale": true,
     "class": "ImageResourceLevel",
     "width": 577,
     "url": "media/map_B00988ED_AC75_3081_41D0_525039084B8C_lq.jpeg"
    }
   ],
   "class": "ImageResource"
  },
  "minimumZoomFactor": 0.5,
  "label": "05Plan",
  "fieldOfViewOverlayOutsideOpacity": 0,
  "fieldOfViewOverlayInsideOpacity": 0.4,
  "class": "Map",
  "width": 1155,
  "id": "map_B00988ED_AC75_3081_41D0_525039084B8C",
  "height": 1329,
  "initialZoomFactor": 1,
  "fieldOfViewOverlayOutsideColor": "#000000",
  "scaleMode": "fit_inside",
  "fieldOfViewOverlayInsideColor": "#FFFFFF"
 },
 {
  "thumbnailUrl": "media/map_B00AFA28_AC75_338F_419D_F8A3F85F7DA8_t.jpg",
  "fieldOfViewOverlayRadiusScale": 0.3,
  "maximumZoomFactor": 1.2,
  "image": {
   "levels": [
    {
     "height": 1329,
     "class": "ImageResourceLevel",
     "width": 1163,
     "url": "media/map_B00AFA28_AC75_338F_419D_F8A3F85F7DA8.jpeg"
    },
    {
     "height": 664,
     "grayscale": true,
     "class": "ImageResourceLevel",
     "width": 581,
     "url": "media/map_B00AFA28_AC75_338F_419D_F8A3F85F7DA8_lq.jpeg"
    }
   ],
   "class": "ImageResource"
  },
  "minimumZoomFactor": 0.5,
  "label": "06Plan",
  "fieldOfViewOverlayOutsideOpacity": 0,
  "fieldOfViewOverlayInsideOpacity": 0.4,
  "class": "Map",
  "width": 1163,
  "id": "map_B00AFA28_AC75_338F_419D_F8A3F85F7DA8",
  "height": 1329,
  "initialZoomFactor": 1,
  "fieldOfViewOverlayOutsideColor": "#000000",
  "scaleMode": "fit_inside",
  "fieldOfViewOverlayInsideColor": "#FFFFFF"
 },
 {
  "thumbnailUrl": "media/map_B00A6B67_AC75_3181_41E0_0251B49DDA19_t.jpg",
  "fieldOfViewOverlayRadiusScale": 0.3,
  "maximumZoomFactor": 1.2,
  "image": {
   "levels": [
    {
     "height": 1329,
     "class": "ImageResourceLevel",
     "width": 1107,
     "url": "media/map_B00A6B67_AC75_3181_41E0_0251B49DDA19.jpeg"
    },
    {
     "height": 664,
     "grayscale": true,
     "class": "ImageResourceLevel",
     "width": 553,
     "url": "media/map_B00A6B67_AC75_3181_41E0_0251B49DDA19_lq.jpeg"
    }
   ],
   "class": "ImageResource"
  },
  "minimumZoomFactor": 0.5,
  "label": "07Plan",
  "fieldOfViewOverlayOutsideOpacity": 0,
  "fieldOfViewOverlayInsideOpacity": 0.4,
  "class": "Map",
  "width": 1107,
  "id": "map_B00A6B67_AC75_3181_41E0_0251B49DDA19",
  "height": 1329,
  "initialZoomFactor": 1,
  "fieldOfViewOverlayOutsideColor": "#000000",
  "scaleMode": "fit_inside",
  "fieldOfViewOverlayInsideColor": "#FFFFFF"
 },
 {
  "thumbnailUrl": "media/map_B00AECA3_AC75_3081_41D3_69B56C45B77E_t.jpg",
  "fieldOfViewOverlayRadiusScale": 0.3,
  "maximumZoomFactor": 1.2,
  "image": {
   "levels": [
    {
     "height": 1329,
     "class": "ImageResourceLevel",
     "width": 1098,
     "url": "media/map_B00AECA3_AC75_3081_41D3_69B56C45B77E.jpeg"
    },
    {
     "height": 664,
     "grayscale": true,
     "class": "ImageResourceLevel",
     "width": 549,
     "url": "media/map_B00AECA3_AC75_3081_41D3_69B56C45B77E_lq.jpeg"
    }
   ],
   "class": "ImageResource"
  },
  "minimumZoomFactor": 0.5,
  "label": "RPlan",
  "fieldOfViewOverlayOutsideOpacity": 0,
  "fieldOfViewOverlayInsideOpacity": 0.4,
  "class": "Map",
  "width": 1098,
  "id": "map_B00AECA3_AC75_3081_41D3_69B56C45B77E",
  "height": 1329,
  "initialZoomFactor": 1,
  "fieldOfViewOverlayOutsideColor": "#000000",
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
  "id": "playList_9FF39C8F_ACBD_D081_41AB_C689D8208BC0",
  "items": [
   {
    "class": "VideoPlayListItem",
    "player": "this.ViewerAreaLabeled_894F53D5_AC8B_3086_41E0_7B5ECFDEC136VideoPlayer",
    "media": "this.video_8FE72CBE_AC8D_3083_41E5_0D59D392DEB2",
    "begin": "this.fixTogglePlayPauseButton(this.ViewerAreaLabeled_894F53D5_AC8B_3086_41E0_7B5ECFDEC136VideoPlayer)",
    "start": "this.ViewerAreaLabeled_894F53D5_AC8B_3086_41E0_7B5ECFDEC136VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_9FF39C8F_ACBD_D081_41AB_C689D8208BC0, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_9FF39C8F_ACBD_D081_41AB_C689D8208BC0, 0, this.video_8FE72CBE_AC8D_3083_41E5_0D59D392DEB2)"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "playList_9FFC1C8F_ACBD_D081_41D4_EA5055213C39",
  "items": [
   {
    "class": "PhotoAlbumPlayListItem",
    "player": "this.ViewerAreaLabeled_80EE20A2_AC97_7082_41D6_1C46616F77BBPhotoAlbumPlayer",
    "media": "this.album_87AFCBAA_AC8E_F083_41E0_FE6930D17AC7",
    "begin": "this.loopAlbum(this.playList_9FFC1C8F_ACBD_D081_41D4_EA5055213C39, 0)"
   }
  ]
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_B1EE7A0C_AC8A_D387_41C1_D728F3F78BAC",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeOutEffect",
  "id": "effect_B1EE6A0C_AC8A_D387_41D3_4EA194FFB729",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_88CD4DAB_AC8B_7081_417F_AD9564816BD8",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeOutEffect",
  "id": "effect_88CD5DAB_AC8B_7081_41C5_2F8772F5FC18",
  "duration": 0
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_A596FCAC_AB9A_C31A_41D7_D3E4E1C55FA6",
  "duration": 500
 },
 {
  "easing": "linear",
  "class": "FadeOutEffect",
  "id": "effect_A596ECAC_AB9A_C31A_41B7_42452E22B111",
  "duration": 500
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_A62C13A5_AB9B_4515_41CB_9BD51CE98209",
  "duration": 500
 },
 {
  "easing": "linear",
  "class": "FadeOutEffect",
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
  "minWidth": 100,
  "playbackBarHeadShadowVerticalLength": 0,
  "progressBottom": 1,
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarHeight": 20,
  "progressBarBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "shadow": false,
  "toolTipShadowBlurRadius": 3,
  "progressBorderSize": 2,
  "progressHeight": 20,
  "playbackBarHeadWidth": 6,
  "progressBorderRadius": 4,
  "playbackBarProgressBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipOpacity": 1,
  "toolTipTextShadowColor": "#000000",
  "toolTipShadowColor": "#333333",
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "playbackBarBackgroundColorDirection": "vertical",
  "progressLeft": 10,
  "playbackBarProgressBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "class": "ViewerArea",
  "toolTipPaddingTop": 4,
  "toolTipShadowVerticalLength": 0,
  "toolTipBorderColor": "#767676",
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
  "playbackBarHeadShadowHorizontalLength": 0,
  "width": "100%",
  "height": "100%",
  "toolTipBorderSize": 1,
  "paddingBottom": 0,
  "playbackBarHeadHeight": 30,
  "minHeight": 50,
  "toolTipFontStyle": "normal",
  "toolTipPaddingLeft": 6,
  "toolTipFontSize": 12,
  "toolTipFontWeight": "normal",
  "toolTipDisplayTime": 600,
  "toolTipFontColor": "#606060",
  "playbackBarHeadBorderRadius": 0,
  "progressBackgroundColorDirection": "vertical",
  "progressBarBorderRadius": 4,
  "playbackBarProgressBorderSize": 0,
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
  "gap": 10,
  "paddingLeft": 0,
  "scrollBarVisible": "rollOver",
  "width": "100%",
  "paddingRight": 0,
  "height": 142,
  "overflow": "scroll",
  "layout": "horizontal",
  "minWidth": 1,
  "paddingBottom": 0,
  "creationPolicy": "delayed",
  "minHeight": 1,
  "shadow": false,
  "scrollBarWidth": 10,
  "verticalAlign": "middle",
  "visible": false,
  "scrollBarMargin": 2,
  "propagateClick": false,
  "scrollBarOpacity": 0.5,
  "class": "Container",
  "data": {
   "name": "Container44746"
  },
  "bottom": "0%",
  "scrollBarColor": "#000000",
  "borderSize": 0,
  "contentOpaque": false,
  "left": "0%",
  "horizontalAlign": "center",
  "borderRadius": 0,
  "backgroundOpacity": 0,
  "paddingTop": 0
 },
 {
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
  "layout": "horizontal",
  "minWidth": 431,
  "children": [
   {
    "pressedIconURL": "skin/IconButton_8E6F7C20_9C18_BEDD_41D2_DA2104159E1D_pressed.png",
    "toolTipBorderRadius": 3,
    "paddingLeft": 0,
    "toolTipBackgroundColor": "#F6F6F6",
    "toolTipShadowHorizontalLength": 0,
    "toolTip": "\u5e73\u9762\u5716",
    "paddingRight": 0,
    "height": 60,
    "mode": "toggle",
    "width": 60,
    "maxHeight": 600,
    "iconURL": "skin/IconButton_8E6F7C20_9C18_BEDD_41D2_DA2104159E1D.png",
    "minWidth": 50,
    "toolTipTextShadowBlurRadius": 3,
    "maxWidth": 600,
    "paddingBottom": 0,
    "toolTipBorderSize": 1,
    "minHeight": 50,
    "toolTipFontStyle": "normal",
    "shadow": false,
    "toolTipShadowBlurRadius": 3,
    "toolTipPaddingLeft": 6,
    "toolTipFontSize": 12,
    "toolTipFontWeight": "normal",
    "toolTipDisplayTime": 600,
    "toolTipShadowVerticalLength": 0,
    "toolTipOpacity": 1,
    "transparencyActive": true,
    "toolTipShadowOpacity": 1,
    "toolTipTextShadowColor": "#000000",
    "toolTipShadowColor": "#333333",
    "toolTipFontColor": "#606060",
    "propagateClick": false,
    "cursor": "hand",
    "class": "IconButton",
    "toolTipPaddingTop": 4,
    "id": "IconButton_8E6F7C20_9C18_BEDD_41D2_DA2104159E1D",
    "toolTipBorderColor": "#767676",
    "toolTipPaddingRight": 6,
    "data": {
     "name": "\u5e73\u9762\u5716"
    },
    "verticalAlign": "middle",
    "toolTipFontFamily": "微軟正黑體",
    "borderSize": 0,
    "click": "if(!this.Container_B130BACE_AC8D_5083_4192_57EF5F0E1101.get('visible')){ this.setComponentVisibility(this.Container_B130BACE_AC8D_5083_4192_57EF5F0E1101, true, 0, this.effect_B1EE7A0C_AC8A_D387_41C1_D728F3F78BAC, 'showEffect', false) } else if(this.Container_B130BACE_AC8D_5083_4192_57EF5F0E1101.get('visible')){ this.setComponentVisibility(this.Container_B130BACE_AC8D_5083_4192_57EF5F0E1101, false, 0, this.effect_B1EE6A0C_AC8A_D387_41D3_4EA194FFB729, 'hideEffect', false) }",
    "borderRadius": 0,
    "horizontalAlign": "center",
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
    "toolTip": "\u5168\u87a2\u5e55",
    "paddingRight": 0,
    "height": 60,
    "mode": "toggle",
    "width": 60,
    "maxHeight": 600,
    "iconURL": "skin/IconButton_B874E796_9CDF_D0FD_41E1_36901A73150C.png",
    "minWidth": 50,
    "toolTipTextShadowBlurRadius": 3,
    "maxWidth": 600,
    "paddingBottom": 0,
    "toolTipBorderSize": 1,
    "minHeight": 50,
    "toolTipFontStyle": "normal",
    "shadow": false,
    "toolTipShadowBlurRadius": 3,
    "toolTipPaddingLeft": 6,
    "toolTipFontSize": 12,
    "toolTipFontWeight": "normal",
    "toolTipDisplayTime": 600,
    "toolTipShadowVerticalLength": 0,
    "toolTipOpacity": 1,
    "transparencyActive": true,
    "toolTipShadowOpacity": 1,
    "toolTipTextShadowColor": "#000000",
    "toolTipShadowColor": "#333333",
    "toolTipFontColor": "#606060",
    "propagateClick": false,
    "cursor": "hand",
    "class": "IconButton",
    "toolTipPaddingTop": 4,
    "id": "IconButton_B874E796_9CDF_D0FD_41E1_36901A73150C",
    "toolTipBorderColor": "#767676",
    "toolTipPaddingRight": 6,
    "data": {
     "name": "\u5168\u87a2\u5e55"
    },
    "verticalAlign": "middle",
    "toolTipFontFamily": "微軟正黑體",
    "borderSize": 0,
    "borderRadius": 0,
    "horizontalAlign": "center",
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
    "toolTip": "\u52d5\u756b",
    "paddingRight": 0,
    "height": 61,
    "mode": "toggle",
    "width": 58,
    "maxHeight": 600,
    "iconURL": "skin/IconButton_896B4537_AC8D_7181_41D0_F9650283A309.png",
    "minWidth": 50,
    "toolTipTextShadowBlurRadius": 3,
    "maxWidth": 600,
    "paddingBottom": 0,
    "toolTipBorderSize": 1,
    "minHeight": 47,
    "toolTipFontStyle": "normal",
    "shadow": false,
    "toolTipShadowBlurRadius": 3,
    "toolTipPaddingLeft": 6,
    "toolTipFontSize": 12,
    "toolTipFontWeight": "normal",
    "toolTipDisplayTime": 600,
    "toolTipShadowVerticalLength": 0,
    "toolTipOpacity": 1,
    "transparencyActive": true,
    "toolTipShadowOpacity": 1,
    "toolTipTextShadowColor": "#000000",
    "toolTipShadowColor": "#333333",
    "toolTipFontColor": "#606060",
    "propagateClick": false,
    "cursor": "hand",
    "class": "IconButton",
    "toolTipPaddingTop": 4,
    "id": "IconButton_896B4537_AC8D_7181_41D0_F9650283A309",
    "toolTipBorderColor": "#767676",
    "toolTipPaddingRight": 6,
    "data": {
     "name": "\u52d5\u756b"
    },
    "verticalAlign": "middle",
    "toolTipFontFamily": "微軟正黑體",
    "borderSize": 0,
    "click": "if(!this.ViewerAreaLabeled_894F53D5_AC8B_3086_41E0_7B5ECFDEC136.get('visible')){ this.setComponentVisibility(this.ViewerAreaLabeled_894F53D5_AC8B_3086_41E0_7B5ECFDEC136, true, 0, this.effect_88CD4DAB_AC8B_7081_417F_AD9564816BD8, 'showEffect', false) } else if(this.ViewerAreaLabeled_894F53D5_AC8B_3086_41E0_7B5ECFDEC136.get('visible')){ this.setComponentVisibility(this.ViewerAreaLabeled_894F53D5_AC8B_3086_41E0_7B5ECFDEC136, false, 0, this.effect_88CD5DAB_AC8B_7081_41C5_2F8772F5FC18, 'hideEffect', false) }; if(this.ViewerAreaLabeled_894F53D5_AC8B_3086_41E0_7B5ECFDEC136VideoPlayer.get('state') == 'playing' && this.playList_9FF39C8F_ACBD_D081_41AB_C689D8208BC0.get('selectedIndex') == 0) { this.ViewerAreaLabeled_894F53D5_AC8B_3086_41E0_7B5ECFDEC136VideoPlayer.pause(); } else { this.playList_9FF39C8F_ACBD_D081_41AB_C689D8208BC0.set('selectedIndex', 0);this.ViewerAreaLabeled_894F53D5_AC8B_3086_41E0_7B5ECFDEC136VideoPlayer.play(); }",
    "borderRadius": 0,
    "horizontalAlign": "center",
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
    "toolTip": "\u96b1\u85cf\u5de5\u5177\u5217",
    "paddingRight": 0,
    "height": 61,
    "mode": "toggle",
    "width": 58,
    "maxHeight": 600,
    "iconURL": "skin/IconButton_A052581B_AB8D_433D_41C7_171ACF653548.png",
    "minWidth": 50,
    "toolTipTextShadowBlurRadius": 3,
    "maxWidth": 600,
    "paddingBottom": 0,
    "toolTipBorderSize": 1,
    "minHeight": 47,
    "toolTipFontStyle": "normal",
    "shadow": false,
    "toolTipShadowBlurRadius": 3,
    "toolTipPaddingLeft": 6,
    "toolTipFontSize": 12,
    "toolTipFontWeight": "normal",
    "toolTipDisplayTime": 600,
    "toolTipShadowVerticalLength": 0,
    "toolTipOpacity": 1,
    "transparencyActive": true,
    "toolTipShadowOpacity": 1,
    "toolTipTextShadowColor": "#000000",
    "toolTipShadowColor": "#333333",
    "toolTipFontColor": "#606060",
    "propagateClick": false,
    "cursor": "hand",
    "class": "IconButton",
    "toolTipPaddingTop": 4,
    "id": "IconButton_A052581B_AB8D_433D_41C7_171ACF653548",
    "toolTipBorderColor": "#767676",
    "toolTipPaddingRight": 6,
    "data": {
     "name": "\u96b1\u85cf\u5de5\u5177\u5217"
    },
    "verticalAlign": "middle",
    "toolTipFontFamily": "微軟正黑體",
    "borderSize": 0,
    "click": "if(!this.Container_51591DCE_5F03_66DC_41D4_A095ADE9DE4F.get('visible')){ this.setComponentVisibility(this.Container_51591DCE_5F03_66DC_41D4_A095ADE9DE4F, true, 0, this.effect_A596FCAC_AB9A_C31A_41D7_D3E4E1C55FA6, 'showEffect', false) } else if(this.Container_51591DCE_5F03_66DC_41D4_A095ADE9DE4F.get('visible')){ this.setComponentVisibility(this.Container_51591DCE_5F03_66DC_41D4_A095ADE9DE4F, false, 0, this.effect_A596ECAC_AB9A_C31A_41B7_42452E22B111, 'hideEffect', false) }; if(!this.Label_80B6558E_9C07_C9E4_41D7_648CA91CE610.get('visible')){ this.setComponentVisibility(this.Label_80B6558E_9C07_C9E4_41D7_648CA91CE610, true, 0, this.effect_A596FCAC_AB9A_C31A_41D7_D3E4E1C55FA6, 'showEffect', false) } else if(this.Label_80B6558E_9C07_C9E4_41D7_648CA91CE610.get('visible')){ this.setComponentVisibility(this.Label_80B6558E_9C07_C9E4_41D7_648CA91CE610, false, 0, this.effect_A596ECAC_AB9A_C31A_41B7_42452E22B111, 'hideEffect', false) }; if(!this.IconButton_A73A0A10_AB8B_470A_41D8_37AD32AD4C44.get('visible')){ this.setComponentVisibility(this.IconButton_A73A0A10_AB8B_470A_41D8_37AD32AD4C44, true, 0, this.effect_A596FCAC_AB9A_C31A_41D7_D3E4E1C55FA6, 'showEffect', false) } else if(this.IconButton_A73A0A10_AB8B_470A_41D8_37AD32AD4C44.get('visible')){ this.setComponentVisibility(this.IconButton_A73A0A10_AB8B_470A_41D8_37AD32AD4C44, false, 0, this.effect_A596ECAC_AB9A_C31A_41B7_42452E22B111, 'hideEffect', false) }",
    "borderRadius": 0,
    "horizontalAlign": "center",
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
  "creationPolicy": "delayed",
  "minHeight": 20,
  "shadow": false,
  "scrollBarWidth": 10,
  "top": "80%",
  "propagateClick": false,
  "verticalAlign": "middle",
  "scrollBarOpacity": 0.5,
  "class": "Container",
  "id": "Container_51591DCE_5F03_66DC_41D4_A095ADE9DE4F",
  "scrollBarMargin": 2,
  "data": {
   "name": "\u6309\u9215\u5217"
  },
  "bottom": "10%",
  "scrollBarColor": "#000000",
  "borderSize": 0,
  "contentOpaque": false,
  "borderRadius": 7,
  "horizontalAlign": "center",
  "backgroundOpacity": 0.42,
  "right": "5%",
  "paddingTop": 0
 },
 {
  "textShadowVerticalLength": 1,
  "textShadowBlurRadius": 3,
  "paddingLeft": 0,
  "fontSize": 16,
  "width": 408,
  "paddingRight": 0,
  "textDecoration": "none",
  "minWidth": 408,
  "fontFamily": "微軟正黑體 Light",
  "text": "YTS Arch - 富邦產險大樓危老重建專案管理",
  "fontStyle": "normal",
  "textShadowHorizontalLength": 1,
  "paddingBottom": 0,
  "minHeight": 20,
  "shadow": false,
  "fontWeight": "normal",
  "verticalAlign": "middle",
  "fontColor": "#FFFFFF",
  "propagateClick": false,
  "textShadowOpacity": 0.7,
  "class": "Label",
  "id": "Label_80B6558E_9C07_C9E4_41D7_648CA91CE610",
  "data": {
   "name": "\u6848\u540d"
  },
  "bottom": "20%",
  "borderSize": 0,
  "textShadowColor": "#000000",
  "borderRadius": 0,
  "horizontalAlign": "left",
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
  "toolTip": "\u986f\u793a\u5de5\u5177\u5217",
  "maxHeight": 600,
  "iconURL": "skin/IconButton_A73A0A10_AB8B_470A_41D8_37AD32AD4C44.png",
  "minWidth": 50,
  "toolTipTextShadowBlurRadius": 3,
  "maxWidth": 600,
  "paddingBottom": 0,
  "toolTipBorderSize": 1,
  "minHeight": 47,
  "toolTipFontStyle": "normal",
  "shadow": false,
  "toolTipShadowBlurRadius": 3,
  "toolTipPaddingLeft": 6,
  "toolTipFontSize": 12,
  "toolTipFontWeight": "normal",
  "toolTipDisplayTime": 600,
  "toolTipShadowVerticalLength": 0,
  "toolTipOpacity": 1,
  "transparencyActive": true,
  "toolTipShadowOpacity": 1,
  "toolTipTextShadowColor": "#000000",
  "visible": false,
  "toolTipShadowColor": "#333333",
  "toolTipFontColor": "#606060",
  "propagateClick": false,
  "cursor": "hand",
  "class": "IconButton",
  "toolTipPaddingTop": 4,
  "id": "IconButton_A73A0A10_AB8B_470A_41D8_37AD32AD4C44",
  "toolTipBorderColor": "#767676",
  "toolTipPaddingRight": 6,
  "data": {
   "name": "\u986f\u793a\u5de5\u5177\u5217"
  },
  "bottom": "5%",
  "toolTipFontFamily": "微軟正黑體",
  "borderSize": 0,
  "verticalAlign": "middle",
  "borderRadius": 0,
  "horizontalAlign": "center",
  "toolTipPaddingBottom": 4,
  "click": "if(!this.Container_51591DCE_5F03_66DC_41D4_A095ADE9DE4F.get('visible')){ this.setComponentVisibility(this.Container_51591DCE_5F03_66DC_41D4_A095ADE9DE4F, true, 0, this.effect_A62C13A5_AB9B_4515_41CB_9BD51CE98209, 'showEffect', false) } else if(this.Container_51591DCE_5F03_66DC_41D4_A095ADE9DE4F.get('visible')){ this.setComponentVisibility(this.Container_51591DCE_5F03_66DC_41D4_A095ADE9DE4F, false, 0, this.effect_A62C33A5_AB9B_4515_4181_994D8F6FBA7F, 'hideEffect', false) }; if(!this.Label_80B6558E_9C07_C9E4_41D7_648CA91CE610.get('visible')){ this.setComponentVisibility(this.Label_80B6558E_9C07_C9E4_41D7_648CA91CE610, true, 0, this.effect_A62C13A5_AB9B_4515_41CB_9BD51CE98209, 'showEffect', false) } else if(this.Label_80B6558E_9C07_C9E4_41D7_648CA91CE610.get('visible')){ this.setComponentVisibility(this.Label_80B6558E_9C07_C9E4_41D7_648CA91CE610, false, 0, this.effect_A62C33A5_AB9B_4515_4181_994D8F6FBA7F, 'hideEffect', false) }; if(!this.IconButton_A73A0A10_AB8B_470A_41D8_37AD32AD4C44.get('visible')){ this.setComponentVisibility(this.IconButton_A73A0A10_AB8B_470A_41D8_37AD32AD4C44, true, 0, this.effect_A62C13A5_AB9B_4515_41CB_9BD51CE98209, 'showEffect', false) } else if(this.IconButton_A73A0A10_AB8B_470A_41D8_37AD32AD4C44.get('visible')){ this.setComponentVisibility(this.IconButton_A73A0A10_AB8B_470A_41D8_37AD32AD4C44, false, 0, this.effect_A62C33A5_AB9B_4515_4181_994D8F6FBA7F, 'hideEffect', false) }",
  "backgroundOpacity": 0,
  "toolTipTextShadowOpacity": 0,
  "toolTipShadowSpread": 0,
  "right": "18%",
  "paddingTop": 0
 },
 {
  "backgroundColorDirection": "vertical",
  "gap": 10,
  "backgroundColor": [
   "#FFFFFF",
   "#FFFFFF"
  ],
  "paddingLeft": 0,
  "scrollBarVisible": "rollOver",
  "width": "29.976%",
  "paddingRight": 0,
  "overflow": "scroll",
  "layout": "absolute",
  "minWidth": 200,
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
    "minWidth": 200,
    "fontFamily": "Arial",
    "fontStyle": "normal",
    "backgroundColorRatios": [
     0
    ],
    "paddingBottom": 0,
    "minHeight": 20,
    "shadow": false,
    "fontWeight": "normal",
    "popUpBackgroundOpacity": 0.9,
    "top": "0%",
    "arrowColor": "#FFFFFF",
    "fontColor": "#FFFFFF",
    "propagateClick": false,
    "popUpShadowSpread": 1,
    "class": "DropDown",
    "id": "DropDown_B1F9D3D1_AB96_C50A_41C5_5EDAEE6D826F",
    "selectedPopUpFontColor": "#FFFFFF",
    "prompt": "Floor Plan",
    "data": {
     "name": "DropDown1204"
    },
    "playList": "this.DropDown_B1F9D3D1_AB96_C50A_41C5_5EDAEE6D826F_playlist",
    "borderSize": 0,
    "popUpBackgroundColor": "#FFFFFF",
    "popUpShadow": false,
    "left": "0%",
    "popUpShadowBlurRadius": 6,
    "selectedPopUpBackgroundColor": "#333333",
    "borderRadius": 4,
    "backgroundOpacity": 0.9,
    "rollOverPopUpBackgroundColor": "#FFFFFF",
    "right": "0%",
    "paddingTop": 0
   }
  ],
  "backgroundColorRatios": [
   0,
   1
  ],
  "paddingBottom": 0,
  "creationPolicy": "delayed",
  "minHeight": 200,
  "shadow": false,
  "scrollBarWidth": 10,
  "top": "1%",
  "verticalAlign": "top",
  "visible": false,
  "propagateClick": false,
  "scrollBarOpacity": 0.5,
  "class": "Container",
  "id": "Container_B130BACE_AC8D_5083_4192_57EF5F0E1101",
  "scrollBarMargin": 2,
  "data": {
   "name": "\u5e73\u9762\u5716\u5340\u57df"
  },
  "bottom": "30%",
  "scrollBarColor": "#000000",
  "borderSize": 0,
  "contentOpaque": false,
  "left": "1%",
  "horizontalAlign": "left",
  "borderRadius": 0,
  "backgroundOpacity": 1,
  "paddingTop": 0
 },
 {
  "right": "25%",
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
  "minWidth": 1,
  "playbackBarHeadShadowVerticalLength": 0,
  "progressBottom": 2,
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarHeight": 20,
  "progressBarBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "shadow": false,
  "toolTipShadowBlurRadius": 3,
  "progressBorderSize": 2,
  "progressHeight": 20,
  "playbackBarHeadWidth": 6,
  "progressBorderRadius": 4,
  "playbackBarProgressBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipOpacity": 1,
  "toolTipTextShadowColor": "#000000",
  "toolTipShadowColor": "#333333",
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "playbackBarBackgroundColorDirection": "vertical",
  "progressLeft": 10,
  "playbackBarProgressBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "class": "ViewerArea",
  "toolTipPaddingTop": 4,
  "toolTipShadowVerticalLength": 0,
  "toolTipBorderColor": "#767676",
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
  "playbackBarHeadShadowHorizontalLength": 0,
  "paddingBottom": 0,
  "playbackBarHeadHeight": 30,
  "toolTipBorderSize": 1,
  "minHeight": 1,
  "toolTipFontStyle": "normal",
  "toolTipPaddingLeft": 6,
  "toolTipFontSize": 12,
  "toolTipFontWeight": "normal",
  "toolTipDisplayTime": 600,
  "toolTipFontColor": "#606060",
  "playbackBarProgressBorderSize": 0,
  "playbackBarHeadBorderRadius": 0,
  "progressBackgroundColorDirection": "vertical",
  "progressBarBorderRadius": 4,
  "visible": false,
  "top": "10%",
  "propagateClick": false,
  "bottom": "30%",
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
  "id": "ViewerAreaLabeled_894F53D5_AC8B_3086_41E0_7B5ECFDEC136",
  "playbackBarHeadShadow": true,
  "playbackBarHeadShadowColor": "#000000",
  "left": "25%",
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
  "minWidth": 1,
  "playbackBarHeadShadowVerticalLength": 0,
  "progressBottom": 2,
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarHeight": 20,
  "progressBarBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "shadow": false,
  "toolTipShadowBlurRadius": 3,
  "progressBorderSize": 2,
  "progressHeight": 20,
  "playbackBarHeadWidth": 6,
  "progressBorderRadius": 4,
  "playbackBarProgressBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipOpacity": 1,
  "toolTipTextShadowColor": "#000000",
  "toolTipShadowColor": "#333333",
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "playbackBarBackgroundColorDirection": "vertical",
  "progressLeft": 10,
  "playbackBarProgressBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "class": "ViewerArea",
  "toolTipPaddingTop": 4,
  "toolTipShadowVerticalLength": 0,
  "toolTipBorderColor": "#767676",
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
  "playbackBarHeadShadowHorizontalLength": 0,
  "toolTipBorderSize": 1,
  "paddingBottom": 0,
  "playbackBarHeadHeight": 30,
  "minHeight": 1,
  "toolTipFontStyle": "normal",
  "toolTipPaddingLeft": 6,
  "toolTipFontSize": 12,
  "toolTipFontWeight": "normal",
  "toolTipDisplayTime": 600,
  "toolTipFontColor": "#606060",
  "playbackBarProgressBorderSize": 0,
  "playbackBarHeadBorderRadius": 0,
  "progressBackgroundColorDirection": "vertical",
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
  "toolTip": "\u4e0b\u4e00\u5f35",
  "paddingRight": 0,
  "height": 150,
  "mode": "push",
  "width": 150,
  "maxHeight": 100,
  "iconURL": "skin/IconButton_8256B8E2_AC97_5083_41B6_95067DBD1015.png",
  "minWidth": 1,
  "toolTipTextShadowBlurRadius": 3,
  "maxWidth": 100,
  "paddingBottom": 0,
  "toolTipBorderSize": 1,
  "minHeight": 1,
  "toolTipFontStyle": "normal",
  "shadow": false,
  "toolTipShadowBlurRadius": 3,
  "toolTipPaddingLeft": 6,
  "toolTipFontSize": 12,
  "toolTipFontWeight": "normal",
  "toolTipDisplayTime": 600,
  "toolTipShadowVerticalLength": 0,
  "toolTipOpacity": 1,
  "transparencyActive": false,
  "top": "40%",
  "verticalAlign": "middle",
  "toolTipTextShadowColor": "#000000",
  "visible": false,
  "toolTipShadowColor": "#333333",
  "toolTipFontColor": "#606060",
  "toolTipShadowOpacity": 1,
  "propagateClick": false,
  "cursor": "hand",
  "class": "IconButton",
  "toolTipPaddingTop": 4,
  "id": "IconButton_8256B8E2_AC97_5083_41B6_95067DBD1015",
  "toolTipBorderColor": "#767676",
  "toolTipPaddingRight": 6,
  "data": {
   "name": "\u4e0b\u4e00\u5f35"
  },
  "horizontalAlign": "center",
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
  "toolTip": "\u4e0a\u4e00\u5f35",
  "paddingRight": 0,
  "height": 150,
  "mode": "push",
  "width": 150,
  "maxHeight": 100,
  "iconURL": "skin/IconButton_817538F2_AC95_5082_41DE_8B1FC0CAF018.png",
  "minWidth": 1,
  "toolTipTextShadowBlurRadius": 3,
  "maxWidth": 100,
  "paddingBottom": 0,
  "toolTipBorderSize": 1,
  "minHeight": 1,
  "toolTipFontStyle": "normal",
  "shadow": false,
  "toolTipShadowBlurRadius": 3,
  "toolTipPaddingLeft": 6,
  "toolTipFontSize": 12,
  "toolTipFontWeight": "normal",
  "toolTipDisplayTime": 600,
  "toolTipShadowVerticalLength": 0,
  "toolTipOpacity": 1,
  "transparencyActive": false,
  "top": "40%",
  "verticalAlign": "middle",
  "toolTipTextShadowColor": "#000000",
  "visible": false,
  "toolTipShadowColor": "#333333",
  "toolTipFontColor": "#606060",
  "toolTipShadowOpacity": 1,
  "propagateClick": false,
  "cursor": "hand",
  "class": "IconButton",
  "toolTipPaddingTop": 4,
  "id": "IconButton_817538F2_AC95_5082_41DE_8B1FC0CAF018",
  "toolTipBorderColor": "#767676",
  "toolTipPaddingRight": 6,
  "data": {
   "name": "\u4e0a\u4e00\u5f35"
  },
  "horizontalAlign": "center",
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
  "toolTip": "\u95dc\u9589",
  "paddingRight": 0,
  "height": 84,
  "mode": "push",
  "width": 84,
  "maxHeight": 84,
  "iconURL": "skin/IconButton_81B86D52_AC9D_5183_41E2_C290645F19F8.png",
  "minWidth": 1,
  "toolTipTextShadowBlurRadius": 3,
  "maxWidth": 84,
  "paddingBottom": 0,
  "toolTipBorderSize": 1,
  "minHeight": 1,
  "toolTipFontStyle": "normal",
  "shadow": false,
  "toolTipShadowBlurRadius": 3,
  "toolTipPaddingLeft": 6,
  "toolTipFontSize": 12,
  "toolTipFontWeight": "normal",
  "toolTipDisplayTime": 600,
  "toolTipShadowVerticalLength": 0,
  "toolTipOpacity": 1,
  "transparencyActive": false,
  "top": "0%",
  "verticalAlign": "middle",
  "toolTipTextShadowColor": "#000000",
  "toolTipShadowColor": "#333333",
  "toolTipFontColor": "#606060",
  "toolTipShadowOpacity": 1,
  "propagateClick": false,
  "cursor": "hand",
  "class": "IconButton",
  "toolTipPaddingTop": 4,
  "id": "IconButton_81B86D52_AC9D_5183_41E2_C290645F19F8",
  "toolTipBorderColor": "#767676",
  "toolTipPaddingRight": 6,
  "data": {
   "name": "\u900f\u8996\u5716\u95dc\u9589"
  },
  "horizontalAlign": "center",
  "toolTipFontFamily": "微軟正黑體",
  "borderSize": 0,
  "click": "this.setComponentVisibility(this.ViewerAreaLabeled_80EE20A2_AC97_7082_41D6_1C46616F77BB, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_8256B8E2_AC97_5083_41B6_95067DBD1015, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_817538F2_AC95_5082_41DE_8B1FC0CAF018, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_81B86D52_AC9D_5183_41E2_C290645F19F8, false, 0, null, null, false)",
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
 "gap": 10,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "paddingRight": 0,
 "height": "100%",
 "overflow": "visible",
 "buttonToggleFullscreen": "this.IconButton_B874E796_9CDF_D0FD_41E1_36901A73150C",
 "minWidth": 20,
 "layout": "absolute",
 "paddingBottom": 0,
 "creationPolicy": "delayed",
 "minHeight": 20,
 "shadow": false,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "desktopMipmappingEnabled": true,
 "propagateClick": false,
 "vrPolyfillScale": 0.5,
 "scrollBarOpacity": 0.5,
 "class": "Player",
 "id": "rootPlayer",
 "data": {
  "name": "Player43899"
 },
 "horizontalAlign": "left",
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "contentOpaque": false,
 "borderRadius": 0,
 "mobileMipmappingEnabled": false,
 "backgroundPreloadEnabled": true,
 "mouseWheelEnabled": true,
 "scripts": {
  "pauseGlobalAudios": function(caller, exclude){  var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if(window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); if(window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; var objs = window.pauseGlobalAudiosState[caller]; if(objs == undefined){ objs = []; window.pauseGlobalAudiosState[caller] = objs; } for (var i = 0, count = audios.length; i<count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); objs.push(a); } } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "getKey": function(key){  return window[key]; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined) return; var objs = window.pauseGlobalAudiosState[caller]; if (objs == undefined) return; delete window.pauseGlobalAudiosState[caller]; if (Object.keys(window.pauseGlobalAudiosState).length > 0) { if (window.restoreGlobalAudiosState == undefined) window.restoreGlobalAudiosState = {}; if (!(caller in window.restoreGlobalAudiosState)) window.restoreGlobalAudiosState[caller] = objs; } else { var restoreFunc = function(objs) { for (var i = 0, count = objs.length; i < count; ++i) { var a = objs[i]; if (a.get('state') == 'paused') a.play(); } }; restoreFunc(objs); if (window.restoreGlobalAudiosState != undefined) { while (window.restoreGlobalAudiosState.length > 0) { restoreFunc(window.restoreGlobalAudiosState.pop()); } window.restoreGlobalAudiosState = undefined; } } },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "unregisterKey": function(key){  delete window[key]; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "registerKey": function(key, value){  window[key] = value; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "autotriggerAtStart": function(playListItem, callback, once){  var onPlaylistBegin = function(event){ callback(); if(once == true) playListItem.unbind('begin', onPlaylistBegin, this); }; playListItem.bind('begin', onPlaylistBegin, this); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "existsKey": function(key){  return key in window; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller, exclude){  var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } }
 },
 "paddingTop": 0
})