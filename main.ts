let count = 0
let list = [sprites.duck.duck1, sprites.duck.duck2, sprites.duck.duckHurt]
let duck = sprites.create(list[0], SpriteKind.Player)
game.onUpdateInterval(200, function () {
    duck.setImage(list[count % list.length])
    count += 1
})
