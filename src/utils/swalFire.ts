import Swal from 'sweetalert2';

interface ISwalFireToastSuccess {
    title?: string;
    text?: string;
    time?: number;
}
interface ISwalFireSuccess {
    title?: string;
    text?: string;
    time?: number | boolean;
    showConfirmButton?: boolean;
}

const swalFireToastSuccess: (props: ISwalFireToastSuccess) => void = (props) => {
    const { title, text, time } = props;

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: true,
        timer: time || 5000
    });
    Toast.fire({
        type: 'success',
        title: title || `Thành công`,
        text: text || 'Thêm mới thành công!'
    });
};

const swalFireSuccess: (props: ISwalFireSuccess) => void = (props) => {
    const { title, text, time, showConfirmButton } = props;

    Swal.fire({
        type: 'success',
        title: title || `Thành công`,
        text: text || 'Thêm mới thành công!',
        timer: time === true ? 3500 : time === false ? undefined : time,
        showConfirmButton: showConfirmButton === true || showConfirmButton === undefined ? true : false
    });
};

export { swalFireToastSuccess, swalFireSuccess };
