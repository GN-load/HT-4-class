class Strogate {
    constructor(obj) {
        this.obj = obj
    }

    getItems() {
        console.log(this.obj)
    }

    addItem(item) {
        this.obj.push(item)
        console.log(this.obj)
    }

    removeItem(item) {
        for(let i = 0;i < this.obj.length;i++) {
            if(item == this.obj[i]) {
                this.obj.splice(this.obj.indexOf(this.obj[i]), 1)
            }
        }
        console.log(this.obj)
    }
};

const storage = new Strogate([
    'Нинитроны',
    'Пролонгер',
    'Железные жупи',
    'Антигравитатор'
])