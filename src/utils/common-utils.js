



export const DateFormat=(date) =>{

const hrs=new Date(date).getHours()
const mins=new Date(date).getMinutes()


return `${hrs<10? '0'+hrs:hrs}:${mins<10?"0"+mins:mins}`

}


export const downloadFile = (e, originalImage) => {
    try {
        fetch(originalImage)
            .then(response => response.blob())
            .then(blob => {
                const url = window.URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.download = originalImage.split('/').pop(); // Set the filename for non-PDF files
                link.click();
                window.URL.revokeObjectURL(url);
            })
            .catch(error => {
                console.error('Error downloading file:', error);
            });
    } catch (error) {
        console.error('Error downloading file:', error);
    }
};
