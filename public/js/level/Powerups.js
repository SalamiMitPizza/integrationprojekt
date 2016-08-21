module.exports = (function(Cookies) {
    var powerups = [{
        id: 1,
        description: "boosts speed",
        diamonds: 3,
        img: "/img/01.jpg"
    }, {
        id: 2,
        description: "jump higher",
        diamonds: 5,
        img: "/img/02.jpg"
    }, {
        id: 3,
        description: "bblala",
        diamonds: 7,
        img: "/img/03.jpg"
    }, {
        id: 4,
        description: "bblala",
        diamonds: 7,
        img: "/img/03.jpg"
    }, {
        id: 5,
        description: "bblala",
        diamonds: 7,
        img: "/img/03.jpg"
    }, {
        id: 6,
        description: "bblala",
        diamonds: 7,
        img: "/img/03.jpg"
    }, {
        id: 7,
        description: "bblala",
        diamonds: 7,
        img: "/img/03.jpg"
    }];

    /**
     * Represents powerups
     */
    function Powerups() {}

    /**
     * returns array with all powerups
     * @return {Array} powerups - array with all powerups
     */
    Powerups.getPowerups = function() {
        return powerups;
    };

    /**
     * buys powerup according to powerup id
     * @param {number} id - id of powerup
     */
    Powerups.buy = function(id) {
        powerups.forEach(function(powerup){
          if(powerup.id == id){
            var total = Cookies.get('total');
            Cookies.set('powerup-'+powerup.id, 'bought');
            total -= powerup.diamonds;
            Cookies.set('total', total);
            console.log('TOTOAL');
            console.log(total);
            return total;
          }
        });
    };

    /**
     * checks whether powerup has been bought already
     * @param {boolean} - is true if powerup has been bought
     */
    Powerups.boughtAlready = function(id){
      if(Cookies.get('powerup-'+id) == "bought"){
        return true;
      }else{
        return false;
      }
    };

    return Powerups;
})(
  require('js-cookie')
);
