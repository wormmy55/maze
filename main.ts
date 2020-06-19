namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLadder, function (sprite, location) {
    game.over(true, effects.confetti)
})
let mySprite = sprites.create(img`
. f f f . f f f f . f f f . 
f f f f f c c c c f f f f f 
f f f f b c c c c b f f f f 
f f f c 3 c c c c 3 c f f f 
. f 3 3 c c c c c c 3 3 f . 
. f c c c c 4 4 c c c c f . 
. f f c c 4 4 4 4 c c f f . 
. f f f b f 4 4 f b f f f . 
. f f 4 1 f d d f 1 4 f f . 
. . f f d d d d d d f f . . 
. . e f e 4 4 4 4 e f e . . 
. e 4 f b 3 3 3 3 b f 4 e . 
. 4 d f 3 3 3 3 3 3 c d 4 . 
. 4 4 f 6 6 6 6 6 6 f 4 4 . 
. . . . f f f f f f . . . . 
. . . . f f . . f f . . . . 
`, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.setTilemap(tiles.createTilemap(
            hex`100010000f0b0a0a0a0a0b0b0b0a0a0a0a0a0b0b0a0b0a0b0b0a0a0a0a0a0b0b0b0a0a0a0a0b0b0a0a0b0a0a0b0b0b0a0a0b0b0a0a0b0a0a0a0a0b0b0a0a0a0b0a0b0a0a0a0b0a0b0b0a0a0a0a0b0a0b0a0b0a0a0a0b0a0a0b0b0b0b0b0a0b0a0a0b0b0a0a0a0b0a0b0a0a0a0a0a0a0b0a0a0b0a0b0a0b0a0b0a0b0b0b0b0a0a0b0a0b0a0a0a0b0a0b0a0b0a0a0a0b0b0a0a0b0a0a0b0a0a0b0a0b0a0b0a0a0a0a0b0a0a0a0b0a0b0b0a0b0a0a0b0a0b0b0b0a0b0a0b0a0a0b0a0a0a0b0a0b0a0a0b0a0b0a0a0b0a0b0b0b0b0b0a0a0a0a0b0a0b0b0a0b0a0a0a0a0a0b0a0b0b0b0b0a0a0b0a0b0b0b0b0b0b0b0b0a0a0a0b0b0a0b0a0a0a0a0a0a0a0a0a0a0b0a0a0b0d`,
            img`
. 2 . . . . 2 2 2 . . . . . 2 2 
. 2 . 2 2 . . . . . 2 2 2 . . . 
. 2 2 . . 2 . . 2 . 2 . . 2 2 . 
. 2 . . . . 2 2 . . . 2 . . . . 
. 2 . 2 2 . . . . 2 . 2 . 2 . . 
. 2 . . 2 2 2 2 2 . 2 . . 2 2 . 
. . 2 . 2 . . . . . . 2 . . 2 . 
2 . 2 . 2 . 2 2 2 2 . . 2 . 2 . 
. . 2 . 2 . 2 . . . 2 2 . . 2 . 
. 2 . . 2 . 2 . 2 . . . . 2 . . 
. 2 . 2 2 . 2 . . 2 . 2 2 2 . 2 
. 2 . . 2 . . . 2 . 2 . . . . 2 
. . 2 . 2 2 2 2 2 . . . . 2 . 2 
2 . 2 . . . . . 2 . 2 2 2 2 . . 
2 . 2 2 2 2 2 . 2 2 . . . 2 2 . 
2 . . . . . . . . . . 2 . . 2 . 
`,
            [myTiles.tile0,sprites.castle.tilePath1,sprites.castle.tilePath4,sprites.castle.tilePath2,sprites.castle.tilePath5,sprites.castle.tilePath7,sprites.castle.tilePath8,sprites.castle.tilePath9,sprites.castle.tilePath6,sprites.castle.tilePath3,sprites.castle.tileGrass2,sprites.builtin.forestTiles0,sprites.dungeon.collectibleInsignia,sprites.dungeon.floorLight0,sprites.dungeon.stairSouth,sprites.dungeon.stairLadder],
            TileScale.Sixteen
        ))
tiles.placeOnRandomTile(mySprite, sprites.dungeon.floorLight0)
scene.cameraFollowSprite(mySprite)
info.startCountdown(30)
