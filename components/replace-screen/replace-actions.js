var AppDispatcher = require("../../libs/AppDispatcher");
var Q = require('q');

var ReplaceActions = {
  getExpiredItems: function() {
    var defer = Q.defer();

    setTimeout(function() {
      defer.resolve([{
        itemId: 1,
        itemName: "Item 1",
        itemUrl: "http://i.ebayimg.com/00/s/MTI2M1gxNjAw/z/10kAAOSwPhdVOVD~/$_1.JPG",
        price: "$30"
      }, {
        itemId: 2,
        itemName: "Item 2",
        itemUrl: "http://i.ebayimg.com/00/s/NzY4WDUxMg==/z/SU8AAOSwfcVUF2XR/$_59.JPG?rt=nc",
        price: "$90"
      }, {
        itemId: 3,
        itemName: "Item 3",
        itemUrl: "http://i.ebayimg.com/00/s/ODAwWDEyMDA=/z/MeoAAOSwHnFVjAO~/$_59.JPG",
        price: "$90"
      }, {
        itemId: 4,
        itemName: "Item 4",
        itemUrl: "http://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/EksAAOSwBahVVTPu/$_1.JPG?set_id=880000500F",
        price: "$90"
      }, {
        itemId: 5,
        itemName: "Item 5",
        itemUrl: "http://i.ebayimg.com/00/s/NTAwWDUwMA==/z/ve4AAOSwPhdVSA~f/$_1.JPG?set_id=8800005007",
        price: "$90"
      }]);
    }, 1000);

    defer.promise.then(function(data) {
      AppDispatcher.dispatch({
        action: 'getExpiredItems',
        data: data
      });
    });

    return defer.promise;
  },
  fetchNextItem: function() {
    AppDispatcher.dispatch({
      action: 'fetchNextItem'
    });
  },
  fetchReplacableItems: function(parentItem) {
    var defer = Q.defer();
    setTimeout(function() {
      var data = [];
      switch(parentItem) {
        case 1:
          data = [{
            itemId: 6,
            itemName: "Ethnic Indian Jewelry Tikka",
            itemUrl: "https://securethumbs.ebay.com/d/l300/m/mgKufGipjm2Ft2jp_jLb_Dg.jpg",
            price: "$10"
          }, {
            itemId: 7,
            itemName: "Ethnic Necklace Earrings Tikka",
            itemUrl: "https://securethumbs.ebay.com/d/l300/m/m1g7kUK-JHolvvc0v_527Pg.jpg",
            price: "$12"
          }, {
            itemId: 8,
            itemName: "Bollywood Polki Kundan",
            itemUrl: "https://securethumbs.ebay.com/d/l300/m/mdH_l3G4yOBzrHCsAZQ0l8w.jpg",
            price: "$19"
          }];
        break;
        case 2:
          data = [{
            itemId: 9,
            itemName: "Polki Kundan Ruby Necklace Earrings",
            itemUrl: "https://securethumbs.ebay.com/d/l300/m/m6W3cSv2wWDzEX1uLHy_Hsg.jpg",
            price: "$12"
          }, {
            itemId: 10,
            itemName: "Ethnic Indian Jewelry",
            itemUrl: "https://securethumbs.ebay.com/d/l300/m/mgZXbFDNO95g0OfAnfdWrRA.jpg",
            price: "$1"
          }, {
            itemId: 11,
            itemName: "Polki Kundan Necklace Earrings",
            itemUrl: "https://securethumbs.ebay.com/d/l300/m/mkSsBvgquoLCrGUiv19rYTg.jpg",
            price: "$12"
          }];
        break;
        case 3:
          data = [{

          }];
        break;
        case 4:
          data = [{

          }];
        break;
        case 5:
          data = [{

          }];
        break;
      }
      defer.resolve(data);
    }, 500);

    defer.promise.then(function(data) {
      AppDispatcher.dispatch({
        action: 'fetchReplacableItems',
        data: data
      });
    });

    return defer.promise;
  }
};

module.exports = ReplaceActions;
