import styles from "../../../styles/Game.module.css"
import { useEffect, useState } from "react"
import Door from "../../../components/Door"
import { createDoors, updateDoors } from "../../../functions/doors"
import Link from "next/link"
import { useRouter } from "next/router"

export default function Game() {
    const router = useRouter()

    const [valid, setValid] = useState(false)
    const [doors, setDoors] = useState([])

    useEffect(() => {
        const doors = +router.query.doors
        const haveGift = +router.query.haveGift

        const quantityValidDoors = doors >= 3 && doors <= 100
        const haveValidGift = haveGift >= 1 && haveGift <= doors

        setValid(quantityValidDoors && haveValidGift)
    }, [doors, router.query.doors, router.query.haveGift])

    useEffect(() => {
        const doors = +router.query.doors
        const haveGift = +router.query.haveGift
        setDoors(createDoors(doors, haveGift))
    }, [router?.query])

    function renderDoors() {
      return doors.map(door => {
        return <Door key={door.number} value={door} 
        onChange={newDoor => setDoors(updateDoors(doors, newDoor))} />
      })
    }

    return (
    <div id={styles.game}>
        <div className={styles.doors}>
            {valid ? renderDoors() : 
                <h1 style={{color: "#ff0000"}} >Invalid Values!!</h1> }
        </div>
        <div className={styles.buttons}>
            <Link href="/" passHref>
                <button>Restart</button>
            </Link>
        </div>
    </div>
    )
}