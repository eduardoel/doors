import styles from "../styles/Form.module.css"
import Card from "../components/Card";
import Link from "next/link"
import NumberInput from "../components/NumberInput"
import { useState } from "react";

export default function Form() {
  const[quantityDoors, setQuantityDoors] = useState(3)
  const[withGift, setWithGift] = useState(1)

  return (
    <div className={styles.form}>
      <div>
        <Card bgcolor="#c0392c">
          <h1>Monty Hall</h1>
        </Card>
        <Card>
          <NumberInput text="Number of doors ?" 
            value={quantityDoors} onChange={newQuantity => setQuantityDoors(newQuantity)} />
        </Card>
      </div>
      <div>
        <Card>
        <NumberInput text="Door with gift ?" 
            value={withGift} onChange={newDoorWithGift => setWithGift(newDoorWithGift)} />
        </Card>
        <Card bgcolor="#28a085">
          <Link href={`/game/${quantityDoors}/${withGift}`} passHref>
            <h2 className={styles.link}>Start</h2>
          </Link>
        </Card>
      </div>
    </div>
  )
}
