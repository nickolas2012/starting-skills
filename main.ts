controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, ship, 0, -100)
    projectile.startEffect(effects.fire)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
	
})
let projectile2: Sprite = null
let projectile: Sprite = null
let ship: Sprite = null
ship = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ..........fffff.........
    ........ff11111f........
    .......fb111111bf.......
    ......fbd1111111f.......
    ......fddd111111df......
    ......fdddd11111df......
    ......fddddddd11df......
    ......fddddddd111f......
    ......fddddddcf11f......
    .......fbdddb1111bf.....
    ........fffcfdb1b1f.....
    .......ffffffffbfbf.....
    ....ff.fffffffffff......
    .....ffffffff...........
    .....ffffffb1b1f........
    ......ffffffbfbf........
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Player)
controller.moveSprite(ship, 100, 100)
ship.setStayInScreen(true)
ship.bottom = 120
let asteroid = [
img`
    . . . . . . . . c c c c . . . . 
    . . . . c c c c c c c c c . . . 
    . . . c f c c a a a a c a c . . 
    . . c c f f f f a a a c a a c . 
    . . c c a f f c a a f f f a a c 
    . . c c a a a a b c f f f a a c 
    . c c c c a c c b a f c a a c c 
    c a f f c c c a b b 6 b b b c c 
    c a f f f f c c c 6 b b b a a c 
    c a a c f f c a 6 6 b b b a a c 
    c c b a a a a b 6 b b a b b a . 
    . c c b b b b b b b a c c b a . 
    . . c c c b c c c b a a b c . . 
    . . . . c b a c c b b b c . . . 
    . . . . c b b a a 6 b c . . . . 
    . . . . . . b 6 6 c c . . . . . 
    `,
img`
    . . . . . . c c c . . . . . . . 
    . . . . . a a a c c c . . . . . 
    . . . c a c f a a a a c . . . . 
    . . c a c f f f a f f a c . . . 
    . c c a c c f a a c f f a c . . 
    . a b a a c 6 a a c c f a c c c 
    . a b b b 6 a b b a a c a f f c 
    . . a b b a f f b b a a c f f c 
    c . a a a c c f c b a a c f a c 
    c c a a a c c a a a b b a c a c 
    a c a b b a a 6 a b b 6 b b c . 
    b a c b b b 6 b c . c c a c . . 
    b a c c a b b a c . . . . . . . 
    b b a c a b a a . . . . . . . . 
    a b 6 b b a c . . . . . . . . . 
    . a a b c . . . . . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . c c c c . . 
    . c c c c c . c c c c c f c c . 
    c c a c c c c c 8 f f c f f c c 
    c a f a a c c a f f c a a f f c 
    c a 8 f a a c a c c c a a a a c 
    c b c f a a a a a c c c c c c c 
    c b b a a c f 8 a c c c 8 c c c 
    . c b b a b c f a a a 8 8 c c . 
    . . . . a a b b b a a 8 a c . . 
    . . . . c b c a a c c b . . . . 
    . . . . b b c c a b b a . . . . 
    . . . . b b a b a 6 a . . . . . 
    . . . . c b b b 6 6 c . . . . . 
    . . . . . c a 6 6 b c . . . . . 
    . . . . . . . c c c . . . . . . 
    `,
img`
    . . . . . . . c c c a c . . . . 
    . . c c b b b a c a a a c . . . 
    . c c a b a c b a a a b c c . . 
    . c a b c f f f b a b b b a . . 
    . c a c f f f 8 a b b b b b a . 
    . c a 8 f f 8 c a b b b b b a . 
    c c c a c c c c a b c f a b c c 
    c c a a a c c c a c f f c b b a 
    c c a b 6 a c c a f f c c b b a 
    c a b c 8 6 c c a a a b b c b c 
    c a c f f a c c a f a c c c b . 
    c a 8 f c c b a f f c b c c c . 
    . c b c c c c b f c a b b a c . 
    . . a b b b b b b b b b b b c . 
    . . . c c c c b b b b b c c . . 
    . . . . . . . . c b b c . . . . 
    `
]
info.setScore(0)
info.setLife(3)
effects.starField.startScreenEffect()
game.onUpdateInterval(500, function () {
    projectile2 = sprites.createProjectileFromSide(asteroid[randint(0, 3)], 0, 75)
    projectile2.x = randint(0, 150)
    projectile2.setKind(SpriteKind.Enemy)
})
