class LRUCache{
    constructor(maxSize) {
        this.maxSize = maxSize;
        this.map = new Map()
    }

    put(key, value) {
        if(this.map.has(key)) {
            this.map.delete(key)
        } if(this.map.size >= this.maxSize) {
            const lastkey = this.map.keys().next().value;
            this.map.delete(lastkey)
        }

        this.map.set(key, value)
    }

    use(key) {
        if(this.map.has(key)) {
            const value = this.map.get(key)
            this.map.delete(key)
            this.map.set(key, value)
        }
    }

    get(key) {
        if(this.map.has(key)) {
            const value = this.map.get(key)
            this.map.delete(key)
            this.map.set(key, value)
            return value
        }
        return null
    }

    display() {
        return [...this.map.entries()].reverse()
    }

    clear() {
        this.map.clear()
    }

    delete(key) {
        if(this.map.has(key)){
            this.map.delete(key)
        }
    }
}


const lru = new LRUCache(4);
lru.put(1, 'a');
lru.put(2, 'b');
lru.put(3, 'c');
lru.put(4, 'd');
lru.display();
// LRU
// 4 "d"
// 3 "c"
// 2 "b"
// 1 "a"

lru.use(2);
lru.display();
// After using 2
// 2 "b"
// 4 "d"
// 3 "c"
// 1 "a"

lru.clear()
lru.display();