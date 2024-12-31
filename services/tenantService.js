const API_BASE_URL = 'http://localhost:8080/api';

export async function fetchTenants() {
    try {
        const response = await fetch(`${API_BASE_URL}/tenant`);
        if (!response.ok) {
            throw new Error('Erro ao buscar Inquilinos');
        }
        const tenants = await response.json();
        tenants.sort((a, b) => {
            if (a.status === 'ACTIVE' && b.status === 'INACTIVE') {
                return -1; 
            } else if (a.status === 'INACTIVE' && b.status === 'ACTIVE') {
                return 1; 
            }
            return 0;
        });
        
        return tenants;
    } catch (error) {
        console.error('Erro ao buscar Inquilinos:', error);
        throw error;
    }
}
