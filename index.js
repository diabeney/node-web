const villain = {
    name: 'Thanos',  
    aliases: ['Mad Titan'],
    origin: 'Titan'
}

Object.defineProperty(villain, 'origin', {
    writable: false,
    enumerable: true,
    configurable: false,
})

villain.origin = 'Xandar';

console.log(villain) // {name: 'Thanos', aliases: ['Mad Titan'], origin: 'Titan'}