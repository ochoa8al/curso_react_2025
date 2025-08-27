import Swal from 'sweetalert2';

export const Alert = (title, text,icon) => {
    
    Swal.fire({ title,text,icon });
    //settimeout cierra el modal de error
    setTimeout(() => Swal.close(), 1000);
}