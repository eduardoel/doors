import { createPortal } from "react-dom"

export default class Door {
    #number
    #haveGift
    #selected
    #open

    constructor(number, haveGift = false, selected = false, open = false) {
        this.#number = number
        this.#haveGift = haveGift
        this.#selected = selected
        this.#open = open
    }

    get number() {
        return this.#number
    }

    get haveGift() {
        return this.#haveGift
    }

    get selected() {
        return this.#selected
    }

    get open() {
        return this.#open
    }

    deselect() {
        const selected = false
        return new Porta(this.number, this.haveGift, selected, this.open)        
    }

    toggleSelection() {
        const selected = !this.#selected
        return new Porta(this.number, this.haveGift, selected, this.open)
    }

    openTheDoor() {
        const open = true
        return new Porta(this.number, this.haveGift, this.selected, open)
    }

}