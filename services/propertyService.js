const API_BASE_URL = 'http://localhost:8080/api';

export async function fetchProperties() {
    try {
        const response = await fetch(`${API_BASE_URL}/property`);
        if (!response.ok) {
            throw new Error('Erro ao buscar propriedades');
        }

        const properties = await response.json();
        return properties;

    } catch (error) {
        console.error('Erro ao buscar propriedades:', error);
        throw error;
    }
}
