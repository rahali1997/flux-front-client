
import Swal from 'sweetalert2'
function modal(mes) {
  
    return Swal.fire({
        html:`<p style='font-size:22'>${mes}</p>` ,
        confirmButtonColor: '#232d4b',
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: 'oui',
        denyButtonText: `Non`,
    }).then((result) => {
        return result

    })

}
export default modal;


