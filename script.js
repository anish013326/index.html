var tt=gsap.timeline()


tt.from("#nav h3",{
    y :-50,
    opacity :0,
    delay :.5,
    duration :.5,
    stagger :.2,
    

})

tt.from("#main h1",{
    x:-500,
    opacity :0,
    duration:.8,
    stagger :.2,

})
tt.from("#main img",{
    x:100,
    opacity :0,
    rotate:40,
    duration:.5,
    stagger:.3,
})