
//2025-01-01T00:00:00.000Z => 'dd/MM/yyyy'
export const formatDate = (dateString) => {
  const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
  return new Date(dateString).toLocaleDateString('es-ES', options);
};

//'dd/MM/yyyy' => 2025-01-01T00:00:00.000Z  
export const formatDateToSendAPI = (dateString) => {
  const [day, month, year] = dateString.split('/');
  return new Date(`${year}-${month}-${day}T00:00:00.000Z`);
};
