const API_BASE_URL = 'http://localhost:8080/api';

export async function fetchTenants() {
    try {
        const response = await fetch(`${API_BASE_URL}/tenant`);
        if (!response.ok) {
            throw new Error('Erro ao buscar Inquilinos');
        }
        return await response.json();
    } catch (error) {
        console.error('Erro ao buscar Inquilinos:', error);
        throw error;
    }
}