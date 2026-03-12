export const placesData = Array.from({ length: 100 }, (_, i) => ({
    id: `shop_${i}`,
    name: `Shop ${i}`,
    width: 3 + Math.random() * 3,
    depth: 3 + Math.random() * 3,
    color: Math.random() * 0xffffff
}))