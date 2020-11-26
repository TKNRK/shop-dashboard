export class Variant {
    id: number
    color: string
    image: string
    quantity: number

    constructor({
        id = 0,
        color = '',
        image = '',
        quantity = 0
    }) {
        this.id = id
        this.color = color
        this.image = image
        this.quantity = quantity
    }
}

export class SampleTable {
    col1: string
    col2: number
    col3: string

    constructor({
        col1 = '',
        col2 = 0,
        col3 = '',
    }) {
        this.col1 = col1
        this.col2 = col2
        this.col3 = col3
    }
}