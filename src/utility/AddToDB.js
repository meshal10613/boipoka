import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const getStoreBook = () => {
    const storedBookStr = localStorage.getItem("ReadList");
    if(storedBookStr){
        const storedBookData = JSON.parse(storedBookStr);
        return storedBookData;
    }else{
        return [];
    }
};

const addToStoreDB = (id) => {
    const storedBookData = getStoreBook();
    if(storedBookData.includes(id)){
        alert('already exist');
    }else{
        storedBookData.push(id);
        const data = JSON.stringify(storedBookData);
        localStorage.setItem("ReadList", data);
        console.log(data)
        Swal.fire({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success"
        });
    }
};

export {addToStoreDB, getStoreBook};