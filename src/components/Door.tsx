import styles from "../styles/Door.module.css"
import DoorModel from "../model/door"

interface DoorProps {
    value: DoorModel
    onChange: (newDoor: DoorModel) => void
}

export default function Door(props: DoorProps) {
    const door = props.value
    const selected = door.selected && !door.doorOpen ? styles.selected : ''

    const toggleSelection = e => props.onChange(door.toggleSelection())
    const open = e => {
        e.stopPropagation()
        props.onChange(door.openTheDoor())
    }

    function renderDoor() {
        return (

                <div className={styles.door}>
                    <div className={styles.number}>{door.number}</div>
                    <div className={styles.doorHandle}
                        onClick={open}></div>
                </div>

        )
    }

    return (  
        <div className={styles.area} onClick={toggleSelection}>
            <div className={`${styles.frame} ${selected}`}>
                {door.doorOpen ? false : renderDoor()}
            </div>
            <div className={styles.floor}></div>
        </div>
    )
}