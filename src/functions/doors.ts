import DoorModel from "../model/door";

export function createDoors(quantity: number, doorWithGift: number): DoorModel[] {
    return Array.from({ length: quantity }, (_, i) => {
        const numberDoor = i + 1
        const haveGift = numberDoor === doorWithGift
        return new DoorModel(numberDoor, haveGift)
    })
}

export function updateDoors(doors: DoorModel[], doorModified: DoorModel): DoorModel[]{
    return doors.map(doorCurrent => {
        const equalModified = doorCurrent.number === doorModified.number

        if(equalModified) {
            return doorModified
        } else {
            return doorModified.doorOpen ? doorCurrent : doorCurrent.deselect()
        }
    })
}