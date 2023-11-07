import axios from "axios";
import { ref } from "vue";

export const UsegetData = () => {
    const data = ref(null)

    //forma de llamar una api mas acorde 
    const getData = async (url) => {
        try {
            const res = await axios.get(url);
            data.value = res.data;
        } catch (error) {
            console.log(error)
        }

    }
    return {
        getData,
        data
    }

}



