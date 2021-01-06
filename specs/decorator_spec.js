const assert = require('assert');
const Decorator = require('../models/decorator.js');
const Room = require('../models/room.js');
const Paint = require('../models/paint.js');

describe('Decorator', function(){
    let decorator;
    let room;
    let paint;
    beforeEach(function(){
        room = new Room(10);
        paint = new Paint(10);
        
    })
    xit('should start with no paint', function(){
        const actual = decorator.stockLevel;
        assert.strictEqual(actual, 0);
    });
    
    xit('should calculate total liters of paint in stock', function(){
        
    });

    xit('should be able to calculate if it has enough paint for a room', function(){

    });

    xit('should be able to paint room if it has enough paint', function(){

    });

    describe('Room', function(){
        it('should have area in square meters', function(){
            const actual = room.area;
            assert.strictEqual(actual, 10);
        });

        it('should start not painted', function(){
            const actual = room.isPainted;
            assert.strictEqual(actual, false);
        });

        it('should be able to be painted', function(){
            room.paintRoom()
            const actual = room.isPainted
            assert.strictEqual(actual, true)
        });

    });
    describe('Paint', function(){
        it('should have a number of litres', function(){
            const actual = paint.litres;
            assert.strictEqual(actual, 10);

        });
        it('should be able to check if it is empty', function(){
            const emptyCan = new Paint(0);
            const actual = emptyCan.isEmpty();
            assert.strictEqual(actual, true);

        });
        it('should be able to empty itesf of paint', function(){
            paint.pourPaint();
            const actual = paint.litres;
            assert.strictEqual(actual, 0)
        })
    })
})