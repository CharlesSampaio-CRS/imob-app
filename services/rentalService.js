const API_BASE_URL = 'http://localhost:8080/api';

export async function fetchRentals() {
    try {
        const response = await fetch(`${API_BASE_URL}/rental`);
        if (!response.ok) {
            throw new Error('Erro ao buscar locações');
        }

        const rentals = await response.json();

        // Ordena as locações por status
        rentals.sort((a, b) => {
            if (a.status === 'AVAILABLE' && b.status === 'RENTED') {
                return -1; // Disponível vem antes
            } else if (a.status === 'RENTED' && b.status === 'AVAILABLE') {
                return 1; // Alugado vem depois
            }
            return 0; // Se ambos tiverem o mesmo status, a ordem não é alterada
        });

        return rentals;
    } catch (error) {
        console.error('Erro ao buscar locações:', error);
        throw error;
    }
}
