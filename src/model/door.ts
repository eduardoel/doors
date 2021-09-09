import { createPortal } from "react-dom"

export default class DoorModel {
    #number: number
    #haveGift: boolean
    #selected: boolean
    #doorOpen: boolean

    constructor(number: number, haveGift = false, selected = false, doorOpen = false) {
        this.#number = number
        this.#haveGift = haveGift
        this.#selected = selected
        this.#doorOpen = doorOpen
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

    get doorOpen() {
        return this.#doorOpen
    }

    deselect() {
        const selected = false
        return new DoorModel(this.number, this.haveGift, selected, this.doorOpen)        
    }

    toggleSelection() {
        const selected = !this.#selected
        return new DoorModel(this.number, this.haveGift, selected, this.doorOpen)
    }

    openTheDoor() {
        const doorOpen = true
        return new DoorModel(this.number, this.haveGift, this.selected, doorOpen)
    }

}