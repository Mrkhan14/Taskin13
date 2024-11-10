import { useSelector } from "react-redux"

const useCounter = () => {
    const state = useSelector(state => state.counter)
    return state
}

export default useCounter