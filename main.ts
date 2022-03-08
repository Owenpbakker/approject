let randomopp: Sprite = null
let list: Sprite[] = []
let card_K: Sprite = null
let card_Q: Sprite = null
let card_J: Sprite = null
let card_10: Sprite = null
let card_9: Sprite = null
let card_8: Sprite = null
let card_7: Sprite = null
let card_6: Sprite = null
let card_5: Sprite = null
let card_4: Sprite = null
let card_3: Sprite = null
let card_2: Sprite = null
let card_1: Sprite = null
let card_A: Sprite = null
info.setScore(0)
scene.setBackgroundColor(14)
while (info.score() < 52) {
    card_A = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . d d d d d d d d . . . . 
        . . . . d d d d d d d d . . . . 
        . . . . d d d f f d d d . . . . 
        . . . . d d f d d f d d . . . . 
        . . . . d d f d d f d d . . . . 
        . . . . d d f f f f d d . . . . 
        . . . . d d f d d f d d . . . . 
        . . . . d d f d d f d d . . . . 
        . . . . d d d d d d d d . . . . 
        . . . . d d d d d d d d . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    card_1 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . d d d d d d d d . . . . 
        . . . . d d d d d d d d . . . . 
        . . . . d d d f f d d d . . . . 
        . . . . d d d d f d d d . . . . 
        . . . . d d d d f d d d . . . . 
        . . . . d d d d f d d d . . . . 
        . . . . d d d d f d d d . . . . 
        . . . . d d d f f f d d . . . . 
        . . . . d d d d d d d d . . . . 
        . . . . d d d d d d d d . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    card_2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . d d d d d d d d . . . . 
        . . . . d d d f f d d d . . . . 
        . . . . d d f d d f d d . . . . 
        . . . . d f d d d d f d . . . . 
        . . . . d d d d d f d d . . . . 
        . . . . d d d d f d d d . . . . 
        . . . . d d d f d d d d . . . . 
        . . . . d d f d d d d d . . . . 
        . . . . d f f f f f f d . . . . 
        . . . . d d d d d d d d . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    card_3 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . d d d d d d d d . . . . 
        . . . . d d f f f d d d . . . . 
        . . . . d f d d d f d d . . . . 
        . . . . d f d d d f d d . . . . 
        . . . . d d d d f f d d . . . . 
        . . . . d d d f d d d d . . . . 
        . . . . d d d d f f d d . . . . 
        . . . . d f d d d f d d . . . . 
        . . . . d f f d f f d d . . . . 
        . . . . d d f f f d d d . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    card_4 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . d d d d d d d d . . . . 
        . . . . d d d d f d d d . . . . 
        . . . . d d d f f d d d . . . . 
        . . . . d d f d f d d d . . . . 
        . . . . d f d d f d d d . . . . 
        . . . . d f f f f f d d . . . . 
        . . . . d d d d f d d d . . . . 
        . . . . d d d d f d d d . . . . 
        . . . . d d d d f d d d . . . . 
        . . . . d d d d d d d d . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    card_5 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . d d d d d d d d . . . . 
        . . . . d f f f f f d d . . . . 
        . . . . d f d d d d d d . . . . 
        . . . . d f d d d d d d . . . . 
        . . . . d f f f f f d d . . . . 
        . . . . d d d d d f d d . . . . 
        . . . . d d d d d f d d . . . . 
        . . . . d f d d d f d d . . . . 
        . . . . d f f f f f d d . . . . 
        . . . . d d d d d d d d . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    card_6 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . d d d d d d d d . . . . 
        . . . . d d f f f f d d . . . . 
        . . . . d d f d d f d d . . . . 
        . . . . d d f d d d d d . . . . 
        . . . . d d f d d d d d . . . . 
        . . . . d d f f f f f d . . . . 
        . . . . d d f d d d f d . . . . 
        . . . . d d f d d d f d . . . . 
        . . . . d d f f f f f d . . . . 
        . . . . d d d d d d d d . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    card_7 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . d d d d d d d d . . . . 
        . . . . d d f f f f d d . . . . 
        . . . . d d d d d f d d . . . . 
        . . . . d d d d d f d d . . . . 
        . . . . d d d d d f d d . . . . 
        . . . . d d d d d f d d . . . . 
        . . . . d d d d d f d d . . . . 
        . . . . d d d d d f d d . . . . 
        . . . . d d d d d f d d . . . . 
        . . . . d d d d d d d d . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    card_8 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . d d d d d d d d . . . . 
        . . . . d f f f f f d d . . . . 
        . . . . d f d d d f d d . . . . 
        . . . . d f d d d f d d . . . . 
        . . . . d f f f f f d d . . . . 
        . . . . d f d d d f d d . . . . 
        . . . . d f d d d f d d . . . . 
        . . . . d f d d d f d d . . . . 
        . . . . d f f f f f d d . . . . 
        . . . . d d d d d d d d . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    card_9 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . d d d d d d d d . . . . 
        . . . . d f f f f f d d . . . . 
        . . . . d f d d d f d d . . . . 
        . . . . d f d d d f d d . . . . 
        . . . . d f f f f f d d . . . . 
        . . . . d d d d d f d d . . . . 
        . . . . d d d d d f d d . . . . 
        . . . . d d d d d f d d . . . . 
        . . . . d d d d d d d d . . . . 
        . . . . d d d d d d d d . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    card_10 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . d d d d d d d d . . . . 
        . . . . d d d d d d d d . . . . 
        . . . . d f d f f f f d . . . . 
        . . . . d f d f d d f d . . . . 
        . . . . d f d f d d f d . . . . 
        . . . . d f d f d d f d . . . . 
        . . . . d f d f d d f d . . . . 
        . . . . d f d f f f f d . . . . 
        . . . . d d d d d d d d . . . . 
        . . . . d d d d d d d d . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    card_J = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . d d d d d d d d . . . . 
        . . . . d d d d d f d d . . . . 
        . . . . d d d d d f d d . . . . 
        . . . . d d d d d f d d . . . . 
        . . . . d d d d d f d d . . . . 
        . . . . d d d d d f d d . . . . 
        . . . . d d d d d f d d . . . . 
        . . . . d d f d d f d d . . . . 
        . . . . d d f f f f d d . . . . 
        . . . . d d d d d d d d . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    card_Q = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . d d d d d d d d . . . . 
        . . . . d f f f f f f d . . . . 
        . . . . d f d d d d f d . . . . 
        . . . . d f d d d d f d . . . . 
        . . . . d f d d d d f d . . . . 
        . . . . d f d d d d f d . . . . 
        . . . . d f d d f d f d . . . . 
        . . . . d f d d d f f d . . . . 
        . . . . d f f f f f f f . . . . 
        . . . . d d d d d d d f . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    card_K = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . d d d d d d d d . . . . 
        . . . . d f d d d f d d . . . . 
        . . . . d f d d f d d d . . . . 
        . . . . d f d f d d d d . . . . 
        . . . . d f f d d d d d . . . . 
        . . . . d f d f d d d d . . . . 
        . . . . d f d d f d d d . . . . 
        . . . . d f d d d f d d . . . . 
        . . . . d f d d d d f d . . . . 
        . . . . d d d d d d d d . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    list = [
    card_1,
    card_2,
    card_3,
    card_4,
    card_5,
    card_6,
    card_7,
    card_8,
    card_9,
    card_10,
    card_J,
    card_Q,
    card_K,
    card_A
    ]
    randomopp = list._pickRandom()
    randomopp.setPosition(30, 80)
    if (0 < 0) {
        info.changeScoreBy(1)
    } else {
    	
    }
}
