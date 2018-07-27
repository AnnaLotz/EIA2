var SpaceInvader;
(function (SpaceInvader) {
    class EveryLaser {
        draw() {
            //    
        }
        move() {
            //    
        }
        checkPosition() {
            //
        }
        destroyLaser() {
            let index = SpaceInvader.everyLaser.indexOf(this);
            SpaceInvader.everyLaser.splice(index, 1);
        } //destroy laser zu
    }
    SpaceInvader.EveryLaser = EveryLaser; //class MovingObjects zu
})(SpaceInvader || (SpaceInvader = {})); //namespace zu
//# sourceMappingURL=EveryLaser.js.map