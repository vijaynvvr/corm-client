import api from '../api';

export const downloadAttendeesCSV = async (eventId) => {
    try {
        const { data } = await api.get(`/event/downloadAttendeesCSV/${eventId}`, {
            responseType: 'blob'
        });
        
        const url = window.URL.createObjectURL(new Blob([data]));

        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `attendance_report-${new Date().toLocaleString()}.csv`);
        document.body.appendChild(link);
        link.click();

        window.URL.revokeObjectURL(url);
    } catch (error) {
        console.error(error);
    }
};
