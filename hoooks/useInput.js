import {useState} from 'react'

export default function useInput (initialValue) {
const [value, setValue] = useState(initialValue)
const onChangeText = (value) => {
    setValue(value)
}
   return {
       value, onChangeText
   }
} 