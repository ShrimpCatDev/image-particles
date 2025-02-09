//% color="#ff7d59"
/*hello*/
namespace particles{
//% block="add particle x $x y $y vx $vx vy $vy lifetime $lifetime image $image2 ax $ax ay $ay"
//% image2.shadow=screen_image_picker
//% inlineInputMode=inline
export function addParticle (x: number, y: number, vx: number, vy: number, lifetime: number, image2: Image, ax: number, ay: number) {
    particles2.push([
    x,
    y,
    vx,
    vy,
    lifetime,
    particles2.length,
    ax,
    ay
    ])
    particleImages.push(image2)
}
//block="set particles Z index"
export function setParticleZ(ind: number) {
    zInd=ind
}
}
let zInd = 9000
spriteutils.createRenderable(zInd, function (screen2) {
    for (let value of particles2) {
        spriteutils.drawTransparentImage(particleImages[value[5]], screen2, value[0] - scene.cameraProperty(CameraProperty.Left), value[1] - scene.cameraProperty(CameraProperty.Top))
    }
})

let particleImages: Image[] = []
let particles2: number[][] = []
particles2 = []
particleImages = []
game.onUpdate(function () {
    for (let value of particles2) {
        value[2] = value[2] + value[6]
        value[0] = value[0] + value[2]
        value[3] = value[3] + value[7]
        value[1] = value[1] + value[3]
        value[4] = value[4] - 1
        if (value[4] < 1) {
            particles2.removeAt(particles2.indexOf(value))
        }
    }
})
